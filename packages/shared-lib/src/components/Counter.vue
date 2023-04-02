<script setup>
import { useCounter } from '../composables'

const { counter, countDown, countUp } = useCounter()
</script>

<template>
  <main>
    <p>Count: {{ counter }}</p>
    <button @click="countUp">+</button>
    <button @click="countDown">-</button>
  </main>
</template>
