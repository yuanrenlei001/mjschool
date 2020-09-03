<template>
    <div class="container">
        <div class="list">
            <router-link class="teacher" :to="{path: '/detail', query: { id: item.id }}"  v-for="item in list">
                <div class="left" v-if="new RegExp('http').test(item.avatar)"><img :src="item.avatar"></div>
                <div class="left" v-else><img :src="getImg+item.avatar"></div>

                <div class="right">
                    <div class="right01">{{item.name}}
<!--                      Math.round(748.5)-->
<!--                      item.score/item.scoreTotal-->
                        <span v-if=" item.star==1 ">一星讲师</span>
                        <span v-if="item.star  == 2">二星讲师</span>
                        <span v-if="item.star ==3">三星讲师</span>
                        <span v-if="item.star ==4">四星讲师</span>
                        <span v-if="item.star ==5">五星讲师</span>
                    </div>
<!--                    <div class="right02">{{item.intro}}</div>-->
                    <div class="right02" v-if="item.onJob == 0">部门： <img src="@/assets/out.png" alt=""></div>
                    <div class="right02" v-if="item.onJob == 2">外部讲师</div>
                    <div class="right02" v-if="item.onJob == 1">部门：{{!item.depart?'':item.depart}}</div>
                    <div class="right03" v-if="(item.score==0?0:Math.round(item.score/item.scoreTotal)) ==0"><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
                    <div class="right03" v-if="(item.score==0?0:Math.round(item.score/item.scoreTotal)) ==1"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
                    <div class="right03" v-if="(item.score==0?0:Math.round(item.score/item.scoreTotal)) ==2"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
                    <div class="right03" v-if="(item.score==0?0:Math.round(item.score/item.scoreTotal)) ==3"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
                    <div class="right03" v-if="(item.score==0?0:Math.round(item.score/item.scoreTotal)) ==4"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
                    <div class="right03" v-if="(item.score==0?0:Math.round(item.score/item.scoreTotal)) ==5"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""></div>
                    <div class="right04">分享课程：{{item.courses}}次</div>
                </div>
            </router-link>
            <div v-show="list.length==0" style="width:5rem;position: relative;margin:2rem auto 0;text-align: center;"><img src="@/assets/null.png" alt="" style="width:5rem;"></div>
        </div>
        <div v-show="list.length>5" v-if="scroll == false" class="nulls">暂无数据</div>
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
                list:'',
                pageSize:6,
                pageNum:1,
                scroll:false,
              flag:true
            };
        },
        components: {
            minShopBar
        },
        created() {
            window.addEventListener('scroll', this.onScroll);
        },
        methods:{
            teacherList:function(){
                this.axios({
                    type: 'post',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/teacher/list?pageSize='+this.pageSize+'&pageNum='+this.pageNum+'',    // 访问的后端接口地址
                    // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
                    params: {                // get请求使用params,post请求使用data(data为json格式)

                    }
                }).then(res => {
                this.list = res.data.data.rows;
                if(this.list.length>=this.pageSize){
                    this.pageNum++;
                    this.scroll = true;
                }
                console.log(this.list)
            }).catch(err => {
                    console.log('请求错误')    // 请求错误弹出警告
            })
            },
            addTeacherList:function(){
              let _this = this;
                this.axios({
                    type: 'post',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/teacher/list?pageSize='+this.pageSize+'&pageNum='+this.pageNum+'',    // 访问的后端接口地址
                    // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
                    params: {                // get请求使用params,post请求使用data(data为json格式)

                    }
                }).then(res => {
                  this.flag = true
                    // this.list = res.data.data.rows;
                    for(var i=0;i<res.data.data.rows.length;i++){
                        this.list.push(res.data.data.rows[i])
                    }
                    if(res.data.data.rows.length>=this.pageSize){
                        this.pageNum++;
                        this.scroll = true;
                    }else{
                      setTimeout(function(){ _this.scroll = false;}, 1);

                    }
                }).catch(err => {
                    console.log('请求错误')    // 请求错误弹出警告
                })
            },
            onScroll() {
                  if(this.scroll && this.flag){
                    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                    var windowHeitht = document.documentElement.clientHeight || document.body.clientHeight;
                    var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
//是否滚动到底部的判断
                    if(scrollTop + windowHeitht >= scrollHeight){
                      this.flag = false
                        this.addTeacherList();
                    }
                }

            },
        },
        mounted(){
            this.teacherList();
        }
    }
</script>

<style scoped>
    .nulls {font-size: .36rem;color: #666;text-align: center;line-height: 1rem;}
    .teacher {padding: .3rem .24rem;display: block;;height:2.2rem;border-bottom: 1px solid #eee;}
    .left {width:1.7rem;height:2.2rem;float:left;border-radius: .1rem;overflow: hidden;}
    .left img {width:1.7rem;height:2.2rem;}
    .right {margin-left: 1.88rem;width:5rem;position: relative;height:2.2rem;}
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
    .right03 {margin-top: .1rem;font-size: .24rem;}
    .right03 img {width:.35rem;height:.33rem;}
    .right04 {font-size: .26rem;color: #666;position: absolute;bottom:0;left:0;}
    .right02 img {width:.8rem;height:.32rem;vertical-align:sub;margin-left: .1rem;}
</style>
