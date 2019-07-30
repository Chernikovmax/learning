<template>
  <div>
    <h2>Done Todos</h2>
    <AddingForm @add-todo="addTodo" />
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
      .then(data => {
          const doneTodos = data.filter(todo => todo.completed );
          this.todos = [...doneTodos];
        })
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