<template>
  <div>
    <md-button v-on:click="toggleLiked" class="md-icon-button md-dense">
      <md-icon :class="!isLiked ? 'white' : 'md-accent'">thumb_up</md-icon>
    </md-button>
    {{ textLiked }}
  </div>
</template>
<style>
.white {
  color: white !important;
}
</style>
<script>
import { LANGUAGE } from "../../resources/constants.js";

export default {
  name: "PostFooter",
  props: {
    postId: {
      type: Number,
      default: 0,
    },
  },
  data: () => ({
    isLiked: false,
  }),
  methods: {
    toggleLiked() {
      this.isLiked = !this.isLiked;
    },
  },
  computed: {
    textLiked: function () {
      return !this.isLiked ? LANGUAGE.FIRST_LIKE : LANGUAGE.LIKE;
    },
  },
};
</script>
