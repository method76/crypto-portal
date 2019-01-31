<script>
export default {
  name: `vnk-header`,
}
</script>

<style>
  .container { max-width: 1600px; }
  .tabs a { border-bottom-color: transparent;border-bottom-width: 5px;margin-top: 14px; }
  .navbar { height: 125px; }
  .container>.navbar .navbar-brand, .navbar>.container .navbar-brand { margin-left: 0; }
  .navbar-brand a { padding: 0;margin-left: 24px;margin-right: 24px; }
  .navbar-brand img { height: 52px; max-height: 52px; }
  .header-pob { padding: 17.5px 0; }
  .navbar-end .tabs ul { height: 56px;position: absolute;bottom: 0;right: 0; }
</style>

<template>
  <nav class="navbar has-shadow">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item">
          <img src="/img/logo.png" alt="DSADSADSADSADSA">
        </nuxt-link>

        <div class="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="header-pob">
        <a href="http://www.orange-themes.net" target="_blank"><img width="728" height="90" src="http://portus.orange-themes.net/wp-content/themes/portus-premium-theme/images/pob-1.jpg" alt="" title=""></a>						<!-- END .header-pob -->
      </div>
      <div id="navbarMenu" class="navbar-menu">
        <div class="navbar-end">
          <div class="tabs is-right">
            <ul>
              <nuxt-link to="/" tag="li" active-class="is-active" exact><a>Home</a></nuxt-link>
              <nuxt-link to="/media" tag="li" active-class="is-active"><a>Media</a></nuxt-link>
              <nuxt-link to="/explorer" tag="li" active-class="is-active"><a>Explorer</a></nuxt-link>
              <nuxt-link to="/cryptocurrency" tag="li" active-class="is-active"><a>Cryptocurrency</a></nuxt-link>
              <nuxt-link to="/shop" tag="li" active-class="is-active"><a>Shop</a></nuxt-link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
