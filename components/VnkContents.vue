<script>
import { mapMutations } from 'vuex'

export default {
  name: `vnk-contents`,
  // props: ['contents'],
  computed: {
    contents() {
      return this.$store.state.article.contents;
      // return this.contents
    }
  },
  // data: function () {
  //   return { contents: this.contents }
  // }
}
</script>

<style scoped>
.message-preview { margin-top: 20px; }
</style>

<template>
  <div class="column is-8 message hero is-fullheight" id="message-pane">
    <div class="action-buttons">
      <div class="control is-grouped">
        <a class="button is-small"><i class="fa fa-inbox"></i></a>
        <a class="button is-small"><i class="fa fa-exclamation-circle"></i></a>
        <a class="button is-small"><i class="fa fa-trash-o"></i></a>
      </div>
      <div class="control is-grouped">
        <a class="button is-small"><i class="fa fa-exclamation-circle"></i></a>
        <a class="button is-small"><i class="fa fa-trash-o"></i></a>
      </div>
      <div class="control is-grouped">
        <a class="button is-small"><i class="fa fa-folder"></i></a>
        <a class="button is-small"><i class="fa fa-tag"></i></a>
      </div>
    </div>
    <div class="box message-preview">
      <div class="top" v-if="contents">
        <div class="name">John Smith</div>
        <div class="address">
          <div class="avatar">
            <img src="https://placehold.it/128x128">
          </div>
          <div class="email">someone@gmail.com</div>
        </div>
        <hr>
        <div class="content" v-html="contents"></div>
      </div>
      <div class="content" v-else>Please choose an article</div>
    </div>
  </div>
</template>
