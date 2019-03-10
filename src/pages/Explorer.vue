<template>
  <!-- Main Content -->
  <div class="body_scroll">
    <div class="row">
      <div class="col-12">
        <ul class="nav nav-tabs p-0 mb-3 nav-tabs-warning" role="tablist">
          <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#home_with_icon_title"> <i class="zmdi zmdi-home"></i> Bitcoin </a></li>
          <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#profile_with_icon_title"><i class="zmdi zmdi-account"></i> Ethereum </a></li>
          <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#home_with_icon_title"> <i class="zmdi zmdi-home"></i> Litecoin </a></li>
          <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#messages_with_icon_title"><i class="zmdi zmdi-email"></i> EOS </a></li>
          <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#settings_with_icon_title"><i class="zmdi zmdi-settings"></i> Ripple </a></li>
        </ul>
      </div>
    </div>
    <div class="block-header">
      <div class="row">
        <div class="col-12">
          <h2>블록 익스플로러: Bitcoin</h2>
        </div>
      </div>
    </div>

    <!-- 가로 광고 Start -->
    <div class="row">
      <div class="col-12">
        <Adsense
          data-ad-client="ca-pub-7663265873201714"
          data-ad-slot="3941948313">
        </Adsense>
      </div>
    </div>
    <!-- 가로 광고 End -->

    <div class="container-fluid product-grid">
      <div class="row clearfix">
        <div class="col-lg-2 col-4">
          <div class="user-info">
            <img src="/assets/images/crypto/ic_BTC.png" alt="Bitcoin Icon">
          </div>
        </div>
        <div class="col-lg-2 col-4">
          <div class="list-group">
            <!-- https://www.blockchain.com/ko/explorer -->
            <a href="javascript:void(0);" class="list-group-item active">Main Net</a>
            <a href="javascript:void(0);" class="list-group-item">Test Net</a>
          </div>
        </div>
        <div class="col-lg-2 col-8">
          <div class="list-group">
            <!-- https://www.blockchain.com/ko/explorer -->
            <a href="javascript:void(0);" class="list-group-item active">blockcypher.com</a>
            <a href="javascript:void(0);" class="list-group-item">blockexplorer.com</a>
            <a href="javascript:void(0);" class="list-group-item">btc.com</a>
            <a href="javascript:void(0);" class="list-group-item">bitcoin.com</a>
            <a href="javascript:void(0);" class="list-group-item">chain.so</a>
            <a href="javascript:void(0);" class="list-group-item">blockchair.com</a>
            <a href="javascript:void(0);" class="list-group-item">cryptoid.info</a>
          </div>
        </div>

        <div class="col-lg-6 col-12">
          <div class="input-group mb-4">
            <input type="text" class="form-control" placeholder="Search by Address / Txhash / Block">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scope>
  input[type=text].form-control { border: 3px solid #e47297;height: 46px; }
  .user-info img { height: 150px; }
</style>

<script>
export default {
  components: {
  }
}
</script>
