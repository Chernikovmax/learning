<template>
  <ul class="todo">
    <ToDoItem 
      v-for="todo in todos"
      :todo="todo"
      :key="todo.id"
      @remove-task="removeTodo"
    />
  </ul>
</template>

<script>
import ToDoItem from "@/components/ToDoItem";

export default {
  props: ['todos'],
  components: {
    ToDoItem
  },
  methods: {
    removeTodo,
  }
};

function removeTodo(taskId) {
  this.$emit('remove-task', taskId);  
}
</script>

<style scoped>
.todo {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin-top: 30px;
}
</style>
