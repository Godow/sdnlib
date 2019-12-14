<template>
<div id="HelloWorld">
    <el-menu  style="border:0px!important"
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#161415"
    text-color="#fff"
    menu-trigger="click"
    active-text-color="#ffd04b">
    <div  id="SDN" onselectstart="return false">
      <div style="margin-right:10vw;line-height:30px;display:block"><span style="color:#F15A23;">{{libName[0]}}</span> <span style="color:#ffffff;">{{nowYear}}</span></div>
      <div style="color:#ffffff;clear:both;margin-right:20px;line-height:30px">{{libName[1]}}</div>
    </div>


    <el-menu-item index="1" @click="mySlot='mainPage'" class="menuItem" onselectstart="return false">{{navContent[0]}}</el-menu-item>
    <el-menu-item index="8"  @click="mySlot='paper'" class="menuItem" onselectstart="return false">{{navContent[1]}}</el-menu-item>
    <el-menu-item index="7"  @click="mySlot='dynamic'" class="menuItem" onselectstart="return false">{{navContent[2]}}</el-menu-item>
    <el-menu-item index="3"  @click="mySlot='researchProject'" class="menuItem" onselectstart="return false">{{navContent[3]}}</el-menu-item>
    <el-menu-item index="4" @click="mySlot='theRoadofSDN'" class="menuItem" onselectstart="return false">{{navContent[4]}}</el-menu-item>
    <el-menu-item index="5"  @click="mySlot='academicTeam'" class="menuItem" onselectstart="return false">{{navContent[5]}}</el-menu-item>
    <el-menu-item index="9"  @click="mySlot='recruit'" class="menuItem" onselectstart="return false">{{navContent[6]}}</el-menu-item>
    <el-menu-item index="6"  @click="mySlot='entertainment'" class="menuItem" onselectstart="return false">{{navContent[7]}}</el-menu-item>

    <el-submenu index="2" class="phoneMenuItem" >
      <template slot="title"><i type="primary" class="el-icon-menu"></i></template>
      <el-menu-item index="1" @click="mySlot='mainPage'" onselectstart="return false">{{navContent[0]}}</el-menu-item>
      <el-menu-item index="8"  @click="mySlot='paper'" onselectstart="return false">{{navContent[1]}}</el-menu-item>
      <el-menu-item index="7"  @click="mySlot='dynamic'" onselectstart="return false">{{navContent[2]}}</el-menu-item>
      <el-menu-item index="3"  @click="mySlot='researchProject'" onselectstart="return false">{{navContent[3]}}</el-menu-item>
      <el-menu-item index="4" @click="mySlot='theRoadofSDN'" onselectstart="return false">{{navContent[4]}}</el-menu-item>
      <el-menu-item index="5"  @click="mySlot='academicTeam'" onselectstart="return false">{{navContent[5]}}</el-menu-item>
      <el-menu-item index="9"  @click="mySlot='recruit'" onselectstart="return false">{{navContent[6]}}</el-menu-item>
      <el-menu-item index="6"  @click="mySlot='entertainment'" onselectstart="return false">{{navContent[7]}}</el-menu-item>
    </el-submenu>      

    </el-menu-item>
  </el-menu>

    <component id="slotComponent" :is="mySlot"></component>


  <footer >
    <div v-if="footerContent1 == ''" style="font-size:16px;height:40px;width:100%;display:block;line-height:40px;">
      <p id="footerPhone" >{{footerContent2}}</p>   
    </div>
    <div v-else style="font-size:13px;height:40px;width:100%;display:block;line-height:20px;">
      <p id="footerPhoneIgnore" ><i class="el-icon-map-location"></i> {{footerContent1}}</p>
      <p id="footerPhone" >{{footerContent2}}</p>    
    </div>
  </footer>
  



</div>

</template>



<script>

import mainPage from './mainPage.vue'
import academicTeam from './academicTeam.vue'
import theRoadofSDN from './theRoadofSDN.vue'
import entertainment from './entertainment.vue'
import researchProject from './researchProject.vue'
import paper from './paper.vue'
import dynamic from './dynamic.vue'
import recruit from './recruit.vue'

import axios from 'axios'



  export default {
    components:{
      mainPage,
      theRoadofSDN,
      academicTeam,
      entertainment,
      researchProject,
      paper,
      dynamic,
      recruit,
      
    },
    data(){
      return {
        mySlot:'mainPage',
        activeIndex: '1',
        activeIndex2: '1',
        footerContent:'',
        navContent:'',
        footerContent1:'',
        footerContent2:'',
        libName:'',
        nowYear:'',
      }
    },
    created:function(){
      this.nowYear = new Date().getFullYear();
      console.log(this.navContent);
    },
    mounted:function(){
      let that = this;
      axios.get('../../static/首页展示/mainPageConfig.json')
      .then(function(response){
        that.navContent=response.data.navContent;
        that.footerContent1=response.data.footerContent[0];
        that.footerContent2=response.data.footerContent[1];
        that.libName=response.data.libName;
      })
    },
    methods: {
      handleSelect(key, keyPath) {
      }
    }
  }
</script>



<style>
  
  img{
      pointer-events: none;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  #HelloWorld{
  }

  #SDN{
    font-size:22px;
    font-family: 'OpenSansLight', serif;
    float:right;
  }

  #slotComponent{
    margin-top:20px;
    border:5px solid gray;
    width:80vw;
    margin-left:10vw;
    margin-bottom:60px;
    
  }
  #footerPhone{
    background-color:#161415;
    color:white;
  }
  #footerPhoneIgnore{
    background-color:#161415;
    color:white;
  }
  element.style {
    height: 40px!important;
  }
  footer{
    margin:0;
    padding:0;
    position:fixed;
    bottom:0px;
    width:100%;
  }
  @media screen and (max-width: 980px) {
    #SDN{
        display:none;
    }
  }

  @media screen and (max-width: 820px) {
    .menuItem{
        display:none;
    }
    .phoneMenuItem{
      display:block;
    }
    #slotComponent{
      width:100%;
      margin-left:0;
      margin-top:0;
      border:0 solid gray;
    }
    #footerPhoneIgnore{
      display:none;
    }
    #footerPhone{
      line-height:40px;
      font-size:11px;
    }
    #SDN{
      display:block;
      font-size:15px;
    }
    body {
      background-image:url('../../static/config_files/background_img.jpg');
      background-color:black;
    }
    
  }

   @media screen and (min-width: 820px) {
    .phoneMenuItem{
        display:none;
    }

    
  }
</style>