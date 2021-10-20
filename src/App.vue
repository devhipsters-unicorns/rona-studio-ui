<template>
  <HeaderComponent />
  <main id="app-main-content">
    <SidebarComponent />
    <div class="main-content-wrapper flex flex-col">
      <toolbar-component />
      <router-view></router-view>
    </div>
  </main>
  <CrudModalComponent />
</template>

<script setup lang="ts">
import HeaderComponent from './components/common/header/HeaderComponent.vue'
import CrudModalComponent from './components/common/modals/CrudModalComponent.vue'
import SidebarComponent from './components/common/sidebar/SidebarComponent.vue'
import ToolbarComponent from './components/common/toolbar/ToolbarComponent.vue'
</script>

<style lang="scss">
#app {
  height: inherit;
  width: inherit;
  display: flex;
  flex-direction: column;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;

  #app-main-content {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    .main-content-wrapper {
      padding: 1rem 1.5rem;
      flex: 1;
      .page {
        flex: 1;
      }
    }
  }
}
</style>
