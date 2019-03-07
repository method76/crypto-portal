<template>
  <!-- Left Sidebar -->
  <aside id="leftsidebar" class="sidebar">
    <div class="navbar-brand">
      <router-link to="/"><img src="assets/images/logo.png" alt="4th"></router-link>
      <button class="btn btn-primary btn-icon mobile_menu" type="button"><i class="zmdi zmdi-sort-amount-desc"></i></button>
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
        <router-link to="/media" tag="li" class="open" active-class="active">
          <a><i class="zmdi zmdi-folder"></i><span>미디어</span></a>
        </router-link>
        <router-link to="/explorer" tag="li" class="open" active-class="active">
          <a><i class="zmdi zmdi-grid"></i><span>블록탐색기</span></a>
        </router-link>
        <router-link to="/solution" tag="li" class="open" active-class="active">
          <a><i class="zmdi zmdi-swap-alt"></i><span>솔루션</span></a>
        </router-link>
        <router-link to="/souvenir" tag="li" class="open" active-class="active">
          <a><i class="zmdi zmdi-shopping-cart"></i><span>기념품샵</span></a>
        </router-link>
        <li class="open">
          <Adsense
            data-ad-client="ca-pub-7663265873201714"
            data-ad-slot="3594394147">
          </Adsense>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style>
.btn-primary:not(:disabled):not(.disabled):active { margin-right: -70px; }
.btn.mobile_menu { color: #fff;background-color: #ddd;border: 1px solid #666;color: #888; }
</style>
