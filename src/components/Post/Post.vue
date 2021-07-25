<template>
  <div
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="allLoaded"
    infinite-scroll-distance="20"
  >
    <div
      data-aos="slide-up"
      data-aos-offset="100"
      data-aos-easing="ease-out-back"
      class="box"
      v-for="post in posts"
      :key="post.id"
    >
      <div class="box-user">
        <md-avatar>
          <img :src="post.profileImg" alt="Avatar" />
        </md-avatar>
        <span class="username">{{ post.username }}</span> fez uma nova
        publicação
      </div>
      <div class="box-content" v-html="post.content"></div>

      <div class="box-footer">
        <Like
          :userVoted="post.voted == 1"
          :likes="post.countLikes"
          :postId="post.id"
        />
      </div>
    </div>
  </div>
</template>
<script>
import PostLike from "./Post-Footer";
import { API } from "../../resources/axios";
import Vue from "vue";
import infiniteScroll from "vue-infinite-scroll";

Vue.use(infiniteScroll);

export default {
  name: "Post",
  components: {
    Like: PostLike,
  },
  beforeMount() {
    this.getAllPosts();
  },
  data: () => ({
    posts: [],
    page: 0,
    allLoaded: false,
  }),
  methods: {
    loadMore() {
      API.get(`/posts?page=${this.page++}`).then((response) => {
        this.allLoaded = response.data == false;
        this.posts.push(response.data);
      });
    },
    getAllPosts() {
      API.get(`/posts`).then((response) => {
        this.posts = response.data;
      });
    },
  },
};
</script>
