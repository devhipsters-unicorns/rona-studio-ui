<template>
  <div id="messages" class="page flex flex-row">
    <div class="message-container">
      hello
    </div>
    <messages-chanel-component />
  </div>
</template>
<script setup lang="ts">
import MessagesChanelComponent from './MessagesChanelComponent.vue'
</script>
<style lang="scss">
#messages {
  background-color: $white;
  .message-container {
    flex: 1;
  }

  .test-message {
    min-width: 23.4375rem;
    border-left: 0.0625rem solid $border-light;
  }
}
</style>
