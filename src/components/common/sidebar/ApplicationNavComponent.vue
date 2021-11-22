<template>
  <nav id="application-nav">
    <div class="link-container">
      <router-link :to="{ name: 'dashboard' }">
        <vue-feather :type="state.icons.hex" size="20"></vue-feather>
        <span class="menu-item-text">Dashboard</span>
      </router-link>
      <router-link :to="{ name: 'messages' }">
        <vue-feather :type="state.icons.msg" size="20"></vue-feather>
        <span class="menu-item-text">Messages</span>
      </router-link>
    </div>
    <div class="nav-footer colophon">
      <small>
        <span>
          &#169;
          <a href="https://www.devhipsters.co">Devhipsters</a>
          {{ state.legal }}.
        </span>
        <br />
        <span>rona Studio system v.1.0</span>
      </small>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { computed, reactive } from 'vue'
const state = reactive({
  icons: {
    hex: 'hexagon',
    msg: 'message-square',
  },
  legal: computed(() => {
    const year = new Date().getFullYear()
    return year
  }),
})
</script>
<style lang="scss" scoped>
#application-nav {
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
  margin-top: 1rem;
  .link-container {
    flex: 1;
    border-bottom: 1px solid $border-light;
  }
  .nav-footer {
    padding: 0.5rem;
    a {
      display: inline;
      padding: 0;
    }
  }
  .link-container a {
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
      background: transparentize($border-light, 0.125);
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
    background: transparentize($border-light, 0.125);
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
