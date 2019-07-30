<template>
  <nav class="main-menu">
    <router-link 
        to="/" 
        class="main-menu__item"
        :class="{active: isAllRendered}" 
        @click.native="selectMenuItem"
    >
        All todos
    </router-link>
    <router-link 
        to="/current-todos" 
        class="main-menu__item"
        :class="{active: isCurrentRendered}" 
        @click.native="selectMenuItem"
    >
        Current todos
    </router-link>
    <router-link 
        to="/done-todos" 
        class="main-menu__item"
        :class="{active: isDoneRendered}" 
        @click.native="selectMenuItem"
    >
        Done todos
    </router-link>
  </nav>
</template>

<script>
export default {
    data() {
        return {
            isAllRendered: true,
            isCurrentRendered: false,
            isDoneRendered: false,
        }
    },
    methods: {
        selectMenuItem
    },
}

function selectMenuItem(event) {
    switch(event.target.innerText) {
        case ("All todos"): 
            this.isCurrentRendered = false;
            this.isDoneRendered = false;
            return this.isAllRendered = true;
        case ("Current todos"): 
            this.isAllRendered = false;
            this.isDoneRendered = false;
            return this.isCurrentRendered = true;
        case ("Done todos"): 
            this.isCurrentRendered = false;
            this.isAllRendered = false;
            return this.isDoneRendered = true;
        default: return;
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
    background-color: #9eb927;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

.main-menu__item:hover {
    background-color: #c8db76;
}

.active {
    background-color: #c8db76;
}
</style>
