import Vue from "vue";
import Router from "vue-router";
import AllTodos from "./views/AllTodos";
import CurrentTodos from "./views/CurrentTodos.vue";
import DoneTodos from "./views/DoneTodos";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: AllTodos
    },
    {
      path: "/current-todos",
      component: CurrentTodos
    },
    {
      path: "/done-todos",
      component: DoneTodos
    }
  ]
});
