<template>
  <div>
    <p>Counter component using Option API</p>
    <p>Count: {{ counter }}</p>
    <button @click="countUp">+</button>
    <button @click="countDown">-</button>
  </div>
</template>

<script>
export default {
  name: 'CounterOptions',
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    countUp() {
      this.counter++
    },

    countDown() {
      this.counter--
    }
  }
}
</script>
