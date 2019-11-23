<template>
    <div id="mainPage" align="center" style="padding:0;margin:0 auto;border:0;">
      <el-carousel height="calc(100vh - 120px)">
      <el-carousel-item v-for="item in imgCnt" :key="item.id">   
        <img :src=imgPath[item-1] style="margin-top:calc((100vh - 135px)/2);transform:translateY(-50%);height:90vmin"></img>
      </el-carousel-item>
    </el-carousel>
    
  </div>
</template>

<script>
import mainPageConfig from '../../static/首页展示/mainPageConfig'

var fs = require('fs');
var path = require('path');
  export default {
    name:'mainPage',
    components:{
 
    },
    data(){
      return {
        constPath:'../../static/首页展示/',
        showImg:mainPageConfig.mainPageInfo.slider,
        
      }
    },
    computed:{
      imgCnt:function(){
        return Object.keys(this.showImg).length;
      },

      imgPath:function(){
        let newPath=[];
         for(let i=0;i < this.showImg.length;i++){
          newPath.push(this.constPath + this.showImg[i]);
        }
        return newPath;
      }
    },
    created:function(){
    },
    methods:{
    }
  }
</script>



<style>
  *{
      margin:0px;
      padding:0px;
      
  }
  #mainPage{
    
  }
</style>