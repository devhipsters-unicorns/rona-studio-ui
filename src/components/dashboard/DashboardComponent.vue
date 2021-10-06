<template>
  <div class="page">
    <h3>dashboard</h3>
    <dynamic-grid-component :dataset="state.data" />
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import DynamicGridComponent from '../common/dynamicGrid/DynamicGridComponents.vue'
const state = reactive({
  data: [
    {
      id: '1',
      title: 'James Bond Website',
      description: 'Website 1',
      status: 'new',
      created_at: '1900-10-06',
      updated_at: '1900-10-06',
      owner: {
        id: '10',
        full_name: 'Sally Manchini',
        company: 'Apple inc.',
      },
    },
    {
      id: '2',
      title: 'Sporting Bets',
      description: 'Website 2',
      status: 'open',
      created_at: '2021-10-06',
      updated_at: '2021-10-06',
      owner: {
        id: '1',
        full_name: 'Barry Meiny',
        company: 'Shuntyard',
      },
    },
    {
      id: '3',
      title: 'Tres`Eme campaign',
      description: 'Social Media Campaign',
      status: 'inprogress',
      created_at: '2021-09-20',
      updated_at: '2021-10-03',
      owner: {
        id: '7',
        full_name: 'Garry Simons',
        company: 'Tres`Eme',
      },
    },
  ],
})
</script>
<style lang="scss"></style>
