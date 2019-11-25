<template>  
    <div id="entertainment">
        <img src="../../static/生活娱乐/show.jpg" style="width:100%;height:30vh;border:1px solid gray;"></img>
        <div style="margin-bottom:50px"></div>

            <div v-if='newEntertainmentInfo != ""'>
                <div id="picLayout">
                    <div  v-for="item,inx in newEntertainmentInfo" style="margin-bottom:20px">
                        <div><img :src=item class="pic"></img></div>
                        <span id="picName">{{entertainmentInfo[inx].split('/').slice(-1)[0].split('.')[0]}}</span>
                    </div>
                </div>
            </div>

    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name:'entertainment',
        data(){
            return {
                constEntertainmentPath:'../../static/生活娱乐/娱乐照片/',
                entertainmentInfo:'',
            }
        },
        mounted:function(){
            let that = this;
            axios.get('../../static/生活娱乐/entertainment.json')
            .then(function(response){
                that.entertainmentInfo=response.data.content;
                // console.log(that.entertainmentInfo);
            })
        },
        computed:{
            newEntertainmentInfo:function(){
                let temp=[];
                let newPath=[];
                for(let i=0;i < this.entertainmentInfo.length;i++){
                    this.entertainmentInfo[i] = this.constEntertainmentPath + this.entertainmentInfo[i];
                }
                return this.entertainmentInfo;
            }
        }
    }
</script>


<style>
  *{
      margin:0px;
      padding:0px;
      
  }
  #picLayout{
    display:grid;
    grid-template-columns: repeat(3, 33.33%);
  }
  #picName{
    font-size:20px;
    font-weight:bold;
  }
  .pic{
      width:22vw;
      border-radius:15px;
      box-shadow:2px 2px 5px #333333;
  }
  @media screen and (max-width: 820px) {
    #picName{
        font-size:10px;
    }
    .pic{
        border-radius:3px;
    }
  }
</style>