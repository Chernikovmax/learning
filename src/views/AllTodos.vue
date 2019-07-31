<template>
  <Loader v-if="loading"/>
  <div v-else-if="todos.length">
    <h2>All Todos</h2>
    <AddingForm />
    <ToDoList :todos="todos" @remove-task="removeTodo" />
  </div>
  <div v-else class="no-tasks">
    <div class="no-tasks__block">
      <span class="no-tasks__message">There are no tasks here, add something!</span>
    </div>
  </div>
</template>

<script>
import ToDoList from "@/components/ToDoList";
import AddingForm from "@/components/AddingForm";
import Loader from "@/components/Loader";
export default {
  name: "app",
  props: ["todos", "loading"],
  components: {
    Loader,
    ToDoList,
    AddingForm,
  },
  methods: {
    removeTodo,
  }
};

function removeTodo(taskId) {
  this.todos = this.todos.filter(todo => todo.id !== taskId);
}
</script>

<style scoped>
.no-tasks {
  display: flex;
  justify-content: center;
  margin-top: 10%;
  width: 100vw;
  max-width: 100%;
}
.no-tasks__block {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 100px;
  background-color: #fff;
  box-shadow: 3px 5px 5px 0 gray;
}
.no-tasks__message {
  font-size: 30px;
  font-weight: 500;
}
</style>