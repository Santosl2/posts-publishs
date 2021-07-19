<template>
  <div>
    <div class="box" v-for="post in posts" :key="post.id">
      <div class="box-user">
        <md-avatar>
          <img :src="post.profileImg" alt="Avatar" />
        </md-avatar>
        <span class="username">{{ post.username }}</span> fez uma nova
        publicação
      </div>
      <div class="box-content" v-html="post.content"></div>

      <div class="box-footer">
        <Like :userVoted="post.voted == 1" :postId="post.id" />
      </div>
    </div>
  </div>
</template>
<script>
import PostLike from "./Post-Footer";
import { API } from "../../resources/axios";

export default {
  name: "Post",
  components: {
    Like: PostLike,
  },
  mounted() {
    this.getAllPosts();
  },
  data: () => ({
    posts: [],
  }),
  methods: {
    getAllPosts() {
      const vm = this;

      API.get("/posts").then((response) => {
        vm.posts = response.data;
      });
    },
  },
};
</script>
