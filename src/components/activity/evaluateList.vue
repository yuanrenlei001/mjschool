<template>
    <div class="container">
        <div class="list">
            <router-link class="teacher"   v-for="item in list" v-if="item.is_evaluate !==1" :to="{path: '/coursePl', query: { id: item.detail.teacher.id ,courseId:item.detail.id,name:item.detail.teacher.name,codes:false,evaluate:false}}">
                <div class="left"><img :src="item.detail.teacher.avatar"></div>
                <div class="right">
                    <div class="right01">{{item.detail.teacher.name}}
                        <span v-if="item.detail.teacher.star == 1">一星讲师</span>
                        <span v-if="item.detail.teacher.star == 2">二星讲师</span>
                        <span v-if="item.detail.teacher.star == 3">三星讲师</span>
                        <span v-if="item.detail.teacher.star == 4">四星讲师</span>
                        <span v-if="item.detail.teacher.star == 5">五星讲师</span>
                    </div>
                    <div class="right02">{{item.detail.teacher.intro}}</div>
                  <div class="right03">
                    <div class="right03" v-if="(item.detail.teacher.score==0?0:Math.round(item.detail.teacher.score/item.detail.teacher.scoreTotal)) ==0"><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
                    <div class="right03" v-if="(item.detail.teacher.score==0?0:Math.round(item.detail.teacher.score/item.detail.teacher.scoreTotal)) ==1"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
                    <div class="right03" v-if="(item.detail.teacher.score==0?0:Math.round(item.detail.teacher.score/item.detail.teacher.scoreTotal)) ==2"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
                    <div class="right03" v-if="(item.detail.teacher.score==0?0:Math.round(item.detail.teacher.score/item.detail.teacher.scoreTotal)) ==3"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
                    <div class="right03" v-if="(item.detail.teacher.score==0?0:Math.round(item.detail.teacher.score/item.detail.teacher.scoreTotal)) ==4"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
                    <div class="right03" v-if="(item.detail.teacher.score==0?0:Math.round(item.detail.teacher.score/item.detail.teacher.scoreTotal)) ==5"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""></div>
                  </div>
                  <div class="right04">分享课程：{{item.detail.teacher.courses}}次</div>
                </div>
            </router-link>
          <router-link class="teacher"   v-for="item in list" v-if="item.is_evaluate !==0" :to="{path: '/coursePl2', query: { id: item.detail.teacher.id ,courseId:item.detail.id,name:item.detail.teacher.name,codes:false,evaluate:true}}">
            <div class="left"><img :src="item.detail.teacher.avatar"></div>
            <div class="right">
              <div class="right01">{{item.detail.teacher.name}}
                <span v-if="item.detail.teacher.star == 1">一星讲师</span>
                <span v-if="item.detail.teacher.star == 2">二星讲师</span>
                <span v-if="item.detail.teacher.star == 3">三星讲师</span>
                <span v-if="item.detail.teacher.star == 4">四星讲师</span>
                <span v-if="item.detail.teacher.star == 5">五星讲师</span>
              </div>
              <div class="right02">{{item.detail.teacher.intro}}</div>
              <div class="right03">
                <div class="right03" v-if="(item.detail.teacher.score==0?0:Math.round(item.detail.teacher.score/item.detail.teacher.scoreTotal)) ==0"><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
                <div class="right03" v-if="(item.detail.teacher.score==0?0:Math.round(item.detail.teacher.score/item.detail.teacher.scoreTotal)) ==1"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
                <div class="right03" v-if="(item.detail.teacher.score==0?0:Math.round(item.detail.teacher.score/item.detail.teacher.scoreTotal)) ==2"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
                <div class="right03" v-if="(item.detail.teacher.score==0?0:Math.round(item.detail.teacher.score/item.detail.teacher.scoreTotal)) ==3"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
                <div class="right03" v-if="(item.detail.teacher.score==0?0:Math.round(item.detail.teacher.score/item.detail.teacher.scoreTotal)) ==4"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx01.png" alt=""></div>
                <div class="right03" v-if="(item.detail.teacher.score==0?0:Math.round(item.detail.teacher.score/item.detail.teacher.scoreTotal)) ==5"><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""><img src="@/assets/img/teacher/iconxx02.png" alt=""></div>
              </div>
              <div class="right04">分享课程：{{item.detail.teacher.courses}}次</div>
            </div>
          </router-link>
        </div>
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
                // id:125,
                id:this.$route.query.id,
                openId:this.userId,
                keyword:{}
            };
        },
        components: {
            minShopBar
        },
        methods:{
            teacherList:function(){
              // this.list = ''
              let that = this;
                localStorage.setItem('plId',this.id)
                this.axios({
                    type: 'post',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/activity/detail/'+this.id+'?openId='+this.openId,    // 访问的后端接口地址
                    // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
                    params: {                // get请求使用params,post请求使用data(data为json格式)

                    }
                }).then(res => {
                  that.list = res.data.data.courses;

                }).catch(err => {
                    console.log('请求错误')    // 请求错误弹出警告
                })
              console.log(that.list)
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
    .right03 {margin-top: .3rem;font-size: .24rem;}
    .right03 img {width:.35rem;height:.33rem;}
    .right04 {font-size: .26rem;color: #666;position: absolute;bottom:0;left:0;}
</style>
