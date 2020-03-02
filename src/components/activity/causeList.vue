<template>
    <div class="container">
        <div class="top">
            <div class="top01">对{{names}}的评价</div>
            <div class="top02">您的评价决定了{{names}}的江湖地位，请认真点评！</div>
        </div>
        <div class="pf">
            <div class="pf01">评分</div>
            <div class="form-group clearfix">
                <label class="control-label col-md-4">{{starNum0}}.0分</label>
                <label class="control-labels">{{add[0].name}}</label>
                <div class="col-md-8">
                    <div class="grade-box">
                        <img v-for="(star,index) in stars0" v-bind:src="star.src" v-on:click="rating(index)" alt="星星图片" />
                    </div>
                </div>
            </div>
            <div class="form-group clearfix">
                <label class="control-label col-md-4">{{starNum1}}.0分</label>
                <label class="control-labels">{{add[1].name}}</label>
                <div class="col-md-8">
                    <div class="grade-box">
                        <img v-for="(star,index) in stars1" v-bind:src="star.src" v-on:click="rating2(index)" alt="星星图片" />
                    </div>
                </div>
            </div>
            <div class="form-group clearfix">
                <label class="control-label col-md-4">{{starNum2}}.0分</label>
                <label class="control-labels">{{add[2].name}}</label>
                <div class="col-md-8">
                    <div class="grade-box">
                        <img v-for="(star,index) in stars2" v-bind:src="star.src" v-on:click="rating3(index)" alt="星星图片" />
                    </div>
                </div>
            </div>
        </div>
        <div class="pf" style="border-bottom: transparent;">
            <div class="pf01">您对本次评价的留言</div>
            <textarea placeholder="请输入您要留言的内容" v-model="text"></textarea>
        </div>
        <div class="btns"><div class="btn" @click="evaluate()">提交</div></div>
        <div class="fixed" v-show="pl">
            <div class="alert" v-if="ispc" style="margin: 1rem auto 0;">
                <div class="titles">提 示</div>
                <div class="alerts">{{plText}}</div>
                <div class="alertBtn" @click="alertBtn()">确定</div>
            </div>
            <div class="alert" v-else>
                <div class="titles">提 示</div>
                <div class="alerts">{{plText}}</div>
                <div class="alertBtn" @click="alertBtn()">确定</div>
            </div>
        </div>
    </div>
</template>

