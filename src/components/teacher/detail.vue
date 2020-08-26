<template>
    <div class="container" style="background: #f2f3f9;">
        <div class="top" v-if="is7" style="height:4.5rem;">
            <img :src="list.avatar" class="topBg">
            <div class="right011" style="margin-top: 0;">{{list.name}}
                <span v-if="list.star == 1">一星讲师</span>
                <span v-if="list.star == 2">二星讲师</span>
                <span v-if="list.star == 3">三星讲师</span>
                <span v-if="list.star == 4">四星讲师</span>
                <span v-if="list.star == 5">五星讲师</span>
            </div>
            <div class="right033" v-if="list.star == 1"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
            <div class="right033" v-if="list.star == 2"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
            <div class="right033" v-if="list.star == 3"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
            <div class="right033" v-if="list.star == 4"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
            <div class="right033" v-if="list.star == 5"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""></div>
          <div class="right02222" v-if="list.onJob == 0">部门： <img src="@/assets/out.png" alt=""></div>
          <div class="right02222" v-if="list.onJob == 2">外部讲师</div>
          <div class="right02222" v-if="list.onJob == 1">部门：{{!list.depart?'':list.depart}}</div>
        </div>
      <div class="top" v-else >
        <img :src="list.avatar" class="topBg">
        <div class="right011" style="margin-top: 0;">{{list.name}}
          <span v-if="list.star == 1">一星讲师</span>
          <span v-if="list.star == 2">二星讲师</span>
          <span v-if="list.star == 3">三星讲师</span>
          <span v-if="list.star == 4">四星讲师</span>
          <span v-if="list.star == 5">五星讲师</span>
        </div>
        <div class="right033" v-if="(list.score==0?0:Math.round(list.score/list.scoreTotal)) ==0"><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
        <div class="right033" v-if="(list.score==0?0:Math.round(list.score/list.scoreTotal)) ==1"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
        <div class="right033" v-if="(list.score==0?0:Math.round(list.score/list.scoreTotal)) ==2"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
        <div class="right033" v-if="(list.score==0?0:Math.round(list.score/list.scoreTotal)) ==3"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
        <div class="right033" v-if="(list.score==0?0:Math.round(list.score/list.scoreTotal)) ==4"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
        <div class="right033" v-if="(list.score==0?0:Math.round(list.score/list.scoreTotal)) ==5"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""></div>
        <div class="right02222" v-if="list.onJob == 0">部门： <img src="@/assets/out.png" alt=""></div>
        <div class="right02222" v-if="list.onJob == 2">外部讲师</div>
        <div class="right02222" v-if="list.onJob == 1">部门：{{!list.depart?'':list.depart}}</div>
      </div>
        <div class="text">
            <div class="title">讲师介绍</div>
            <div class="texts">{{list.intro}}</div>
        </div>
        <div class="text">
            <div class="title">讲师分享</div>
            <div class="courseSort">

              <router-link class="detail"  v-for="item in share" :to="{path:'/newsDetail', query: { id: item.id }}" v-if="item.activityId == 0">
                <div class="left" v-if="item.activityId == 0">
                  <img :src="getImg+item.frontCover" alt="" class="Img">
                  <!--                        <img v-if="item.type == 0" src="@/assets/img/index/jxz.png" alt="" class="active">-->
                  <!--                        <img v-else-if="item.type == 1" src="@/assets/img/index/bmz.png" alt="" class="active">-->
                  <!--                        <img v-else src="@/assets/img/index/yjs.png" alt="" class="active">-->
                </div>
                <div class="right">
                  <p class="right01" v-if="item.activityId == 0">{{item.name}}</p>
                  <div class="right05" style="font-size: .3rem;">
                    <div class="right033" v-if="(item.score==0?0:Math.round(item.score/item.scoreTotal)) ==0"><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
                    <div class="right033" v-if="(item.score==0?0:Math.round(item.score/item.scoreTotal)) ==1"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
                    <div class="right033" v-if="(item.score==0?0:Math.round(item.score/item.scoreTotal)) ==2"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
                    <div class="right033" v-if="(item.score==0?0:Math.round(item.score/item.scoreTotal)) ==3"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
                    <div class="right033" v-if="(item.score==0?0:Math.round(item.score/item.scoreTotal)) ==4"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
                    <div class="right033" v-if="(item.score==0?0:Math.round(item.score/item.scoreTotal)) ==5"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""></div>
                  </div>
                  <p class="right02"><img src="@/assets/img/index/iconTime.png" alt=""><span>{{item.startAt}}</span></p>
                  <!--                        <p class="right03"><img src="@/assets/img/index/iconAddress.png" alt="">{{item.address}}</p>-->
                </div>
              </router-link>
              <router-link class="detail"  v-for="item in share" :to="{path:'/activityDetail', query: { id: item.activityId }}" v-if="item.activityId !== 0">
                <div class="left" v-if="item.activityId == 0">
                  <img :src="getImg+item.frontCover" alt="" class="Img">
                  <!--                        <img v-if="item.type == 0" src="@/assets/img/index/jxz.png" alt="" class="active">-->
                  <!--                        <img v-else-if="item.type == 1" src="@/assets/img/index/bmz.png" alt="" class="active">-->
                  <!--                        <img v-else src="@/assets/img/index/yjs.png" alt="" class="active">-->
                </div>
                <div class="left" v-else>
                  <img  :src="getImg+item.activity.frontCover" alt="" class="Img">
