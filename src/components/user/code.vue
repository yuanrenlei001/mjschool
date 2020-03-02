<template>
    <div class="container" style="background: #fafafa;">
        <div class="fixed" v-show="pl">
            <div class="alert">
                <div class="titles">提 示</div>
                <div class="alerts">{{plText}}</div>
                <div class="alertBtn" @click="alertBtn(isType)">确定</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data () {
            return {
                user:{},
                openId:this.userId,
                pl:false,
                plText:'',
                activityId:'',
                isType:1,
                type:this.$route.query.type,
                // type:'',
              code:''
            };
        },
        components: {
        },
        methods:{
            alertBtn:function(){
                if(this.isType == 1){
                  if(this.code == '500'){
                    this.pl = false;
                    this.plText = ''
                  }else{
                    this.pl = false;
                    this.plText = ''
                    this.$router.push({path:'/activityDetail',query:{id:this.$route.query.activityId}})
                  }

                }else {
                  if(this.code == '500'){
                    this.pl = false;
                    this.plText = ''
                  }else{
                    this.pl = false;
                    this.plText = ''
                    this.$router.push({path:'/evaluateList',query:{id:this.$route.query.activityId}})
                  }

                }
            },
            // http://college.zhamengtec.com/#/code?type=activity&action=sign&activityId=73
            // http://college.zhamengtec.com/#/code?type=course&action=comment&courseId=95&activityId=73
          // http://college.zhamengtec.com/#/code?type=course&action=comment&courseId=135&activityId=101
            getUrl:function(){
                if(this.type == 'activity'){
                    // 活动
                    const that = this;
                    setTimeout(function () {
                        that.isType = 1
                    }, 100);
                    const Qs = require('qs');
                    let params ={
                        openId:that.openId,
                        activityId:that.$route.query.activityId
                        // activityId:73
                    };
                  console.log(params)
                    that.axios.post(that.getAjax+'/activity/sign', Qs.stringify(params),{ headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },}, {
                    }) .then(function (res) {
                        // this.islike = res.data.data.rows.total;
                        that.pl = true;
                      if(res.data.data.code == '500'){
                        that.plText ='登入认证有问题';
                        that.code == '500'
                      }else{
                        if(res.data.data.error == 0){
                          this.$router.push({path:'/activityDetail',query:{id:this.$route.query.activityId}})
                        }else{
                          that.plText =res.data.data.message;
                        }

                        that.code == ''
                      }


                    })
                        .catch(function (error) {
                            console.log(error);
                        });
                    // alert('课程：action'+this.$route.query.action)
                }
                else if(this.type == 'course') {
                    // 课程
                    // alert('活动：action'+this.$route.query.action)
                    const that = this;
                    setTimeout(function () {
                        that.isType = 2
                    }, 100);
                    const Qs = require('qs');
                    let params ={
                        courseId:that.$route.query.courseId,
                        // courseId:'135',
                        openId:that.openId,
                        activityId:that.$route.query.activityId
                        // activityId:'101'
                    };
                    that.axios.post(that.getAjax+'/activity/sign', Qs.stringify(params),{ headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },}, {
                    }) .then(function (res) {
                        // this.islike = res.data.data.rows.total;
                        that.pl = true;
                      if(res.data.data.code == '500'){
                        that.plText ='登入认证有问题';
                        that.code == '500'
                      }else{
                        if(res.data.data.error == 0){
                          this.$router.push({path:'/evaluateList',query:{id:this.$route.query.activityId}})
                        }else{
                          that.plText =res.data.data.message;
                        }
                        that.code == ''
                      }
                    })
                        .catch(function (error) {
                            console.log(error);
                        });
                }
            }
        },
        created(){
        },
        mounted(){
          if(this.openId !==''){
            this.getUrl();
          }

        }
    }
</script>
<style scoped>
    .fixed {
        background-color: black;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)";
        background-color: rgba(0, 0, 0, 0.4);
        position: fixed;
        /*display: flex;*/
        /*align-items: center;*/
        /*justify-content: center;*/
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        /*width:100%;*/
        /*height:100%;*/
        z-index: 10000;
        padding: 0 .24rem;
        font-size: .26rem;
    }
</style>
