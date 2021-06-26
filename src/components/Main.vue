<template>
  <div>
    <md-button class="md-fab md-fab-bottom-right md-mini md-primary md-fixed">
      <md-icon>invert_colors</md-icon>
    </md-button>
    <div class="md-layout md-gutter md-alignment-center-center">
      <div class="md-layout-item md-size-40">
        <Post />
        <Post />
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./Post/Post.vue";
export default {
  name: "Main",
  components: {
    Post,
  },
};
</script>