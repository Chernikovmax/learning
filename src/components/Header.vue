<template>
  <nav class="main-menu">
    <router-link
      to="/"
      class="main-menu__item"
      :class="{active: isAllRendered}"
      @click.native="selectMenuItem"
    >All todos</router-link>
    <router-link
      to="/active-todos"
      class="main-menu__item"
      :class="{active: isActiveRendered}"
      @click.native="selectMenuItem"
    >Active todos</router-link>
    <router-link
      to="/done-todos"
      class="main-menu__item"
      :class="{active: isDoneRendered}"
      @click.native="selectMenuItem"
    >Done todos</router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isAllRendered: true,
      isActiveRendered: false,
      isDoneRendered: false
    };
  },
  methods: {
    selectMenuItem
  }
};

function selectMenuItem(event) {
  switch (event.target.innerText) {
    case "All todos":
      this.isActiveRendered = false;
      this.isDoneRendered = false;
      return (this.isAllRendered = true);
    case "Active todos":
      this.isAllRendered = false;
      this.isDoneRendered = false;
      return (this.isActiveRendered = true);
    case "Done todos":
      this.isActiveRendered = false;
      this.isAllRendered = false;
      return (this.isDoneRendered = true);
    default:
      return;
  }
}
</script>


<style scoped>
.main-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100vw;
  max-width: 100%;
  background-color: #bacf5e;
}

.main-menu__item {
  margin-right: 30px;
  text-decoration: none;
  color: #fff;
  font-weight: 600;
  height: 100%;
  padding: 15px 10px;
  transition: all 0.3s ease;
}

.main-menu__item:hover {
    background-color: #aec44a;
    box-shadow: 5px 0 8px 0 gray;
}

.active {
    background-color: #aec44a;
    box-shadow: 5px 0 8px 0 gray;
}
</style>