<!--                  <img v-else :src="@/assets/img/teacher/iconxx02.png" alt="" class="Img">-->
                  <!--                    <img v-if="item.type == 0" src="@/assets/img/index/jxz.png" alt="" class="active">-->
                  <!--                    <img v-else-if="item.type == 1" src="@/assets/img/index/bmz.png" alt="" class="active">-->
                  <!--                    <img v-else src="@/assets/img/index/yjs.png" alt="" class="active">-->
                </div>
                <div class="right">
                  <p class="right01" v-if="item.activityId == 0">{{item.name}}</p>
                  <p class="right01" v-else>{{item.activity.name}}</p>
                  <div class="right05" style="font-size: .3rem;">
                    <div class="right033" v-if="(item.score==0?0:Math.round(item.score/item.scoreTotal)) ==0"><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
                    <div class="right033" v-if="(item.score==0?0:Math.round(item.score/item.scoreTotal)) ==1"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
                    <div class="right033" v-if="(item.score==0?0:Math.round(item.score/item.scoreTotal)) ==2"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
                    <div class="right033" v-if="(item.score==0?0:Math.round(item.score/item.scoreTotal)) ==3"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
                    <div class="right033" v-if="(item.score==0?0:Math.round(item.score/item.scoreTotal)) ==4"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
                    <div class="right033" v-if="(item.score==0?0:Math.round(item.score/item.scoreTotal)) ==5"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""></div>
                  </div>
                  <p class="right02"><img src="@/assets/img/index/iconTime.png" alt=""><span>{{item.startAt}}</span></p>
                  <!--                        <p class="right03"><img src="@/assets/img/index/iconAddress.png" alt="">{{item.address}}</p>-->
                </div>
              </router-link>
<!--              <router-link class="detail"  v-for="item in share" :to="{path:'/newsDetail', query: { id: item.id }}" v-if="item.activityId == 0">-->
<!--                <div class="left" v-if="item.activityId == 0">-->
<!--                  <img :src="getImg+item.frontCover" alt="" class="Img">-->
<!--                  &lt;!&ndash;                        <img v-if="item.type == 0" src="@/assets/img/index/jxz.png" alt="" class="active">&ndash;&gt;-->
<!--                  &lt;!&ndash;                        <img v-else-if="item.type == 1" src="@/assets/img/index/bmz.png" alt="" class="active">&ndash;&gt;-->
<!--                  &lt;!&ndash;                        <img v-else src="@/assets/img/index/yjs.png" alt="" class="active">&ndash;&gt;-->
<!--                </div>-->
<!--                <div class="left" v-else>-->
<!--                  <img :src="getImg+item.activity.frontCover" alt="" class="Img">-->
<!--                  &lt;!&ndash;                    <img v-if="item.type == 0" src="@/assets/img/index/jxz.png" alt="" class="active">&ndash;&gt;-->
<!--                  &lt;!&ndash;                    <img v-else-if="item.type == 1" src="@/assets/img/index/bmz.png" alt="" class="active">&ndash;&gt;-->
<!--                  &lt;!&ndash;                    <img v-else src="@/assets/img/index/yjs.png" alt="" class="active">&ndash;&gt;-->
<!--                </div>-->
<!--                <div class="right">-->
<!--                  <p class="right01" v-if="item.activityId == 0">{{item.name}}</p>-->
<!--                  <p class="right01" v-else>{{item.activity.name}}</p>-->
<!--                  <div class="right05" style="font-size: .3rem;">-->
<!--                    <div class="right033" v-if="(item.score==0?0:Math.round(item.score/item.scoreTotal)) ==0"><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>-->
<!--                    <div class="right033" v-if="(item.score==0?0:Math.round(item.score/item.scoreTotal)) ==1"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>-->
<!--                    <div class="right033" v-if="(item.score==0?0:Math.round(item.score/item.scoreTotal)) ==2"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>-->
<!--                    <div class="right033" v-if="(item.score==0?0:Math.round(item.score/item.scoreTotal)) ==3"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>-->
<!--                    <div class="right033" v-if="(item.score==0?0:Math.round(item.score/item.scoreTotal)) ==4"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>-->
<!--                    <div class="right033" v-if="(item.score==0?0:Math.round(item.score/item.scoreTotal)) ==5"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""></div>-->
<!--                  </div>-->
<!--                  <p class="right02"><img src="@/assets/img/index/iconTime.png" alt=""><span>{{item.startAt}}</span></p>-->
<!--                  &lt;!&ndash;                        <p class="right03"><img src="@/assets/img/index/iconAddress.png" alt="">{{item.address}}</p>&ndash;&gt;-->
<!--                </div>-->
<!--              </router-link>-->
            </div>
        </div>
