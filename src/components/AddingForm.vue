<template>
  <form class="todo-form" @submit.prevent="onSubmit">
    <input 
        type="text" 
        placeholder="Type your task here" 
        v-model="task"
        required
        autofocus 
    />
    <button type="submit">Add</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      task: ""
    };
  },
  methods: {
    onSubmit
  }
};

function onSubmit() {
  const uuidv4 = require("uuid/v4");
  let newTask = null;
  if (this.task.trim()) {
    newTask = {
      id: `${uuidv4()}`,
      title: this.task,
      completed: false
    };
  }
  this.$emit("add-todo", newTask);
  return (this.task = "");
}
</script>

<style scoped>
.todo-form {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  max-width: 100%;
}
textarea {
  resize: none;
}

input {
  width: 700px;
  padding-left: 15px;
  height: 35px;
  border: 1px solid lightgreen;
}

button {
  height: 35px;
  padding: 5px 15px;
  border: none;
  background-color: lightgreen;
}
</style>
