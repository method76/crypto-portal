<template>
  <div>
    <PageLoader />
    <Overlay />
    <LeftNav />
    <RightNav />
    <Search />
    <router-view/>
  </div>
</template>

<script>
import PageLoader from './components/PageLoader.vue'
import Overlay from './components/Overlay.vue'
import LeftNav from './components/LeftNav.vue'
import RightNav from './components/RightNav.vue'
import Search from './components/Search.vue'
export default {
  components: {
    PageLoader, Overlay, LeftNav, RightNav, Search
  }
}
</script>
