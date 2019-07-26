<template>
  <div class="card text-dark bg-light mb-3">
    <div class="card-header">联系我们</div>
    <div class="card-body">
      <h4 class="card-title">联系我们</h4>
      <p class="card-text">123456789@qq.com</p>
      <h5>三级菜单</h5>
      <router-link :to="{name:'phoneNumber'}">【电话</router-link>
      <router-link :to="{name:'personName'}">联系人】</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
