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
        <el-input v-model="username" type="text" placeholder="请输入用户名"></el-input>
      </div>
      <div class="input_title">Set passward</div>
      <div>
        <el-input v-model="password" type="text" placeholder="请输入密码" show-password></el-input>
      </div>
      <!-- <div>
        <el-checkbox class="checkbox" v-model="checked" label="Show password"></el-checkbox>
      </div> -->
      <el-button type="primary" class="login_button" @click="login">Sign Up </el-button>
      <div class="records">
        京公网安备11000002000001号
      </div>
    </div>
  </div>
</template>

<script>
  // import login_img from '@/assets/login/login.png'

  export default {
    name:'login',
    data(){
      return {
        username:'',
        password:'',
        checked:true
        //login_img
      }
    },
    methods:{
      login(){
        if(this.username == ""){
          this.$message({
            message: '用户名不能为空，请检查',
            type: 'warning'
          });
          return
        }
        if(this.password == ""){
          this.$message({
            message: '密码不能为空，请检查',
            type: 'warning'
          });
          return
        }
        if(this.username != "chenhaoyue" || this.password != "123456"){
          this.$message({
            message: '用户名或密码错误，请重试',
            type: 'warning'
          });
          return
        }
        this.$router.push('/main')
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
  top: -156px;
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
    width:310px;
    height: 40px;
    border-radius: 7px;
    position: relative;
    top: 30px;
    background-color: #1AAD85;
  }
  .records{
    position: relative;
    font-size: 13px;
    color: #bbb;
    top: 40px;
    text-align: center;
  }
}
</style>