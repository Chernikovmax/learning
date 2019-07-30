<template>
  <ul class="todo"
    v-if="todos.length"
  >
    <ToDoItem 
      v-for="todo in todos"
      :todo="todo"
      :key="todo.id"
      @remove-task="removeTodo"
    />
  </ul>
  <div v-else class="no-tasks">
    <div class="no-tasks__block">
      <span class="no-tasks__message">There are no tasks here, add something!</span>
    </div>
  </div>
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
