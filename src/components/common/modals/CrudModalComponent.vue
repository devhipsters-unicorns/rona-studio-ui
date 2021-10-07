<template>
  <div
    id="crud-modal"
    :class="{ show: state.showModal, hidden: !state.showModal }"
    aria-label="application crud modal"
    @click="closeModal($event)"
    data-close="true"
  >
    <div class="card shadow modal-content">
      <header class="card-header">
        <h4 class="heading">{{ state.heading }}</h4>
        <button
          class="btn btn-icon"
          @click="closeModal($event)"
          data-close="true"
        >
          close
        </button>
      </header>
      <section class="modal-body">
        <form ref="form"></form>
      </section>
    </div>
  </div>
</template>
<script setup lang="ts">
interface iState {
  namme?: string | undefined
  showModal: boolean | undefined
  kind: string | undefined
  exclude: Array<string> | undefined
  transaction: string | undefined
  heading: string | undefined
}
import { inject, onBeforeMount, reactive, Ref, ref } from 'vue'
import {
  TFunction,
  TvoidFunction,
  TvoidFunctionEvent,
  TvoidFunctionItem,
} from '../../../types'

const eventBus: any = inject('eventBus')
const baseData: Ref = ref(Object)

const state: iState = reactive({
  name: 'sally',
  showModal: false,
  kind: undefined,
  exclude: undefined,
  transaction: undefined,
  heading: undefined,
})

const setState: TvoidFunctionItem = async (payload: any) => {
  const { data, kind, transaction, exclude } = payload
  if (!data && !kind && !transaction) return
  state.kind = kind
  state.exclude = exclude
  state.transaction = transaction
  state.heading = `${transaction} ${kind}`
  baseData.value = data
  state.showModal = true
}
const clearAndClose: TvoidFunction = async () => {
  state.showModal = false
}

onBeforeMount(() => {
  eventBus.on(
    'provide-base-data',
    (payload: object | string | number | boolean | undefined) => {
      setState(payload)
    },
  )
  eventBus.on(
    'crud-processing-done',
    (payload: object | string | number | boolean | undefined) => {
      clearAndClose()
    },
  )
})

const closeModal: TFunction = (event) => {
  const target = event.target
  console.log(target.dataset)
  if (!target) return
  if (
    target.id === 'crud-modal' ||
    target.dataset.close == 'true' ||
    target.classList.contains('.btn')
  ) {
    clearAndClose()
  }
}
</script>
<style lang="scss">
#crud-modal {
  visibility: hidden;
  position: absolute;
  left: 50%;
  top: 50%;
  right: 50%;
  bottom: 50%;
  color: var(--white);
  background: transparentize(rgba(#6b717f, 0.9), 0.1);
  z-index: 99;
  transition: all 0.3s ease-in-out;
  transform-origin: center;
  display: flex;
  justify-content: center;
  align-items: center;
  &.show {
    visibility: visible;
    animation: showModal 0.5s ease-in-out forwards;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  &.hidden {
    visibility: hidden;
    animation: hideModal 0.5s ease-in-out forwards;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    .modal-content {
      visibility: hidden;
      > * {
        opacity: 0;
      }
    }
  }
  .modal-content {
    width: 40%;
    min-height: 18.75rem;
    display: flex;
    flex-direction: column;
    @include shadow(4px);
  }

  .modal-body {
    flex: 1;
    padding: 1rem;
  }

  .modal-footer {
    padding: 1rem 0.5rem;
    text-align: right;
    > * {
      margin-right: 0.5rem;
    }
    border-top: 1px solid var(--border);
  }

  @keyframes showModal {
    from {
      left: 50%;
      top: 50%;
      right: 50%;
      bottom: 50%;
    }
    to {
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
    }
  }
  @keyframes hideModal {
    from {
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
    }
    to {
      left: 50%;
      top: 50%;
      right: 50%;
      bottom: 50%;
    }
  }
}
</style>
