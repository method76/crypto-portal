<template>
  <div>
    <PageLoader />
    <Overlay />
    <LeftNav />
    <RightNav />
    <Search />
    <router-view/>
    <BottomNav />
  </div>
</template>

<script>
import PageLoader from './components/PageLoader.vue'
import Overlay from './components/Overlay.vue'
import LeftNav from './components/LeftNav.vue'
import RightNav from './components/RightNav.vue'
import Search from './components/Search.vue'
import BottomNav from './components/BottomNav.vue'
export default {
  components: {
    PageLoader, Overlay, LeftNav, RightNav, Search, BottomNav
  }
}
</script>
