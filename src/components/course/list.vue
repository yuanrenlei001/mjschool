<template>
    <div class="container">
<!--        <swiper :options="swiperOption" ref="mySwiper"  class="swipers">-->
<!--            &lt;!&ndash; slides &ndash;&gt;-->
<!--            <swiper-slide  ref="mySwiper" v-for="(item,index) in top" :id="item.id" :class="id==item.id?'active':''" @click="tabList(item.id)">{{item.name}}</swiper-slide>-->
<!--        </swiper>-->
        <div class="list">
            <div class="courseSort">
                <router-link class="news" :to="{path: '/newsDetail', query: { id: item.id }}" v-for="item in list">
                    <div class="detail"  v-if="item.style !== 'video'">
                        <div class="left">
                            <img :src="getImg+item.frontCover" alt="" class="Img">
                        </div>
                        <div class="right">
                            <p class="right01">{{item.name}}</p>
                            <!--<p class="right02">{{item.content}}</p>-->
                            <p class="right04"><span>{{item.createTime}}</span> <span><img src="@/assets/img/index/iconSee.png" alt="">{{item.views}}</span></p>
                        </div>
                    </div>
                    <div class="video" v-else>
                        <div class="videoTop">{{item.name}}</div>
                        <div class="videoImg">
                            <img :src="getImg+item.frontCover" alt="" class="videoBg">
                            <img src="@/assets/img/course/play.png" alt="" class="play">
                        </div>
                        <div class="videoBottom">
                            <span>{{item.createTime}}</span> <span><img src="@/assets/img/index/iconSee.png" alt="">{{item.views}}</span>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <div v-show="list.length==0" style="width:5rem;position: relative;margin:2rem auto 0;text-align: center;"><img src="@/assets/null.png" alt="" style="width:5rem;"></div>
        <div v-if="scroll == false"  v-show="list.length>10" class="nulls" style="font-size: .36rem;color: #666;text-align: center;line-height: 1rem;">暂无数据</div>
        <!--<minShopBar v-if="showMinShopTab" />-->
    </div>
</template>

