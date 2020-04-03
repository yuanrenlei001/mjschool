<template>
    <div class="container">
        <div class="content" v-show="isshow">
            <div class="title"><p>{{list.detail.name}}</p></div>
          <div  class="list clear zbhd titleTop">
            <div class="plTop">
<!--              <router-link id="pinglun" v-if="list.is_evaluate !== 1" :to="{path: '/coursePl', query: { id: list.detail.teacher.id ,courseId:list.detail.id,name:list.detail.teacher.name,evaluate:false}}">评价导师</router-link>-->
<!--              <router-link id="pinglun" v-else :to="{path: '/coursePl2', query: { id: list.detail.teacher.id ,courseId:list.detail.id,name:list.detail.teacher.name,evaluate:true}}">已评价</router-link>-->
<!--              <div class="fl"><img :src="list.detail.teacher.avatar" alt="用户" class="user"></div>-->
              <div class="midRight">
                <div class="name limit"><img :src="list.detail.teacher.avatar" alt="用户" class="user">{{list.detail.teacher.name}}</div>
<!--                <div class="time">{{list.detail.teacher.createTime}}</div>-->
              </div>
            </div>
          </div>
          <video-player
            style="margin-bottom: .2rem;"
            v-if="list.detail.video"
            class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
          ></video-player>
          <!--            <video v-if="list.detail.video" autoplay loop :src="getImg+list.detail.video" style="height:3rem;width:100%;margin: .5rem 0;"></video>-->
          <audio v-if="list.detail.audio" :src="getImg+list.detail.audio"  controls style="position: relative;width:80%;left:10%;">    </audio>
          <div><img v-for="item in list.on_doc" :src="getImg+item" alt="" style="width:100%;"></div>
<!--          <canvas v-for="page in pages" :id="'the-canvas'+page" :key="page"></canvas>-->
            <div class="textTime">
<!--&lt;!&ndash;                <span>{{list.detail.teacher.name}}</span>&ndash;&gt;-->
<!--                <span>{{list.detail.createTime}}</span>-->
<!--                <span class="read">{{list.detail.views}}</span>-->
            </div>

            <div class="articleText" >

                <div class="uecontent" v-html="list.detail.content"></div>
            </div>
            <div class="article" style="position: relative;">
                <div class="note" style="text-align: right;">
                                <router-link id="pinglun" v-if="list.is_evaluate !== 1" :to="{path: '/coursePl', query: { id: list.detail.teacher.id ,courseId:list.detail.id,name:list.detail.teacher.name,evaluate:false}}">评价导师</router-link>
                                <router-link id="pinglun" v-else :to="{path: '/coursePl2', query: { id: list.detail.teacher.id ,courseId:list.detail.id,name:list.detail.teacher.name,evaluate:true}}">已评价</router-link>
