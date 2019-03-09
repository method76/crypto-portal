<template>
  <!-- Left Sidebar -->
  <div>
    <div class="navbar-brand row">
      <div class="col-lg-3 col-3">
        <button class="btn btn-primary btn-icon mobile_menu" type="button"><i class="zmdi zmdi-sort-amount-desc"></i></button>
        <router-link to="/"><img src="assets/images/logo.png" alt="4th"></router-link>
      </div>
      <div class="col-lg-6 col-5">
        <ul class="nav nav-tabs p-0 mb-3" role="tablist">
          <li class="nav-item"><router-link to="/media" active-class="active" class="nav-link"><i class="zmdi zmdi-folder"></i> 미디어 </router-link></li>
          <li class="nav-item"><router-link to="/explorer" active-class="active" class="nav-link"><i class="zmdi zmdi-grid"></i> 블록탐색기 </router-link></li>
          <li class="nav-item"><router-link to="/solution" active-class="active" class="nav-link"><i class="zmdi zmdi-swap-alt"></i> 솔루션 </router-link></li>
          <li class="nav-item"><router-link to="/souvenir" active-class="active" class="nav-link"><i class="zmdi zmdi-shopping-cart"></i> 기념품샵 </router-link></li>
        </ul>
      </div>
      <div class="col-lg-3 col-4  d-flex justify-content-center">
        <a href="https://www.facebook.com/cryptosticker"><i class="zmdi zmdi-facebook-box"></i></a>&nbsp;
        <a href="https://www.instagram.com/kittychain_shop"><i class="zmdi zmdi-instagram"></i></a>&nbsp;
        <a href="https://twitter.com/KittychainI"><i class="zmdi zmdi-twitter-box"></i></a>&nbsp;
        <a href="https://github.com/method76"><i class="zmdi zmdi-github-box"></i></a>
        <a href="https://medium.com/@method76"><img src="/assets/images/ic_medium.png"></a>
        <a href="#"><i class="zmdi zmdi-youtube-play"></i></a>
      </div>
    </div>
  </div>
</template>

<style>
.btn-primary:not(:disabled):not(.disabled):active { margin-right: -70px; }
.btn.mobile_menu { color: #fff;background-color: #ddd;border: 1px solid #666;color: #888; }
</style>
