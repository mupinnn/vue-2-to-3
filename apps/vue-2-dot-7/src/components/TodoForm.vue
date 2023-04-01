<template>
  <form class="flex flex-col" @submit="submitTodo">
    <textarea
      name="inputTodo"
      id="inputTodo"
      rows="3"
      placeholder="What you want to do?"
      class="bg-[#212833] outline-none border-none resize-none w-full p-2 text-white"
      v-model="todo"
    />
    <button
      type="submit"
      class="bg-none broder-none text-white p-2 text-2xl text-center inline-block cursor-pointer bg-[#1d232c] rounded-b-md hover:bg-[#101318]"
    >
      Save!
    </button>
  </form>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  name: "TodoForm",

  data() {
    return {
      todo: "",
    };
  },

  methods: {
    submitTodo(e) {
      e.preventDefault();

      const newTodo = {
        id: uuidv4(),
        text: this.todo,
        completed: false,
      };

      if (this.todo !== "") {
        this.$emit("saveTodo", newTodo);
        this.todo = "";
      }
    },
  },
};
</script>