<!--                    <span style="float:left;" @click="goPl()">去评价</span>-->
                    <span v-if="is_like ==0" class="isgood good" style="margin-right: 0;line-height: 9vw;" @click="like()">{{ this.likeNum }}</span>
                    <span v-else class="isgood good_" style="margin-right: 0;line-height: 9vw;" @click="like()" >{{ this.likeNum }}</span>
                </div>
            </div>
            <div class="annex" v-show="list.files !==''">
                <div class="annexTop" id="iconLink">附件（<span style="font-size: .22rem;">文件大于 <span style="color: #f21717;">5M</span> 安卓手机使用WPS或QQ浏览器打开</span>）</div>
                <div class="annexSort" v-if="ispc == 1">
                    <a   v-for="items in list.files" @click="download(items.id,items.savePath)">
                        <img  v-if="items.ext =='doc' || items.ext =='docx'" src="@/assets/img/share/word.png" alt="">
                        <img  v-else-if="items.ext =='xlsx' || items.ext =='xls'" src="@/assets/img/share/excel.png" alt="">
                        <img  v-else-if="items.ext =='jpg' || items.ext =='jpeg' || items.ext =='png' || items.ext =='gif'" src="@/assets/img/share/img.png" alt="">
                        <img  v-else-if="items.ext =='ppt'|| items.ext =='pptx'" src="@/assets/img/share/ppt.png" alt="">
                        <img  v-else-if="items.ext =='pdf'" src="@/assets/img/share/pdf.png" alt="">
                        <img  v-else src="@/assets/img/share/rar.png" alt="">
                        <img v-show="(items.size/1024/1024)>=5" class="Imgsize" src="@/assets/img/share/size.png" alt="">
                        <p>{{items.name}}</p>
                        <!--<img v-show="(25589/1024/1024)>=5" class="Imgsize" src="@/assets/img/share/size.png" alt="">-->
                    </a>
                    <!--<a @click="isPC()">-->
                        <!--<img   src="@/assets/img/share/excel.png" alt="">-->
                        <!--<p>XX文件</p>-->
                        <!--<img v-show="(25589/1024/1024)>=5" class="Imgsize" src="@/assets/img/share/size.png" alt="">-->
                    <!--</a>-->
                    <!--<a @click="isPC()">-->
                        <!--<img   src="@/assets/img/share/img.png" alt="">-->
                        <!--<p>XX文件</p>-->
                        <!--<img  class="Imgsize" src="@/assets/img/share/size.png" alt="">-->
                    <!--</a>-->
                    <!--<a @click="download(items.save_path,items.id)" v-for="items in files" :href="items.save_path" download v-if="items.ext !=='rar' && items.ext !=='zip'">-->
                        <!--<img  v-if="items.ext =='doc' || items.ext =='docx'" src="/frontend/images/news/word.png" alt="">-->
                        <!--<img  v-else-if="items.ext =='xlsx' || items.ext =='xls'" src="/frontend/images/news/excel.png" alt="">-->
                        <!--<img  v-else-if="items.ext =='jpg' || items.ext =='jpeg' || items.ext =='png' || items.ext =='gif'" src="/frontend/images/news/img.png" alt="">-->
                        <!--<img  v-else-if="items.ext =='ppt'|| items.ext =='pptx'" src="/frontend/images/news/ppt.png" alt="">-->
                        <!--<img  v-else-if="items.ext =='pdf'" src="/frontend/images/news/pdf.png" alt="">-->
                        <!--<img  v-else-if="items.ext =='rar'|| items.ext =='zip'" src="/frontend/images/news/rar.png" alt="">-->
                        <!--<img v-show="(items/1024/1024)>=5" class="Imgsize" src="/frontend/images/size.png" alt="">-->
                    <!--</a>-->
                </div>
                <div class="annexSort" v-if="ispc == 0">
                    <a  v-for="items in list.files" @click="download(items.id,items.savePath)">
