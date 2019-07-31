<template>
  <ul class="todo">
    <ToDoItem 
      v-for="todo in todos"
      :todo="todo"
      :key="todo.id"
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
};
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
