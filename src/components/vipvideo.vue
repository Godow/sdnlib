<template>
    <div id="vipvideo">

        <iframe style="width:80vw;height:80vh;" :src="myUrl" allowfullscreen='true' ></iframe>

        <el-select v-model="value" placeholder="请选择解析引擎" style="display:block;width:60vw;margin:5px auto;" >
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>

        <el-input style="width:52vw" placeholder="请输入需要解析的视频网址"  v-model="tempUrl"></el-input>
        <el-button style="width:8vw" type="primary" round @click="inputUrl = tempUrl">开始解析</el-button>
        <span style="display:block;color:gray;position:fixed;bottom:5px;right:5px;font-size:10px;">此网站仅供内部交流学习使用。请勿用于任何商业用途，否则后果自负。</span>

    </div>
</template>

<script>
  export default {
    name:'vipvideo',
    data(){
        return {
            options: [
                {
                    value: 'https://jx.du2.cc/?url=',
                    label: '一号通用vip引擎系统'
                },{
                    value: 'https://vip.bljiex.com/?v=',
                    label: '二号通用vip引擎系统'
                },{
                    value: 'https://www.8090g.cn/?url=',
                    label: '三号通用vip引擎系统'
                },{
                    value: 'https://jx.618g.com/?url=',
                    label: '四号通用vip引擎系统'
                // }, {
                //     value: 'http://jx.drgxj.com/?url=',
                //     label: '二号通用vip引擎系统'
                // }, {
                //     value: 'http://jx.618ge.com/?url=',
                //     label: '三号通用vip引擎系统'
                // }, {
                //     value: 'http://vip.jlsprh.com/?url=',
                //     label: '四号通用vip引擎系统'
                // }, {
                //     value: 'http://jx.598110.com/?url=',
                //     label: '五号通用vip引擎系统'
                }
            ],
            value: '',
            inputUrl:'',
            tempUrl:'',
        }
    },
    computed:{
        myUrl:function(){
            return this.value+this.inputUrl;
        }
    }

  }
</script>


<style>
 
</style>