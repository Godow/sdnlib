<template>
    <div id="researchProject">
        <img src="../../static/科研项目/show.jpg" style="width:100%;height:30vh;border:1px solid gray"></img>


        <div v-if="projectInfo != []">
            <div v-for="item,inx in projectInfo" style="margin:18px;margin-bottom:30px">
                <h1 style="margin:15px;" align="">{{Object.keys(item)[0]}}</h1>
                <div v-for="item2,inx2 in Object.values(item)[0]"  align="left" id="projectName">
                <span><i class="el-icon-circle-check" style="color:#04BFEA"></i> {{inx2+1}}. {{item2}}</span>
                </div>
            </div>
        </div>
        
  </div>
</template>

<script>
import axios from 'axios'
import netPath from '../../static/config_files/netPath'
  export default {
    name:'researchProject',
    data(){
        return {
            projectInfo:'',
        }
    },
    mounted:function(){
      let that = this;
      axios.get(netPath.path+'./static/科研项目/researchProject.json')
      .then(function(response){
        that.projectInfo=response.data.content;
      })
    },
  }
</script>


<style>
  *{
      margin:0px;
      padding:0px;
  }
  #researchProject{
    
  }
  #projectName{
       font-size:19px;

       margin:10px;
        margin-left:0vw;
  }
  @media screen and (max-width: 820px) {
    #projectName{
        font-size:15px;
        margin-left:0px;
    }
    h1{
        font-size:20px;
    }
  }
</style>