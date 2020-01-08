<template>
    <div class="container" style="padding-bottom: 2rem;">
        <div style="padding: 0 .24rem;">
            <div class="top">
                <span>类型：</span>
                <el-radio v-model="radio" label="article">图文</el-radio>
                <el-radio v-model="radio" label="video">视频</el-radio>
            </div>
            <textarea class="text" placeholder="请输入您要分享的内容" v-model="content"></textarea>
        </div>
        <div v-show="radio == 'article'" id="imgUploader">
            <div class="file-list">
                <!-- <section class="file-item draggable-item" v-for="(item,index) in files" :key="index"> -->
                <div class="thumbnails my-gallery">
                    <figure itemprop="associatedMedia" itemscope  class="thumbnail" v-for="(item,index) in files" :key="index" :id="item.Id">
                        <a :href="item.src" itemprop="contentUrl" data-size="400x400" class="img-wrapper">
                            <img :src="item.src" itemprop="thumbnail" class="imgs" />
                            <!-- <div :style="{background:'url('+item.src+')  no-repeat',  backgroundPosition:'center center',backgroundSize:'cover'}" style="width:100%;height:110px;" itemprop="thumbnail"></div> -->
                        </a>
                        <span class="file-remove" @click="remove(index,$event)">×</span>
                    </figure>
                    <section class="thumbnail" v-if="this.files.length < 9">
                        <div class="add">
                            <img src="@/assets/upImg.png" alt="" class="upImg">
                            <!-- accept="image/jpeg,image/png" capture="camera" -->
                            <input type="file" @change="selectImgs()" multiple accept="image/*" ref="file">
                        </div>
                    </section>
                </div>
            </div>
            <!-- <img :src="item.src" alt="" ondragstart="return false;">
                <span class="file-remove" @click="remove(index)">×</span> -->
            <!-- </section> -->
            <!-- PhotoSwipe插件需要的元素， 一定要有类名 pswp -->
            <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="pswp__bg"></div>
                <div class="pswp__scroll-wrap">
                    <div class="pswp__container">
                        <div class="pswp__item"></div>
                        <div class="pswp__item"></div>
                        <div class="pswp__item"></div>
                    </div>
                    <!-- 预览区域顶部的默认UI，可以修改 -->
                    <div class="pswp__ui pswp__ui--hidden">
                        <div class="pswp__top-bar">
                            <!--  与图片相关的操作 -->
                            <div class="pswp__counter"></div>
                            <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
                            <!--将分享按钮去掉 -->
                            <!-- <button class="pswp__button pswp__button--share" title="Share"></button>
                            <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                            <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button> -->
                            <div class="pswp__preloader">
                                <div class="pswp__preloader__icn">
                                    <div class="pswp__preloader__cut">
                                        <div class="pswp__preloader__donut"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                            <div class="pswp__share-tooltip"></div>
                        </div>
                        <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
                        <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
                        <div class="pswp__caption">
                            <div class="pswp__caption__center"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="radio == 'video'">
            <div class="album albumvideo">
                <div>
                    <div class="pic_img">
                        <div class="pic_img_box">
                            <el-upload class="avatar-uploader"
                                       :action="url"
                                       v-bind:on-progress="uploadVideoProcess"
                                       v-bind:on-success="handleVideoSuccess"
                                       :headers="token"
                                       v-bind:before-upload="beforeUploadVideo"
                                       v-bind:show-file-list="false">
                                <video v-if="videoForm.showVideoPath !='' && !videoFlag"
                                       v-bind:src="getImg+videoURL"
                                       class="avatar video-avatar"
                                       controls="controls">
                                    您的浏览器不支持视频播放
                                </video>
                                <i v-else-if="videoForm.showVideoPath =='' && !videoFlag"
                                   class="el-icon-plus avatar-uploader-icon"></i>
                                <el-progress v-if="videoFlag == true"
                                             type="circle"
                                             v-bind:percentage="videoUploadPercent"
                                             style="margin-top:7px;"></el-progress>
                            </el-upload>
                        </div>
                    </div>
                </div>
                <p class="Upload_pictures" style="text-align: center;">
                    <span></span>
                    <span style="text-align: center;line-height: 1rem;width:100%;font-size: .28rem;">最多可以上传1个视频，建议小于50MB，推荐格式mp4</span>
                </p>
            </div>
        </div>
        <div class="fixed" v-show="pl">
            <div class="alert">
                <div class="titles">提 示</div>
                <div class="alerts">{{plText}}</div>
                <div class="alertBtn" @click="alertBtn()">确定</div>
            </div>
        </div>
        <div @click="upLoad" class="upload"> 发布</div>
    </div>
