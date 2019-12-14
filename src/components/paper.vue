<template>
    <div id="paper">
        <img src="../../static/学术论文/show.jpg" style="width:100%;height:30vh;border:1px solid gray"></img>
        <div v-for="item,inx in paperInfo">
            <hr style="margin:10px;"/>
            <div style="font-size:22px;margin-left:1vw;color:#f15a23" align="left">{{item.year}}</div>
            
            <div v-for="i,inx in item['paper']">
            <div align="left" id="paperName">
                <i class="el-icon-circle-check" style="color:#04BFEA"></i> {{inx+1}}. 
                <span v-html='i'></span>
            </div>
                
            </div>
        </div>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    name:'paper',
    data(){
        return {
            paperInfo:'',
        }
    },
    mounted:function(){
      let that = this;
      axios.get('../../static/学术论文/paper.json')
      .then(function(response){
        that.paperInfo=response.data.content;
      })
    },
    methods:{
        yearSort:function(a,b){
            return a.year-b.year;
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
    #paperName{
        margin:10px;
        margin-left:2vw;
        font-size:19px;
    }
    @media screen and (max-width: 820px) {
        #paperName{
            font-size:15px;
            margin-left:5px;
        }
    }
</style>