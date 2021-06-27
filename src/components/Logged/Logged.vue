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
import Post from "../Post/Post";
export default {
  name: "Logged",
  components: {
    Post,
  },
};
</script>
