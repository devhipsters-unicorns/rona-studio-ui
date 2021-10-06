<template>
  <HeaderComponent />
  <main id="app-main-content">
    <SidebarComponent />
    <router-view></router-view>
  </main>
  <CrudModalComponent />
</template>

<script setup lang="ts">
import HeaderComponent from './components/common/header/HeaderComponent.vue'
import CrudModalComponent from './components/common/modals/CrudModalComponent.vue'
import SidebarComponent from './components/common/sidebar/SidebarComponent.vue'
</script>

<style lang="scss">
@import './assets/scss/index.scss';
#app {
  height: inherit;
  width: inherit;
  display: flex;
  flex-direction: column;

  #app-main-content {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    .page {
      padding: 0 1.5rem;
      flex: 1;
    }
  }
}
</style>
