import Vue from "vue";
import Router from "vue-router";
import AllTodos from "./views/AllTodos";
import ActiveTodos from "./views/ActiveTodos";
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
      path: "/active-todos",
      component: ActiveTodos
    },
    {
      path: "/done-todos",
      component: DoneTodos
    }
  ]
});
