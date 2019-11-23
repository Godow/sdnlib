<template>
<div id="HelloWorld">

  



  <el-container style="margin:0;padding:0">
    <el-header style="margin:0;padding:0">
      <el-menu  id="el-menu"
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      menu-trigger="click"
      active-text-color="#ffd04b">
      <div id="SDN">{{libName}}</div>

      <el-menu-item index="1" @click="mySlot='mainPage'" class="menuItem">{{navContent[0]}}</el-menu-item>
      <el-menu-item index="8"  @click="mySlot='paper'" class="menuItem">{{navContent[1]}}</el-menu-item>
      <el-menu-item index="7"  @click="mySlot='dynamic'" class="menuItem">{{navContent[2]}}</el-menu-item>
      <el-menu-item index="3"  @click="mySlot='researchProject'" class="menuItem">{{navContent[3]}}</el-menu-item>
      <el-menu-item index="4" @click="mySlot='theRoadofSDN'" class="menuItem">{{navContent[4]}}</el-menu-item>
      <el-menu-item index="5"  @click="mySlot='academicTeam'" class="menuItem">{{navContent[5]}}</el-menu-item>
      <el-menu-item index="9"  @click="mySlot='recruit'" class="menuItem">{{navContent[6]}}</el-menu-item>
      <el-menu-item index="6"  @click="mySlot='entertainment'" class="menuItem">{{navContent[7]}}</el-menu-item>

      <el-submenu index="2" class="phoneMenuItem" >
        <template slot="title"><i type="primary" class="el-icon-menu"></i></template>
        <el-menu-item index="1" @click="mySlot='mainPage'">{{navContent[0]}}</el-menu-item>
        <el-menu-item index="8"  @click="mySlot='paper'">{{navContent[1]}}</el-menu-item>
        <el-menu-item index="7"  @click="mySlot='dynamic'" >{{navContent[2]}}</el-menu-item>
        <el-menu-item index="3"  @click="mySlot='researchProject'" >{{navContent[3]}}</el-menu-item>
        <el-menu-item index="4" @click="mySlot='theRoadofSDN'" >{{navContent[4]}}</el-menu-item>
        <el-menu-item index="5"  @click="mySlot='academicTeam'" >{{navContent[5]}}</el-menu-item>
        <el-menu-item index="9"  @click="mySlot='recruit'">{{navContent[6]}}</el-menu-item>
        <el-menu-item index="6"  @click="mySlot='entertainment'" >{{navContent[7]}}</el-menu-item>
      </el-submenu>      

      </el-menu-item>
    </el-menu>

    </el-header>

    <el-main style="margin:0;padding:0">
      <component id="slotComponent" :is="mySlot"></component>
    </el-main>

    <el-footer id="el_footer" style="height: 40px!important">
      <footer >
        <div v-if="footerContent1 == ''" style="font-size:16px;height:40px;width:100%;display:block;line-height:40px;">
          <p id="footerPhone" >{{footerContent2}}</p>   
        </div>
        <div v-else style="font-size:13px;height:40px;width:100%;display:block;line-height:20px;">
          <p id="footerPhoneIgnore" >{{footerContent1}}</p>
          <p id="footerPhone" >{{footerContent2}}</p>    
        </div>
        
      </footer>
    </el-footer>
</el-container>



</div>

</template>



<script>
import mainPageConfig from '../../static/首页展示/mainPageConfig'

import mainPage from './mainPage.vue'
import academicTeam from './academicTeam.vue'
import theRoadofSDN from './theRoadofSDN.vue'
import entertainment from './entertainment.vue'
import researchProject from './researchProject.vue'
import paper from './paper.vue'
import dynamic from './dynamic.vue'
import recruit from './recruit.vue'


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
        navContent:mainPageConfig.mainPageInfo.navContent,
        footerContent1:mainPageConfig.mainPageInfo.footerContent[0],
        footerContent2:mainPageConfig.mainPageInfo.footerContent[1],
        libName:mainPageConfig.mainPageInfo.libName,
      }
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
  footer{
    
  }
  #SDN{
    
    font-size:30px;
    float:right;
    margin-right:40px;
    color:white;
    line-height:60px;
  }

  #slotComponent{
    margin-top:20px;
    border:5px solid gray;
    width:80vw;
    margin-left:10vw;
    margin-bottom:60px;
    
  }
  #footerPhone{
    background-color:#545c64;
    color:white;
  }
  #footerPhoneIgnore{
    background-color:#545c64;
    color:white;
  }
  element.style {
    height: 40px!important;
  }
  #el_footer{
    margin:0;
    padding:0;
    position:fixed;
    bottom:0px;
    width:100%;
  }
  @media screen and (max-width: 1100px) {
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
        margin-right:15px;
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