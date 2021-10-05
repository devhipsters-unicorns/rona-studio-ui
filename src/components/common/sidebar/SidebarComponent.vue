<template>
  <aside
    id="app-sidebar"
    ref="appSidebar"
    @mousedown="mouseDownHandler($event)"
    @mousemove="mouseMoveHandler($event)"
    @mouseup="mouseUpHandler($event)"
  >
    <div class="drag-container">
      <span class="drag-handle"></span>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { reactive, Ref, ref } from 'vue'
import { TvoidFunction, TvoidFunctionEvent } from '../../../types'

interface iState {
  dragStarted: boolean | undefined
  rects: { [key: string]: string | number | any } | undefined
  startPosX: number | undefined
}

const appSidebar: Ref = ref(HTMLElement)

const state: iState = reactive({
  dragStarted: false,
  rects: undefined,
  startPosX: undefined,
})

const resetState: TvoidFunction = async () => {
  state.startPosX = undefined
  state.rects = undefined
}

const mouseDownHandler: TvoidFunctionEvent = async (event: any) => {
  const target = event.target.classList.contains('drag-handle')
    ? event.target
    : event.target.parentElement.querySelector('.drag-handle')
  if (!target) return
  state.dragStarted = true
  state.rects = appSidebar.value?.getBoundingClientRect()
  state.startPosX = event.clientX
}

const mouseMoveHandler: TvoidFunctionEvent = async (event: any) => {
  event.preventDefault()
  if (!state.dragStarted) return
  const newWidth: number = state.rects?.x + event.clientX
  requestAnimationFrame(() => {
    appSidebar.value?.style?.setProperty('--default-width', `${newWidth}px`)
  })
}

const mouseUpHandler: TvoidFunctionEvent = async (event: any) => {
  event.preventDefault()
  if (!state.dragStarted) return
  state.dragStarted = false
  await resetState()
}
</script>

<style lang="scss">
@import '../../../assets/scss/index.scss';
#app-sidebar {
  --default-width: 17.1875rem;
  $color: rgba(209, 206, 206, 0.863);
  position: relative;
  padding: $full-padding;
  width: var(--default-width);

  .drag-container {
    position: absolute;
    top: 1rem;
    bottom: 1rem;
    width: 1rem;
    right: -0.5rem;
    border-radius: 0.5rem;
    background-color: transparentize($color, 0.7);

    .drag-handle {
      position: inherit;
      right: 0.325rem;
      content: ' ';
      height: 1.5rem;
      border-radius: 0.1875rem;
      top: 50%;
      transform: translateY(-50%);
      width: 0.3125rem;
      background-color: var(--light-highlight);
      transition: all 0.3s ease-out;
      transform-origin: center center;
    }

    &:hover {
      cursor: ew-resize;
      .drag-handle {
        height: 3rem;
        background-color: var(--accent);
      }
    }
  }
}
</style>
