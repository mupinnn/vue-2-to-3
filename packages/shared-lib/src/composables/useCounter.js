import { ref } from 'vue-demi'

export default function useCounter() {
  const counter = ref(0)

  function countUp() {
    counter.value++
  }

  function countDown() {
    counter.value--
  }

  return { counter, countUp, countDown }
}
