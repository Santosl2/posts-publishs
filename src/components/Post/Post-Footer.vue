<template>
  <div>
    <md-button v-on:click="toggleLiked" class="md-icon-button md-dense">
      <md-icon :class="!userVoted ? 'white' : 'md-accent'">thumb_up</md-icon>
    </md-button>
    <div>{{ textLiked }}</div>
  </div>
</template>
<style>
.white {
  color: white !important;
}
</style>
<script>
import { LANGUAGE } from "../../resources/constants.js";
import { API } from "../../resources/axios";

// Todo: get posts likes and choose button
export default {
  name: "PostFooter",
  props: {
    postId: {
      type: Number,
      default: 0,
    },
    userVoted: {
      type: Boolean,
      default: false,
    }
  },

  methods: {
    toggleLiked() {
      this.likePost();
    },

    likePost() {
      const fData = new FormData();
      fData.append("pId", this.postId);
      API.post("/posts/likePost", fData).then((response) => {
        this.userVoted = response.data.success;
      });
    },
  },
  computed: {
    textLiked: function () {
      return !this.userVoted ? LANGUAGE.FIRST_LIKE : LANGUAGE.LIKE;
    },
  },
};
</script>
