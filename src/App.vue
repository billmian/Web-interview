<template>
  <div id="app">
   <router-view></router-view>     <!--渲染路由-->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>


<style lang="stylus" >
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>