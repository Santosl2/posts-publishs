<template>
  <div>
    <div style="padding: 5px; height: 25px">
      <md-button
        v-on:click="toggleLiked"
        style="margin-top: -8px"
        class="md-icon-button md-dense"
      >
        <md-icon :class="!userVoted ? 'white' : 'md-accent'">thumb_up</md-icon>
      </md-button>
      <i>{{ textLiked(likes) }}</i>
    </div>
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

export default {
  name: "PostFooter",
  props: {
    postId: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
    userVoted: {
      type: Boolean,
      default: false,
    },
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
        this.likes = response.data.likes;
      });
    },
  },
  computed: {
    textLiked: function () {
      return (likes) => {
        if (likes <= 0) {
          return LANGUAGE.FIRST_LIKE;
        }

        if (this.userVoted && likes == 1) {
          return LANGUAGE.LIKE;
        }

        if (this.userVoted && likes > 1) {
          return LANGUAGE.LIKE_MORE.replace("{count}", likes - 1);
        }

        return likes;
      };
      //return !this.userVoted ? LANGUAGE.FIRST_LIKE : LANGUAGE.LIKE;
    },
  },
};
</script>
