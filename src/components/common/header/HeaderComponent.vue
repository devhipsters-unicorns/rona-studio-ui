<template>
  <header id="app-header" class="gradient-bg">
    <nav>
      <h3 class="logo">
        <span class="light-text">rona</span>
        |
        <span class="bold-text">Studio</span>
      </h3>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>
<style lang="scss">
#app-header {
  height: 4rem;
  > nav {
    padding: $full-padding;
    height: 3.875rem;

    .logo {
      color: $brand-primary;
      .light-text {
        font-weight: normal;
      }
      .bold-text {
        color: $grey-50;
      }
    }
  }
}
</style>
