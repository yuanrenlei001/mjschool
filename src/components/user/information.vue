<template>
    <div class="container" style="background: #fafafa;">
        <div class="top">
            <img :src="user.avatar" alt="" class="userImg">
            <p>{{user.name}}</p>
        </div>
        <div class="mains">
            <div><span>性别：</span><span v-if="user.gender == 1">男</span><span v-else>女</span></div>
            <div><span>部门：</span><span>{{user.position}}</span></div>
            <div><span>手机号：</span><span>{{user.mobile}}</span></div>
            <div><span>邮箱：</span><span>{{user.email}}</span></div>
        </div>
    </div>
</template>

<script>
    import minShopBar  from '@/components/tabBar'
    export default {
        name: "index",
        data () {
            return {
                user:{},
                openId:this.userId,
                pl:false,
                plText:'',
                activityId:'',
                isType:1
            };
        },
        components: {
            minShopBar
        },
        methods:{
            alertBtn:function(){
                if(this.isType == 1){
                    this.pl = false;
                    this.plText = ''
                }else {
                    this.pl = false;
                    this.plText = ''
                    this.$router.push({path:'/evaluateList',query:{id:this.activityId}})
                }
            },
            Getuser:function(){
                this.axios({
                    type: 'post',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/user?openId='+this.openId,
                    // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
                    params: {                // get请求使用params,post请求使用data(data为json格式)

                    }
                }).then(res => {
                    this.user = res.data.data;
                    console.log(res.data.data)
                }).catch(err => {
                    console.log('请求错误')    // 请求错误弹出警告
                })
            },
            code:function(){
                // this.$router.push("/text")
                let that =this;
                // { headers: {
                //     'Content-Type': 'application/x-www-form-urlencoded'
                // },},
                const Qs = require('qs');
                let params ={url:location.href.split('#')[0]};
                this.axios.post(this.getAjax+'/wechat/signature', Qs.stringify(params),{ headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },}, {
                }) .then(function (res) {
                    // this.islike = res.data.data.rows.total;
                    console.log(res)
                    let appId= res.data.data.appId;
                    let timeStamp= res.data.data.timestamp;
                    let nonceStr= res.data.data.nonceStr;
                    let signature= res.data.data.signature;
                    wx.config({
                        debug: false,
                        appId: appId, // 必填,公众号的唯一标识
                        timestamp: timeStamp, // 必填,生成签名的时间戳
                        nonceStr: nonceStr, // 必填,生成签名的随机串
                        signature: signature, // 必填,签名
                        jsApiList: ['scanQRCode'] // 必填,需要使用的JS接口列表
                    })
                    wx.ready(function () {
                        // config信息验证成功后会执行ready方法,所有接口调用都必须在config接口获得结果之后
                        // config 是一个客户端的异步操作,所以如果需要在页面加载时调用相关接口,则须把相关接口放在ready函数中调用来确保正确执行.对于用户触发是才调用的接口,则可以直接调用,不需要放在ready函数中
                        wx.checkJsApi({ // 判断当前客户端版本是否支持指定JS接口
                            jsApiList: [
                                'scanQRCode'
                            ],
                            success: function (res) { // 以键值对的形式返回，可用true，不可用false。如：{"checkResult":{"scanQRCode":true},"errMsg":"checkJsApi:ok"}
                                if (res.checkResult.scanQRCode === true) {
                                    wx.scanQRCode({ // 微信扫一扫接口
                                        desc: 'scanQRCode desc',
                                        needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                                        scanType: ['qrCode', 'barCode'], // 可以指定扫二维码还是一维码，默认二者都有
                                        success: function (res) {
                                            const getCode = res.resultStr // 当needResult 为 1 时，扫码返回的结果
                                            const Qs = require('qs');
                                            setTimeout(function () {
                                                that.activityId = JSON.parse(getCode).activityId
                                            }, 100);
                                            if(JSON.parse(getCode).type == 'activity'){
                                                setTimeout(function () {
                                                    that.isType = 1
                                                }, 100);
                                                let params ={
                                                    openId:that.openId,
                                                    activityId:JSON.parse(getCode).activityId
                                                };
                                                that.axios.post(that.getAjax+'/activity/sign', Qs.stringify(params),{ headers: {
                                                        'Content-Type': 'application/x-www-form-urlencoded'
                                                    },}, {
                                                }) .then(function (res) {
                                                    // this.islike = res.data.data.rows.total;
                                                    that.pl = true;
                                                    that.plText =res.data.data.message
                                                })
                                                    .catch(function (error) {
                                                        console.log(error);
                                                    });
                                            }else{
                                                setTimeout(function () {
                                                    that.isType = 2
                                                }, 100);
                                                let params ={
                                                    courseId:JSON.parse(getCode).courseId,
                                                    openId:that.openId,
                                                    activityId:JSON.parse(getCode).activityId
                                                };
                                                that.axios.post(that.getAjax+'/activity/sign', Qs.stringify(params),{ headers: {
                                                        'Content-Type': 'application/x-www-form-urlencoded'
                                                    },}, {
                                                }) .then(function (res) {
                                                    // this.islike = res.data.data.rows.total;
                                                    that.pl = true;
                                                    that.plText =res.data.data.message
                                                })
                                                    .catch(function (error) {
                                                        console.log(error);
                                                    });
                                            }

                                        }
                                    })
                                } else {
                                    alert('抱歉，当前客户端版本不支持扫一扫')
                                }
                            },
                            fail: function (res) { // 检测getNetworkType该功能失败时处理
                                alert('fail' + JSON.stringify(res))
                            }
                        })
                    })

                    /* 处理失败验证 */
                    wx.error(function (res) {
// config 信息验证失败会执行error函数,如签名过期导致验证失败,具体错误信息可以打开config的debug模式查看,也可以在返回的res参数中查看,对于SPA可以在这里更新签名
                        alert('配置验证失败: ' + JSON.stringify(res))
                    })
                    console.log(res)

                })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },
        created(){
        },
        mounted(){
            this.Getuser();
        }
    }
