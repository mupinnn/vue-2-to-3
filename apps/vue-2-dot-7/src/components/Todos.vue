<script setup>
import TodoItem from "./TodoItem.vue";

defineProps({
  todos: Array,
});

defineEmits(["checkTodo", "deleteTodo"]);
</script>

<template>
  <ul id="todos" v-if="todos.length > 0" class="flex flex-col gap-2">
    <TodoItem
      v-for="todo in todos"
      :todo="todo"
      :key="todo.id"
      @checkTodo="$emit('checkTodo', todo.id)"
      @deleteTodo="$emit('deleteTodo', todo.id)"
    />
  </ul>
  <p class="text-center text-xl my-6" v-else>There's nothing to do :(</p>
</template>
