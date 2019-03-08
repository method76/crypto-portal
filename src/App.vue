<template>
  <div>
    <PageLoader />
    <Overlay />
    <!-- Main Content -->
    <coingecko-coin-price-marquee-widget  coin-ids="bitcoin,ethereum,eos,ripple,litecoin" currency="krw" background-color="#ffffff" locale="ko"></coingecko-coin-price-marquee-widget>
    <section class="content">
      <LeftNav />
      <router-view/>
      <BottomNav/>
    </section>
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
