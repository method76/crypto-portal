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
  .media .tile.is-3 { height: 100px;border: 1px solid #f0f0f0; }
</style>

<template>
    <div class="is-fullheight">
    <nav class="level">
      <div class="field">
        <label class="label">Search Transaction</label>
        <div class="control">
          <input class="input" type="text" placeholder="Please input transaction hash">
        </div>
      </div>
    </nav>
    <nav class="level columns">
      <div class="column is-3 media">
        <div class="tile is-ancestor">
          <div class="tile is-3">Token Post</div>
          <div class="tile is-3">Hash Net</div>
          <div class="tile is-3">Block Media</div>
          <div class="tile is-3">Block Daily</div>
        </div>
        <div class="tile is-ancestor">
          <div class="tile is-3">Coindesk Korea</div>
          <div class="tile is-3">Investing.com</div>
          <div class="tile is-3">Decenter</div>
          <div class="tile is-3">Bit Web</div>
        </div>
        <div class="tile is-ancestor">
          <div class="tile is-3">Block Inpress</div>
          <div class="tile is-3">Crypto Graph</div>
          <div class="tile is-3">Blockchain Valley</div>
          <div class="tile is-3">Blocktimes TV</div>
        </div>
        <div class="tile is-ancestor">
        </div>
      </div>
      <div class="column is-6 tile is-ancestor">
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
      </div>
      <div class="column is-3">
        <nav class="panel">
          <p class="panel-heading">Popular Posts</p>
          <a class="panel-block">
                <span class="panel-icon">
                  <img width="80" height="80" src="http://portus.orange-themes.net/wp-content/uploads/2016/01/street-car-power-fast-80x80_c.jpg" alt="Dynamic Prime Factors to make BSB debut" srcset="http://portus.orange-themes.net/wp-content/uploads/2016/01/street-car-power-fast-160x160_c.jpg" data-ot-retina="http://portus.orange-themes.net/wp-content/uploads/2016/01/street-car-power-fast-160x160_c.jpg">
                </span>
            <div>Dynamic Prime Factors to make BSB debut</div>
          </a>
        </nav>
      </div>
    </nav>
    <nav class="level">
      <div class="columns">
        <div class="column is-12">
          <div class="widget">
            <div class="do-space do-space-bg">
              <a href="http://www.orange-themes.net" target="_blank"><img width="728" height="90" src="http://portus.orange-themes.net/wp-content/themes/portus-premium-theme/images/pob-1.jpg" alt="" title=""></a>
              <strong>Sponsored advertisement</strong>
            </div>
            <!-- END .widget -->
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