<!--                    <a  v-for="items in list.files" target='_black'  :href='http://view.officeapps.live.com/op/view.aspx?src=$'>-->
                        <img  v-if="items.ext =='doc' || items.ext =='docx'" src="@/assets/img/share/word.png" alt="">
                        <img  v-else-if="items.ext =='xlsx' || items.ext =='xls'" src="@/assets/img/share/excel.png" alt="">
                        <img  v-else-if="items.ext =='jpg' || items.ext =='jpeg' || items.ext =='png' || items.ext =='gif'" src="@/assets/img/share/img.png" alt="">
                        <img  v-else-if="items.ext =='ppt'|| items.ext =='pptx'" src="@/assets/img/share/ppt.png" alt="">
                        <img @click="isPC()"  v-else-if="items.ext =='pdf'" src="@/assets/img/share/pdf.png" alt="">
                        <img  v-else src="@/assets/img/share/rar.png" alt="">
                        <img v-show="(items.size/1024/1024)>=5" class="Imgsize" src="@/assets/img/share/size.png" alt="">
                        <p>{{items.name}}</p>
                        <!--<img v-show="(25589/1024/1024)>=5" class="Imgsize" src="@/assets/img/share/size.png" alt="">-->
                    </a>
                </div>
            </div>
            <div id="annexMerge">
                <div class="annexMergeTop">
                    <div @click="Onclick($event,1)" :class="type == 1 ? 'annexActive':''" id="iconPl">评论（{{total}}）</div>
                    <div @click="Onclick($event,2)" :class="type == 2 ? 'annexActive':''"  id="iconZan" >已赞（{{list.detail.likes}}）</div>
                    <div @click="Onclick($event,3)" :class="type == 3 ? 'annexActive':''" id="iconSee">已读（{{list.detail.views}}）</div>
                </div>
                <div v-if="type == 1" class="comment bottomDiv" style="padding-bottom: 0;">
                    <div class="lists" style="margin-top:0;">
                        <div  class="list clear zbhd" v-for="item in comments">
                            <div class="plTop">
                                <div class="fl"><img :src="item.user.avatar" alt="用户" class="user"></div>
                                <div class="midRight"><div class="name limit" style="text-align: left;">{{item.user.name}}</div><div class="time">{{item.createTime}}</div></div>
                            </div>
                            <div class="mid"><div class="PLcontent" >{{item.content}}</div></div>
                        </div>
                    </div>
                </div>
                <!--点赞-->
                <div v-if="type == 2" class="zan bottomDiv">
                    <div  class="list clear zbhd" v-for="item in list.likes">
                        <div class="plTop">
                            <div class="fl"><img :src="item.user.avatar" alt="用户" class="user"></div>
                            <div class="midRight"><div class="name limit" style="text-align: left;">{{item.user.name}}</div><div class="time">{{item.createTime}}</div></div>
                        </div>
                    </div>
                </div>
                <!--已读人员-->
                <div v-if="type == 3" class="zan bottomDiv">
                      <div  class="list clear zbhd" v-for="item in list.views">
                          <div class="plTop">
                              <div class="fl"><img :src="item.user.avatar" alt="用户" class="user"></div>
                              <div class="midRight"><div class="name limit" style="text-align: left;">{{item.user.name}}</div><div class="time">{{item.createTime}}</div></div>
                          </div>
                      </div>
                </div>
                <div class="tip"></div>
                <div class="loading hidden">
                    <div class="typing_loader"></div>
                </div>
            </div>
        </div>
        <div class="fixed" v-show="fixedShadow">
            <div class="fixedBody">
                <h2></h2>
                <p>请输入您的评论！</p>
                <textarea v-model="content"></textarea>
                <div class="fixedBottom">
                    <span class="cancel" @click="cancel()" style="cursor:pointer;">取消</span>
                    <span class="btn" @click="btn()" style="cursor:pointer;">确定</span>
                </div>
            </div>
        </div>
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
        <!--<div v-if="scroll == false"  v-show="list.length>10" class="nulls" style="font-size: .36rem;color: #666;text-align: center;line-height: 1rem;">暂无数据</div>-->
        <div @click="send()" class="bottom clear"><div class="myword fl"><input type="text" placeholder="说说你的感想！" disabled="disabled"></div></div>
    </div>
</template>

