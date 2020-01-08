<template>
    <div class="container" style="padding-bottom: 2rem;">
        <form
                id="myForm"
                enctype="multipart/form-data"
                name="fileinfo"
                action=""
                target="uploadFrame"
        >
            <div class="img-file">
                <label for="imgFile" class="addbutton button-green"
                >选择视频</label
                >
                <input
                        @change="changeVideo"
                        id="imgFile"
                        class="upload_input"
                        type="file"
                        accept="video/*"
                />
            </div>
        </form>
        <video  controls="controls"  loop :src="getImg+videoPath" style="height:3rem;width:100%;margin: .5rem 0;"></video>
    </div>
</template>

<script>
    export default {
        name: "index",
        data () {
            return {
                form: {
                    url: ''
                },
                fileList: [],
                videoPath:'',
                fileLoading: false,
                ossParams: {
                    expireTime: '',
                    key: '',
                    dir: ''
                }
            };
        },
        components:{
            // minShopBar
        },
        mounted () {
            this.startScan()//进入页面就调取扫一扫
        },
        created(){
            this.startRecognize();
            this.startScan();
        },
        methods: {
            changeVideo() {
                let that = this;
                const Qs = require('qs');
                var file = document.getElementById("imgFile").files[0];
                that.file = file;
                var ids = this.ids;
                var formData = new FormData(); //构造一个 FormData，把后台需要发送的参数添加
                // 到FormData里面，这样就可以直接把formData作为参数传递了
                if (file) {
                    formData.append("file", file); //接口需要传递的参数
                }
                let potss = formData;
                let urls = this.getAjax+'/upload/video';
                this.axios.post(urls,potss,{ headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },}, {
                }) .then(function (res) {
                    that.videoPath = res.data.data.savePath;
                    that.videoshow = false;
                })
                    .catch(function (error) {
                        console.log(error);
                    });
                // axios
                //     .post(urls, potss)
                //     .then(function(res) {
                //         that.prames.videoUrl = res.data.info;
                //         that.videoshow = false;
                //     })
                //     .catch(function(err) {
                //         console.log(err);
                //     });
            }
        },
        created(){
        },
        mounted(){
            //异步插入的图片
            //     setTimeout(() => {
            //         this.img1.push('1.jpg')
            //     this.$previewRefresh()
            // }, 2000);
        }
    }
</script>
<style  scoped>
    .imgDiv{
        display: block;
        float: left;
        width: 80px;
        height: 100px;
        border: 2px solid black;}
    img{
        display: block;
        width: 50px;
        height: 80px;
    }
    p{
        font-size: 14px;
        text-align: center;
    }
</style>