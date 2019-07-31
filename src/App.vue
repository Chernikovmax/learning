<template>
  <div id="app">
    <Header />
    <AddingForm />
    <router-view :todos="allTasks" :loading="fetchingStatus" />
  </div>
</template>
<script>
import Header from "@/components/Header";
import AddingForm from "@/components/AddingForm";
import { mapGetters, mapActions } from "vuex";
export default {
  computed: mapGetters(["allTasks", "fetchingStatus"]),
  methods: mapActions(["fetchTasks"]),
  components: {
    Header,
    AddingForm
  },
  mounted() {
    this.fetchTasks();
  }
};
</script>

<style>
html {
  box-sizing: border-box;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  overflow-y: scroll;
  background-color: #dafccf;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
