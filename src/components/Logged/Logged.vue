<template>
  <div class="md-layout md-alignment-center-center">
    <div
      class="
        md-layout-item
        md-medium-size-45
        md-small-size-60
        md-xsmall-size-100
        md-size-30
      "
    >
      <Post />
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Post from "../Post/Post";
export default {
  name: "Logged",
  components: {
    Post,
  },
  methods: {
    ...mapActions("login", ["tryUserReconnect"]),
  },
  computed: {
    ...mapGetters({
      user: "login/getUsername",
    }),
  },
  mounted() {
    if (localStorage.getItem("token") && this.user == "") {
      const fData = new FormData();
      fData.append("token", localStorage.getItem("token"));
      this.tryUserReconnect(fData);
      
    }
  },
};
</script>
