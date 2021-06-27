<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Main,
  },
};
</script>

<style>
html {
  background: #212121 !important;
}
#app {
  margin-top: 60px !important;
}
</style>
