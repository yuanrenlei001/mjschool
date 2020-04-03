<template>
    <div class="container">
        <div class="courseSort" v-for="item in list" v-show="list.length>0">
            <router-link class="detail" :to="{path: '/activityDetail', query: { id: item.id }}" v-if="item.frontCover == ''">
                <div class="left">
                    <img src="@/assets/null.jpg" alt="" class="Img">
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
          <router-link class="detail" :to="{path: '/activityDetail', query: { id: item.id }}" v-else >
            <div class="left">
              <img :src="getImg+item.frontCover" alt="" class="Img">
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
                scroll:false
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
                    url: this.getAjax+'/activity/listSingle?pageSize='+this.pageSize+'&pageNum='+this.pageNum+'',    // 访问的后端接口地址
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
                    url: this.getAjax+'/activity/listSingle?pageSize='+this.pageSize+'&pageNum='+this.pageNum+'',    // 访问的后端接口地址
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
    .courseSort {padding:.24rem;border-bottom: 1px solid #f2f3f9;}
    .detail {width:100%;position: relative;display: block;height:1.53rem;}
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
