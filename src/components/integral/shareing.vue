<template>
    <div class="container" style="background: #f0f1f7;">
        <div class="top">
            <div class="aaa">
                <div class="demo">
                    <span class="show" @click="showDatePicker(1, 2)">{{demo1?demo1:value2}}</span>
                </div>
            </div>
            <div class="jifen" @click="open">积分规则</div>
        </div>
        <div class="main">
            <div class="header">
                <img :src="user.avatar" alt="">
                <p>{{user.name}}</p>
            </div>
            <div class="share" style="left:0;">
                <p>{{userScore.share_score}}</p>
                <p>个人所有积分</p>
            </div>
            <div class="share" style="right:0;">
                <p>{{userScore.share_sort}}</p>
                <p>个人积分排名</p>
            </div>
            <span></span>
        </div>
        <div class="ranking">
            <div class="rankingTop">
                <span @click="typess('month')" :class="sort=='month'?'active':''">月排行榜</span>
                <span @click="typess('total')" :class="sort=='total'?'active':''">总排行榜</span>
            </div>
            <div>
                <div class="rankingSort" v-if="sort=='month'" v-for="(item,index) in texts.month">
                    <span class="sortLeft" v-if="index==0"><img src="@/assets/img/integral/jin.png" alt=""></span>
                    <span class="sortLeft" v-else-if="index==1"><img src="@/assets/img/integral/yin.png" alt=""></span>
                    <span class="sortLeft" v-else-if="index==2"><img src="@/assets/img/integral/tong.png" alt=""></span>
                    <span class="sortLeft" v-else>{{index+1}}</span>
                    <span class="name">{{item.user.name}}</span>
                    <p class="detail">积分 <span>{{item.total}} 积分</span></p>
                </div>
                <div class="rankingSort" v-if="sort=='total'" v-for="(item,index) in texts.total">
                    <span class="sortLeft" v-if="index==0"><img src="@/assets/img/integral/jin.png" alt=""></span>
                    <span class="sortLeft" v-else-if="index==1"><img src="@/assets/img/integral/yin.png" alt=""></span>
                    <span class="sortLeft" v-else-if="index==2"><img src="@/assets/img/integral/tong.png" alt=""></span>
                    <span class="sortLeft" v-else>{{index+1}}</span>
                    <span class="name">{{item.user.name}}</span>
                    <p class="detail">积分 <span>{{item.total}} 积分</span></p>
                </div>
            </div>
        </div>
        <div class="fixed" v-show="show">
            <div class="fixedMain" id="bottoms">
                <div id="close" @click="close"></div>
                <div style="padding-top: 1.8rem;padding-left: .3rem;" v-for="item in codes" v-if="item.name == 'teacher_1'"><span class="title">讲师分享：</span><span class="title01">公司一星讲师</span><span class="title02">{{item.value}}积分/次</span></div>
                <div v-for="item in codes" v-if="item.name == 'teacher_2'"><span class="title03">公司二星讲师</span><span class="title02">{{item.value}}积分/次</span></div>
                <div v-for="item in codes" v-if="item.name == 'teacher_3'"><span class="title03">公司三星讲师</span><span class="title02">{{item.value}}积分/次</span></div>
                <div v-for="item in codes" v-if="item.name == 'teacher_4'"><span class="title03">公司四星讲师</span><span class="title02">{{item.value}}积分/次</span></div>
                <div v-for="item in codes" v-if="item.name == 'teacher_5'"><span class="title03">公司五星讲师</span><span class="title02">{{item.value}}积分/次</span></div>
                <div v-for="item in codes" v-if="item.name == 'teacher_0'"><span class="title03">预备讲师</span><span class="title02">{{item.value}}积分/次</span></div>
              <div v-for="item in codes" v-if="item.name == 'teacher_a'"><span class="title03">产品讲师</span><span class="title02">{{item.value}}积分/次</span></div>
              <div v-for="item in codes" v-if="item.name == 'teacher_b'"><span class="title03">大数据讲师</span><span class="title02">{{item.value}}积分/次</span></div>
                <!--<div><span class="title03" v-for="item2 in codes" v-if="item2.name == 'teacher_3'">公司三星讲师</span><span class="title02">{{item2.value}}积分/次</span></div>-->
                <!--<div><span class="title03" v-for="item in codes" v-if="item.name == 'teacher_2'">公司二星讲师</span><span class="title02">{{item.value}}积分/次</span></div>-->
                <!--<div><span class="title03" v-for="item in codes" v-if="item.name == 'teacher_1'">公司一星讲师</span><span class="title02">{{item.value}}积分/次</span></div>-->
                <div v-for="item in codes" style="padding-left: .3rem;" v-if="item.name == 'share_article'"><span class="title">牛人分享：</span><span class="title01">文档分享并审核通过</span><span class="title02">{{item.value}}积分/次</span></div>
                <div v-for="item in codes" v-if="item.name == 'share_video'"><span class="title03">视频分享并审核通过</span><span class="title02">{{item.value}}积分/次</span></div>
