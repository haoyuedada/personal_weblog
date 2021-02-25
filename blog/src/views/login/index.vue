<!--
 * @Descripttion: 
 * @version: 
 * @Author: chenhaoyue
 * @Date: 2021-02-24 18:16:33
-->
<template>
  <div id="mainPage">
    <!-- <img :src="login_img"> -->
    <!-- muted 控制进入页面就播放，-->
    <video id="loginVideo" autoplay=“autoplay” loop="loop" muted="muted" src="@/assets/video/Crowdrise_2.mp4">your browser does not support the video tag</video>
    <div class="userInput">
      <div>Email address</div>
      <div>
        <input type="text">
      </div>
      <div>Set passward</div>
      <div>
        <input type="text">
      </div>
      <div>
        <el-radio v-model="radio" label="label"></el-radio>
        <span>Show password</span>
      </div>
      <div>Sign Up -></div>
    </div>
  </div>
</template>

<script>
  // import login_img from '@/assets/login/login.png'

  export default {
    name:'login',
    data(){
      return {
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
  left: 73px;
  top: 30px;
}
.userInput{
  display: inline-block;
  position: relative;
}
</style>