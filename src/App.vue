<template>
  <div id="app">
    <h2>Todo List</h2>
    <AddingForm
      @add-todo="addTodo"
    />
    <ToDoList :todos="todos" @remove-task="removeTodo" />
  </div>
</template>

<script>
import ToDoList from "@/components/ToDoList";
import AddingForm from "@/components/AddingForm";
export default {
  name: "app",
  data() {
    return {
      todos: [

      ]
    };
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(result => result.json())
      .then(data => this.todos = [...data])
  },
  components: {
    ToDoList,
    AddingForm,
  },
  methods: {
    removeTodo,
    addTodo,
  }
};

function removeTodo(taskId) {
  this.todos = this.todos.filter(todo => todo.id !== taskId);
}

function addTodo(newTask) {
  return this.todos.push(newTask);
}
</script>

<style>
html {
  box-sizing: border-box;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
