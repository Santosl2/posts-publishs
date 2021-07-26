<template>
  <div class="main-menu">
    <div class="menu-logo">
      <img
        width="70px"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/555px-Vue.js_Logo_2.svg.png"
        alt=""
      />
    </div>

    <div class="menu-center">
      <input placeholder="Pesquise aqui..." />
    </div>

    <div class="menu-content">
      <li style="font-weight: bold">
        {{ user[0].username }}
      </li>
      <li>Mensagens</li>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "Tabs",
  props: {
    isLogged: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    showNavigation: false,
    showSidepanel: false,
  }),
  computed: {
    ...mapGetters({
      user: "login/getUsername",
    }),
  },
};
</script>
<style scoped>
.main-menu {
  width: 100%;
  height: 60px;
  background: #161616 !important;
  position: relative;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  line-height: 60px;
  margin-bottom: 17px;
}
.main-menu .menu-center {
  flex-grow: 2;
}
.main-menu .menu-logo {
  flex-grow: 2;
  padding-left: 15px;
}
input {
  width: 210px;
  height: 40px;
  padding: 10px;
  outline: 0;
  border: none;
  border-radius: 50px;
  background: #0f0f0f;
  color: white;
  font-family: "Arial";
}

.main-menu li {
  list-style: none;
  font-family: "Raleway";
  font-size: 14px;
  color: white;
  padding-left: 15px;
  padding-right: 15px;
  display: inline-block;
  transition: all 0.3s ease;
}

.main-menu li:hover {
  background: #0f0f0f;
  cursor: pointer;
}
</style>
