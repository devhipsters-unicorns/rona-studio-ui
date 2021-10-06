<template>
  <div id="app-dynamic-grid" class="card">
    <div class="dynamic-grid-row">
      <div class="dynamic-grid-head">
        <div
          v-for="(item, index) in state.defaultHeader"
          :class="`dynamic-grid-cell_` + index"
          :key="index"
        >
          {{ item }}
        </div>
      </div>
      <div class="dynamic-grid-body"></div>
      <div class="dynamic-grid-footer"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, reactive } from 'vue'

interface iState {
  dataset: Object | undefined
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

console.debug(state.defaultHeader)
</script>

<style type="scss" scoped></style>