<!--                <div v-for="item in codes" v-if="item.name == 'activity_sign'"><span class="title">活动评估：</span><span class="title01">活动签到</span><span class="title02">{{item.value}}积分/次</span></div>-->
<!--                <div v-for="item in codes" v-if="item.name == 'course'"><span class="title03">评估课程</span><span class="title02">{{item.value}}积分/次</span></div>-->
                <div><span class="title" style="padding-left: .3rem;">导师分享：</span><span class="title01">新员工导师，由管理员评分 </span></div>
                <div v-for="item in codes" v-if="item.name == 'teacher_new'"><span style="margin-left: 1.4rem;color: #fa5b55;">{{item.value}}积分/个 </span></div>
                <div><span style="margin-left: 1.4rem;color: #4c4c4c;">新人荣誉试点导师，由管理员评分</span></div>
                <div v-for="item in codes" v-if="item.name == 'teacher_join'"><span style="margin-left: 1.4rem;color: #fa5b55;">{{item.value}}积分/个 </span></div>
            </div>
        </div>
        <!--<minShopBar v-if="showMinShopTab" />-->
    </div>
</template>

<script>
    import minShopBar  from '@/components/tabBar'
    import 'element-ui/lib/theme-chalk/index.css';
    export default {
        name: "index",
        data () {
            return {
                showMinShopTab: true,
                value2:'',
                show:false,
                openId:this.userId,
                time:'',
                user:{},
                texts:{},
                types:0,
                sort:'month',
                userScore:'',
                minTime: [2018, 1, 1, 0, 0],
                maxTime: [],
                showChinese: false,
                resetTime: [],
                type: null,
                demo1:'',
                codes:''
            };
        },
        components: {
            minShopBar
        },
        methods:{
            // 获取当前时间
            getCurTime (minTime) {
                var date
                if (minTime) {
                    var newMinTime = []
                    minTime.forEach((item, ind) => {
                        if (ind < 3) {
                            newMinTime.push(item)
                        }
                    })
                    date = new Date(newMinTime.join('/'))
                } else {
                    date = new Date()
                }
                var dafultTiemEnd = new Date(date)
                dafultTiemEnd.setDate(date.getDate() + 30)
                var y1 = dafultTiemEnd.getFullYear()
                var m1 = this.dealTimeFormat(dafultTiemEnd.getMonth() + 1)
                var d1 = this.dealTimeFormat(dafultTiemEnd.getDate())
                var h1 = date.getHours()
                var min1 = date.getMinutes()
                this.maxTime = [y1 * 1, m1 * 1, d1 * 1, h1 * 1, min1 * 1]
            },
            dealTimeFormat (data) {
                return data > 9 ? data : '0' + data
            },
            // 选择时间
            showDatePicker (demo, type) {
                var date = new Date()
                var y = date.getFullYear()
                var m = date.getMonth() + 1
                var d = date.getDate()
                var h = date.getHours()
                var min = date.getMinutes()
                this.time = this.showChinese ? [y + '年', m + '月', d + '日', h + '时', min + '分'] : [y * 1, m * 1, d * 1, h * 1, min * 1]
                var dataObj = {}
                if (demo < 6) {
                    dataObj = {
                        type: type,
                        showChinese: this.showChinese
                    }
                    if (demo === 5) {
                        this.time = this.showChinese ? [y + '年', m + '月', d + '日', h + '时', '00分'] : [y * 1, m * 1, d * 1, h * 1, '00']
                        dataObj.quarter = true
                    }
                }
                else {
                    if (demo === 6) {
                        this.minTime = [2018, 1, 1, 0, 0]
                    }
                    if (demo === 7) {
                        if (!this.resetTime[0]) return alert('请先选择开始时间！')
                        var resetTime = []
                        if (this.showChinese) {
                            this.resetTime.forEach((item, index) => {
                                resetTime.push((item.substr(0, item.length - 1)) * 1)
                            })
                        }
                        this.time = this.resetTime
                        this.minTime = this.showChinese ? resetTime : this.resetTime
                        this.getCurTime(this.minTime)
                    }
                    dataObj = {
                        type: type,
                        min: this.minTime,
                        max: this.maxTime,
                        showChinese: this.showChinese
                    }
                }
                let init = JSON.parse(JSON.stringify(this.time))
                dataObj.value = init
                this.$datepicker(dataObj).then((e) => {
                    var y = e[0]
                    var m = e[1]
                    var d = e[2]
                    var h = e[3]
                    var mm = e[4]
                    if (demo === 1) {
                        this.demo1 = dataObj.showChinese ? y + m : y + '-' + m
                    }
                    this.value2 = y+'-'+m
                    this.getScore();
                    console.log(e)
                }).catch((e) => {
                    console.log(e)
                })
            },
            change:function(){
                this.time = this.value2.getMonth()+1;
                this.value2 = this.value2.getFullYear()+'-'+(this.value2.getMonth()+1)
                this.getScore();
                this.getUserScore();
            },
            getdatatime() {//默认显示今天
                let myDate = new Date();
                this.value2 = myDate.getFullYear()+'-'+(myDate.getMonth()+1);
                this.time = myDate.getMonth()+1;
            },
            open:function(){
                this.show = true;
            },
            close:function(){
                this.show = false;
            },
            getScore:function(){
                this.axios({
                    type: 'get',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/score/share?month='+this.value2,    // 访问的后端接口地址
                    // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
                    params: {                // get请求使用params,post请求使用data(data为json格式)

                    }
                }).then(res => {
                    this.texts = res.data.data;
                }).catch(err => {
                    console.log('请求错误')    // 请求错误弹出警告
                })
            },
            Getuser:function(){
                this.axios({
                    type: 'post',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/user?openId='+this.openId,
                    // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
                    params: {                // get请求使用params,post请求使用data(data为json格式)

                    }
                }).then(res => {
                    this.user = res.data.data;
                    console.log(res.data.data)
                }).catch(err => {
                    console.log('请求错误')    // 请求错误弹出警告
                })
            },
            typess:function(e){
                if(e == 'month'){
                    this.types = this.value2
                    this.sort = 'month'
                }else{
                    this.types = 0
                    this.sort = 'total'
                }
                this.axios({
                    type: 'get',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/score/share?month='+this.types,    // 访问的后端接口地址
                    // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
                    params: {                // get请求使用params,post请求使用data(data为json格式)

                    }
                }).then(res => {
                    this.texts = res.data.data;
                }).catch(err => {
                    console.log('请求错误')    // 请求错误弹出警告
                })
            },
            getUserScore:function(){
                this.axios({
                    type: 'get',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/score/user?month='+this.value2+'&openId='+this.openId,    // 访问的后端接口地址
                    // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
                    params: {                // get请求使用params,post请求使用data(data为json格式)

                    }
                }).then(res => {
                    this.userScore = res.data.data;
                }).catch(err => {
                    console.log('请求错误')    // 请求错误弹出警告
                })
            },
            // 积分规则
            getIntegral:function(){
                this.axios({
                    type: 'get',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/home/integral',    // 访问的后端接口地址
                    // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
                    params: {                // get请求使用params,post请求使用data(data为json格式)

                    }
                }).then(res => {
                    console.log(res.data.data)
                    this.codes = res.data.data
                }).catch(err => {
                    console.log('请求错误')    // 请求错误弹出警告
                })
            },
        },
        created(){
        },
        mounted(){
            this.getdatatime();
            this.getScore();
            this.Getuser();
            this.getUserScore();
            this.getIntegral();
            if(window.screen.width>1024){
                var bottoms = document.getElementById("bottoms");
                bottoms.style.cssText='margin: 5% auto 0;';
            }
        }
    }
