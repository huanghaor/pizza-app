<template>
  <header >
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="py-2" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
      </a>
      <router-link to="/" class="nav-brand">Pizza点餐系统</router-link>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <!--
            -- router-link：的作用是跳转页面时禁止页面进行刷新操作，默认为<a>标签
            -- tag :作用是自定义标签，
            <li class="nav-item active title"><router-link tag="div" class="nav-link" to="/">主页</router-link></li>
            --:to="{name:'menuLinke'}" 里面name对应的是路由中定义的name
          -->
          <li class="nav-item active title"><router-link class="nav-link" :to="{name:'homeLinke'}">主页</router-link></li>
          <li class="nav-item"><router-link class="nav-link" :to="{name:'menuLinke'}">菜单</router-link> </li>
          <li class="nav-item"><router-link class="nav-link" :to="{name:'adminLinke'}">管理</router-link> </li>
          <li class="nav-item"><router-link class="nav-link" :to="{name:'aboutLinke'}">关于我们</router-link> </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item"><router-link class="nav-link" :to="{name:'loginLinke'}">登录</router-link> </li>
          <li class="nav-item"><router-link class="nav-link" :to="{name:'registerLinke'}">注册</router-link> </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>

</script>
<style>
  .title{
    margin-left: 5px;
  }
</style>
