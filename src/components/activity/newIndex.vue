<template>
    <div class="container">
        <div class="list">
            <div class="courseSort" v-for="item in list">
                <router-link class="news" :to="{path: '/newsDetailPost', query: { id: item.id }}" >
                    <div class="detail"  v-if="item.style !== 'video' && item.frontCover == ''">
                        <div class="right" style="margin-left: 0;width:100%;">
                            <p class="right01">{{item.name}}</p>
                            <!--<p class="right02">{{item.content}}</p>-->
                            <p class="right04"><span>{{item.createTime}}</span> <span><img src="@/assets/img/index/iconSee.png" alt="">{{item.views}}</span></p>
                        </div>
                    </div>
                  <div class="detail"  v-else-if="item.style !== 'video' && item.frontCover !== ''">
                    <div class="left">
                      <img :src="getImg+item.frontCover" alt="" class="Img">
                    </div>
                    <div class="right">
                      <p class="right01">{{item.name}}</p>
                      <!--<p class="right02">{{item.content}}</p>-->
                      <p class="right04"><span>{{item.createTime}}</span> <span><img src="@/assets/img/index/iconSee.png" alt="">{{item.views}}</span></p>
                    </div>
                  </div>
                    <div class="video" v-else style="border-bottom: 1px solid #eee;padding-bottom: .2rem;">
                        <div class="videoTop">{{item.name}}</div>
                        <div class="videoImg" v-if="item.frontCover == ''">
                          <img src="@/assets/null.jpg" alt="" class="Img">
                            <img src="@/assets/img/course/play.png" alt="" class="play">
                        </div>
                      <div class="videoImg" v-else>
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
        <div v-show="list.length>=10" v-if="scroll == false" class="nulls" style="font-size: .36rem;color: #666;text-align: center;line-height: 1rem;">暂无数据</div>
        <!--<minShopBar v-if="showMinShopTab" />-->
    </div>
</template>

<script>
    import minShopBar  from '@/components/tabBar'
    export default {
        name: "index",
        data () {
            return {
                noDate:false,//这是一个判断是否加载的开关
                // showMinShopTab: true,
                list:'',
                pageSize:10,
                pageNum:1,
                scroll:false,
                openId:this.userId
            };
        },
        components: {
            minShopBar
        },
        created() {
            window.addEventListener('scroll', this.onScroll);
        },
        methods:{
            activityList:function(){
                this.axios({
                    type: 'post',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/post/list?openId='+this.openId+'&pageSize='+this.pageSize+'&pageNum='+this.pageNum,    // 访问的后端接口地址
                    // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
                    params: {                // get请求使用params,post请求使用data(data为json格式)

                    }
                }).then(res => {
                        this.list =res.data.data.rows;
                    if(this.list.length>=this.pageSize){
                        this.pageNum++;
                        this.scroll = true;
                    }
                }).catch(err => {
                    console.log('请求错误')    // 请求错误弹出警告
                })
            },
            addActivityList:function(){
                this.axios({
                    type: 'post',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/post/list?openId='+this.openId+'&pageSize='+this.pageSize+'&pageNum='+this.pageNum,    // 访问的后端接口地址
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
                        this.addActivityList();
                    }
                }

            },
        },
        mounted(){
            this.activityList();
        }
    }
</script>

<style scoped>
    .list {padding: 0 .24rem;}
    .detail {width:100%;position: relative;display: block;height:1.53rem;margin-top: .4rem;border-bottom: 1px solid #eee;padding-bottom: .2rem;}
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
