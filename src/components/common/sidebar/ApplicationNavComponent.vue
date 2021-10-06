<template>
  <nav id="application-nav">
    <router-link :to="{ name: 'dashboard' }">
      <vue-feather :type="state.icons.hex" size="16"></vue-feather>
      <span class="menu-item-text">Dashboard</span>
    </router-link>
    <router-link :to="{ name: 'messaging' }">
      <vue-feather :type="state.icons.msg" size="16"></vue-feather>
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
<style lang="scss">
#application-nav {
  margin-right: 1rem;
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--secondary-text);
    text-decoration: none;
    transition: all ease-in-out 0.2s;
    height: 2.625rem;
    padding: 0 1rem;
    position: relative;
    overflow: hidden;
    border-top-left-radius: 0.1875rem;
    border-bottom-left-radius: 0.1875rem;
    margin-bottom: 0.5rem;

    .menu-item-text {
      text-transform: capitalize;
      display: inline-block;
      flex: 1;
      margin-left: 1rem;
      font-weight: normal;
      transition: all ease-in-out 0.5s;
    }

    svg {
      height: 1.25rem;
      width: 1.25rem;
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
    &.router-link-exact-active {
      background: var(--border-light);
      .menu-item-text {
        color: var(--accent);
      }
      svg {
        stroke: var(--accent);
      }
      &:after {
        background: var(--accent);
        margin-top: -0.416875rem;
        right: 0;
      }
    }
    &:hover {
      background: var(--border-light);
      .menu-item-text {
        color: var(--accent);
      }
      svg {
        fill: var(--accent);
        stroke: var(--accent);
      }
    }
  }
}
</style>
