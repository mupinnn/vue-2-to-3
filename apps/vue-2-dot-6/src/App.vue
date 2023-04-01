<template>
  <div id="app" class="flex flex-col gap-4 m-auto max-w-md min-h-screen p-8">
    <Header />
    <Todos />
    <TodoForm />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import TodoForm from './components/TodoForm.vue';
import Todos from './components/Todos.vue';

export default {
  name: 'App',

  components: {
    Header,
    TodoForm,
    Todos,
  },
};
</script>
