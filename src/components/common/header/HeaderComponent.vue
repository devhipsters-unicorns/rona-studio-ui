<template>
  <header id="app-header" class="gradient-bg">
    <nav>
      header
    </nav>
  </header>
</template>

<script setup lang="ts"></script>
<style lang="scss">
#app-header {
  height: 4rem;
  margin-bottom: 0.5rem;
  background-color: $white;
  > nav {
    padding: $full-padding;
    height: 3.875rem;
    background-color: $base-bg;
  }
}
</style>
