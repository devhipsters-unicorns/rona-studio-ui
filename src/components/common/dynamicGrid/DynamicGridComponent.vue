<template>
  <div id="app-dynamic-grid" class="flex flex-col">
    <div class="dynamic-grid-head">
      <dynamic-grid-row-component :dataset="state.defaultHeader" />
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
  defaultHeader: Array<string | number> | undefined
}

const props = defineProps({
  dataset: Object,
})

const state: iState = reactive({
  dataset: props.dataset,
  defaultHeader: computed(() => {
    if (!props.dataset) return []
    return Object.keys(props.dataset[0])
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
