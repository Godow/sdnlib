<template>
    <div id="recruit">
        <img src="../../static/招生简介/show.jpg" style="width:100%;height:30vh;border:1px solid gray"></img>
        <div v-html="recruitInfo" align='left' id="recruitInfo" ></div>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    name:'recruit',
    data(){
        return {
            recruitInfo:'',
        }
    },
    mounted:function(){
      let that = this;
      axios.get('../../static/招生简介/recruit.json')
      .then(function(response){
        that.recruitInfo=response.data.content;
      })
    },
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
  #recruitInfo{
    font-size:20px;
    margin:120px;
  }
  @media screen and (max-width: 820px) {
    #recruitInfo{
      font-size:16px;
      margin:50px;
    }
  }
</style>