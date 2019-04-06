<template>
<div class="container">
<div class="left">
  <img src="../assets/windcar1.jpg"  />
</div>
<div class="right">
  <div class="login">
<div>
  <span>用户名:</span>
     <div class="username">
  <el-input v-model="input" style="width:300px;" id="username" placeholder="用户名"></el-input>
     </div>
  </div>
  <div>
    <span>密码:</span>
    <div class="password">
  <el-input placeholder="密码" style="width:300px;" id="password" v-model="input1" show-password></el-input>
     </div>
  </div>
     <div class="button">
  <el-button type="primary" style="width:150px;" >登陆</el-button>
      </div> 
  </div>
</div>
</div>
</template>



<script>
import axios from "axios"
import qs from "qs"

// var params = new URLSearchParams();
// params.append('username', 'admin');
// params.append('password', '123456');
// axios.post('../assets/login.php', params).then(res => alert(res.data));


export default {
  data() {
    return {
     input:'',
     input1:''
    }
  }
}

</script>

<style>
img{
  margin-top:5%;
}
  .container{
    positive:relative;
    background-color:white;
    width:100% !important;
    height: 100% !important;
  }
  .left{
    height:100%;
    width:55%;
    display:inline-block;
    float:left;
  }
  .login{
    margin-top:35%;
    height:30%;
  }
  .right{
    display:inline-block;
   float:left;
   height:100%;
   width:45%;
  }
  .username{
    margin-top:15px;
    margin-bottom:15px;
  }
  .password{
    margin-top:15px;
  }
  .button{
    margin-top:20px;
    margin-left:75px;
  }
</style>
