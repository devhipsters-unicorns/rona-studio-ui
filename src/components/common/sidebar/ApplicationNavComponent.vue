<template>
  <nav id="application-nav">
    <router-link :to="{ name: 'dashboard' }">
      <vue-feather :type="state.icons.hex" size="20"></vue-feather>
      <span class="menu-item-text">Dashboard</span>
    </router-link>
    <router-link :to="{ name: 'messages' }">
      <vue-feather :type="state.icons.msg" size="20"></vue-feather>
      <span class="menu-item-text">Messages</span>
    </router-link>
  </nav>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
const state = reactive({
  icons: {
    hex: 'hexagon',
    msg: 'message-square',
  },
})
</script>
<style lang="scss" scoped>
#application-nav {
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: $grey-600;
    text-decoration: none;
    transition: all ease-in-out 0.2s;
    height: 2.625rem;
    padding: 0 1rem;
    position: relative;
    overflow: hidden;
    border-radius: 0.1875rem;
    margin-bottom: 0.5rem;
    &.router-link-active,
    &.router-link-exact-active {
      color: $brand-primary;
      background: $primary-accent;
      svg {
        stroke: $brand-primary;
        fill: $brand-primary !important;
      }
      .menu-item-text {
        color: $brand-primary;
      }
      &:after {
        background: $brand-primary;
        margin-top: -0.416875rem;
        right: 0;
      }
    }
    .menu-item-text {
      text-transform: capitalize;
      display: inline-block;
      flex: 1;
      margin-left: 1rem;
      font-weight: normal;
      transition: all ease-in-out 0.2s;
    }

    &:after {
      content: '';
      height: 0.83375rem;
      width: 0.1875rem;
      position: absolute;
      background: transparent;
      border-radius: 0.3125rem;
      top: 50%;
      margin-top: -0.416875rem;
      right: 1rem;
      transition: all ease-in-out 0.3s;
    }
  }
  a:hover {
    color: $brand-primary;
    background: $primary-accent;
    &:after {
      background: $brand-primary;
      margin-top: -0.416875rem;
      right: 0;
    }
    svg {
      fill: $brand-primary;
    }
  }
}
</style>
