<template>
    <div class="container" style="padding-bottom: 1.5rem;">
        <div class="bg"><img src="@/assets/img/index/bg.jpg" alt=""></div>
        <div class="sort">
            <router-link class="sortDetail" to="/course"><img src="@/assets/img/index/jpkc.png" alt=""> <p>精品课程</p></router-link>
            <router-link class="sortDetail" to="/teacher"><img src="@/assets/img/index/mszl.png" alt=""> <p>名师专栏</p></router-link>
            <router-link class="sortDetail" to="/integral"><img src="@/assets/img/index/jfph.png" alt=""> <p>积分排行</p></router-link>
            <router-link class="sortDetail" to="/newActivity"><img src="@/assets/img/index/hdzs.png" alt=""> <p>活动展示</p></router-link>
        </div>
        <div class="show">
<!--          <router-link to="/code">12312312</router-link>-->
            <div class="course">
                <div class="courseTop">近期课程 <router-link class="more" to="/activity">更多 <img src="@/assets/img/right.png" alt=""></router-link></div>
                <div class="courseSort">
                    <router-link class="detail" :to="{path: '/activityDetail', query: { id: item.id }}"  v-for="item in course" >
                        <div class="left" v-if="item.frontCover ==''">
                          <img src="@/assets/null.jpg" alt="" class="Img">
                            <!--<img src="@/assets/img/index/bmz.png" alt="" class="active">-->
                            <img v-show="item.status == 0" src="@/assets/img/index/bmz.png" alt="" class="active">
                            <img v-show="item.status == 1" src="@/assets/img/index/jxz.png" alt="" class="active">
                            <img v-show="item.status == 2" src="@/assets/img/index/yjs.png" alt="" class="active">
                        </div>
                      <div class="left" v-else>
                        <img :src="getImg+item.frontCover" alt="" class="Img">
                        <img src="@/assets/img/index/bmz.png" alt="" class="active">
                        <img v-show="item.status == 0" src="@/assets/img/index/bmz.png" alt="" class="active">
                        <img v-show="item.status == 1" src="@/assets/img/index/jxz.png" alt="" class="active">
                        <img v-show="item.status == 2" src="@/assets/img/index/yjs.png" alt="" class="active">
                      </div>
                        <div class="right" >
                            <p class="right01">{{item.name}}</p>
                            <p class="right02"><img src="@/assets/img/index/iconTime.png" alt=""><span>{{item.startAt}}</span></p>
                            <p class="right03"><img src="@/assets/img/index/iconAddress.png" alt="">{{item.address}}</p>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="course" style="margin-top: .4rem;">
                <div class="courseTop">近期活动 <router-link class="more" to="/coursedetails">更多 <img src="@/assets/img/right.png" alt=""></router-link></div>
                <div class="courseSort">
                    <router-link class="detail" :to="{path: '/activityDetail', query: { id: item.id }}" v-for="item in activity">
                        <div class="left" v-if="item.frontCover ==''">
                          <img src="@/assets/null.jpg" alt="" class="Img">
<!--                            <img :src="urlImg+item.frontCover" alt="" class="Img">-->
                            <img v-show="item.status == 0" src="@/assets/img/index/bmz.png" alt="" class="active">
                            <img v-show="item.status == 1" src="@/assets/img/index/jxz.png" alt="" class="active">
                            <img v-show="item.status == 2" src="@/assets/img/index/yjs.png" alt="" class="active">
                        </div>
                      <div class="left" v-else>
                        <img :src="urlImg+item.frontCover" alt="" class="Img">
                        <img v-show="item.status == 0" src="@/assets/img/index/bmz.png" alt="" class="active">
                        <img v-show="item.status == 1" src="@/assets/img/index/jxz.png" alt="" class="active">
                        <img v-show="item.status == 2" src="@/assets/img/index/yjs.png" alt="" class="active">
                      </div>
                        <div class="right">
                            <p class="right01">{{item.name}}</p>
                            <p class="right02"><img src="@/assets/img/index/iconTime.png" alt=""><span>{{item.startAt}}</span></p>
                            <p class="right03"><img src="@/assets/img/index/iconAddress.png" alt="">{{item.address}}</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <minShopBar v-if="showMinShopTab" />
    </div>
