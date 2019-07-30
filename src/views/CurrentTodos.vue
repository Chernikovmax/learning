<template>
  <Loader v-if="this.loading" />
  <div v-else-if="this.todos.length">
    <h2>Current Todos</h2>
    <AddingForm @add-todo="addTodo" />
    <ToDoList :todos="todos" @remove-task="removeTodo" />
  </div>
  <div v-else class="no-tasks">
    <div class="no-tasks__block">
      <span class="no-tasks__message">There are no tasks here, add something!</span>
    </div>
  </div>
</template>

<script>
import Loader from "@/components/Loader";
import ToDoList from "@/components/ToDoList";
import AddingForm from "@/components/AddingForm";
export default {
  name: "app",
  data() {
    return {
      todos: [],
      loading: true
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(result => result.json())
      .then(data => {
        const currentTodos = data.filter(todo => !todo.completed);
        this.todos = [...currentTodos];
        return (this.loading = false);
      });
  },
  components: {
    Loader,
    ToDoList,
    AddingForm,
  },
  methods: {
    removeTodo,
    addTodo
  }
};

function removeTodo(taskId) {
  this.todos = this.todos.filter(todo => todo.id !== taskId);
}

function addTodo(newTask) {
  return this.todos.push(newTask);
}
</script>