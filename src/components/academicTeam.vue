<template>
    <div id="academicTeam">
        <img src="../../static/学术团队/show.jpg" style="width:100%;height:30vh;border:1px solid gray"></img>
        <div v-if='newTeacherInfo != ""'>
            <h1 class="classifyName" align="left">{{teamInfo[0]}}</h1>
            <div class="personLayout">
                <div  v-for="item in newTeacherInfo" >

                    <div class="teacherItem" >
                        <div v-if="item[3].slice(-1) == '/'" :title="item[4]">
                            <img :src=nonePhoto  class="photo"></img>
                        </div>
                        <div v-else>
                            <img :src=item[3]  class="photo"></img>
                        </div>

                        <p class="personName">{{item[0]}}</p></a>
                        <p class="remarks">{{item[1]}}</p>
                        <p class="remarks">{{item[2]}}</p>
                    </div>

                </div>
            </div>
        </div>

        <div style="margin:10px;"><hr/></div>


        <div v-if='newGraduateInfo != ""'>
            <h1 class="classifyName" align="left">{{teamInfo[1]}}</h1>
            <div class="personLayout">
                <div  v-for="item in newGraduateInfo" >

                    <div class="teacherItem" :title="item[4]">
                        <div v-if="item[3].slice(-1) == '/'">
                            <img :src=nonePhoto  class="photo"></img>
                        </div>
                        <div v-else>
                            <img :src=item[3] class="photo"></img>
                        </div>

                        <p class="personName">{{item[0]}}</p></a>
                        <p class="remarks">{{item[1]}}</p>
                        <p class="remarks">{{item[2]}}</p>
                    </div>

                </div>
            </div>
        </div>

        <div style="margin:10px;"><hr/></div>


        <div v-if='newBachelorInfo != ""'>
            <h1 class="classifyName" align="left">{{teamInfo[2]}}</h1>
            <div class="personLayout">
                <div  v-for="item in newBachelorInfo" >

                    <div class="teacherItem" :title="item[4]">

                        <div v-if="item[3].slice(-1) == '/'">
                            <img :src=nonePhoto  class="photo"></img>
                        </div>
                        <div v-else>
                            <img :src=item[3]  class="photo"></img>
                        </div>

                        <p class="personName">{{item[0]}}</p></a>
                        <p class="remarks">{{item[1]}}</p>
                        <p class="remarks">{{item[2]}}</p>
                    </div>

                </div>
            </div>
    </div>

    </div>
</template>

<script>
import axios from 'axios'
import netPath from '../../static/config_files/netPath'

  export default {
    name:'academicTeam',
    data(){
        return {
            constTeacherPath:netPath.path+'./static/学术团队/教师/',
            teacherInfo:'',
            constGraduatePath:netPath.path+'./static/学术团队/研究生/',
            graduateInfo:'',
            constBachelorPath:netPath.path+'./static/学术团队/本科生/',
            bachelorInfo:'',
            nonePhoto:netPath.path+'./static/config_files/nonePhoto.jpg',
            teamInfo:'',

        }
    },
    mounted:function(){
      let that = this;
      axios.get(netPath.path+'./static/学术团队/team.json')
      .then(function(response){
        that.teamInfo=response.data.content;
      })

      axios.get(netPath.path+'./static/学术团队/教师/teacher.json')
      .then(function(response){
        that.teacherInfo=response.data.content;
      })

      axios.get(netPath.path+'./static/学术团队/研究生/graduate.json')
      .then(function(response){
        that.graduateInfo=response.data.content;
      })

      axios.get(netPath.path+'./static/学术团队/本科生/bachelor.json')
      .then(function(response){
        that.bachelorInfo=response.data.content;
      })
    },
    computed:{
        newTeacherInfo:function() {
            let temp=[];
            let newPath=[];
            for(let i=0;i < this.teacherInfo.length;i++){
                temp=[];
                for(let j=0;j < this.teacherInfo[0].length;j++){
                    if(j != 3){
                        temp.push(this.teacherInfo[i][j]);
            
                    }else{
                        temp.push(this.constTeacherPath + this.teacherInfo[i][j]);
                    }
                }
                newPath.push(temp);
            }
            return newPath;
        },
        newGraduateInfo:function() {
            let temp=[];
            let newPath=[];
            for(let i=0;i < this.graduateInfo.length;i++){
                temp=[];
                for(let j=0;j < this.graduateInfo[0].length;j++){
                    if(j != 3){
                        temp.push(this.graduateInfo[i][j]);
            
                    }else{
                        temp.push(this.constGraduatePath + this.graduateInfo[i][j]);
                    }
                }
                newPath.push(temp);
            }
            return newPath;
        },
        newBachelorInfo:function(){
            let temp=[];
            let newPath=[];
            for(let i=0;i < this.bachelorInfo.length;i++){
                temp=[];
                for(let j=0;j < this.bachelorInfo[0].length;j++){
                    if(j != 3){
                        temp.push(this.bachelorInfo[i][j]);
            
                    }else{
                        temp.push(this.constBachelorPath + this.bachelorInfo[i][j]);
                    }
                }
                newPath.push(temp);
            }
            return newPath;
        }
    },
  }
</script>


<style>
  *{
      margin:0px;
      padding:0px;
  }
  .personLayout{
    display:grid;
    grid-template-columns: repeat(5,20%);
  }
  .classifyName{
      margin-top:30px;
      margin-left:50px;
      margin-bottom:20px;
      font-size:30px;
      color:#F15A23;
  }
  .personName{
      color:black;
      font-weight:bold;
      font-size:20px;
  }
  .photo{
      width:8.55vw;
      height:11.7vw;
      border-radius:10px;
      box-shadow:2px 2px 5px #333333;
  }
  
  @media screen and (max-width: 820px) {
    .classifyName{
        margin-top:30px;
        margin-left:10px;
        margin-bottom:20px;
        font-size:20px;
        color:#F15A23;
    }
    .personName{
        color:black;
        font-weight:bold;
        font-size:10px;
    }
    .remarks{
        font-size:8px;
    }
    .photo{
        border-radius:2px;
    }
  }
</style>
