<template>
    <div class="container" style="padding-bottom:1rem;">
        <div v-show="list.length==0" style="width:5rem;position: relative;margin:2rem auto 0;text-align: center;"><img src="@/assets/null.png" alt="" style="width:5rem;"></div>
        <div class="shareMain" v-for="(item,index) in list" v-show="list.length>0">
            <div class="shareList">
                <div style="padding: 0 .24rem;">
                    <div class="shareTop">
                        <div class="shareTopLift"><img :src="item.user.avatar" alt=""></div>
                        <div class="shareTopRight">
                            <p>{{item.user.name}}<span style="margin-left: .1rem;" v-show="item.user.position !== ''">{{item.user.position}}</span></p>
                            <p>{{item.createTime}}</p>
                        </div>
                    </div>
                    <div class="shareText" v-html="item.content"></div>
                    <div class="shareShow" @click="open($event)" v-if="item.content.length>80" style="display: block;">展开</div>
                    <div style="position: relative;width:100%;overflow: hidden;">
                        <div class="shareImg appImg my-gallery clearfix" data-pswp-uid="12312" style="width:105%;overflow: hidden;">
                            <!--<img v-for="(l, index) in images" :src="l" :key="index" @click="preview(index)">-->
                            <img
                                    class="pic"
                                    v-for="(imgs,index) in item.imagesList"
                                    :key="index"
                                :src="getImg+imgs"
                                    :preview="item.id"
                            >
                        </div>
                        <!--<video-player  class="video-player vjs-custom-skin"-->
                                       <!--ref="videoPlayer"-->
                                       <!--:playsinline="true"-->
                                       <!--:options="playerOptions[index]"-->
                                       <!--v-if="item.style=='video'"-->
                                       <!--@play="onPlayerPlay($event)"-->
                        <!--&gt;</video-player>-->
                        <video v-if="item.style=='video'" controls="controls"  loop :src="getImg+item.videoPath" style="height:3rem;width:100%;margin: .5rem 0;"></video>
                    </div>
                </div>
            </div>
            <!--<div class="shareBottom">-->
                <!--<div class="article">-->
                    <!--<div class="note" style="text-align: left;position: relative;">-->
                        <!--<span v-if="item.isLike ==0" class="isgood good" style="margin-right: 0;" @click="isGood(item.id,item.isLike)">{{item.likes}}</span>-->
                        <!--<span v-else class="isgood good_" style="margin-right: 0;" @click="isGood(item.id,item.isLike)">{{item.likes}}</span>-->
                        <!--&lt;!&ndash;<span v-else class="isgood good_" style="margin-right: 0;" @click="isGood(item.id,$event)" style="line-height: 9vw;">@{{ item.likes }}</span>&ndash;&gt;-->
                        <!--<span  style="position: absolute;left:50%;" @click="send(item.id)">点评</span>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
            <div id="annexMerge">
                <!--<div style="border-bottom: 1px solid #dbdbdb;">-->
                    <!--<div class="annexMergeTop" style="border-bottom:transparent;height:.8rem;line-height: .8rem;">-->
                        <!--<div  id="iconZan" >已赞（{{item.likes}}）</div>-->
                    <!--</div>-->
                    <!--<div class="zan bottomDiv">-->
                        <!--<div class="text">-->
                            <!--<span v-for="likes in item.likeNameList">{{likes}}, </span>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div class="annexMergeTop" style="border-bottom:transparent;height:.8rem;line-height: .8rem;">-->
                    <!--<div id="iconPl" style="top:inherit;">评论（{{item.comments}}）</div>-->
                <!--</div>-->
                <router-link :to="{path: '/shareDetail', query: { id: item.id }}" class="moreList">
                    <div class="annexMergeTop">
                        <div id="iconPl">评论（{{item.comments}}）</div>
                        <div id="iconZan">已赞（{{item.likes}}）</div>
                        <div id="iconSee">已读（{{item.views}}）</div>
                    </div>
                </router-link>
                <div  class="comment bottomDiv" style="padding-bottom: 0;display: none;">
                    <div class="lists" style="margin-top:0;" >
                        <div  class="list clear zbhd" v-for="itemss in item.commentList" v-if="item.commentList.length>0">
                            <div class="plTop">
                                <div class="fl"><img :src="itemss.user.avatar" alt="用户" class="user"></div>
                                <div class="midRight"><div class="name limit">{{itemss.user.name}}</div><div class="time">{{itemss.createTime}}</div></div>
                            </div>
                            <div class="mid"><div class="PLcontent" >{{itemss.content}}</div></div>
                        </div>
                    </div>
                </div>
                <!--点赞-->
                <div class="zan bottomDiv" style="display: none;">
                    <div class="text">
                        <span v-for="likes in item.likeNameList">{{likes}}, </span>
                    </div>
                </div>
                <!--已读人员-->
                <div  class="ready bottomDiv" style="display: none;">
                    <div class="text">
                        <span v-for="view in item.viewNameList">{{view}}, </span>
                    </div>
                </div>
                <div class="tip"></div>
                <div class="loading hidden">
                    <div class="typing_loader"></div>
                </div>
            </div>

        </div>

        <img src="@/assets/add.png" alt="" class="add" @click="add()">
        <div class="fixed" v-show="fixedShadow">
            <div class="fixedBody">
                <h2></h2>
                <p>请输入您的评论！</p>
                <textarea v-model="content"></textarea>
                <div class="fixedBottom">
                    <span class="cancel" @click="cancel()">取消</span>
                    <span class="btn" @click="btn()">确定</span>
                </div>
            </div>
        </div>
        <div v-show="list.length>6" v-if="scroll == false" class="nulls" style="font-size: .36rem;color: #666;text-align: center;line-height: 1rem;">暂无数据</div>
        <minShopBar v-if="showMinShopTab" v-show="this.isIos" />
    </div>
