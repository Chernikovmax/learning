<template>
  <li class="todo__task">
    <span :class="{done: todo.completed}" class="todo__task-text">
      <input
        class="todo__task-checkox"
        type="checkbox"
        :id="'check-' + todo.id"
        @change="todo.completed = !todo.completed"
      />
      <label :for="'check-' + todo.id">{{todo.title | upperCase}}</label>
    </span>
    <button 
      class="todo__task-btn"
      @click="deleteCurrentTask(todo.id)"
    >
      &times;
    </button>
  </li>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
  },
  methods: {
    ...mapActions(["deleteTask"]),
    deleteCurrentTask,
  },
  filters: {
    upperCase(text) {
      if (text.trim()) {
        return text.toUpperCase();
      }
    }
  }
};

function deleteCurrentTask(taskId) {
  this.deleteTask(taskId);
}
</script>

<style scoped>
.todo__task {
  width: 500px;
  list-style-type: none;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 3px 0 5px 0 gray;
}

.todo__task-text {
  display: inline-flex;
  justify-content: flex-start;
  width: 100%;
}

.todo__task-checkox {
  margin-right: 10px;
}

.done {
  color: gray;
  text-decoration-line: line-through;
  font-style: italic;
}

.todo__task-btn {
  margin-left: 50px;
  border-radius: 50%;
  border: none;
  background-color: tomato;
  width: 20px;
  height: 20px;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
}
label {
  width: 100%;
  height: 100%;
  text-align: left;
}
</style>
