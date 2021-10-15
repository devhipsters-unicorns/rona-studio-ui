<template>
  <div class="page flex flex-col">
    <dynamic-grid-component :dataset="state.data" />
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import DynamicGridComponent from '../common/dynamicGrid/DynamicGridComponent.vue'
const state = reactive({
  data: [
    {
      id: '1',
      title: 'James Bond Website',
      description: 'Website 1',
      status: 'new',
      created_at: '2021-10-06',
      updated_at: '2021-10-09',
      created_by: {
        id: 1,
        name: 'Barry',
        lastname: 'Bonds',
      },
    },
    {
      id: '2',
      title: 'Sporting Bets',
      description: 'Website 2',
      status: 'open',
      created_at: '2021-10-06',
      updated_at: '2021-10-06',
      created_by: {
        id: 2,
        name: 'Steven',
        lastname: 'Jobs',
      },
    },
    {
      id: '3',
      title: 'Tres`Eme campaign',
      description: 'Social Media Campaign',
      status: 'inprogress',
      created_at: '2021-09-20',
      updated_at: '2021-10-12',
      created_by: {
        id: 75,
        name: 'Frank',
        lastname: 'White',
      },
    },
  ],
})
</script>
<style lang="scss"></style>
