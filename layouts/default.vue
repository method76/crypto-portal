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

<style>
html, body { font-family: "Open Sans";font-size: 13px;color: #313131; }
</style>

<template>
  <div id="app">
    <vnk-header />
    <nuxt />
    <vnk-footer />
  </div>
</template>
