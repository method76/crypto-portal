<template>
  <div>
    <PageLoader />
    <Overlay />
    <LeftNav />
    <router-view/>
  </div>
</template>

<script>
import PageLoader from './components/PageLoader.vue'
import Overlay from './components/Overlay.vue'
import LeftNav from './components/LeftNav.vue'
export default {
  components: {
    PageLoader, Overlay, LeftNav
  }
}
</script>