</template>

<script>
    import PhotoSwipe from "photoswipe";
    import PhotoSwipeUI_Default from "photoswipe/dist/photoswipe-ui-default";
    import "photoswipe/dist/photoswipe.css";
    import "photoswipe/dist/default-skin/default-skin.css";
    import minShopBar  from '@/components/tabBar'
    import 'element-ui/lib/theme-chalk/index.css';
    export default {
        name: "index",
        data () {
            return {
                showMinShopTab: true,
                img:'',
                openId:this.userId,
                list:{},
                // lang: this.$lang('dynamic'),//语言包
                files: [], // 文件缓存
                index: 0, // 序列号
                maxLength:2, // 图片最大数量
                maxSize: 10240000, //图片限制为10M内，
                radio: 'article',
                getFiles:'',
                imgId:'',
                content:'',
                videoFlag: false,
                //是否显示进度条
                videoUploadPercent: "",
                //进度条的进度，
                isShowUploadVideo: false,
                //显示上传按钮
                videoForm: {
                    showVideoPath: ''
                },
                url:this.getAjax+'/upload/video',
                videoId:'',
                pl:false,
                plText:'',
                token:{'Content-Type': 'application/x-www-form-urlencoded'},
                videoIds:'',
                videoURL:'',
                videos:{}
            };
        },
        components: {
            minShopBar
        },
        methods:{
            getImageList(files) {
                this.$nextTick(() => {
                    for (let i = 0, len = files.length; i < len; i++) {
                        this.imgList.push(files[i].src.split('base64,')[1])
                        //上传图片
                        this._getFileCode({
                            Base64Str: files[i].src.split('base64,')[1],
                            AttachmentType: this.$enums.AttachmentType.Activity
                        })
                    }
                })
            },
            selectImgs() {
                let that = this;
                let fileList = this.$refs.file.files
                if (fileList.length > 9) { //如果大于9张,做出提醒
                    alert(this.lang.dynamic_upload_tips)
                }
                let tempList = []; //每次点击+号后选择的图片信息
                for (let i = 0, len = fileList.length; i < len; i++) {
                    const Qs = require('qs');
                    let formData = new FormData();
                    const imgIds = ''
                    formData.append('file',fileList[i]);
                    that.axios.post(that.getAjax+'/upload/image',formData, {
                    }) .then(function (res) {
                        that.imgIds = res.data.data.id
                        let fileItem = {
                            Id: that.imgIds,
                            name: fileList[i].name,
                            size: fileList[i].size,
                            file: fileList[i]
                        }
                        //将图片文件转成Base64
                        let reader = new FileReader()
                        reader.onloadend = (e) => {
                            //压缩图片并存到fileItem中
                            that.getBase64(e.target.result).then((url) => {
                                that.$set(fileItem, 'src', url)
                            })

                        }
                        //判断图片大小是否超出限制
                        if (fileItem.size > that.maxSize) {
                            Toast(that.lang.dynamic_over_size)
                        } else {
                            reader.readAsDataURL(fileList[i])
                            tempList.push(fileItem)
                            that.files.push(fileItem)
                        }
                    })
                        .catch(function (error) {
                            console.log(error);
                        });

                }
                setTimeout(() => {
                    this.$emit('getFiles', tempList)
                }, 300)
                this.getFiles = tempList
                this.files.splice(9)
                console.log(this.files)
            },

            // 图片压缩并保存到files
            getBase64(url) {
                let self = this;
                let Img = new Image(),
                    dataURL = '';
                Img.src = url;
                let p = new Promise(function (resolve, reject) {
                    Img.onload = function () { //要先确保图片完整获取到，这是个异步事件
                        let canvas = document.createElement("canvas"), //创建canvas元素
                            width = Img.width, //确保canvas的尺寸和图片一样
                            height = Img.height;
                        // 默认将长宽设置为图片的原始长宽，这样在长宽不超过最大长度时就不需要再处理
                        let ratio = width / height,
                            maxLength = 1000,
                            newHeight = height,
                            newWidth = width;
                        // 在长宽超过最大长度时，按图片长宽比例等比缩小
                        if (width > maxLength || height > maxLength) {

                            if (width > height) {
                                newWidth = maxLength;
                                newHeight = maxLength / ratio;
                            } else {
                                newWidth = maxLength * ratio;
                                newHeight = maxLength;
                            }
                        }
                        canvas.width = newWidth;
                        canvas.height = newHeight;
                        canvas.getContext("2d").drawImage(Img, 0, 0, newWidth, newHeight); //将图片绘制到canvas中
                        dataURL = canvas.toDataURL('image/jpeg', 0.5); //转换图片为dataURL
                        resolve(dataURL);
                    };
                });
                return p
            },
            // 移除图片
            remove(index, e) {
                e.stopPropagation(); //阻止
                this.files.splice(index, 1)
                setTimeout(() => {
                    this.$emit('removeFiles', index)
                }, 300)
                console.log(this.files)
            },
            //引入photoSwipe(可预览、滑动)
            initPhotoSwipeFromDOM(gallerySelector) {
                var parseThumbnailElements = function (el) {
                    var thumbElements = el.childNodes,
                        numNodes = thumbElements.length,
                        items = [],
                        figureEl,
                        linkEl,
                        size,
                        item;
                    for (var i = 0; i < numNodes - 1; i++) {
                        figureEl = thumbElements[i];
                        if (figureEl.nodeType !== 1) {
                            continue;
                        }
                        linkEl = figureEl.children[0];
                        var img = new Image();
                        img.src = linkEl.getAttribute('href');
                        linkEl.setAttribute('data-size', img.naturalWidth + 'x' + img.naturalHeight);
                        size = linkEl.getAttribute("data-size").split("x");
                        item = {
                            src: linkEl.getAttribute("href"),
                            w: parseInt(size[0], 10),
                            h: parseInt(size[1], 10)
                        };
                        if (figureEl.children.length > 1) {
                            item.title = figureEl.children[1].innerHTML;
                        }
                        if (linkEl.children.length > 0) {
                            item.msrc = linkEl.children[0].getAttribute("src");
                        }
                        item.el = figureEl;
                        items.push(item);
                    }
                    return items;
                };
                var closest = function closest(el, fn) {
                    return el && (fn(el) ? el : closest(el.parentNode, fn));
                };
                var onThumbnailsClick = function (e) {
                    e = e || window.event;
                    // e.preventDefault ? e.preventDefault() : (e.returnValue = false);
                    var eTarget = e.target || e.srcElement;
                    var clickedListItem = closest(eTarget, function (el, e) {
                        return el.tagName && el.tagName.toUpperCase() === "FIGURE";
                    });

                    if (!clickedListItem) {
                        return;
                    }
                    var clickedGallery = clickedListItem.parentNode,
                        childNodes = clickedListItem.parentNode.childNodes,
                        numChildNodes = childNodes.length,
                        nodeIndex = 0,
                        index;
                    for (var i = 0; i < numChildNodes; i++) {
                        if (childNodes[i].nodeType !== 1) {
                            continue;
                        }
                        if (childNodes[i] === clickedListItem) {
                            index = nodeIndex;
                            break;
                        }
                        nodeIndex++;
                    }

                    if (index >= 0) {
                        openPhotoSwipe(index, clickedGallery);
                    }
                    return false;
                };
                var photoswipeParseHash = function () {
                    var hash = window.location.hash.substring(1),
                        params = {};
                    if (hash.length < 5) {
                        return params;
                    }
                    var vars = hash.split("&");
                    for (var i = 0; i < vars.length; i++) {
                        if (!vars[i]) {
                            continue;
                        }
                        var pair = vars[i].split("=");
                        if (pair.length < 2) {
                            continue;
                        }
                        params[pair[0]] = pair[1];
                    }
                    if (params.gid) {
                        params.gid = parseInt(params.gid, 10);
                    }
                    return params;
                };

                var openPhotoSwipe = function (
                    index,
                    galleryElement,
                    disableAnimation,
                    fromURL
                ) {
                    var pswpElement = document.querySelectorAll(".pswp")[0],
                        gallery,
                        options,
                        items;
                    items = parseThumbnailElements(galleryElement);
                    options = {
                        history: false,
                        tapToClose: true,
                        galleryUID: galleryElement.getAttribute("data-pswp-uid"),
                        getThumbBoundsFn: function (index) {
                            var thumbnail = items[index].el.getElementsByTagName("img")[0],
                                pageYScroll =
                                    window.pageYOffset || document.documentElement.scrollTop,
                                rect = thumbnail.getBoundingClientRect();
                            return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
                        }
                    };
                    if (fromURL) {
                        if (options.galleryPIDs) {
                            for (var j = 0; j < items.length; j++) {
                                if (items[j].pid == index) {
                                    options.index = j;
                                    break;
                                }
                            }
                        } else {
                            options.index = parseInt(index, 10) - 1;
                        }
                    } else {
                        options.index = parseInt(index, 10);
                    }
                    if (isNaN(options.index)) {
                        return "";
                    }
                    if (disableAnimation) {
                        options.showAnimationDuration = 0;
                    }

                    gallery = new PhotoSwipe(
                        pswpElement,
                        PhotoSwipeUI_Default,
                        items,
                        options
                    );
                    gallery.init();
                };
                var galleryElements = document.querySelectorAll(gallerySelector);
                for (var i = 0, l = galleryElements.length; i < l; i++) {
                    galleryElements[i].setAttribute("data-pswp-uid", i + 1);
                    galleryElements[i].onclick = onThumbnailsClick;
                }
                var hashData = photoswipeParseHash();
                if (hashData.pid && hashData.gid) {
                    openPhotoSwipe(
                        hashData.pid,
                        galleryElements[hashData.gid - 1],
                        true,
                        true
                    );
                }
            },
            // 视频上传
            //上传前回调
            beforeUploadVideo(file) {
                var fileSize = file.size / 1024 / 1024 < 50;
                if (['video/mp4', 'video/ogg', 'video/flv', 'video/avi', 'video/wmv', 'video/rmvb', 'video/mov'].indexOf(file.type) == -1) {
                    layer.msg("请上传正确的视频格式");
                    return false;
                }
                if (!fileSize) {
                    layer.msg("视频大小不能超过50MB");
                    return false;
                }
                const Qs = require('qs');
                let that = this;
                let fd = new FormData()
                fd.append('file', file, 'fileName')
                this.axios.post(this.url,fd,{ headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },}, {
                }) .then(function (res) {
                    // this.islike = res.data.data.rows.total;
                    // that.pl = true;
                    // that.plText = '发布成功,等待管理员审核！'
                    that.videos = res.data.data
                    that.videoIds = res.data.data.id
                    that.videoURL = res.data.data.savePath
                    console.log(res.data.data.id)
                })
                    .catch(function (error) {
                        console.log(error);
                    });
                this.isShowUploadVideo = false;
            },
            //进度条
            uploadVideoProcess(event, file, fileList) {

                this.videoFlag = true;
                this.videoUploadPercent = file.percentage.toFixed(0) * 1;
            },
            //上传成功回调
            handleVideoSuccess(res, file) {
                this.isShowUploadVideo = true;
                this.videoFlag = false;
                this.videoUploadPercent = 0;
                console.log(file)
                //前台上传地址
                if (file.status == 'success' ) {
                    this.videoForm.showVideoPath = this.videos.savePath;
                    this.videoId = this.videos.id;
                } else {
                    layer.msg("上传失败，请重新上传");
                }

                //后台上传地址
                // if (res.Code == 0) {
                //     this.videoForm.showVideoPath = res.Data;
                // } else {
                //     layer.msg(res.Message);
                // }
            },
            upLoad:function(){
                let that =this;
                const Qs = require('qs');
                let params ={};
                if(that.radio == 'article'){
                    let arr = []
                    for(var i=0;i<that.files.length;i++){
                        arr.push(that.files[i].Id)
                    }
                    params= {
                        openId:that.openId,
                        style:that.radio,
                        content:that.content,
                        depart:0,
                        images:arr.toString()
                    };
                }else{
                    params= {
                        openId:that.openId,
                        style:that.radio,
                        content:that.content,
                        depart:0,
                        video:that.videoIds
                    };
                }

                console.log(params)
                // alert(params.video)
                // this.axios.post(this.getAjax+'/share/add', Qs.stringify(params),{ headers: {
                //         'Content-Type': 'application/x-www-form-urlencoded'
                //     },}, {
                // }) .then(function (res) {
                //     // this.islike = res.data.data.rows.total;
                //     that.pl = true;
                //     that.plText = '发布成功,等待管理员审核！'
                //     console.log(res)
                // })
                //     .catch(function (error) {
                //         console.log(error);
                //     });
            },
            alertBtn:function(){
                this.$router.push("/share")
                this.pl = false;
                this.plText = ''
            }
        },
        created(){
        },
        mounted(){
            document.querySelector('body').setAttribute('style', 'background:#fff')
            this.initPhotoSwipeFromDOM(".my-gallery");
            //异步插入的图片
            //     setTimeout(() => {
            //         this.img1.push('1.jpg')
            //     this.$previewRefresh()
            // }, 2000);
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
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409eff;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
    .video-avatar {
        width:90%;
        height: 3rem;
        position: relative;
        margin: 1rem auto;
    }
    .upload {width:7rem;height:.8rem;text-align: center;line-height: .8rem;border-radius: .2rem;color: #fff;font-size: .36rem;background: #fa5b55;
        position: relative;margin: auto;
    }
    .top {height:.9rem;color: #4c4c4c;font-size: .3rem;line-height: .9rem;}
    .text {width:6.6rem;height:2.8rem;border-radius: .2rem;background: #f5f5f5;color: #999;font-size: .26rem;padding: .2rem;
        border: none;resize:none;outline:none
    }
    .imgs {width:2.2rem;height:2.2rem;}
    .add {width:2.2rem;height:2.2rem;position: relative;}
    .add img {width:2.2rem;height:2.2rem;}
    .add input {position: absolute;top:0;left:0;width:2.2rem;height:2.2rem;opacity: 0;}
    #imgUploader {padding: 0 .24rem;position: relative;margin: .34rem 0;overflow: hidden;}
    figure {width:2.2rem;height:2.2rem;float:left;margin:0 .2rem .2rem 0;position: relative;}
    .file-list {width:100%;position: relative;overflow: hidden;}
    .thumbnails {width:110%;position: relative;overflow: hidden;}
    .thumbnail {width:2.2rem;height:2.2rem;float:left;}
    .file-remove {position: absolute;top:.1rem;right:.1rem;width:.3rem;height:.3rem;background: rgba(255,255,255,.3);border-radius: 50%;font-size: .3rem;text-align: center;color: red;}
</style>