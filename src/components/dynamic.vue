<template>
    <div id="dynamic" >
        <img src="../../static/学术动态/show.jpg" style="width:100%;height:30vh;border:1px solid gray;"></img>
  
        <el-drawer
        title="内容详情"
        :visible.sync="drawer"
        :direction="direction"
        :size="drawerWidth"
        :before-close="handleClose">
        <iframe :src=contentPath style="width:100%;height:100%"></iframe>
        </el-drawer>

        <div v-for="item,inx in dynamicInfo" style="margin-left:5vw;margin-top:20px;">
            <div style="font-size:22px;margin-left:1vw;color:#f15a23" align="left" >{{item.year}}</div>
            <div v-for="i,inx in item['content']">
                <div align="left" id="dynamicContent">
                    <i class="el-icon-circle-check" style="color:#04BFEA"></i> {{inx+1}}.
                    <span @click="func" v-html='i' class="linkWords"></span>
                </div>
                
            </div>
        </div>
  </div>
</template>

<script>

import dynamic from  '../../static/学术动态/dynamic'
  export default {
    name:'dynamic',
    data(){
        return {
            dynamicInfo:dynamic.dynamicInfo,
            contentPathConst:'../../static/学术动态/动态内容/',
            contentPath:'',
            iframePage:'',
            drawer: false,
            direction: 'rtl',
            drawerWidth:'75vw'
        }
    },
    methods:{
        func(e){
            this.contentPath = e.srcElement.href;
            this.contentPath = this.contentPathConst + this.contentPath.split('/').slice(-2).join('/');
            e.preventDefault();
            e.stopPropagation();
            this.drawer = true;
        },
        handleClose(done) {
            this.drawer = false;
      }
    }
  }
</script>


<style>
  *{
      margin:0px;
      padding:0px;
  }
  .block{
    width:400px;
    
    margin-bottom:50px;
    margin-left:40vw;
    transform:translateX(-50%);
  }
  .linkWords{
      
  }
  #dynamicContent{
       margin:20px;
       margin-left:3vw;
       font-size:19px;
  }
  @media screen and (max-width: 820px) {
    #dynamicContent{
        margin:10px;
        margin-left:2vw;
        font-size:15px;
    }
  }
</style>