</script>

<style scoped>
    .mains {font-size: .26rem;color: #999;background: #fff;}
    .mains div {width:90%;position: relative;margin: auto;height:.9rem;line-height: .9rem;border-bottom: 1px solid #eee;}
    .mains div span:last-child {float:right;}
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
    .top {width:100%;height:2.89rem;position: relative;text-align: center;
        background: url(../../assets/userBg.png) no-repeat;
        background-size: 7.5rem 2.89rem;
    }
    .code {
        width:1rem;
        height:.83rem;
        position: absolute;
        top:.3rem;
        right:.2rem;
    }
    .top .userImg {width:1.48rem;height:1.48rem;border-radius: 50%;border: 2px solid #fff;position: absolute;
        top:.37rem;left:50%;margin-left: -.74rem;
    }
    .top p {font-size: .36rem;color: #fff;position: absolute;bottom:.2rem;width:100%;}
    .sort {box-shadow: 0 2px 5px rgba(0,0,0,.2);width:6.75rem;position: relative;margin: .24rem auto;border-radius: .2rem;}
    .link {display: block;height:1.1rem;line-height: 1.1rem;border-bottom: 1px solid #e6e6e6;
        padding-left: 1.4rem;color: #363636;font-size: .32rem;position: relative;
    }
    .link01:before {content:'';width:.55rem;height:.55rem;;background: url(../../assets/img/user/user01.png) no-repeat;background-size: .55rem .55rem;position: absolute;top:50%;left:.2rem;margin-top: -.275rem;}
    .link02:before {content:'';width:.55rem;height:.55rem;;background: url(../../assets/img/user/user02.png) no-repeat;background-size: .55rem .55rem;position: absolute;top:50%;left:.2rem;margin-top: -.275rem;}
    .link03:before {content:'';width:.55rem;height:.55rem;;background: url(../../assets/img/user/user03.png) no-repeat;background-size: .55rem .55rem;position: absolute;top:50%;left:.2rem;margin-top: -.275rem;}
    .link04:before {content:'';width:.55rem;height:.55rem;;background: url(../../assets/img/user/user04.png) no-repeat;background-size: .55rem .55rem;position: absolute;top:50%;left:.2rem;margin-top: -.275rem;}
    .link01:after {content:'';width:.13rem;height:.23rem;;background: url(../../assets/img/right.png) no-repeat;background-size: .13rem .23rem;position: absolute;top:50%;right:.4rem;margin-top: -.08rem;}
    .link02:after {content:'';width:.13rem;height:.23rem;;background: url(../../assets/img/right.png) no-repeat;background-size: .13rem .23rem;position: absolute;top:50%;right:.4rem;margin-top: -.08rem;}
    .link03:after {content:'';width:.13rem;height:.23rem;;background: url(../../assets/img/right.png) no-repeat;background-size: .13rem .23rem;position: absolute;top:50%;right:.4rem;margin-top: -.08rem;}
    .link04:after {content:'';width:.13rem;height:.23rem;;background: url(../../assets/img/right.png) no-repeat;background-size: .13rem .23rem;position: absolute;top:50%;right:.4rem;margin-top: -.08rem;}
</style>