</script>

<style scoped>
    @import "../../assets/datePickerDemo.less";
    .aaa span {display: block;font-size: .36rem;color: #fff;position: absolute;top:.1rem;width:2rem;text-align: center;}
    .top {height:2.5rem;position: relative;
        background: url(../../assets/img/integral/integralbG.jpg);
        padding: 0 .24rem;
    }
    .aaa {position: absolute;left:0;top:.2rem;font-size: .24rem;}
    .aaa >>> .el-input__inner {background-color: transparent;border: transparent;font-size: .32rem;color: #fff;}
    .aaa >>> .el-input__prefix{display: none;}
    .jifen {width:1.2rem;height:.42rem;text-align: center;line-height: .42rem;background: #fff;color: #fa5b55;
        position: absolute;border-radius: .2rem;right:.24rem;top:.36rem;font-size: .24rem;
    }
    .main {width:7.04rem;height:2.4rem;background: #fff;border-radius: .2rem;position: absolute;
        left:.24rem;top:1.26rem;text-align: center;box-shadow: 0 5px 5px rgba(250,91,85,.25);
    }
    .header {position: absolute;top:-.58rem;width:100%;color: #242424;font-size: .3rem;}
    .header img {width:1.16rem;height:1.16rem;border-radius: 50%;}
    .sort div {width:2.58rem;float:left;background-size: 2.58rem 1.78rem;background-repeat: no-repeat;height:1.78rem;
        margin: 1.05rem .45rem 0 .45rem;font-size: .28rem;color: #4c4c4c;
    }
    .sort01 {background: url(../../assets/img/integral/integral01.png);}
    .sort02 {background: url(../../assets/img/integral/integral02.png);}
    .bottom {text-align: center;font-size: .28rem;color: #383838;}
    .bottom p {width:50%;float:left;margin-top: .3rem;}
    .board {margin-top: 2.52rem;padding: 0 .24rem;}
    .board>p {height:.96rem;line-height: .96rem;font-size: .36rem;color: #363636;}
    .share {width:50%;float:left;text-align: center;position: absolute;bottom:.2rem;}
    .share p:first-child {font-size: .44rem;color: #fa5b55;}
    .share p:last-child {font-size: .26rem;color: #4c4c4c;}
    .main span {display: block;width:1px;height:.6rem;background: #d9d9d9;position: absolute;bottom:.25rem;
        left:50%;
    }
    .fixed {position: fixed;width:100%;height:100%;z-index: 99999;top:0;left:0;background: rgba(0,0,0,.3);}
    .fixedMain {width:5.8rem;height:10.1rem;position: relative;margin: 20% auto 0;
        background: url(../../assets/img/integral/integral05.png) no-repeat;
        background-size: 5.8rem 10.1rem;
    }
    .fixedMain div {margin-bottom: .16rem;font-size: .26rem;}
    .title {font-size: .26rem;color: #4c4c4c;font-weight: 900;}
    .title01 {font-size: .24rem;color: #4c4c4c;margin: 0 .1rem;}
    .title02 {color: #fa5b55;margin-left: .1rem;}
    .title03 {font-size: .24rem;color: #4c4c4c;margin: 0 .1rem 0 1.4rem;}
    .ranking {width:7.2rem;position: relative;margin:1.45rem auto 0;
        border: 1px solid #e6e6e6;background: #fff;border-radius: .2rem;box-shadow: 0 2px 5px rgba(0,0,0,.1);font-size: .32rem;
    }
    .rankingTop {height:.85rem;line-height: .85rem;border-bottom: 1px solid #e6e6e6;}

    .rankingTop span {
        margin: 0 .9rem;
        color: #666;
        font-size: .32rem;
        border-bottom: 2px solid transparent;
        padding: 0 .2rem .22rem .2rem;
    }
    .rankingTop span.active {color: #fa5b55;border-bottom: 2px solid #fa5b55;padding:0 .2rem .22rem .2rem;}
    .rankingSort {height:1rem;line-height: 1rem;position: relative;border-bottom: 1px solid #e6e6e6;}
    .rankingSort:last-child {border-bottom: transparent;}
    .sortLeft {width:1rem;height:1rem;text-align: center;line-height: 1rem;font-size: .26rem;color: #666;
        position: absolute;display: block;
    }
    .name {font-size: .28rem;color: #666;margin-left: 1rem;}
    .detail {float:right;font-size: .3rem;margin-right: .6rem;}
    .detail span {color: #fa5b55;}
    .rankingSort img {width:.3rem;height:.5rem;vertical-align: middle;}
    #close {
        width:.5rem;height:.5rem;position: absolute;top:.2rem;right:.8rem;
    }
</style>