</template>

<script>
    import minShopBar  from '@/components/tabBar'
    export default {
        name: "index",
        data () {
            return {
                showMinShopTab: true,
                course:{},
                activity:{},
                urlImg:this.getImg,
            };
        },
        components: {
            minShopBar
        },
        methods:{
            trend(){
                this.$router.push("/trend")
            },
            send:function(){
                this.axios({
                    type: 'get',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/home/carousel',    // 访问的后端接口地址
                    // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
                    params: {                // get请求使用params,post请求使用data(data为json格式)

                    }
                }).then(res => {
                    console.log(res)
            }).catch(err => {
                    console.log('请求错误')    // 请求错误弹出警告
            })

            },
            // 近期课程
            getCourse:function(){
                this.axios({
                    type: 'get',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/home/course',    // 访问的后端接口地址
                    // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
                    params: {                // get请求使用params,post请求使用data(data为json格式)

                    }
                }).then(res => {
                    this.course = res.data.data;
            }).catch(err => {
                    console.log('请求错误')    // 请求错误弹出警告
            })
            },
            // 近期活动
            getActivity:function(){
                this.axios({
                    type: 'get',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/home/activity',    // 访问的后端接口地址
                    // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
                    params: {                // get请求使用params,post请求使用data(data为json格式)

                    }
                }).then(res => {
                    this.activity = res.data.data;
            }).catch(err => {
                    console.log('请求错误')    // 请求错误弹出警告
            })
            }
        },
        created(){
        },
        mounted(){
            this.send();
            this.getCourse();
            this.getActivity();
        }
    }
</script>

<style scoped>
    .bg {position: relative;width:7.5rem;height:2.95rem;z-index: 1;}
    .bg img {width:100%;height:100%;}
    .sort {width:7.02rem;position: absolute;z-index: 2;height:2rem;background: #fff;top:2.15rem;left:.24rem;
        border-radius: .2rem;box-shadow: 0 2px 5px rgba(0,0,0,.2);
    }
    .sort .sortDetail {display: block;width:25%;float:left;text-align: center;color: #333;font-size: .26rem;}
    .sortDetail img {width:.8rem;height:.84rem;padding-top: .4rem;}
    .sortDetail p {margin-top: .1rem;}
    .show {position: relative;padding: 0 .24rem;margin-top: 1.5rem;}
    .courseTop {font-size: .32rem;color: #333;width:100%;height:.4rem;line-height: .4rem;}
    .courseTop .more {font-size: .26rem;color: #666;float:right;height:100%;}
    .more img {width:.13rem;height:.23rem;vertical-align: middle;}
    .detail {width:100%;position: relative;display: block;height:1.53rem;margin-top: .4rem;}
    .left {width:2.3rem;height:100%;float:left;position: relative;border-radius: .2rem;overflow: hidden;}
    .left .Img {width:2.3rem;height:100%;z-index: 1;}
    .left .active {width:1.12rem;height:.5rem;z-index: 2;position: absolute;top:-2px;left:-.1rem;}
    .right {margin-left: 2.5rem;width:4.5rem;height:100%;position: relative;}
    .right01 {font-size: .3rem;color: #333;
        white-space:nowrap;
        text-overflow:ellipsis;
        -o-text-overflow:ellipsis;
        overflow: hidden;
        }
    .right02 {font-size: .26rem;color: #666;height:.4rem;line-height: .4rem;margin-top: .2rem;
        white-space:nowrap;
        text-overflow:ellipsis;
        -o-text-overflow:ellipsis;
        overflow: hidden;
    }
    .right02 img {width:.22rem;height:.22rem;margin-right: .2rem;}
    .right03 {font-size: .26rem;color: #666;position: absolute;bottom:0;left:0;
        white-space:nowrap;
        text-overflow:ellipsis;
        -o-text-overflow:ellipsis;
        overflow: hidden;
        width:4.5rem;
    }
    .right03 img {width:.23rem;height:.23rem;margin-right: .2rem;}
    .right04 {font-size: .26rem;color: #666;position: absolute;bottom:0;left:0;width:100%;}
    .right04 span:last-child {float:right;}
    .right04 img {width:.3rem;height:.22rem;margin-right: .05rem;}
</style>