<!--        <div v-if="scroll == false" class="nulls" style="font-size: .36rem;color: #666;text-align: center;line-height: 1rem;">暂无数据</div>-->
        <!--<minShopBar v-if="showMinShopTab" />-->
    </div>
</template>

<script>
    import minShopBar  from '@/components/tabBar'
    export default {
        name: "index",
        data () {
            return {
                // showMinShopTab: true,
                id:this.$route.query.id,
                list:'',
                pageNum:1,
                pageSize:6,
                share:{},
                scroll:false,
              is7:false
            };
        },
        components: {
            minShopBar
        },
        created() {
            window.addEventListener('scroll', this.onScroll);
        },
        methods:{
            teacherDetail:function(){
                this.axios({
                    type: 'post',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/teacher/detail/'+this.id,    // 访问的后端接口地址
                    // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
                    params: {                // get请求使用params,post请求使用data(data为json格式)

                    }
                }).then(res => {
                    this.list = res.data.data;
                    console.log(this.list)
                }).catch(err => {
                    console.log('请求错误')    // 请求错误弹出警告
                })
            },
            teacherShare:function(){
                this.axios({
                    type: 'get',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/teacher/course?teacherId='+this.id+'&pageSize='+this.pageSize+'&pageNum='+this.pageNum,    // 访问的后端接口地址
                    // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
                    params: {                // get请求使用params,post请求使用data(data为json格式)

                    }
                }).then(res => {
                    console.log(res.data.data)
                    this.share = res.data.data.rows;
                    if(this.share.length>=this.pageSize){
                        this.pageNum++;
                        this.scroll = true;
                    }
                }).catch(err => {
                    console.log('请求错误')    // 请求错误弹出警告
                })
            },
            addTeacherShare:function(){
              this.scroll = false;
                this.axios({
                    type: 'post',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/teacher/course?teacherId='+this.id+'&pageSize='+this.pageSize+'&pageNum='+this.pageNum,    // 访问的后端接口地址
                    // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
                    params: {                // get请求使用params,post请求使用data(data为json格式)

                    }
                }).then(res => {
                    // this.list = res.data.data.rows;
                    for(var i=0;i<res.data.data.rows.length;i++){
                        this.share.push(res.data.data.rows[i])
                    }
                    if(res.data.data.rows.length>=this.pageSize){
                      console.log(1)
                        this.pageNum++;
                        this.scroll = true;
                    }else{
                      console.log(2)
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
//                   console.log(scrollTop+windowHeitht)
//                   console.log(scrollHeight)
                    if(Math.round(scrollTop) + windowHeitht >= scrollHeight){
                        this.addTeacherShare();
                    }
                }

            },
        },
        mounted(){
            this.teacherDetail();
            this.teacherShare();
            var u = navigator.userAgent;
            var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            if (isIOS) {
              if (screen.height == 812 && screen.width == 375){
                //是iphoneX
                this.is7 = true
              }else{
                //不是iphoneX
                this.is7 = false
              }
            }
        }
    }
</script>

<style scoped>
    .top {width:100%;height:4.5rem;position: relative;text-align: center;background: #fff;padding-top: .3rem;}
    .topBg {width:2rem;height:2.58rem;border-radius: .2rem;}
    .right011 {font-size: .32rem;color: #4c4c4c;}
    .right011 span {background: #fa5b55;display: inline-block;width:1.2rem;height:.4rem;text-align: center;line-height: .4rem;
        color: #fff;border-radius: .2rem;font-size: .22rem;margin-left: .2rem;
    }
    .right033 {margin-top: .1rem;font-size: .24rem;}
    .right033 img {width:.35rem;height:.33rem;}
    .text {padding: 0 .24rem .4rem .24rem;background: #fff;margin-top: .1rem;}
    .title {height:1rem;line-height: 1rem;font-size: .3rem;color: #333;font-weight: 900;position: relative;}
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
    .texts {
        text-indent: 2em;text-align: justify;font-size: .28rem;color: #666;line-height: .48rem;}
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
    .right02 {font-size: .26rem;color: #666;height:.4rem;line-height: .4rem;
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
    .right02222 {color: #4c4c4c;font-size: .3rem;}
    .right02222 img {width:.8rem;height:.32rem;vertical-align:sub;margin-left: .1rem;}
    .right03 img {width:.23rem;height:.23rem;margin-right: .2rem;}
    .right04 {font-size: .26rem;color: #666;position: absolute;bottom:0;left:0;width:100%;}
    .right04 span:last-child {float:right;}
    .right04 img {width:.3rem;height:.22rem;margin-right: .05rem;}
    .right05 img {width:.35rem;height:.33rem;}
</style>