<script>
    //星星的图片路径
    var starOffImg =require('@/assets/img/teacher/iconxx01.png');
    var starOnImg = require('@/assets/img/teacher/iconxx02.png');
    import minShopBar  from '@/components/tabBar'
    export default {
        name: "index",
        data () {
            return {
                text:'',
                openId:this.userId,
                pdId:localStorage.getItem('plId'),
                id:this.$route.query.teacherId,
                names:this.$route.query.name,
                courseId:this.$route.query.id,
                stars0: [{
                    src: starOffImg,
                    active: false
                }, {
                    src: starOffImg,
                    active: false
                }, {
                    src: starOffImg,
                    active: false
                },
                    {
                        src: starOffImg,
                        active: false
                    }, {
                        src: starOffImg,
                        active: false
                    }
                ],
                stars1: [{
                    src: starOffImg,
                    active: false
                }, {
                    src: starOffImg,
                    active: false
                }, {
                    src: starOffImg,
                    active: false
                },
                    {
                        src: starOffImg,
                        active: false
                    }, {
                        src: starOffImg,
                        active: false
                    }
                ],
                stars2: [{
                    src: starOffImg,
                    active: false
                }, {
                    src: starOffImg,
                    active: false
                }, {
                    src: starOffImg,
                    active: false
                },
                    {
                        src: starOffImg,
                        active: false
                    }, {
                        src: starOffImg,
                        active: false
                    }
                ],
                starNum0: 0,
                starNum1: 0,
                starNum2: 0,
                keyword:[],
                pl:false,
                plText:'',
                add:[{name:''}],
                ispc:''
            };
        },
        components: {
            minShopBar
        },
        methods:{
            _isMobile(){
                let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
                this.ispc = flag?false:true
            },
            //评分
            rating: function(index) {
                var total = this.stars0.length; //星星总数
                var idx = index + 1; //这代表选的第idx颗星-也代表应该显示的星星数量

                //进入if说明页面为初始状态
                if(this.starNum0 == 0) {
                    this.starNum0 = idx;
                    for(var i = 0; i < idx; i++) {
                        this.stars0[i].src = starOnImg;
                        this.stars0[i].active = true;
                    }
                } else {
                    //如果再次点击当前选中的星级-仅取消掉当前星级，保留之前的。
                    if(idx == this.starNum0) {
                        for(var i = index; i < total; i++) {
                            this.stars0[i].src = starOffImg;
                            this.stars0[i].active = false;
                        }
                    }
                    //如果小于当前最高星级，则直接保留当前星级
                    if(idx < this.starNum0) {
                        for(var i = idx; i < this.starNum0; i++) {
                            this.stars[i].src = starOffImg;
                            this.stars[i].active = false;
                        }
                    }
                    //如果大于当前星级，则直接选到该星级
                    if(idx > this.starNum0) {
                        for(var i = 0; i < idx; i++) {
                            this.stars0[i].src = starOnImg;
                            this.stars0[i].active = true;
                        }
                    }

                    var count = 0; //计数器-统计当前有几颗星
                    for(var i = 0; i < total; i++) {
                        if(this.stars0[i].active) {
                            count++;
                        }
                    }
                    this.starNum0 = count;
                }
            },
            rating2: function(index) {
                var total = this.stars1.length; //星星总数
                var idx = index + 1; //这代表选的第idx颗星-也代表应该显示的星星数量

                //进入if说明页面为初始状态
                if(this.starNum1 == 0) {
                    this.starNum1 = idx;
                    for(var i = 0; i < idx; i++) {
                        this.stars1[i].src = starOnImg;
                        this.stars1[i].active = true;
                    }
                } else {
                    //如果再次点击当前选中的星级-仅取消掉当前星级，保留之前的。
                    if(idx == this.starNum1) {
                        for(var i = index; i < total; i++) {
                            this.stars1[i].src = starOffImg;
                            this.stars1[i].active = false;
                        }
                    }
                    //如果小于当前最高星级，则直接保留当前星级
                    if(idx < this.starNum1) {
                        for(var i = idx; i < this.starNum1; i++) {
                            this.stars1[i].src = starOffImg;
                            this.stars1[i].active = false;
                        }
                    }
                    //如果大于当前星级，则直接选到该星级
                    if(idx > this.starNum1) {
                        for(var i = 0; i < idx; i++) {
                            this.stars1[i].src = starOnImg;
                            this.stars1[i].active = true;
                        }
                    }

                    var count = 0; //计数器-统计当前有几颗星
                    for(var i = 0; i < total; i++) {
                        if(this.stars1[i].active) {
                            count++;
                        }
                    }
                    this.starNum1 = count;
                }
            },
            rating3: function(index) {
                var total = this.stars2.length; //星星总数
                var idx = index + 1; //这代表选的第idx颗星-也代表应该显示的星星数量

                //进入if说明页面为初始状态
                if(this.starNum2 == 0) {
                    this.starNum2 = idx;
                    for(var i = 0; i < idx; i++) {
                        this.stars2[i].src = starOnImg;
                        this.stars2[i].active = true;
                    }
                } else {
                    //如果再次点击当前选中的星级-仅取消掉当前星级，保留之前的。
                    if(idx == this.starNum2) {
                        for(var i = index; i < total; i++) {
                            this.stars2[i].src = starOffImg;
                            this.stars2[i].active = false;
                        }
                    }
                    //如果小于当前最高星级，则直接保留当前星级
                    if(idx < this.starNum2) {
                        for(var i = idx; i < this.starNum2; i++) {
                            this.stars2[i].src = starOffImg;
                            this.stars2[i].active = false;
                        }
                    }
                    //如果大于当前星级，则直接选到该星级
                    if(idx > this.starNum2) {
                        for(var i = 0; i < idx; i++) {
                            this.stars2[i].src = starOnImg;
                            this.stars2[i].active = true;
                        }
                    }

                    var count = 0; //计数器-统计当前有几颗星
                    for(var i = 0; i < total; i++) {
                        if(this.stars2[i].active) {
                            count++;
                        }
                    }
                    this.starNum2 = count;
                }
            },
            question:function(){
                this.axios({
                    type: 'get',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/activity/course/question?courseId='+this.courseId,    // 访问的后端接口地址
                    // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
                    params: {                // get请求使用params,post请求使用data(data为json格式)

                    }
                }).then(res => {
                    this.add = res.data.data
                    for(var i=0;i<res.data.data.length;i++){
                        this.keyword.push(res.data.data[i].keyword)
                    }
                    console.log(this.keyword)
                }).catch(err => {
                    console.log('请求错误')    // 请求错误弹出警告
                })
            },
            evaluate:function(){
                let that =this;
                const Qs = require('qs');
                let params ={};
                let obj = {}
                for(var i=0;i<that.keyword.length;i++){
                    if(i==0){
                        obj[that.keyword[0]] = that.starNum0
                    }else if(i==1){
                        obj[that.keyword[1]] = that.starNum1
                    }else if(i==2){
                        obj[that.keyword[2]] = that.starNum2
                    }
                }
                params= {
                    openId:that.openId,
                    teacherId:that.id,
                    courseId:that.courseId,
                    content:that.text,
                    // attitudeCount:that.starNum0,
                    // shareCount:that.starNum1,
                    // clotheCount:that.starNum2,
                    question:JSON.stringify(obj)
                };


                this.axios.post(this.getAjax+'/activity/evaluate?', Qs.stringify(params),{ headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },}, {
                }) .then(function (res) {
                    // this.islike = res.data.data.rows.total;
                    that.pl = true;
                    that.plText = '评论成功！'
                    console.log(res)
                })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            alertBtn:function(){
                this.$router.push("/")
                this.pl = false;
                this.plText = ''
            }
        },
        created(){
        },
        mounted(){
            this.question();
            this._isMobile();
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
    .container {padding: 0 .24rem;}
    .top {height:1.4rem;border-bottom: 1px solid #e6e6e6;}
    .top01 {height:.8rem;line-height: .8rem;font-size: .3rem;color: #4c4c4c;position: relative;padding-left: .45rem;}
    .top01:before {
        content: '';
        width:.26rem;
        height:.33rem;
        background-image: url("../../assets/icon001.png");
        background-repeat: no-repeat;
        background-size: .26rem .33rem;
        position: absolute;
        top:.2rem;
        left:0;
    }
    .top02 {font-size: .26rem;color: #666;padding-left: .45rem;}
    .pf {border-bottom: 1px solid #e6e6e6;}
    .pf01 {height:.9rem;line-height: .9rem;font-size: .3rem;color: #4c4c4c;position: relative;padding-left: .2rem;}
    .pf01:before {
        content: '';
        width:.06rem;
        height:.28rem;
        background: #fa5b55;
        position: absolute;
        top:.3rem;
        left:0;
    }
    .form-group {position: relative;height:.8rem;line-height: .8rem;}
    .form-group img {width:.35rem;height:.33rem;}
    .control-label {color: #f4a409;font-size: .28rem;top:-.08rem;float:right;}
    .col-md-8 {margin:0 auto;position: relative;font-size: .24rem;display: block;}
    .control-labels {font-size: .28rem;color: #4c4c4c;top:-.08rem;float:left;width:2.8rem;
        white-space:nowrap;
        text-overflow:ellipsis;
        -o-text-overflow:ellipsis;
        overflow: hidden;
    }
    textarea {height:2.2rem;padding: .3rem;font-size: .26rem;color: #999;width:6.4rem;border: none;background:#f7f7f7;
        resize: none;outline: none;border-radius: .2rem;
    }
    .btns {width:100%;background: #f2f3f9;position: relative;margin-top: 1rem;}
    .btn {
        width: 7.02rem;height:.8rem;text-align: center;line-height: .8rem;border-radius: .2rem;
        background: #fa5b55;font-size: .3rem;color: #fff;margin:auto;
    }
</style>