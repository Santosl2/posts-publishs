<template>
  <div class="box">
    <div class="box-user">
      <md-avatar>
        <img
          src="https://vuematerial.io/assets/examples/avatar.png"
          alt="Avatar"
        />
      </md-avatar>
      <span class="username">Santosl2c</span> fez uma nova publicação
    </div>
    <div class="box-content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis enim ex,
      ultricies sed ultricies in, convallis id justo. Duis vel lacinia eros.
      Nunc et mollis erat, mattis blandit metus. Sed ullamcorper condimentum
      lorem, vitae ullamcorper velit hendrerit ut. Praesent et lacinia nulla, ac
      bibendum purus. Proin pulvinar et orci at placerat. Sed laoreet interdum
      turpis, vel lobortis leo ultricies tempor. Quisque mattis nisl in pharetra
      posuere. Vivamus massa orci, ultricies nec justo eget, posuere
      pellentesque velit. Mauris congue quam ut imperdiet viverra. Quisque a
      ornare sapien. Duis blandit egestas lectus, eu laoreet mauris efficitur
      eu. Sed sodales mi vitae odio porta sollicitudin. Pellentesque laoreet
      sagittis maximus. Cras sit amet tristique mauris. Nam consequat metus
      libero, a pulvinar massa aliquam nec. Nullam sodales posuere eros vel
      mattis. Praesent aliquam pellentesque augue, ut blandit justo lobortis ac.
      Sed diam urna, ullamcorper eget massa vitae, venenatis volutpat odio.
      Mauris efficitur feugiat efficitur. Curabitur efficitur tellus eu
      ullamcorper fermentum. Ut sit amet nibh vel nisl dignissim luctus a
      maximus ante. Maecenas auctor condimentum condimentum. Mauris finibus
      tristique sagittis. Phasellus blandit consequat dapibus. Vestibulum at
      nisl diam. Donec ac urna lorem. Pellentesque faucibus velit lobortis,
      cursus lectus eget, tincidunt tellus. Nullam blandit lacus quis justo
      elementum, in tempor magna dapibus. Etiam eu enim ultricies, laoreet dui
      ac, aliquet tortor. Mauris quis sagittis elit. Suspendisse a ex ultrices
      velit dignissim facilisis. Cras laoreet ipsum in ex finibus facilisis.
      Duis porta elementum purus gravida ultricies. Praesent vestibulum turpis
      vel quam lobortis, at sagittis elit luctus. Maecenas quis diam ut purus
      euismod euismod et ac mauris. Aenean fringilla ullamcorper eros a gravida.
      Donec ac nisl rhoncus, faucibus elit in, rutrum nisi. Ut non arcu ut nibh
      gravida venenatis.
    </div>

    <div class="box-footer">
      <md-button v-on:click="toggleLiked" class="md-icon-button md-dense">
        <md-icon :class="isLiked ? 'white' : 'md-accent'">thumb_up</md-icon>
      </md-button>
    </div>
  </div>
</template>
<style scoped>
.white {
  color: white !important;
}
.box {
  background: #131212;
  min-width: 75px;
  padding: 10px;
  margin: 2px;
  border-radius: 7px;
  color: white;
  margin-bottom: 20px
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
export default {
  data: () => ({
    isLiked: false,
  }),
  methods: {
    toggleLiked() {
      this.isLiked = !this.isLiked;
    },
  },
};
</script>

