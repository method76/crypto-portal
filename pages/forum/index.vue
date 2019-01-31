<script>
import VnkCategory from '~/components/VnkCategory.vue'
import VnkArticles from '~/components/VnkArticles.vue'
import VnkContents from '~/components/VnkContents.vue'

export default {
    components: {
        VnkCategory,
        VnkArticles,
        VnkContents
    },
    mounted () {
        console.log('[page] forum>index mounted');
    }
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
