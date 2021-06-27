<template>
  <div class="md-layout md-alignment-center-center">
    <md-button class="md-fab md-fab-bottom-right md-mini md-primary md-fixed">
      <md-icon>invert_colors</md-icon>
    </md-button>
    <Login />
  </div>
</template>
<style>
.box {
  background: #131212;
  min-width: 75px;
  padding: 10px;
  margin: 2px;
  border-radius: 7px;
  color: white;
  margin-bottom: 20px;
}
.box > .box-footer {
  margin-top: 30px;
  margin-bottom: 20px;
}
.box > .box-user {
  margin: 5px;
}

.box > .box-user .username {
  padding-left: 5px;
  font-weight: bold;
  font-size: 14px;
}
.box > .box-content {
  font-size: 13px;
  padding: 5px;
}
</style>
<script>
import Login from "./Login.vue";
export default {
  name: "Main",
  components: {
    Login,
  },
};
</script>
