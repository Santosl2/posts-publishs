<template>
  <div>
    <Tabs />
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
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Post from "../Post/Post";
import Tabs from "./Menu/Tabs";

export default {
  name: "Logged",
  components: {
    Post,
    Tabs,
  },
  methods: {
    ...mapActions("login", ["tryUserReconnect"]),
  },
  computed: {
    ...mapGetters({
      user: "login/getUsername",
    }),
  },
  created() {},
};
</script>
