export default {
  actions: {
    async fetchTasks(ctx, limit = 20) {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
      );
      const tasks = await response.json();

      ctx.commit("updateTasks", tasks);
    },

  },
  mutations: {
    updateTasks(state, tasks) {
      state.todos = tasks;
      state.loading = false;
    }
  },
  state: {
    todos: [],
    loading: true,
  },
  getters: {
    fetchingStatus(state) {
        return state.loading;
    },
    allTasks(state) {
      return state.todos;
    },
    currentTasks(state) {
      return state.todos.filter(task => !task.completed);
    },
    doneTasks(state) {
      return state.todos.filter(task => task.completed);
    },
  }
};
