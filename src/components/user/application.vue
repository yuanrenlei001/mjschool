<template>
    <div class="container">
        <div style="padding: 0 .24rem;">
            <div class="title">1.你想分享什么课程</div>
            <textarea class="text" placeholder="请输入您要分享的内容" v-model="text"></textarea>
            <div class="title">2.你预计分享课程的时间</div>
            <div class="block">
                <el-date-picker
                        v-model="value1"
                        type="date"
                        :editable="false"
                        value-format="yyyy/MM/dd"
                        placeholder="选择日期">
                </el-date-picker> &nbsp;&nbsp;&nbsp;&nbsp;至&nbsp;&nbsp;&nbsp;&nbsp;
                <el-date-picker
                        v-model="value2"
                        type="date"
                        :editable="false"
                        value-format="yyyy/MM/dd"
                        placeholder="选择日期">
                </el-date-picker>
            </div>
            <div class="title">3.是否有分享经验</div>
            <el-radio v-model="radio" label="1">是</el-radio>
            <el-radio v-model="radio" label="2">否</el-radio>
        </div>
        <div class="btns" @click="getApply()">确认</div>
        <div class="fixed" v-show="pl">
            <div class="alert" v-if="ispc" style="margin: 1rem auto 0;">
                <div class="titles">提 示</div>
                <div class="alerts">{{plText}}</div>
                <div class="alertBtn" @click="alertBtn()">确定</div>
            </div>
            <div class="alert" v-else>
                <div class="titles">提 示</div>
                <div class="alerts">{{plText}}</div>
                <div class="alertBtn" @click="alertBtn()">确定</div>
            </div>
        </div>
        <!--<minShopBar v-if="showMinShopTab" />-->
    </div>
</template>

<script>
    import minShopBar  from '@/components/tabBar'
    import 'element-ui/lib/theme-chalk/index.css';
    import qs from 'qs'
    export default {
        name: "index",
        data () {
            return {
                // showMinShopTab: true,
                value1: '',
                value2: '',
                value3: '',
                radio: '1',
                openId:this.userId,
                text:'',
                pl:false,
                plText:'',
                ispc:'',
                xinxi:false
            };
        },
        components: {
            minShopBar
        },
        methods:{
            _isMobile(){
                let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
                this.ispc = flag?false:true
            },
            getApply:function(){
                let that = this;
                const Qs = require('qs');
                let params ={
                    openId:that.openId,
                    content:that.text,
                    startAt:that.value1,
                    endAt:that.value2,
                    hasShare:that.radio
                }
                console.log(params)
                if(params.content == '' || params.startAt == '' || params.endAt == ''){
                    that.pl = true;
                    that.plText = '请填写完整信息！'
                    that.xinxi = true;
                }else{
                    this.axios.post(this.getAjax+'/user/apply', Qs.stringify(params),{ headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },}, {
                    }) .then(function (res) {
                        // this.islike = res.data.data.rows.total;
                        that.pl = true;
                        that.plText = '发布成功,等待管理员审核！'
                        that.xinxi = false;
                        console.log(res)
                    })
                        .catch(function (error) {
                            console.log(error);
                        });
                }

            },
            alertBtn:function(){
                if(this.xinxi){
                    this.pl = false;
                    this.plText = ''
                }else{
                    this.$router.push("/user")
                    this.pl = false;
                    this.plText = ''
                }

            }
        },
        created(){
        },
        mounted(){
            this._isMobile();
        }
    }
</script>

<style scoped>
    .fixed {
        background-color: black;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)";
        background-color: rgba(0, 0, 0, 0.4);
        position: fixed;
        /*display: flex;*/
        /*align-items: center;*/
        /*justify-content: center;*/
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        /*width:100%;*/
        /*height:100%;*/
        z-index: 10000;
        padding: 0 .24rem;
        font-size: .26rem;
    }
    .block {font-size: .24rem;}
    .title {height:1rem;line-height: 1rem;font-size: .3rem;color: #4c4c4c;position: relative;}
    .title:before {
        content: '';
        width:.08rem;
        height:.3rem;
        background: #fa5b55;
        position: absolute;
        top:50%;
        margin-top: -.15rem;
        left:-.15rem;
    }
    .text {height:2.8rem;padding: .24rem;border-radius: .2rem;background: #f7f7f7;color: #999;font-size: .26rem;width:6.5rem;
        border: transparent;outline: none;
    }
    .block >>> .el-date-editor.el-input, .el-date-editor.el-input__inner {width:3rem;}
    .btns {width:7rem;position: relative;height:.8rem;text-align: center;line-height: .8rem;border-radius: .2rem;background: #fa5b55;
        color: #fff;margin:2rem  auto 0;font-size: .36rem;
    }
</style>