</template>

<script>
    import 'vue-photo-preview/dist/skin.css'
    import { videoPlayer } from 'vue-video-player';
    import minShopBar  from '@/components/tabBar'
    export default {
        name: "index",
        data () {
            return {
                showMinShopTab: true,
                img:'',
                openId:this.userId,
                list:[{content:'',user:{avatar:''},rowspl:{rows:[]}}],
                fixedShadow:false,
                listPL:'',
                listObj:{},
                arr:[],
                content:'',
                PLID:'',
                itemlist:[],
                show:1,
                type:1,
                is_like:0,
                pageSize:10,
                pageNum:1,
                scroll:false,
                playerOptions : {
                    playbackRates: [1.0], //播放速度
                    autoplay: false, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 导致视频一结束就重新开始。
                    sources: [{
                        type: "application/x-mpegURL",//这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
                        src: 'https://belight-test.oss-cn-shanghai.aliyuncs.com/video/17/2019/04/01/14583968955367424.mp4' //url地址
                    }],
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                },
            };
        },
        components: {
            minShopBar,
            videoPlayer
        },
        created() {
            window.addEventListener('scroll', this.onScroll);
        },
        computed: {
            player() {
                return this.$refs.videoPlayer.player
            }
        },
        methods:{
            onPlayerPlay(player) {
                alert("play");
            },
            beforeCreate () {
                document.querySelector('body').setAttribute('style', 'background:#f2f3f9')
            },
            getShare:function(){
                let that = this;
                this.axios({
                    type: 'post',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/share?pageSize='+this.pageSize+'&pageNum='+this.pageNum+'&openId='+this.openId,
                    // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
                    params: {                // get请求使用params,post请求使用data(data为json格式)

                    }
                }).then(res => {
                    this.list = res.data.data.rows
                    // for(let i of this.list){
                    //     console.log(i.style)
                    //     if(i.style == 'video'){
                    //         let arrStr = {
                    //             playbackRates: [1.0], //播放速度
                    //             autoplay: false, //如果true,浏览器准备好时开始回放。
                    //             muted: false, // 默认情况下将会消除任何音频。
                    //             loop: false, // 导致视频一结束就重新开始。
                    //             sources: [{
                    //                 type: "application/x-mpegURL",//这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
                    //                 src: 'https://belight-test.oss-cn-shanghai.aliyuncs.com/video/17/2019/04/01/14583968955367424.mp4' //url地址
                    //             }],
                    //             notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    //         }
                    //         self.playerOptions.push(arrStr)
                    //     }
                    //
                    // }
                    if(this.list.length>=this.pageSize){
                        this.pageNum++;
                        this.scroll = true;
                    }
                    this.$previewRefresh()
                }).catch(err => {
                    console.log('请求错误')    // 请求错误弹出警告
                })
            },
            // 展开/收起评论
            open:function(e){
                let root = e.currentTarget.previousElementSibling;
                if(e.target.innerHTML == '展开'){
                    e.target.innerHTML = '收起'
                    root.style.cssText="-webkit-line-clamp: inherit;";
                }else{
                    e.target.innerHTML = '展开'
                    root.style.cssText="-webkit-line-clamp: 3;";
                }
            },
            Onclick:function(e,type){
                this.type = type;
            },
            // 点赞
            isGood:function(id,isLike){
                let that =this;
                if(isLike == 0){
                    const Qs = require('qs');
                    let params= {
                        openId: that.openId,
                        type:3,
                        objectId:id
                    };
                    this.axios.post(this.getAjax+'/like/add', Qs.stringify(params), {
                    }) .then(function (res) {
                        console.log(res);
                    })
                        .catch(function (error) {
                            console.log(error);
                        });
                }else{
                    const Qs = require('qs');
                    let params= {
                        openId: that.openId,
                        type:3,
                        objectId:id
                    };
                    this.axios.post(this.getAjax+'/like/unlike', Qs.stringify(params), {
                    }) .then(function (res) {
                        console.log(res);
                    })
                        .catch(function (error) {
                            console.log(error);
                        });
                }
                this.axios({
                    type: 'post',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/share?pageSize='+this.pageSize+'&pageNum='+this.pageNum+'&openId='+this.openId,
                    // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
                    params: {                // get请求使用params,post请求使用data(data为json格式)

                    }
                }).then(res => {
                    this.list = res.data.data.rows
                    this.$previewRefresh()
                }).catch(err => {
                    console.log('请求错误')    // 请求错误弹出警告
                })
            },
            // 评论
            send:function(id){
                this.fixedShadow = true;
                console.log(id)
                this.PLID = id
            },
            cancel:function(){
                this.fixedShadow = false;
                this.content = '';
            },
            // 发布评论
            btn:function(){
                let that =this;
                that.fixedShadow = false;
                const Qs = require('qs');
                let params= {
                    content:that.content,
                    objectId:that.PLID,
                    type:3,
                    openId:that.openId
                };
                ;
                this.axios.post(this.getAjax+'/comment/add', Qs.stringify(params), {
                }) .then(function (res) {
                    // this.islike = res.data.data.rows.total;
                    that.content = '';
                    that.axios({
                        type: 'post',     // 通过设置type，来选择是get还是post请求
                        url: that.getAjax+'/share?pageSize=10&pageNum=1&openId='+that.openId,
                        // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
                        params: {                // get请求使用params,post请求使用data(data为json格式)

                        }
                    }).then(res => {
                        that.list = res.data.data.rows
                    }).catch(err => {
                        console.log('请求错误')    // 请求错误弹出警告
                    })
                })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            add:function(){
                this.$router.push("/shareAdd")
            },
            addActivityList:function(){
                this.axios({
                    type: 'post',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/share?pageSize='+this.pageSize+'&pageNum='+this.pageNum+'&openId='+this.openId,    // 访问的后端接口地址
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
            this.beforeCreate();
            //异步插入的图片
            //     setTimeout(() => {
            //         this.img1.push('1.jpg')
            //     this.$previewRefresh()
            // }, 2000);
            this.getShare();
            //图片查看器打开后，打印本次查看器的实例（事件、方法、属性的示例）
            this.$preview.on('imageLoadComplete',(e,item)=>{

                console.log(this.$preview.self)
            })
        }
    }
</script>

<style scoped>
    .moreList {text-align: center;font-size: .28rem;color: #666;width:100%;display: block;position: relative;top:0;line-height: .8rem;}
    .text{
        font-size: .24rem;
        color: #666;
        line-height: .48rem;
        margin-top: .2rem;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        word-break: break-all;
        padding: 0 .24rem;
    }
    .shareBottom {border-bottom: 1px solid #dbdbdb;}
    .fixed {
        background-color: black;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)";
        background-color: rgba(0, 0, 0, 0.4);
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 10000;
        padding: 0 .24rem;
    }
    .fixedBody {width:auto;height:5rem;background: #fff;border-radius: .2rem;position: relative;
        top:50%;margin-top: -2.5rem;padding: .2rem;text-align: center;
    }
    .fixedBody p {
        color: #797979;
        font-size: .28rem;
        text-align: center;
        font-weight: 300;
        position: relative;
        text-align: inherit;
        float: none;
        margin: 0;
        padding: 0;
        line-height: normal;
        text-align: center;
    }
    .fixed h2 {
        color: #575757;
        font-size: 30px;
        text-align: center;
        font-weight: 600;
        text-transform: none;
        position: relative;
        margin: 25px 0;
        padding: 0;
        line-height: 40px;
        display: block;
    }
    .fixed textarea {
        width: 80%;
        box-sizing: border-box;
        border-radius: 3px;
        border: 1px solid #d7d7d7;
        height: 90px;
        margin-top: 10px;
        margin-bottom: 17px;
        box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.06);
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        font-size: .28rem;
        padding: 1.6vw;
        line-height: .36rem;
        overflow: hidden;
        outline: 0;
        -webkit-appearance: none;
        resize: none;
    }
    .fixedBottom {text-align: center;}
    .fixedBottom span {display: inline-block;box-shadow: none;color: #fff;}
    .fixed .cancel {
        background-color: #C1C1C1;
        color: white;
        border: none;
        box-shadow: none;
        font-size: .24rem;
        font-weight: 500;
        -webkit-border-radius: 4px;
        border-radius: 5px;
        padding: 10px 32px;
        margin: 26px 5px 0 5px;
        cursor: pointer;
    }
    .fixed .btn {
        background-color: #8CD4F5;;
        color: white;
        border: none;
        box-shadow: none;
        font-size: .24rem;
        font-weight: 500;
        -webkit-border-radius: 4px;
        border-radius: 5px;
        padding: 10px 32px;
        margin: 26px 5px 0 5px;
        cursor: pointer;
    }
    .add {width:.9rem;height:.9rem;position: fixed;bottom:3rem;right:.3rem;}
    .fl {float:left;}
    .lists {margin-top: -4vw;}
    .midRight .name {font-size: .26rem;color: #4c4c4c;padding-top: .3rem;}
    .midRight .time {font-size: .26rem;color: #808080;}
    .container >>> .pswp {z-index: 99999;}
    .shareMain {width:100%;position: relative;height:100%;margin-bottom: .2rem;background: #fff;
    }
    .shareList {width:100%;position: relative;background: #fff;}
    .shareTop {width:100%;padding: .24rem 0;position: relative;}
    .shareTopLift {width:.87rem;height:.87rem;float:left;}
    .shareTopLift img {width:.87rem;height:.87rem;border-radius: 50%;}
    .shareTopRight {margin-left:.98rem;height:.87rem;position: relative; }
    .shareTopRight p:first-child {color: #4c4c4c;font-size: .3rem;}
    .shareTopRight p:first-child span {color: #fff;font-size: .24rem;padding: .05rem .2rem;background:#3fbda7;border-radius: .2rem; }
    .shareTopRight p:last-child {position: absolute;bottom:0;left:0;font-size: .26rem;color: #808080;}
    .shareText {font-size: .26rem;color: #424242;text-align: justify;line-height: .48rem;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        word-break: break-all;
    }
    .shareShow {font-size: .28rem;color:#3fbda7;line-height: .6rem;display: none;}
    .shareImg img {width:2.2rem;height:2.2rem;margin: 0 .2rem .2rem 0;}
    #annexMerge {
        position: relative;
        width:100%;
        height:100%;
        overflow: hidden;
        /*padding-bottom: 1rem;*/
    }
    #iconSee:before {background-image: url('../../assets/img/share/see.png');}
    #iconZan:before {background-image: url('../../assets/img/share/zan.png');}
    #iconPl:before {background-image: url('../../assets/img/share/pl.png');}
    .annexMergeTop {width:100%;height:1rem;line-height: 1rem;font-size: .24rem;color: #4c4c4c;padding: 0 4vw;border-bottom: 1px solid #dbdbdb;}
    .annexMergeTop div {padding: 0 .1rem 0 .4rem;text-align: center;height:1rem;line-height: 1rem;border-bottom: 4px solid transparent;}
    .annexMergeTop div:nth-child(1) {left:4vw;position: absolute;top:0;}
    .annexMergeTop div:nth-child(2) {
        /*display: flex;*/
        /*justify-content: center;*/
        /*align-items: center;*/
        /*text-align: center;*/
        left:37%;position: absolute;top:0;
    }
    #iconZan:before {
        top:inherit;
        left:0;
        margin-top: .3rem;
    }
    .annexMergeTop div:nth-child(3) {right:4vw;position: absolute;top:0;}
    .annexMergeTop .annexActive {color:#3fbda7;border-bottom: 4px solid #3fbda7; }
    .annexMergeTop div:before {
        content: '';
        width: .3rem;
        height: .3rem;
        position: absolute;
        top: 50%;
        margin-top: -.15rem;
        left: 0;
        background-repeat: no-repeat;
        background-size: .3rem .3rem;
    }
    /*评论*/
    .ready .list ,.zan .list {
        width: 100%;
        padding-left: 3.4vw;
        padding-right: 3.4vw;
        min-height: 75px;
        border-bottom: 1px solid #f1f1f1;
    }
    .ready .list .fl img {
        width: .74rem;
        height: .74rem;
        margin-top: 3.4vw;
        margin-right: 3vw;
        overflow: hidden;
        -webkit-border-radius: 50%;
        border-radius: 50%;
    }
    .ready .list .mid {
        width: 100%;
        position: relative;
        text-align: justify;
        margin-top: .2rem;
    }
    .ready .list .mid .name {
        width: 100%;
        /*height: 14.9vw;*/
        /*line-height: 14.9vw;*/
        color: #333;
        font-size: .28rem;
        margin-top: .25rem;
    }
    .midRight {
        height:1rem;
    }
    .ready .list .mid .PLcontent {
        width: 100%;
        word-break: break-all;
        font-size: .26rem;
        color: #666;
        margin-bottom:2vw;
    }
    .ready .list .mid .time {
        font-size: .24rem;
        line-height: 5.3vw;
        color: #999999;
        padding-bottom: 2vw;
    }
    .ready .list .fr {
        margin-top: 5vw;
        color: #999999;
        line-height: 4vw;
        font-size: .24rem;
    }












    .zan .list .fl img {
        width: .74rem;
        height: .74rem;
        margin-top: 3.4vw;
        margin-right: 3vw;
        overflow: hidden;
        -webkit-border-radius: 50%;
        border-radius: 50%;
    }
    .zan .list .mid {
        width: 100%;
        position: relative;
        text-align: justify;
        margin-top: .2rem;
    }
    .zan .list .mid .name {
        width: 100%;
        /*height: 14.9vw;*/
        /*line-height: 14.9vw;*/
        color: #333;
        font-size: .28rem;
        margin-top: .25rem;
    }
    .midRight {
        height:1rem;
    }
    .zan .list .mid .PLcontent {
        width: 100%;
        word-break: break-all;
        font-size: .26rem;
        color: #666;
        margin-bottom:2vw;
    }
    .zan .list .mid .time {
        font-size: .24rem;
        line-height: 5.3vw;
        color: #999999;
        padding-bottom: 2vw;
    }
    .zan .list .fr {
        margin-top: 5vw;
        color: #999999;
        line-height: 4vw;
        font-size: .24rem;
    }
    .show {display: block;}
    .hide {display: none;}

    /*点赞 收藏*/
    .article {padding: 0 .24rem;}
    .article .note {
        text-align: right;
        color: #999999;
        font-size: .24rem;
    }
    .article .note span {
        height: 8vw;
        display: inline-block;
        /*margin-right: 3vw;*/
        line-height: 8vw;
        font-size: .24rem;
        vertical-align: middle;
    }
    .article .note span:first-child {
        max-width:40vw;
        white-space:nowrap;
        text-overflow:ellipsis;
        -o-text-overflow:ellipsis;
        overflow: hidden;
        text-align: left;
    }
    .article .note_ span{
        margin-right: 0;
    }
    .article .note .good,.article  .note .isgood ,.all .note .good_{
        margin-right: 0;
    }
    .article .note .read {
        margin-right: 3.2vw;
        /*background: url('../../assets/img/share/scan_.png') 0 center no-repeat;*/
        background-size: .24rem .24rem;
        padding-left: .3rem;
    }
    .article .note .good {
        background: url('../../assets/img/share/good.png') 0 center no-repeat;
        background-size: .24rem .24rem;
        padding-left: .3rem;
    }
    .article .note .good_ {
        background: url('../../assets/img/share/good_.png') 0 center no-repeat;
        background-size: .24rem .24rem;
        padding-left: .3rem;
        animation: shake 300ms ease;
        -webkit-animation: shake 300ms ease;
    }
    /*评论*/
    .comment {
        padding-bottom: 13vw;
    }
    .comment .sum {
        height: 8vw;
        padding-left: 3.4vw;
        background: #fcfcfc;
        border-top: 1px solid #f1f1f1;
        border-bottom: 1px solid #f1f1f1;
        font-size: .24rem;
        line-height: 8vw;
    }
    .comment .lists .list {
        padding-left: 3.4vw;
        padding-right: 3.4vw;
        min-height: 100px;
        border-bottom: 1px solid #f1f1f1;
    }
    .comment .lists .list .fl img {
        width: .74rem;
        height: .74rem;
        margin-top: 3.4vw;
        margin-right: 3vw;
        overflow: hidden;
        -webkit-border-radius: 50%;
        border-radius: 50%;
    }
    .comment .lists .list .mid {
        width: 100%;
        position: relative;
        text-align: justify;
        margin-top: .2rem;
    }
    .comment .lists .list .mid .name {
        width: 100%;
        /*height: 14.9vw;*/
        /*line-height: 14.9vw;*/
        color: #333;
        font-size: .28rem;
        margin-top: .25rem;
    }
    .midRight {
        height:1rem;
    }
    .comment .lists .list .mid .PLcontent {
        width: 100%;
        word-break: break-all;
        font-size: .26rem;
        color: #666;
        margin-bottom:2vw;
    }
    .comment .lists .list .mid .time {
        font-size: .24rem;
        line-height: 5.3vw;
        color: #999999;
        padding-bottom: 2vw;
    }
    .comment .lists .list .fr {
        margin-top: 5vw;
        color: #999999;
        line-height: 4vw;
        font-size: .24rem;
    }
    .comment .lists .list .good {
        background: url('../../assets/img/share/good.png') 0 center no-repeat;
    }
    .comment .lists .list .good_ {
        animation: shake 300ms ease;
        -webkit-animation: shake 300ms ease;
        background: url('../../assets/img/share/good_.png') 0 center no-repeat;
    }
    .comment .lists .list .isgood {
        background-size: .24rem .24rem;
        padding-left: .3rem;
    }
    .comment .tip {
        height: 10.6vw;
        text-align: center;
        line-height: 10.6vw;
        color: #c1c1c1;
        font-size: .24rem;
    }
    .sweet-alert.show-input textarea {
        font-size: .28rem;
        padding: 1.6vw;
        line-height: .36rem;
        overflow: hidden;
    }
    .comment .lists .list .isgood {
        background-position: center center;
        padding-left: 8.6vw;
        line-height: 10.6vw;
        margin-top: 0;
        position: absolute;
        right:4vw;
    }
</style>