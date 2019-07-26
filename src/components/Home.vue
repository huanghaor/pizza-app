<template>
  <div>
    <button @click="goToMenu " class="btn btn-success">Let's Order !</button>
  </div>
</template>
<script>
  export default {
    methods:{
      goToMenu:function () {
        //跳转到上一次浏览页面
        /**this.$router.go(-1);*/
        //根据地址--跳转指定地址
        /**this.$router.replace('/menu');*/
        //根据路由name进行指定跳转
        /**this.$router.replace({name:'menuLinke'});*/
        //通过push进行跳转===使用push时可以填写任意写法的参数
        /**this.$router.push('/menu');*/
        this.$router.push({name:'menuLinke'});
      }
    }
  }
</script>
<style></style>
