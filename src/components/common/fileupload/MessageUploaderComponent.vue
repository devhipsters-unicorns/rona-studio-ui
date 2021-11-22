<template>
  <div id="uploader">
    <div class="input-msg-group">
      <textarea rows="2" ref="textInput" @input="addAutoResize"></textarea>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
interface iState {}
const state: iState = reactive({})
const textInput: any = ref()
const addAutoResize = async () => {
  let offset: any = textInput.value.offsetHeight - textInput.value.clientHeight
  textInput.value.style.height = 'auto'
  textInput.value.style.height = textInput.value.scrollHeight + offset + 'px'
}
</script>

<style lang="scss" scoped>
#uploader {
  min-height: 40px;
  // border-top: 0.0625rem solid $border-light;
  padding: 0.5rem;
}
</style>
