<template>
  <div id="messages" class="page flex flex-row">
    <div class="message-container flex flex-col">
      <div class="messages flex flex-fill"></div>
      <MessageUploaderComponent />
    </div>
    <messages-chanel-component />
  </div>
</template>
<script setup lang="ts">
import MessagesChanelComponent from './MessagesChanelComponent.vue'
import MessageUploaderComponent from '../common/fileupload/MessageUploaderComponent.vue'
</script>
<style lang="scss">
#messages {
  .message-container {
    background-color: $white;
    flex: 1;
  }

  .test-message {
    min-width: 23.4375rem;
    border-left: 0.0625rem solid $border-light;
  }
}
</style>
