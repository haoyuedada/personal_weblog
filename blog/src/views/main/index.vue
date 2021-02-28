<!--
 * @Descripttion: 
 * @version: 
 * @Author: chenhaoyue
 * @Date: 2021-02-26 21:39:58
-->
<template>
  <div class="main-content">
    <span class="icon iconfont icon-cm_reply"></span>
    <!-- 左侧 -->
    <div class="left-slide column">lalla</div>
    <!-- 中间 -->
    <div class="center-content column"></div>
    <!-- 右侧 -->
    <div class="right-content column"></div>
  </div>
</template>

<script>
//import aa from '@/icon/main/iconfont.css'

export default {
  name:'main',
  data(){
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.main-content{
  width: 100%;
  height: 100%;
  display: flex;
  .column{
    text-align: center;
    box-sizing: border-box;
    height: 100%;
  }
  .left-slide{
    width:300px;
    border: 1px solid red;
  }
  .center-content{
    flex: 1;
    border: 1px solid red;
  }
  .right-content{
    width:300px;
    border: 1px solid red;
  }
}
</style>>

