<template>
  <Loader v-if="loading" />
  <div v-else-if="doneTasks.length">
    <h2>Done Todos</h2>
    <AddingForm />
    <ToDoList :todos="doneTasks"/>
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
import { mapGetters } from "vuex";

export default {
  name: "app",
  computed: mapGetters(["doneTasks"]),
  props: ["todos", "loading"],
  components: {
    Loader,
    ToDoList,
    AddingForm,
  },
};
</script>