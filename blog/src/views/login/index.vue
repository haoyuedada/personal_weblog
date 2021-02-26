<!--
 * @Descripttion: 
 * @version: 
 * @Author: chenhaoyue
 * @Date: 2021-02-24 18:16:33
-->
<template>
  <div id="mainPage">
    <!-- <img :src="login_img"> -->
    <!-- muted 控制进入页面就播放-->
    <video id="loginVideo" autoplay=“autoplay” loop="loop" muted="muted" src="@/assets/video/Crowdrise_2.mp4">your browser does not support the video tag</video>
    <div class="userInput">
      <div class="input_title">Email address</div>
      <div>
        <input type="text" placeholder="请输入用户名">
      </div>
      <div class="input_title">Set passward</div>
      <div>
        <input type="text" placeholder="请输入密码">
      </div>
      <div>
        <el-checkbox class="checkbox" v-model="checked" label="Show password"></el-checkbox>
      </div>
      <div class="login_button">Sign Up -></div>
    </div>
  </div>
</template>

<script>
  // import login_img from '@/assets/login/login.png'

  export default {
    name:'login',
    data(){
      return {
        checked:true
        //login_img
      }
    }
  }
</script>

<style scoped lang="scss">
#mainPage{
  /* background-color: #86F0D3; */
  width: 100%;
  height: 100%;
}
#loginVideo{
  position: relative;
  width:600px;
  height: 600px;
  left: 178px;
  top: 30px;
}
.userInput{
  display: inline-block;
  position: relative;
  top: -185px;
  left: 142px;
  .input_title{
    font-weight: bold;
    font-size: 13px;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  input{
    border-radius: 6px;
    border: 1px solid #C0B8BB;
    height: 30px;
    width: 300px;
    font-size: 12px;
    padding: 2px 4px 2px 4px;
  }
  .el-checkbox__label{
    font-size: 10px;
  }
  .login_button{
    width:300px;
    height: 40px;
    border-radius: 7px;
    text-align: center;
    line-height: 40px;
    position: relative;
    top: 15px;
    background-color: #1AAD85;
    color: white;
    font-size: 14px;
  }
}
</style>