<script>
    import minShopBar  from '@/components/tabBar'
    import {videoPlayer} from 'vue-video-player'
    import {pdf} from 'pdfjs-dist'
    // import  Alert  from 'vux'
    export default {
        name: "index",
        data () {
            return {
              isshow:false,
                showMinShopTab: true,
                show:false,
                ispc:'',
                is_like:0,
                islike:1,
                type:1,
                id:this.$route.query.id,
                // id:1,
                list:{applies:[],detail:{teacher:{name:''}},files:[],signs:[],views:[]},
                fixedShadow:false,
                content:'',
                comments:{},
                openId:this.userId,
                classLike:1,
                total:'',
                likeNum:'',
                scroll:false,
                pageSize:10,
                pageNum:1,
                pl:false,
                plText:'',
              url:'',
              urlsss:'',
              playerOptions : {
                playbackRates: [1.0], //播放速度
                autoplay: false, //如果true,浏览器准备好时开始回放。
                muted: false, // 默认情况下将会消除任何音频。
                loop: false, // 导致视频一结束就重新开始。
                preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                language: 'zh-CN',
                aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                sources: [{
                  type: "video/mp4",//这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
                  src: '' //url地址
                }],
                poster: "", //你的封面地址
                // width: document.documentElement.clientWidth, //播放器宽度
                notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                controlBar: {
                  timeDivider: true,
                  durationDisplay: true,
                  remainingTimeDisplay: false,
                  fullscreenToggle: true  //全屏按钮
                }
              }

            };
        },
        components: {
            minShopBar,
          videoPlayer,
          pdf
            // Alert
        },
        created() {
            window.addEventListener('scroll', this.onScroll);
        },
        methods:{
          _renderPage (num) {
            this.pdfDoc.getPage(num).then((page) => {
              let canvas = document.getElementById('the-canvas' + num)
              let ctx = canvas.getContext('2d')
              let dpr = window.devicePixelRatio || 1
              let bsr = ctx.webkitBackingStorePixelRatio ||
                ctx.mozBackingStorePixelRatio ||
                ctx.msBackingStorePixelRatio ||
                ctx.oBackingStorePixelRatio ||
                ctx.backingStorePixelRatio || 1
              let ratio = dpr / bsr
              let viewport = page.getViewport(screen.availWidth / page.getViewport(1).width)
              canvas.width = viewport.width * ratio
              canvas.height = viewport.height * ratio
              canvas.style.width = viewport.width + 'px'
              canvas.style.height = viewport.height + 'px'
              ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
              let renderContext = {
                canvasContext: ctx,
                viewport: viewport
              }
              page.render(renderContext)
              if (this.pages > num) {
                this._renderPage(num + 1)
              }
            })
          },
          _loadFile (url) {
            PDFJS.getDocument(url).then((pdf) => {
              this.pdfDoc = pdf
              console.log(pdf)
              this.pages = this.pdfDoc.numPages
              this.$nextTick(() => {
                this._renderPage(1)
              })
            })
          },
          evaluate:function(id){
              this.$router.push({path:'/coursePl',query:{id:id}})
          },
            goPl:function(){
                this.$router.push({path:'/causeList',query:{id:this.id,name:this.list.detail.teacher.name,teacherId:this.list.detail.teacher.id}})
                // { id: item.teacher.id ,courseId:item.id,name:item.teacher.name}}
            },
            send:function(){
                this.fixedShadow = true;
            },
            cancel:function(){
                this.fixedShadow = false;
            },
            // 发布评论
            btn:function(){

                let that =this;
                const Qs = require('qs');
                let params= {
                    openId: that.openId,
                    content: that.content,
                    type:1,
                    objectId:that.id
                };
                this.axios.post(this.getAjax+'/comment/add', Qs.stringify(params),{ headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },}, {
                }) .then(function (res) {
                    console.log(res)
                    that.pl = true;
                    that.plText = '评论成功!'
                    that.fixedShadow = false;
                    setTimeout(function () {
                        that.comment();
                        that.content = '';
                    }, 100);


                })
                    .catch(function (error) {
                        console.log(error);
                    });

            },
            alertBtn:function(){
                this.pl = false;
                this.plText = ''
            },
            fixed:function(){
                this.show=true;
            },
            phone:function(){
                window.location.href = "tel:10086";
            },
            close:function(){
                this.show=false;
                this.content = ''
            },
            Onclick:function(e,type){
                this.type = type;
            },
            _isMobile(){
                let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
                // localStorage.setItem('isiphone',flag)
                // localStorage.setItem('ismobile',flag?1:0)
                this.ispc = flag?1:0
                // return flag;
            },
            isPC(){
                alert ("压缩文件请于PC端下载！")
            },
            activityDetail:function(){
                this.axios({
                    type: 'post',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/course/detail/'+this.id+'?openId='+this.openId,    // 访问的后端接口地址
                    // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
                    params: {                // get请求使用params,post请求使用data(data为json格式)

                    }
                }).then(res => {
                    this.list = res.data.data;
                    this.isshow = true;
                  this.playerOptions['sources'][0]['src'] = this.getImg+this.list.detail.video;
                    this.is_like = this.list.is_like
                    this.likeNum = this.list.detail.likes
                }).catch(err => {
                    console.log('请求错误')    // 请求错误弹出警告
                })
            },
            like:function(){

                if(this.is_like == 0){
                    let that =this;
                    const Qs = require('qs');
                    let params= {
                        openId:that.openId,
                        objectId:that.id,
                        type:1
                    };
                    ;
                    this.axios.post(this.getAjax+'/like/add', Qs.stringify(params), {
                    }) .then(function (res) {
                        // this.islike = res.data.data.rows.total;
                        console.log(res)
                        that.is_like = 1;
                        that.likeNum++;
                        setTimeout(function () {
                            that.activityDetail();
                        }, 100);
                    })
                        .catch(function (error) {
                            console.log(error);
                        });
                }else{
                    let that =this;
                    const Qs = require('qs');
                    let params= {
                        openId:that.openId,
                        objectId:that.id,
                        type:1
                    };
                    ;
                    this.axios.post(this.getAjax+'/like/unlike', Qs.stringify(params), {
                    }) .then(function (res) {
                        // this.islike = res.data.data.rows.total;
                        console.log(res)
                        that.is_like = 0
                        that.likeNum--;
                        setTimeout(function () {
                            that.activityDetail();
                        }, 100);
                    })
                        .catch(function (error) {
                            console.log(error);
                        });
                }
                this.activityDetail();
            },
            // 评论列表
            comment:function(){

                this.axios({
                    type: 'post',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/comment/list?type=1&objectId='+this.id+'&pageSize=10&pageNum=1',    // 访问的后端接口地址
                    // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
                    params: {                // get请求使用params,post请求使用data(data为json格式)

                    }
                }).then(res => {
                    this.comments = res.data.data.rows;
                    this.total = res.data.data.total;
                    if(this.comments.length>=this.pageSize){
                        this.pageNum++;
                        this.scroll = true;
                    }
                    console.log(res.data.data)
                }).catch(err => {
                    console.log('请求错误')    // 请求错误弹出警告
                })
            },
            addCourseList:function(){
                this.axios({
                    type: 'post',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/comment/list?type=1&objectId='+this.id+'&pageSize='+this.pageSize+'&pageNum='+this.pageNum,     // 访问的后端接口地址
                    // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
                    params: {                // get请求使用params,post请求使用data(data为json格式)

                    }
                }).then(res => {
                    // this.list = res.data.data.rows;
                    for(var i=0;i<res.data.data.rows.length;i++){
                        this.comments.push(res.data.data.rows[i])
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
                        this.addCourseList();
                    }
                }

            },
            download(id,path){
                console.log(id)
                // location.href=this.getImg+path
              window.open(this.getImg+path)
            }
        },
        mounted(){
            this._isMobile();
            this.activityDetail();
            this.comment();
            this.urlsss= this.getImg+'/uploads/20200302/1583117050281_客满物流知识分享.pptx'
          // this._loadFile(this.getImg+'/uploads/20200302/1583117050281_客满物流知识分享.pptx')
        }
    }
