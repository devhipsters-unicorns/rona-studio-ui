<template>
  <div id="app-toolbar" class="flex flex-row flex-jc-sb flex-ai-c">
    <h3 class="heading heading-app">
      {{ state.pageTitle }}
    </h3>
    <div class="tools">
      <button class="btn btn-icon" data-action="toggle-properties-panel">
        <vue-feather :type="state.icons.panel" size="16px" />
      </button>
      <button class="btn btn-icon" data-action="toggle-settings">
        <vue-feather :type="state.icons.settings" size="16px" />
      </button>
      <button class="btn btn-icon" data-action="toggle-menu">
        <vue-feather :type="state.icons.menu" size="16px" />
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, reactive } from 'vue'
import { Router, useRouter } from 'vue-router'
interface iState {
  pageTitle?: string | unknown
  icons: { [key: string]: string | number | any }
}

const router: Router = useRouter()
const state: iState = reactive({
  pageTitle: computed(() => {
    return router.currentRoute.value.name
  }),
  icons: {
    panel: 'sidebar',
    settings: 'settings',
    menu: 'menu',
  },
})
</script>

<style lang="scss" scoped>
#app-toolbar {
  height: 3.375rem;
  margin-bottom: 1rem;
}
</style>
