<script>
import VnkCategory from '~/components/VnkCategory.vue'
import VnkArticles from '~/components/VnkArticles.vue'
import VnkContents from '~/components/VnkContents.vue'
import { mapMutations } from 'vuex'

export default {
components: {
VnkCategory,
VnkArticles,
VnkContents
},
mounted () {
console.log('[page] forum>_id mounted');
this.$store.commit('article/set', '');
},
}
</script>

<template>
  <div class="columns" id="mail-app">
    <vnk-category />
    <div class="column is-10 columns">
      <vnk-articles />
      <vnk-contents />
    </div>
  </div>
</template>
