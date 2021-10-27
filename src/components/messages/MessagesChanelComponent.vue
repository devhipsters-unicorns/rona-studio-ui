<template>
  <aside id="chanel-aside">
    <div class="add-chanel-wrapper">
      <div class="input-group">
        <label for="chanel">
          <small>Add chanel</small>
        </label>
        <input
          type="text"
          name="chanel"
          id="chanel"
          v-model="state.chanel.name"
          placeholder="Add Chanel"
          @blur="onBlurHandler($event)"
          autofocus
        />
      </div>
    </div>
  </aside>
</template>
<script setup lang="ts">
interface iState {
  chanel: { [key: string]: any } | any
}
import { reactive } from 'vue'

let state: iState = reactive({
  chanel: {},
})

const onBlurHandler: (event: any) => void = (event) => {
  const target: any = event.target
  if (!target && !target.name && target.value) return
  state.chanel['name'] = target.value
  target.value = ''
}

function computed(arg0: () => void): any {
  throw new Error('Function not implemented.')
}
</script>
<style lang="scss">
#chanel-aside {
  width: 15.625rem;
  padding: 1rem 0 1rem 1rem;
  border-left: 1px solid $primary-light;
}
</style>
