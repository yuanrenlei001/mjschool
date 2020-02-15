<template>
    <div class="container" style="background: #f2f2f2;overflow: hidden;height:100%">
        <div class="course">
            <div style="width:100%;height:5px;background: #fff;"></div>
            <div class="courseLeft">
                <div v-for="(item,index) in category " :class="activeindex == index ? 'active':''" @click='changeIndex(index,item.id)'>{{item.name}}</div>
            </div>
            <div class="courseRight">
              <swiper :options="swiperOption" ref="mySwiper"  class="swipers">
                <swiper-slide  ref="mySwiper" :id="this.onId"   @click="tabList(onId)" style="text-align: center;" :class="id==this.onId?'active':''" >全部</swiper-slide>
                <!-- slides -->
<!--                <swiper-slide  ref="mySwiper" v-for="(items,index) in top" :id="items.id" :class="id==items.id?'active':''" @click="tabList(items.id)">{{items.name}}</swiper-slide>-->
                <swiper-slide  ref="mySwiper" v-for="(items,index) in top" :id="items.id" :class="id==items.id?'active':''" @click="tabList(items.id)">{{items.name}}</swiper-slide>
              </swiper>
              <div style="height:.3rem;"></div>
              <router-link class="news" :to="{path: '/newsDetail', query: { id: item.id }}" v-for="item in listss">
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

                <div v-show="listss.length==0" style="width:5rem;position: relative;margin:2rem auto 0;text-align: center;"><img src="@/assets/null.png" alt="" style="width:5rem;"></div>
            </div>
        </div>
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
                showMinShopTab: true,
                activeindex:0,
                list:[],
                category:{},
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
                slidesPerView: 3,
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
              lists:[],
              id:1,
              type:true,
              pageSize:10,
              pageNum:1,
              listss:'',
              onId:'',
              idsss:''
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
            changeIndex(index,id){
              let that = this;
                this.activeindex=index;
                localStorage.setItem('listId',id)
              this.onId = id
                this.axios({
                    type: 'get',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/course/category?pid='+id,    // 访问的后端接口地址
                    // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
                    params: {                // get请求使用params,post请求使用data(data为json格式)

                    }
                }).then(res => {
                    console.log(res.data.data)
                  this.top = res.data.data;
                    this.type=true;
                  this.axios({
                    type: 'get',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/course/list?type='+this.onId+'&pageSize='+this.pageSize+'&pageNum='+this.pageNum+'',    // 访问的后端接口地址
                    // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
                    params: {                // get请求使用params,post请求使用data(data为json格式)

                    }
                  }).then(res => {
                    console.log(res.data.data)
                    this.listss = res.data.data.rows;
                  }).catch(err => {
                    console.log('请求错误')    // 请求错误弹出警告
                  })
            }).catch(err => {
                    console.log('请求错误')    // 请求错误弹出警告
            })
            },
            // 一级分类
            getCategory:function(){
                this.axios({
                    type: 'get',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/course/category',    // 访问的后端接口地址
                    // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
                    params: {                // get请求使用params,post请求使用data(data为json格式)

                    }
                }).then(res => {
                    // console.log(res.data.data)
                    this.category = res.data.data;
                    this.onId = this.category[0].id
                    localStorage.setItem('listId',this.category[0].id)
                this.axios({
                    type: 'get',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/course/category?pid='+this.category[0].id,    // 访问的后端接口地址
                    // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
                    params: {                // get请求使用params,post请求使用data(data为json格式)

                    }
                }).then(res => {
                    // console.log(res.data.data)
                // this.list = res.data.data;
                  let that = this;
                    let id = res.data.data[0].id
                  that.idsss = res.data.data[0].id
                  // localStorage.setItem('listId',id)
                  this.axios({
                    type: 'get',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/course/list?type='+that.onId+'&pageSize='+this.pageSize+'&pageNum='+this.pageNum+'',    // 访问的后端接口地址
                    // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
                    params: {                // get请求使用params,post请求使用data(data为json格式)

                    }
                  }).then(res => {
                    // console.log(res.data.data)
                    this.listss = res.data.data.rows;
                  }).catch(err => {
                    console.log('请求错误')    // 请求错误弹出警告
                  })
            }).catch(err => {
                    console.log('请求错误')    // 请求错误弹出警告
            })
            }).catch(err => {
                    console.log('请求错误')    // 请求错误弹出警告
            })
            },
          getList:function(){
            this.axios({
              type: 'get',     // 通过设置type，来选择是get还是post请求
              url: this.getAjax+'/course/category?pid='+this.pid,    // 访问的后端接口地址
              // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
              params: {                // get请求使用params,post请求使用data(data为json格式)

              }
            }).then(res => {
              this.top = res.data.data;
              // console.log(this.top)
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
              this.listss = res.data.data.rows;
              // if(this.list.length>=this.pageSize){
              //   this.pageNum++;
              //   this.scroll = true;
              // }
              this.type=false
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
            this.getCategory();
          this.getList();
        }
    }
</script>

<style scoped>
  .news {display: block;border-bottom: 1px solid #eee; margin-bottom: .16rem;}
  .active {color: #fa5b55;}
  .swipers {font-size: .28rem;color: #4c4c4c;height:.8rem;line-height: .8rem;border-bottom: .1rem solid #f2f3f9;padding: 0 .24rem;}
  .list {padding: 0 .24rem;}
  .detail {width:100%;position: relative;display: block;height:1.53rem;margin-bottom: .1rem;}
  .left {width:1.3rem;height:100%;float:left;position: relative;border-radius: .2rem;overflow: hidden;}
  .left .Img {width:1.3rem;height:100%;z-index: 1;}
  .left .active {width:1.12rem;height:.5rem;z-index: 2;position: absolute;top:-2px;left:-.1rem;}
  .right {margin-left: 1.5rem;width:3.2rem;height:100%;position: relative;}
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
  .active {color: #fa5b55;}
  .swipers {font-size: .28rem;color: #4c4c4c;height:.8rem;line-height: .8rem;border-bottom: .1rem solid #f2f3f9;padding: 0 .24rem;}
    .course {position: relative;width:100%;height:100%;}
    .courseLeft {width:2.1rem;height:100%;float:left;overflow-y: scroll;margin-bottom: 1rem;}
    .courseLeft div {width:100%;height:.8rem;text-align: center;line-height: .8rem;
        white-space:nowrap;
        text-overflow:ellipsis;
        -o-text-overflow:ellipsis;
        overflow: hidden;
        cursor: pointer;
        font-size: .26rem;
    }
    .courseLeft .active {background: #fff;position: relative;}
    .courseLeft .active:before {
        content: '';
        width:.08rem;
        height:100%;
        background: #fa5b55;
        position: absolute;
        top:0;
        left:0;
    }

    .courseRight {
        background: #fff;
        margin-left: 2.1rem;
        width: 4.9rem;
        height: 100%;
        padding: .15rem .24rem 0 .24rem;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    .courseList {
        display: block;
        width: 2.3rem;
        position: relative;
        overflow: hidden;
        float:left;
        margin-left: .15rem;
    }
    .texts {height:.7rem;line-height: .7rem;font-size: .28rem;color: #4c4c4c;text-align: center;}
    .courseList img {width:2.3rem;height:1.8rem;border-radius: .2rem;}
</style>
