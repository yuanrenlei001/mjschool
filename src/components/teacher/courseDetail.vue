<template>
    <div class="container">
        <div class="text">课程简介</div>
        <div class="sorts" style="padding: 0 .24rem;height:2.74rem;background:#fff;">
            <router-link class="teacher" :to="{path: '/detail', query: { id:list.course.teacher.id }}" >
                <div class="left"><img :src="list.course.teacher.avatar"></div>
                <div class="right">
                    <div class="right01">{{list.course.teacher.name}}
                        <span v-if="list.course.teacher.star == 1">一星讲师</span>
                        <span v-if="list.course.teacher.star == 2">二星讲师</span>
                        <span v-if="list.course.teacher.star == 3">三星讲师</span>
                        <span v-if="list.course.teacher.star == 4">四星讲师</span>
                        <span v-if="list.course.teacher.star == 5">五星讲师</span>
                    </div>
                    <div class="right02">{{list.course.teacher.intro}}</div>
                    <div class="right03">
                        <div class="right03" v-if="list.course.teacher.star == 1"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
                        <div class="right03" v-if="list.course.teacher.star == 2"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
                        <div class="right03" v-if="list.course.teacher.star == 3"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
                        <div class="right03" v-if="list.course.teacher.star == 4"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
                        <div class="right03" v-if="list.course.teacher.star == 5"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""></div>
                    </div>
                    <div class="right04">分享课程：{{list.course.teacher.shareCount}}次</div>
                </div>
            </router-link>
        </div>
        <div class="text">内容简介</div>
        <div class="html">
            <div style="text-align: justify;" v-html="list.course.content"></div>
        </div>
        <!--<div class="signUp">-->
            <!--<div class="signTop"><span>已报名 （{{list.detail.applies}}/{{list.detail.applyCount}}）</span> <router-link to="/signUp" class="more">更多 <img src="@/assets/img/right.png" alt=""></router-link></div>-->
            <!--<div class="signUser">-->
                <!--<ul>-->
                    <!--<li v-for="(item,index) in list.applies" v-if="index<7" :key="index"><div><img :src="item.user.avatar" alt=""></div><div class="namess">{{item.user.name}}</div></li>-->
                <!--</ul>-->
            <!--</div>-->
        <!--</div>-->
        <!--<div class="signUp">-->
            <!--<div class="signTop"><span>签到人员 （{{list.detail.signs}}/{{list.detail.applyCount}}）</span> <router-link to="/codeUp" class="more">更多 <img src="@/assets/img/right.png" alt=""></router-link></div>-->
            <!--<div class="signUser">-->
                <!--<ul>-->
                    <!--<li  v-for="(item,index) in list.signs" v-if="index<7" :key="index"><div><img :src="item.user.avatar" alt=""></div><div class="namess">{{item.user.name}}</div></li>-->
                <!--</ul>-->
            <!--</div>-->
        <!--</div>-->
        <div class="btns" v-if="list.is_apply == 0" v-show="list.status !== 2"><div class="btn" @click="apply()">立即参加</div></div>
        <div class="btns" v-else-if="list.is_apply == 1" v-show="list.status !== 2"><div class="btn" @click="unApply()">取消报名</div></div>
        <div class="btns" v-show="list.status == 2"><div class="btn" @click="evaluate(list.is_sign)">去评分</div></div>
        <!--<div class="fixed" v-show="show">-->
            <!--<div class="fixedBady">-->
                <!--<p>温馨提示</p>-->
                <!--<p>确定拨打电话 {{list.detail.contactInfo}} 吗？</p>-->
                <!--<div><span @click="phone">确定</span><span @click="close">取消</span></div>-->
            <!--</div>-->
        <!--</div>-->
        <div class="fixed" v-show="pl">
            <div class="alert">
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
    import Swiper from 'swiper';
    import 'swiper/css/swiper.min.css';
    export default {
        name: "index",
        data () {
            return {
                // showMinShopTab: true,
                show:false,
                id:this.$route.query.id,
                openId:this.userId,
                list:{applies:[],detail:[],files:[],signs:[],views:[],courses:[{teacher:{}}]},
                is_apply:'',
                pl:false,
                plText:'',
                listId:'',
                swiperOption: {
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    autoplay: 2500,
                    autoplayDisableOnInteraction: false,
                    loop: false,
                    coverflow:'',
                    rotate: 30,
                    stretch: 10,
                    depth: 60,
                    modifier: 2,
                    slideShadows : true,
                    isSign:false
                }
            };
        },
        components: {
            minShopBar
        },
        methods:{
            fixed:function(){
                this.show=true;
            },
            phone:function(){
                window.location.href = "tel:10086";
            },
            close:function(){
                this.show=false;
            },
            activityDetail:function(){
                let that = this;
                this.axios({
                    type: 'post',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/activity/course/detail/'+this.id+'?openId='+this.openId,   // 访问的后端接口地址
                    // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
                    params: {                // get请求使用params,post请求使用data(data为json格式)

                    }
                }).then(res => {
                    this.list = res.data.data;
                    this.is_apply = this.list.is_apply;
                    this.listId = this.list.course.activityId
                    localStorage.setItem('id',this.id)
                }).catch(err => {
                    console.log('请求错误')    // 请求错误弹出警告
                })
            },
            apply:function(){
                let that =this;
                const Qs = require('qs');
                let params= {
                    openId: that.openId,
                    activityId:that.id
                };
                ;
                this.axios.post(this.getAjax+'/activity/apply', Qs.stringify(params), {
                }) .then(function (response) {
                    console.log(response);
                    that.pl = true;
                    that.plText = response.data.data.message
                    that.is_apply = 1;
                    setTimeout(function () {
                        that.activityDetail()
                    }, 100);
                })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            unApply:function(){
                let that =this;
                const Qs = require('qs');
                let params= {
                    openId: that.openId,
                    activityId:that.id
                };
                ;
                this.axios.post(this.getAjax+'/activity/unApply', Qs.stringify(params), {
                }) .then(function (response) {
                    console.log(response);
                    that.pl = true;
                    that.plText = response.data.data.message
                    that.is_apply = '';
                    setTimeout(function () {
                        that.activityDetail()
                    }, 100);
                })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            evaluate:function(type){
                if(type == 0){
                    this.pl = true;
                    this.plText = '未签到，无法评价导师'
                    this.is_apply = '';
                    this.isSign = false

                }else{
                    this.isSign = true;
                    this.$router.push({path:'/evaluateList',query:{id:this.listId}})
                }

                // this.$router.push({name:'evaluateList',params: {id:this.id}})
            },
            alertBtn:function(){
                if(this.isSign == false){
                    this.pl = false;
                    this.plText = '';
                }else{
                    this.pl = false;
                    this.plText = '';
                    this.$router.push("/")
                }

            }
        },
        created(){
            var mySwiper = new Swiper('.swiper-container', {
                pagination : '.swiper',
                paginationType : 'bullets',
                autoplay : 200,

            })
        },
        mounted(){
            this.activityDetail();
        }
    }
</script>

<style scoped>
    .html >>> img{width:100%;}
    .namess {white-space:nowrap;
        text-overflow:ellipsis;
        -o-text-overflow:ellipsis;
        overflow: hidden;}
    .top {width:100%;height:5rem;position: relative;z-index: 1;}
    .top img {width:100%;height:5rem;}
    .main {position: relative;padding: 0 .24rem;border-radius: .2rem;margin-top: -1rem;z-index: 2;
        background: #fff;
    }
    .title {height:.9rem;line-height: .9rem;font-size: .36rem;color: #313131;font-weight: 900;
        white-space:nowrap;
        text-overflow:ellipsis;
        -o-text-overflow:ellipsis;
        overflow: hidden;
    }
    .sort {background: #f6f6f6;height:3.3rem;border-radius: .2rem;}
    .sort p {height:.65rem;line-height: .65rem;
        padding:0 .24rem 0 .6rem;
        white-space:nowrap;
        text-overflow:ellipsis;
        -o-text-overflow:ellipsis;
        overflow: hidden;
        color: #707070;
        font-size: .28rem;
        position: relative;
    }
    .sort p:nth-child(1):before {
        width:.4rem;height:.4rem;
        content: '';background-image: url(../../assets/img/activity/iconTime.png);
        background-size: .4rem .4rem;
        background-repeat: no-repeat;
        position: absolute;top:50%;left:.1rem;
        margin-top: -.2rem;
    }
    .sort p:nth-child(2):before {
        width:.4rem;height:.4rem;
        content: '';background-image: url(../../assets/img/activity/iconTime.png);
        background-size: .4rem .4rem;
        background-repeat: no-repeat;
        position: absolute;top:50%;left:.1rem;
        margin-top: -.2rem;
    }
    .sort p:nth-child(3):before {
        width:.4rem;height:.4rem;
        content: '';background-image: url(../../assets/img/activity/iconAddress.png);
        background-size: .4rem .4rem;
        background-repeat: no-repeat;
        position: absolute;top:50%;left:.1rem;
        margin-top: -.2rem;
    }
    .sort p:nth-child(4):before {
        width:.4rem;height:.4rem;
        content: '';background-image: url(../../assets/img/activity/iconPeople.png);
        background-size: .4rem .4rem;
        background-repeat: no-repeat;
        position: absolute;top:50%;left:.1rem;
        margin-top: -.2rem;
    }
    .sort p:nth-child(5):before {
        width:.4rem;height:.4rem;
        content: '';background-image: url(../../assets/img/activity/iconPhone.png);
        background-size: .4rem .4rem;
        background-repeat: no-repeat;
        position: absolute;top:50%;left:.1rem;
        margin-top: -.2rem;
    }
    .sort p span {color: #4c4c4c;}
    .teacher {padding: .3rem .42rem;display: block;;height:2.2rem;background: #f6f6f6;border-radius: .2rem;}
    .left {width:1.7rem;height:2.2rem;float:left;border-radius: .1rem;overflow: hidden;}
    .left img {width:1.7rem;height:2.2rem;}
    .right {margin-left: 1.88rem;width:4.2rem;position: relative;height:2.2rem;}
    .right01 {font-size: .32rem;color: #4c4c4c;}
    .right01 span {background: #fa5b55;display: inline-block;width:1.2rem;height:.4rem;text-align: center;line-height: .4rem;
        color: #fff;border-radius: .2rem;font-size: .22rem;margin-left: .2rem;
    }
    .right02 {font-size: .26rem;color: #666;
        white-space:nowrap;
        text-overflow:ellipsis;
        -o-text-overflow:ellipsis;
        overflow: hidden;
        margin-top: .1rem;
    }
    .right03 {margin-top: .3rem;font-size: .24rem;}
    .right03 img {width:.35rem;height:.33rem;}
    .right04 {font-size: .26rem;color: #666;position: absolute;bottom:0;left:0;}
    .text {height:.86rem;text-align: center;line-height: .86rem;font-size: .32rem;background:#fff;}
    .html {
        background: #fff;
        padding: .24rem;font-size: .26rem;color: #666;line-height: .48rem;
    }
    .html div {
        border-radius: .2rem;background: #f7f7f7;padding: .24rem;
    }
    .signUp {padding: 0 .24rem;background: #fff;border-top:.2rem solid #f2f3f9;height:2.2rem;}
    .signTop {font-size: .3rem;color: #333;height:.76rem;line-height: .76rem;}
    .signTop span:first-child {float:left;}
    .signTop .more {font-size: .26rem;color: #666;float:right;height:100%;}
    .more img {width:.13rem;height:.23rem;}
    .signUser {position: relative;overflow: hidden;}
    .signUser ul {width:110%;position: relative;overflow: hidden;}
    .signUser ul li {float:left;text-align: center;width:1rem;font-size: .24rem;}
    .signUser img {width:.74rem;height:.74rem;border-radius: 50%;}
    .btns {width:100%;height:2.4rem;position: relative;padding-top: 1rem;}
    .btn {
        width: 7.02rem;height:.8rem;text-align: center;line-height: .8rem;border-radius: .2rem;
        background: #fa5b55;font-size: .3rem;color: #fff;margin:auto;
    }
    .fixed {position: fixed;width:100%;height:100%;top:0;left:0;z-index: 99999;background: rgba(0,0,0,.2);}
    .fixedBady {width:5rem;height:2.7rem;margin: 3rem auto 0;background: #fff;border-radius: .2rem;
        text-align: center;position: relative;overflow: hidden;
    }
    .fixedBady p:nth-child(1) {font-size: .36rem;color: #fa5b55;line-height: 1.2rem;}
    .fixedBady p:nth-child(2) {font-size: .3rem;color: #666;}
    .fixedBady div {position: absolute;bottom:0;left:0;border-top: 1px solid #e5e5e5;width:100%;}
    .fixedBady div span {display: block;border-left: 1px solid #e5e5e5;width:49%;float:left;
        height:.8rem;line-height: .8rem;font-size: .28rem;color: #666;
    }
</style>