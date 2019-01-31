<script>
export default {
  name: `vnk-category`,
}
</script>

<style>
.aside .main { padding: 0 40px; }
</style>

<template>
  <aside class="column is-2 aside hero is-fullheight">
      <div class="compose has-text-centered">
        <a class="button is-danger is-block is-bold">
          <span class="compose">Compose</span>
        </a>
      </div>
      <div class="main">
        <nuxt-link to="/forum/trend" class="item" active-class="active" replace><span class="name">Trend</span></nuxt-link>
        <nuxt-link to="/forum/new" class="item" active-class="active" replace><span class="name">New</span></nuxt-link>
        <nuxt-link to="/forum/hot" class="item" active-class="active" replace><span class="name">Hot</span></nuxt-link>
        <nuxt-link to="/forum/promoted" class="item" active-class="active" replace><span class="name">Promoted</span></nuxt-link>
      </div>
  </aside>
</template>
