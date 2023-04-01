<template>
  <div id="app" class="flex flex-col gap-4 m-auto max-w-md min-h-screen p-8">
    <Header />
    <Todos :todos="todos" @checkTodo="checkTodo" @deleteTodo="deleteTodo" />
    <TodoForm @saveTodo="saveTodo" />
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

  data() {
    return {
      todos: [],
    };
  },

  created() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
  },

  methods: {
    saveTodo(newTodo) {
      this.todos = [...this.todos, newTodo];
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },

    checkTodo(id) {
      const updatedTodo = this.todos.find((todo) => todo.id === id);
      updatedTodo.completed = !updatedTodo.completed;

      localStorage.setItem('todos', JSON.stringify(this.todos));
    },

    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
  },
};
</script>
