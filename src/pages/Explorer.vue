<template>

  <!-- Main Content -->
  <div class="body_scroll">
    <div class="block-header">
      <div class="row">
        <div class="col-12">
          <h2>블록 익스플로러</h2>
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

    <!-- BTC -->
    <div class="container-fluid product-grid">
      <div class="row clearfix">
        <div class="col-lg-1 col-4">
          <div class="user-info">
            <img src="/assets/images/crypto/ic_BTC.png" alt="Bitcoin Icon">
          </div>
        </div>
        <div class="col-lg-2 col-4">
          <!-- https://www.blockchain.com/ko/explorer -->
          <select class="selectpicker">
            <option>Main net</option>
            <option>Test net</option>
          </select>
        </div>
        <div class="col-lg-2 col-8">
          <select class="selectpicker">
            <option>blockcypher.com</option>
            <option>blockexplorer.com</option>
            <option>btc.com</option>
            <option>bitcoin.com</option>
            <option>chain.so</option>
            <option>blockchair.com</option>
            <option>cryptoid.info</option>
          </select>
        </div>
        <div class="col-lg-7 col-12">
          <div class="input-group mb-4">
            <input type="text" class="form-control" placeholder="Search by Address / Txhash / Block">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ETH -->
    <div class="container-fluid product-grid">
      <div class="row clearfix">
        <div class="col-lg-1 col-4">
          <div class="user-info">
            <img src="/assets/images/crypto/ic_ETH.png" alt="Ethereum Icon">
          </div>
        </div>
        <div class="col-lg-2 col-4">
          <!-- https://www.blockchain.com/ko/explorer -->
          <select class="selectpicker">
            <option>Main net</option>
            <option>Test net</option>
          </select>
        </div>
        <div class="col-lg-2 col-8">
          <select class="selectpicker">
            <option>blockcypher.com</option>
            <option>blockexplorer.com</option>
            <option>btc.com</option>
            <option>bitcoin.com</option>
            <option>chain.so</option>
            <option>blockchair.com</option>
            <option>cryptoid.info</option>
          </select>
        </div>
        <div class="col-lg-7 col-12">
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
  .user-info img { width: 80px;height: 80px; }
</style>

<script>
export default {
  components: {
  }
}
</script>
