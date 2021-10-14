<template>
  <div id="app-dynamic-grid" class="flex flex-col">
    <div class="dynamic-grid-head">
      <dynamic-grid-row-component :dataset="state.defaultHeaders" />
    </div>
    <div class="dynamic-grid-body">
      <div class="grid-row-container">
        <dynamic-grid-row-component
          v-for="(item, index) in state.dataset"
          :id="item.id"
          :key="index"
          :dataset="item"
        />
      </div>
    </div>
    <div class="dynamic-grid-footer"></div>
  </div>
</template>
<script setup lang="ts">
import { computed, reactive } from 'vue'
import DynamicGridRowComponent from './DynamicGridRowComponent.vue'

interface iState {
  dataset: Object | any
  defaultHeaders?: Array<string | number> | [] | any
}

const props = defineProps({
  dataset: Object,
})

const buildHeaders = (
  dataset: Array<Object | string | number | boolean | unknown> | any,
) => {
  if (!dataset) return
  const headers: string[] = []
  const item = dataset[0]
  for (const key in item) {
    if (item.hasOwnProperty(key)) {
      headers.push(key)
    }
  }
  return headers
}

const state: iState = reactive({
  dataset: props.dataset,
  defaultHeaders: computed(() => {
    return buildHeaders(props?.dataset)
  }),
})
</script>

<style lang="scss" scoped>
#app-dynamic-grid {
  height: 100%;
  width: 100%;

  .dynamic-grid-head .dynamic-grid-row {
    width: 100%;
    font-weight: 600;
    color: $primary-text;
    > .dynamic-grid-cell {
      padding: 0 $half-padding;
      text-transform: capitalize;
      height: 4rem;
      line-height: 4rem;
    }
  }
  .dynamic-grid-body {
    padding-top: $half-padding;
    overflow-y: scroll;
    flex: 1;
  }
}
</style>
