<template>
  <div class="dynamic-grid-row flex flex-row" v-if="state.flag == 'head'">
    <div
      v-for="(item, index) in state.dataset"
      :key="index"
      :class="state.flag + ` gradient-bg-up grid-cell grid-cell-` + item"
    >
      <div class="grid-cell-inner">
        {{ formatHeader(item) }}
      </div>
    </div>
  </div>
  <div class="dynamic-grid-row card flex flex-row" v-else>
    <div
      v-for="(item, index) in state.items"
      :key="index"
      :class="state.flag + ` grid-cell grid-cell-` + item"
    >
      {{ setItemProperty(state.dataset[item]) }}
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, reactive, inject } from 'vue'
import { TFunctionString } from '../../../types'
interface iState {
  items: Array<string | number | Date | undefined> | any
  dataset: { [key: string]: string | number | Date } | Array<string> | any
  flag: string
}

const props = defineProps({
  dataset: Object || Array,
})

const moment: any = inject('moment')

const state: iState = reactive({
  items: computed(() => {
    return !Array.isArray(props.dataset)
      ? // @ts-ignore
        Object.keys(props.dataset)
      : props.dataset
  }),
  dataset: computed(() => {
    return props.dataset
  }),
  flag: computed(() => {
    return Array.isArray(props.dataset) ? 'head' : 'body'
  }),
})

const formatHeader: TFunctionString = (item) => {
  const newString: string = item.replace('_', ' ')
  return newString
}

const setItemProperty: (item: { [key: string]: any } | any) => String | any = (
  item,
) => {
  if (moment(item, moment.ISO_8601, true).isValid()) {
    return moment(new Date(item)).format('D MMM YYYY')
  }

  if (typeof item === 'string') {
    return item
  }

  if (typeof item === 'object') {
    let property: string = ''
    for (const key in item) {
      if (item.hasOwnProperty(key)) {
        if (typeof item[key] === 'string') {
          property = property + ' ' + item[key]
        }
      }
    }
    return property
  }
  return item
}
</script>

<style lang="scss" scoped>
.dynamic-grid-row {
  transition: all ease-in-out 0.5s;
  > .head,
  .body {
    min-width: 11.25rem;
    width: 11.25rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 2.75rem;
    line-height: 2.75rem;
    &:first-of-type {
      min-width: 4rem;
      width: 4rem;
    }
    &:nth-child(2) {
      flex: 1;
    }
  }
  > .head {
    font-size: $font-med;
    text-transform: uppercase;
    .grid-cell-inner {
      height: 2.75rem;
      line-height: 2.75rem;
      background-color: $base-bg;
      padding: 0 $full-padding;
      margin-right: 0.125rem;
    }
  }
  > .body {
    padding: 0 $full-padding;
    font-size: $font-med;
    border-bottom: 0.0625rem solid transparentize($light-border, 0.7);
  }
  &:hover {
    cursor: pointer;
    background: $primary-light;
  }
}

.dynamic-grid-row .head:last-of-type .grid-cell-inner {
  margin: 0;
}
</style>
