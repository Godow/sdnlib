<template>
    <div id="mainPage" align="center" style="padding:0;margin:0 auto;border:0;width:100%">
      <el-carousel height="calc(100vh - 100px)">
      <el-carousel-item v-for="item in imgCnt" :key="item.id">   
        <img :src=imgPath[item-1] style="margin-top:0px;height:calc( 100vh - 100px)"></img>
      </el-carousel-item>
    </el-carousel>
    
  </div>
</template>

<script>
import axios from 'axios'

  export default {
    name:'mainPage',
    data(){
      return {
        constPath:'../../static/首页展示/',
        showImg:'',
      }
    },
    mounted:function(){
      let that = this;
      axios.get('../../static/首页展示/mainPageConfig.json')
      .then(function(response){
        that.showImg=response.data.slider;
      })
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