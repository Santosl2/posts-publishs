<template>
  <div class="md-layout md-alignment-center-center">
    <md-button class="md-fab md-fab-bottom-right md-mini md-primary md-fixed">
      <md-icon>invert_colors</md-icon>
    </md-button>
    <Login />
  </div>
</template>
<script>
import Login from "./Login.vue";
export default {
  name: "Main",
  components: {
    Login,
  },
};
</script>
