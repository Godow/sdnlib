<template>
    <div id="theRoadofSDN">
        <img src="../../static/SDN之路/show.jpg" style="width:100%;height:30vh;border:1px solid gray;"></img>
        <div style="margin-bottom:50px;"></div>
        <div >
        <el-timeline v-for="item,inx in roadInfo" :key="inx" >
            <el-timeline-item id="timeline_item">
            <el-card  id="card">
                <a :href=item[1] id="contentId">{{item[0]}}</a>
            </el-card>
            </el-timeline-item>
        </el-timeline>
        </div>



  </div>
</template>

<script>
import axios from 'axios'
import netPath from '../../static/config_files/netPath'

  export default {
    name:'theRoadofSDN',
    data(){
        return {
            roadInfo:'',
        }
    },
    mounted:function(){
      let that = this;
      axios.get(netPath.path+'./static/SDN之路/theRoadofSDN.json')
      .then(function(response){
        that.roadInfo=response.data.content;
      })
    },
  }
</script>


<style>
  *{
      margin:0px;
  }
  #timeline_item{
      margin-left:25vw;
  }
  #card{
    width:30vw;
    text-align:left;
  }
  #contentId{
      text-decoration:none;
      color:#04BFEA;
      font-size:20px;
  }
  @media screen and (max-width: 820px) {
    #timeline_item{
        margin-left:10vw;
    }
    #card{
        width:75vw;
        text-align:left;
    }
    #contentId{
        text-decoration:none;
        color:#04BFEA;
        font-size:15px;
    }
  }
</style>