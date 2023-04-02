<script setup>
import { ref } from "vue";
import Header from "./components/Header";
import Todos from "./components/Todos.vue";
import TodoForm from "./components/TodoForm.vue";

const todos = ref(JSON.parse(localStorage.getItem("todos")) || []);

function saveTodo(newTodo) {
  todos.value = [...todos.value, newTodo];
  localStorage.setItem("todos", JSON.stringify(todos.value));
}

function checkTodo(id) {
  const updatedTodo = todos.value.find((todo) => todo.id === id);
  updatedTodo.completed = !updatedTodo.completed;

  localStorage.setItem("todos", JSON.stringify(todos.value));
}

function deleteTodo(id) {
  todos.value = todos.value.filter((todo) => todo.id !== id);
  localStorage.setItem("todos", JSON.stringify(todos.value));
}
</script>

<template>
  <div id="app" class="flex flex-col gap-4 m-auto max-w-md min-h-screen p-8">
    <Header />
    <Todos :todos="todos" @checkTodo="checkTodo" @deleteTodo="deleteTodo" />
    <TodoForm @saveTodo="saveTodo" />
  </div>
</template>
