<script>
import VnkFooter from '~/components/VnkFooter.vue'
import VnkHeader from '~/components/VnkHeader.vue'

export default {
  name: `layout-default`,
  components: {
    VnkHeader,
    VnkFooter
  },
  methods: {
    goBack () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>

<template>
  <div id="app">
    <vnk-header />
    <nuxt />
    <vnk-footer />
  </div>
</template>