<script>
    let vm = null;
    import minShopBar  from '@/components/tabBar'
    export default {
        name: "index",
        data () {
            return {
                // showMinShopTab: true,
                list:'',
                pageSize:10,
                pageNum:1,
                id:this.$route.query.id,
                // id:1,
                scroll:false,
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
                    slidesPerView: 5,
                    spaceBetween: 10,
                    modifier: 2,
                    slideShadows : true,
                    isSign:false,
                    on:{
                        click: function(e){
                            // console.log(e.target.id)
                            vm.tabList(e.target.id);
                            // console.log(this.id)
                        },
                    },
                },
                pid:localStorage.getItem('listId'),
                top:{},
            };
        },
        components: {
            minShopBar
        },
        created() {
            window.addEventListener('scroll', this.onScroll);
            vm = this;
        },
        methods:{
            courseList:function(){
                this.axios({
                    type: 'get',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/course/list?type='+this.id+'&pageSize='+this.pageSize+'&pageNum='+this.pageNum+'',    // 访问的后端接口地址
                    // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
                    params: {                // get请求使用params,post请求使用data(data为json格式)

                    }
                }).then(res => {
                this.list = res.data.data.rows;
                    if(this.list.length>=this.pageSize){
                        this.pageNum++;
                        this.scroll = true;
                    }
            }).catch(err => {
                    console.log('请求错误')    // 请求错误弹出警告
            })
            },
            addCourseList:function(){
                this.axios({
                    type: 'post',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/course/list?type='+this.id+'&pageSize='+this.pageSize+'&pageNum='+this.pageNum+'',     // 访问的后端接口地址
                    // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
                    params: {                // get请求使用params,post请求使用data(data为json格式)

                    }
                }).then(res => {
                    // this.list = res.data.data.rows;
                    for(var i=0;i<res.data.data.rows.length;i++){
                        this.list.push(res.data.data.rows[i])
                    }
                    if(res.data.data.rows.length>=this.pageSize){
                        this.pageNum++;
                        this.scroll = true;
                    }else{
                        this.scroll = false;
                    }
                }).catch(err => {
                    console.log('请求错误')    // 请求错误弹出警告
                })
            },
            onScroll() {
                if(this.scroll){
                    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                    var windowHeitht = document.documentElement.clientHeight || document.body.clientHeight;
                    var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
//是否滚动到底部的判断
                    if(scrollTop + windowHeitht >= scrollHeight){
                        this.addCourseList();
                    }
                }

            },
            getList:function(){
                this.axios({
                    type: 'get',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/course/category?pid='+this.pid,    // 访问的后端接口地址
                    // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
                    params: {                // get请求使用params,post请求使用data(data为json格式)

                    }
                }).then(res => {
                    console.log(res.data.data)
                    this.top = res.data.data;
                }).catch(err => {
                    console.log('请求错误')    // 请求错误弹出警告
                })
            },
            tabList:function(id){
                this.pageSize = 10;
                this.pageNum = 1;
                console.log(id)
                this.id = id;
                this.axios({
                    type: 'get',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/course/list?type='+id+'&pageSize='+this.pageSize+'&pageNum='+this.pageNum+'',    // 访问的后端接口地址
                    // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
                    params: {                // get请求使用params,post请求使用data(data为json格式)

                    }
                }).then(res => {
                    this.list = res.data.data.rows;
                    if(this.list.length>=this.pageSize){
                        this.pageNum++;
                        this.scroll = true;
                    }
                }).catch(err => {
                    console.log('请求错误')    // 请求错误弹出警告
                })
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        mounted(){
            // this.swiper.slideTo(3, 1000, false)
            this.courseList();
            this.getList();
        }
    }
</script>

<style scoped>
  .news {display: block;border-bottom: 1px solid #eee; padding-bottom: .16rem;}
    .active {color: #fa5b55;}
    .swipers {font-size: .28rem;color: #4c4c4c;height:.8rem;line-height: .8rem;border-bottom: .1rem solid #f2f3f9;padding: 0 .24rem;}
    .list {padding: 0 .24rem;}
    .detail {width:100%;position: relative;display: block;height:1.53rem;margin-top: .4rem;}
    .left {width:2.3rem;height:100%;float:left;position: relative;border-radius: .2rem;overflow: hidden;}
    .left .Img {width:2.3rem;height:100%;z-index: 1;}
    .left .active {width:1.12rem;height:.5rem;z-index: 2;position: absolute;top:-2px;left:-.1rem;}
    .right {margin-left: 2.5rem;width:4.5rem;height:100%;position: relative;}
    .right01 {font-size: .3rem;color: #333;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-all;
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
    }
    .right03 img {width:.23rem;height:.23rem;margin-right: .2rem;}
    .right04 {font-size: .26rem;color: #666;position: absolute;bottom:0;left:0;width:100%;}
    .right04 span:last-child {float:right;}
    .right04 img {width:.3rem;height:.22rem;margin-right: .05rem;}
    .videoTop {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-all;
        font-size: .3rem;
        color: #333;
        margin-top: .1rem;
    }
    .detail.video {height:100%;}
    .videoImg {width:100%;height:3.4rem;position:relative;border-radius: .2rem;overflow: hidden;margin-top: .2rem;}
    .videoBg {width:100%;height:3.4rem;z-index: 1;}
    .play {width:.84rem;height:.84rem;position: absolute;top:50%;left:50%;margin-left: -.42rem;margin-top: -.42rem;z-index: 2;}
    .videoBottom {font-size: .26rem;color: #666;width:100%;height:.6rem;line-height: .6rem;}
    .videoBottom span:last-child {float:right;}
    .videoBottom img {width:.3rem;height:.22rem;margin-right: .05rem;}
</style>
