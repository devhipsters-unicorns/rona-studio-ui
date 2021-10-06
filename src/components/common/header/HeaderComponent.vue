<template>
  <header id="app-header" class="gradient-bg">
    <nav>
      header
    </nav>
  </header>
</template>

<script setup lang="ts"></script>
<style lang="scss">
@import '../../../assets/scss/index.scss';
#app-header {
  height: 4rem;
  margin-bottom: 0.5rem;
  > nav {
    padding: $full-padding;
    height: 3.875rem;
    background-color: var(--base-bg);
  }
}
</style>
