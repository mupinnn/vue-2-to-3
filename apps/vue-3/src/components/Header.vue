<template>
  <div class="flex flex-col items-center text-center">
    <img src="../assets/logo.svg" alt="Vue Logo" class="w-32 h-32" />
    <h1>vue-todos</h1>
    <p>LocalStorage based to-do list build with Vue (3.2.47)!</p>

    <div class="flex flex-col mt-2 bg-slate-600 rounded-md w-full">
      <CounterOptions />
      <div class="p-2">
        <Counter />
        <p>This counter component using shared composable that compatible with Vue 2 and 3!</p>
        <p>Counter: {{ counter }}</p>
      </div>
      <div class="flex">
        <button class="w-1/2 bg-slate-800 p-2 rounded-bl-md" @click="countUp">+</button>
        <button class="w-1/2 bg-slate-800 p-2 rounded-br-md" @click="countDown">-</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useCounter } from 'shared-lib'

export default {
  name: 'MainHeader',

  setup() {
    return useCounter()
  }
}
</script>
