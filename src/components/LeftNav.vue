<template>
  <!-- Left Sidebar -->
  <aside id="leftsidebar" class="sidebar">
    <div class="navbar-brand">
      <a href="index.html"><img src="assets/images/logo.svg" width="25" alt="Aero"><span class="m-l-10">4th Life</span></a>
    </div>
    <div class="menu">
      <ul class="list">
        <!--<li>
          <div class="user-info">
            <a class="image" href="profile.html"><img src="assets/images/profile_av.jpg" alt="User"></a>
            <div class="detail">
              <h4>Anonymous</h4>
              <small>Please Login</small>
            </div>
          </div>
        </li>-->
        <li class="active open">
          <a href="index.html"><i class="zmdi zmdi-home"></i><span>홈</span></a>
        </li>
        <li>
          <a href="index.html"><i class="zmdi zmdi-home"></i><span>미디어</span></a>
        </li>
        <li>
          <a href="index.html"><i class="zmdi zmdi-home"></i><span>블록탐색기</span></a>
        </li>
        <li>
          <a href="index.html"><i class="zmdi zmdi-home"></i><span>솔루션</span></a>
        </li>
        <li>
          <a href="index.html"><i class="zmdi zmdi-home"></i><span>기념품샵</span></a>
        </li>
        <li>
          <adsense
            ad-client="ca-pub-7663265873201714"
            ad-slot="3594394147"
            ad-style="display:inline-block;width:160px;height:600px"
            ad-format="auto">
          </adsense>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import VueAdsense from 'vue-adsense'
import Ads from 'vue-google-adsense'

Vue.use(require('vue-script2'))
Vue.use(Ads.Adsense)
Vue.use(Ads.InArticleAdsense)
Vue.use(Ads.InFeedAdsense)

</script>