</script>
<style scoped>
  .titleTop {border-bottom: 1px solid #dbdbdb;margin: auto;}
  .titleTop .plTop {width:80%;position: relative;margin: -.2rem auto 0;padding-bottom: 5px;}
  #pinglun {
    position: absolute;
    top:0;
    left:50%;
    font-size: .26rem;
    /*border: 1px solid #999;*/
    width:1.6rem;
    height:.5rem;
    text-align: center;
    line-height: .5rem;
    border-radius: .2rem;
    margin-left: -.8rem;

    color: #fff;
    background: #fa5b55;
  }
  .titleTop img {
    width: .74rem;
    height: .74rem;
    /*margin-top: 3.4vw;*/
    margin-right: 3vw;
    overflow: hidden;
    border-radius: 50%;
    vertical-align: middle;
  }
    /*.content .articleText p img*/
    .uecontent >>> img{width:100%;}
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
        font-size: .26rem;
    }
    .fixedBody {width:auto;height:5rem;background: #fff;border-radius: .2rem;position: relative;
        margin-top: 30%;padding: .2rem;text-align: center;
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
    /*底部*/
    .bottom {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 12vw;
        padding-left: 2.6vw;
        border-top: 1px solid #f1f1f1;
        background: #ffffff;
        font-family: "Microsoft YaHei", sans-serif;
    }
    .bottom .star {
        background: url('/frontend/images/detail/star-border.png') 5.4vw 3.2vw no-repeat;
    }
    .bottom .star_ {
        animation: shake 300ms ease;
        -webkit-animation: shake 300ms ease;
        background: url('/frontend/images/detail/star-yellow.png') 5.4vw 3.2vw no-repeat;
    }
    .bottom .collect {
        width: 16vw;
        height: 100%;
        font-size: .24rem;
        text-align: center;
        background-size: 5.4vw 5.4vw;
        padding-top: 24px;
    }
    .bottom .myword input {
        vertical-align: middle;
        height: 8vw;
        width: 92vw;
        margin: 1.8vw 0;
        padding-left: 2.6vw;
        background: #fafafa;
        border: 1px solid #d8d8d8;
        -webkit-border-radius: 1.6vw;
        border-radius: 1.6vw;
        font-size: .24rem;
    }
    .bottom .send {
        width: 20.5vw;
        line-height: 12vw;
        text-align: center;
        font-size: .3rem;
    }
    .bottom .send:active {
        background: #fafafa;
    }
    .content .title {height:.9rem;line-height: .9rem;padding: 0 4vw;}
    .content .title ,.content .title p{
        font-size: .32rem;
        color: #333;
        font-weight: 600;
        text-align: center;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
    .textTime {height:.68rem;line-height: .68rem;font-size: .26rem;color: #666;text-align: center;}
    .read {
        margin-right: 3.2vw;
        background: url('../../assets/img/share/scan_.png') 0 center no-repeat;
        background-size: .24rem .24rem;
        padding-left: .3rem;
        margin-left: .3rem;
    }
    .content .articleText {
        padding:0 4vw 4vw 4vw;
        text-align: justify;
        font-size: .24rem;
        overflow: hidden;
        max-width: 100%!important;
    }
    .content .articleText p ,.content .articleText {line-height: .48rem;color: #666;font-size: .26rem;}
    .content .articleText p , .content .articleText p span {
        font-size: .26rem ;
        color: #666;
    }
    .article {padding: 0 .24rem;}
    /*点赞 收藏*/
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
    .article .note_ span{
        margin-right: 0;
    }
    .article .note .good,.article  .note .isgood ,.all .note .good_{
        margin-right: 0;
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
    .annex {padding:  4vw;border-top: 1px solid #dbdbdb;}
    .annexTop {font-size: .26rem;color: #424242;position: relative;padding-left: .4rem;}
    .annexTop:before {
        content: '';
        width:.3rem;
        height:.3rem;
        position: absolute;
        top:0;
        left:0;
        background-repeat: no-repeat;
        background-size: .3rem .3rem;
    }
    #iconLink:before {background-image: url('../../assets/img/share/iconLink.png');}
    #iconSee:before {background-image: url('/frontend/images/news/iconSee.png');}
    #iconZan:before {background-image: url('/frontend/images/news/iconZan.png');}
    #iconPl:before {background-image: url('/frontend/images/news/iconPl.png');}

    .annexSort a {
        display: inline-block;
        text-align: center;
        font-size: .22rem;
        color: #666;
        width: 30%;
        margin-top: .2rem;
        margin-right: .1rem;
        position: relative;
    }
    .annexSort a>.Imgsize {
        position: absolute;
        width:.2rem;
        height:.2rem;
        top:30%;
        right:.2rem;
    }
    .annexSort a img {width:.75rem;height:.75rem;}
    .annexSort a p {
        white-space:nowrap;
        text-overflow:ellipsis;
        -o-text-overflow:ellipsis;
        overflow: hidden;
    }
    .text {font-size: .24rem;color: #666;line-height: .48rem;margin-top: .2rem;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        word-break: break-all;
    }
    #annexMerge {
        position: relative;
        width:100%;
        height:100%;
        overflow: hidden;
        padding-bottom: 1rem;
    }
    #iconSee:before {background-image: url('../../assets/img/share/see.png');}
    #iconZan:before {background-image: url('../../assets/img/share/zan.png');}
    #iconPl:before {background-image: url('../../assets/img/share/pl.png');}
    .annexMergeTop {width:100%;height:1rem;line-height: 1rem;font-size: .28rem;color: #4c4c4c;padding: 0 4vw;border-bottom: 1px solid #dbdbdb;}
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
    .annexMergeTop .annexActive {color:#fa5b55;border-bottom: 2px solid #fa5b55; }
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
      position: relative;
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
    .fl {float:left;font-size: .26rem;}
    .lists {margin-top: -4vw;}
    .midRight .name {font-size: .26rem;color: #4c4c4c;
      line-height: 1rem;text-align: center;
    }
    .midRight .time {font-size: .26rem;color: #808080;position: absolute;bottom: 0;left:1rem;}
    /*评论*/
    .ready .list ,.zan .list {
        width: 100%;
        padding-left: 3.4vw;
        padding-right: 3.4vw;
        min-height: 75px;
        border-bottom: 1px solid #f1f1f1;
        overflow: hidden;
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
      position: relative;
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
</style>
