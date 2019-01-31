<script>

export default {
  name: `vnk-contents`,
  props: [ 'content' ],
}
</script>

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
      <div class="top" v-if="content">
        <div class="content" v-html="content"></div>
      </div>
      <div class="content" v-else>Please choose an article</div>
    </div>
  </div>
</template>
