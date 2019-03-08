<template>
  <!-- Main Content -->
  <div class="body_scroll">
    <div class="block-header">
      <div class="row">
        <div class="col-12">
          <h2>기념품샵</h2>
        </div>
      </div>
    </div>
    <div class="container-fluid product-grid">
      <div class="row clearfix">
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
          <div class="card">
            <div class="body product_item">
              <span class="label onsale">Sale!</span>
              <img src="/assets/images/crypto/a-title.jpg" alt="Product" class="img-fluid cp_img">
              <div class="product_details">
                <a href="https://smartstore.naver.com/kchain/products/3994514502">암호화폐(가상화폐) 스티커셋 A</a>
                <ul class="product_price list-unstyled">
                  <li class="old_price">3,800원</li>
                  <li class="new_price">2,900원</li>
                  </ul>
              </div>
              <div class="action">
                <a href="javascript:openPopup('https://smartstore.naver.com/kchain/products/3994524965');" class="btn btn-success waves-effect">네이버구매</a>
                <a href="javascript:openPopup('https://smartstore.naver.com/kchain/products/3994524965');" class="btn btn-danger waves-effect">옥션구매</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
          <div class="card">
            <div class="body product_item">
              <img src="/assets/images/crypto/b-title.jpg" alt="Product" class="img-fluid cp_img">
              <div class="product_details">
                <a href="https://smartstore.naver.com/kchain/products/3994524965">암호화폐(가상화폐) 스티커셋 B</a>
                <ul class="product_price list-unstyled">
                  <li class="old_price">3,800원</li>
                  <li class="new_price">2,900원</li>
                </ul>
              </div>
              <div class="action">
                <a href="javascript:openPopup('https://smartstore.naver.com/kchain/products/3994524965');" class="btn btn-success waves-effect">네이버구매</a>
                <a href="javascript:openPopup('https://smartstore.naver.com/kchain/products/3994524965');" class="btn btn-danger waves-effect">옥션구매</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
          <div class="card">
            <div class="body product_item">
              <img src="/assets/images/crypto/c-title.jpg" alt="Product" class="img-fluid cp_img">
              <div class="product_details">
                <a href="https://smartstore.naver.com/kchain/products/3994524965">암호화폐(가상화폐) 스티커셋 C</a>
                <ul class="product_price list-unstyled">
                  <li class="old_price">3,800원</li>
                  <li class="new_price">2,900원</li>
                </ul>
              </div>
              <div class="action">
                <a href="javascript:openPopup('https://smartstore.naver.com/kchain/products/3994524965');" class="btn btn-success waves-effect">네이버구매</a>
                <a href="javascript:openPopup('https://smartstore.naver.com/kchain/products/3994524965');" class="btn btn-danger waves-effect">옥션구매</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scope>
.naver-buy-button {
  display: inline-block;
  overflow: hidden;
  height: 45px;
  background: url(https://img-shop.pstatic.net/smartstore/pc/dist/renew/img/auto-gen/20190227/164534/sp_skin_png24_180222.png) no-repeat;
}
.old_price { text-decoration-line: line-through; }
.product-grid .img-fluid {
  min-height: 327px; }
</style>
<script>
export default {
  components: {
  }
}
</script>
