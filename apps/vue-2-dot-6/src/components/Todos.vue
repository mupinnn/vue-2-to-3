<template>
  <ul id="todos">
    <TodoItem />
  </ul>
  <!-- <p class="text-center text-xl my-6">There's nothing to do :(</p> -->
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  name: 'TodosContainer',
  components: {
    TodoItem,
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          completed: false,
          text: 'The quick brown fox jumps over the lazy dog',
        },
      ],
    };
  },
};
</script>
