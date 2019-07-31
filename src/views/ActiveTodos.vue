<template>
  <Loader v-if="loading" />
  <div v-else-if="activeTasks.length">
    <h2>Active Todos</h2>
    <ToDoList :todos="activeTasks"/>
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
import { mapGetters } from 'vuex';
export default {
  name: "app",
  computed: mapGetters(["activeTasks"]),
  props: ["todos", "loading"],
  components: {
    Loader,
    ToDoList,
  },
};
</script>