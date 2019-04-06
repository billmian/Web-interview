<template>
<el-container>
  <el-header>
  	<div class="left-header">
  		Web管理系统
  	</div>
  	<div class="right-header"><a href="./login">注销</a></div>
  </el-header>
  <el-container class="container-body">
  	<c-sider></c-sider>
    <!-- <el-aside width="200px">Aside</el-aside> -->
    <el-main><router-view class="main-view"></router-view></el-main>
  </el-container>
</el-container>
</template>


<script>
	import CSider from '../components/Sidebar.vue'
	 export default{
    name: 'home',
  components: {
    CSider
  }
  }
</script>

<style>

.container-body{
	height:90% !important;
}
.left-header{
	text-align:left;
	float:left;
	font-size:1.25rem;
}
.right-header{
	text-align:right;
	float:right;
	font-size:1.25rem;
}
  .el-header{
  	display:inline-block !important;
    background-color: #202060;
    color:white;
    line-height: 60px;
    height:10% !important;
  }
  .el-container{
  	height:100% !important;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    height:100%;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>