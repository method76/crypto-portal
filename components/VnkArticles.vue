<script>
import axios from 'axios'
import { mapMutations } from 'vuex'

export default {
  name: `vnk-articles`,
  mounted () {
      console.log('component articles mounted');
      this.messages = [];
      for (var i = 0; i < 6; i++) {
          this.messages[i] = {
              from: faker.name.findName(),
              timestamp: null,
              imageUrl: faker.image.imageUrl(),
              subject: faker.lorem.sentence().substring(0, 40),
              snippet: faker.lorem.lines(),
              fullMail: faker.lorem.paragraphs(faker.random.number(40)),
              email: faker.internet.email()
          };
      }
  },
  methods: {
    showMessage: function(msg, index) {
      // console.log('route ' + $nuxt.$route.path);
      console.log('showMessage ' + index);
      // /forum/trend, /forum/trend/2
      var idx = $nuxt.$route.path.replace('/', '').replace('/', '').indexOf('/');
      var articleurl = idx==-1?$nuxt.$route.path:$nuxt.$route.path.substring(0, idx+2);
      this.$router.push({
          path:  articleurl + '/' + index
      });

    axios.post(`/api/v1/openforum/contents`
      , {id: 1})
      .then((res) => {
        console.log('data ' + res.data.contents);
        this.$store.commit('article/set', res.data.contents);
        // return { contents: res.data.contents }
      })
      .catch((e) => {
        console.log('error ' + e.description);
        // error({statusCode: 404, message: 'Post not found'})
      });
    }
  },
  data () {
      return {
          cardActive: [],
          messages: []
      }
  }
}
</script>

<style scoped>
#fake-snippet-1 { max-height: 40px;overflow-y: hidden; }
.msg-subject img:first-child { height: 73px; }
.inbox-messages, .msg-subject { margin-top: 0; }
.card-content { padding: 0 1.5rem; }
</style>

<template>
  <div class="column is-4 messages hero is-fullheight" id="message-feed">
    <div class="action-buttons level">
      <div class="level-left">Trending: All</div><i class="fa fa-search level-right"></i>
    </div>
    <div class="inbox-messages" id="inbox-messages">
      <div v-for="(msg, index) in messages" class="card" v-bind:id="'msg-card-'+index" v-bind:data-preview-id="index" @click="showMessage(msg, index)" >
        <div class="card-content">
          <div class="msg-header">
            <span class="msg-from"><small>{{ msg.from }} in steemian • yesterday</small></span>
            <span class="msg-timestamp"></span>
            <span class="msg-attachment"><i class="fa fa-paperclip"></i></span>
          </div>
          <div class="msg-subject media">
            <figure class="media-left">
              <p class="">
                <img v-bind:src="msg.imageUrl">
              </p>
            </figure>
            <div class="msg-subject media-content">
              <strong id="fake-subject-1">{{ msg.subject }}</strong>
              <p id="fake-snippet-1">{{ msg.snippet }}</p>
            </div>
            <div class="media-right">
              <button class="delete"></button><!-- Todo: +Comment Count, +Reply Count, + Add Favorite -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
