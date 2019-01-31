<script>
export default {
  name: `page-index`,
}
</script>

<style>
  .box.tile { padding: 0; }
  .tile .title { line-height: 0; }
  .tile.is-parent, .tile.is-child { padding: 0; }
  .tile.is-vertical>.tile.is-child:not(:last-child) { margin-bottom: 0!important; }
  .panel-icon { width: 80px;height: 80px; }
  .panel-block { font-size: 15px; }
</style>

<template>
  <div class="is-fullheight"> <!--  -->
    <nav class="level">
      <div class="block-category-list">
        <a href="http://portus.orange-themes.net/category/mobile-phones/" class="item"><i class="ti ti-mobile"></i><strong>Mobile Phones</strong></a>
        <a href="http://portus.orange-themes.net/category/tablets/" class="item"><i class="ti ti-tablet"></i><strong>Tablets</strong></a>
        <a href="http://portus.orange-themes.net/category/desktops/" class="item"><i class="ti ti-desktop"></i><strong>Desktops</strong></a>
        <a href="http://portus.orange-themes.net/category/audio/" class="item"><i class="ti ti-headphone"></i><strong>Audio</strong></a>
        <a href="http://portus.orange-themes.net/tag/gaming/" class="item"><i class="ti ti-game"></i><strong>Gaming</strong></a>
        <a href="http://portus.orange-themes.net/tag/photo-video/" class="item"><i class="ti ti-camera"></i><strong>Photo &amp; Video</strong></a>
        <a href="http://portus.orange-themes.net/tag/car-tech/" class="item"><i class="ti ti-car"></i><strong>Car tech</strong></a>
        <a href="http://portus.orange-themes.net/tag/navigation/" class="item"><i class="ti ti-location-pin"></i><strong>Navigation</strong></a>
        <a href="http://portus.orange-themes.net/tag/peripherals/" class="item"><i class="ti ti-microphone"></i><strong>Peripherals</strong></a>
        <a href="http://portus.orange-themes.net/tag/smartwatches/" class="item"><i class="ti ti-time"></i><strong>Smartwatches</strong></a>
        <a href="http://portus.orange-themes.net/tag/recording/" class="item"><i class="ti ti-mouse"></i><strong>Recording</strong></a>
      </div>
    </nav>
    <nav class="level">
      <div class="columns">
        <div class="column is-12">
          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <div class="tile is-child box">
                <p class="title"><img src="http://portus.orange-themes.net/wp-content/uploads/2016/01/32002310_ml-1200x780_c.jpg"></p>
              </div>
            </div>
            <div class="tile is-3 is-vertical is-parent">
              <div class="tile is-child box">
                <p class="title"><img src="http://portus.orange-themes.net/wp-content/uploads/2016/01/street-car-power-fast-600x390_c.jpg"></p>
              </div>
              <div class="tile is-child box">
                <p class="title"><img src="http://portus.orange-themes.net/wp-content/uploads/2016/01/technology-music-sound-things-600x390_c.jpg"></p>
              </div>
            </div>
            <div class="tile is-parent is-3">
              <nav class="panel">
                <p class="panel-heading">
                  Popular Posts__
                </p>
                <a class="panel-block">
                  <span class="panel-icon">
                    <img width="80" height="80" src="http://portus.orange-themes.net/wp-content/uploads/2016/01/street-car-power-fast-80x80_c.jpg" alt="Dynamic Prime Factors to make BSB debut" srcset="http://portus.orange-themes.net/wp-content/uploads/2016/01/street-car-power-fast-160x160_c.jpg" data-ot-retina="http://portus.orange-themes.net/wp-content/uploads/2016/01/street-car-power-fast-160x160_c.jpg">
                  </span>
                  <div>Dynamic Prime Factors to make BSB debut</div>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <nav class="level">
      Media
    </nav>
    <nav class="level">
      <div class="columns">
        <div class="column">Token Post</div>
        <div class="column">Hash Net</div>
        <div class="column">Block Media</div>
        <div class="column">Block Daily</div>
        <div class="column">Coindesk Korea</div>
        <div class="column">Investing.com</div>
        <div class="column">Decenter</div>
        <div class="column">Bit Web</div>
        <div class="column">Block Inpress</div>
        <div class="column">Crypto Graph</div>
      </div>
    </nav>
    <div class="columns">
      <div class="column is-12">
        <div class="widget">
          <div class="do-space do-space-bg">
            <a href="http://www.orange-themes.net" target="_blank"><img width="728" height="90" src="http://portus.orange-themes.net/wp-content/themes/portus-premium-theme/images/pob-1.jpg" alt="" title=""></a>											<strong>Sponsored advertisement</strong>
          </div>
          <!-- END .widget -->
        </div>
      </div>
    </div>
  </div>
</template>
