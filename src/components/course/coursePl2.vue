<template>
  <div class="container">
    <div class="top">
      <div class="top01">对{{names}}的评价</div>
      <div class="top02">您的评价决定了{{names}}的江湖地位，请认真点评！</div>
    </div>
    <div class="pf">
      <div class="pf01">评分</div>
      <div class="form-group clearfix" v-for="(item,indexs) in add" v-if="item.type == 1" >
        <label class="control-label col-md-4" >{{item.password}}.0分</label>
        <label class="control-labels">{{item.name}}</label>
        <div class="col-md-8">
          <div class="grade-box" v-if="item.password == 0" ><img v-for="(star,index) in stars000" v-bind:src="star.src" alt="星星图片" /></div>
          <div class="grade-box" v-if="item.password == 1" ><img v-for="(star,index) in stars001" v-bind:src="star.src" alt="星星图片" /></div>
          <div class="grade-box" v-if="item.password == 2" ><img v-for="(star,index) in stars002" v-bind:src="star.src" alt="星星图片" /></div>
          <div class="grade-box" v-if="item.password == 3" ><img v-for="(star,index) in stars003" v-bind:src="star.src" alt="星星图片" /></div>
          <div class="grade-box" v-if="item.password == 4" ><img v-for="(star,index) in stars004" v-bind:src="star.src" alt="星星图片" /></div>
          <div class="grade-box" v-if="item.password == 5" ><img v-for="(star,index) in stars005" v-bind:src="star.src" alt="星星图片" /></div>
        </div>
      </div>
      <div v-for="(item,indexs) in add" v-if="item.type == 2">
        <label class="control-labels">{{item.name}}</label>
        <textarea style="margin-top: .1rem;"  readonly v-model="item.password"></textarea>
      </div>
<!--      <div class="form-group clearfix">-->
<!--        <label class="control-label col-md-4">{{starNum1}}.0分</label>-->
<!--        <label class="control-labels">{{add[1].name}}</label>-->
<!--        <div class="col-md-8">-->
<!--          <div class="grade-box">-->
<!--            <img v-for="(star,index) in stars1" v-bind:src="star.src" v-on:click="rating2(index)" alt="星星图片" />-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="form-group clearfix">-->
<!--        <label class="control-label col-md-4">{{starNum2}}.0分</label>-->
<!--        <label class="control-labels">{{add[2].name}}</label>-->
<!--        <div class="col-md-8">-->
<!--          <div class="grade-box">-->
<!--            <img v-for="(star,index) in stars2" v-bind:src="star.src" v-on:click="rating3(index)" alt="星星图片" />-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
    <div class="pf" style="border-bottom: transparent;display: none;">
      <div class="pf01">您对本次评价的留言</div>
      <textarea readonly  v-model="textareas" ></textarea>
    </div>
    <div class="btns">
      <router-link id="pinglun" style="display: block;" class="btn" :to="{path: '/coursePl', query: { id: this.id ,courseId:this.courseId,name:this.names,evaluate:true}}">再次评价</router-link>
    </div>
    <div class="fixed" v-show="pl">
      <div class="alert">
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
        starOffImg:require('@/assets/img/teacher/iconxx01.png'),
      starOnImg:require('@/assets/img/teacher/iconxx02.png'),
        text:'',
        textPL0:'',
        textPL1:'',
        textPL2:'',
        openId:this.userId,
        pdId:localStorage.getItem('plId'),
        codes:this.$route.query.codes,
        id:this.$route.query.id,
        names:this.$route.query.name,
        courseId:this.$route.query.courseId,
        evaluates:this.$route.query.evaluate,
        showevaluates:'',
        appstars:{},
        appstarNum:{},
        stars000:[{src: starOnImg, active: false},{src: starOffImg, active: false},{src: starOffImg, active: false},{src: starOffImg, active: false},{src: starOffImg, active: false}],
        stars001:[{src: starOnImg, active: true},{src: starOffImg, active: false},{src: starOffImg, active: false},{src: starOffImg, active: false},{src: starOffImg, active: false}],
        stars002:[{src: starOnImg, active: true},{src: starOnImg, active: true},{src: starOffImg, active: false},{src: starOffImg, active: false},{src: starOffImg, active: false}],
        stars003:[{src: starOnImg, active: true},{src: starOnImg, active: true},{src: starOnImg, active: true},{src: starOffImg, active: false},{src: starOffImg, active: false}],
        stars004:[{src: starOnImg, active: true},{src: starOnImg, active: true},{src: starOnImg, active: true},{src: starOnImg, active: true},{src: starOffImg, active: false}],
        stars005:[{src: starOnImg, active: true},{src: starOnImg, active: true},{src: starOnImg, active: true},{src: starOnImg, active: true},{src: starOnImg, active: true}],
        // stars: [
        //   {src: starOffImg, active: false}
        // , {
        //   src: starOffImg,
        //   active: false
        // }, {
        //   src: starOffImg,
        //   active: false
        // },
        //   {
        //     src: starOffImg,
        //     active: false
        //   }, {
        //     src: starOffImg,
        //     active: false
        //   }
        // ],
        // starNum: 0,
        keyword:[],
        stars0: [{src: starOffImg, active: false}, {
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
        pl:false,
        plText:'',
        add:[{name:''}],
        textareas:''
      };
    },
    components: {
      minShopBar
    },
      methods:{

        question:function(){
          this.axios({
            type: 'get',     // 通过设置type，来选择是get还是post请求
            url: this.getAjax+'/activity/course/question?courseId='+this.courseId,    // 访问的后端接口地址
            // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
            params: {                // get请求使用params,post请求使用data(data为json格式)

            }
          }).then(res => {

            this.add = res.data.data;
            let startArr = [{src: this.starOffImg, active: false},{src: this.starOffImg, active: false},{src: this.starOffImg, active: false},{src: this.starOffImg, active: false},{src: this.starOffImg, active: false}]
            for(var i=0;i<res.data.data.length;i++){
              let objs = {}
              // this.keyword.push(res.data.data[i].keyword);
              objs['type'] = res.data.data[i].type
              objs['keyword'] = res.data.data[i].keyword
              if(res.data.data[i].type == 1){
                this.appstars['stars'+i] = startArr
                this.appstarNum['starNum'+i] = 0;
              }
              this.keyword.push(objs);
            }
            console.log(this.keyword)
            let that = this;
            this.axios({
              type: 'post',     // 通过设置type，来选择是get还是post请求
              url: that.getAjax+'/course/detail/'+that.courseId+'?openId='+that.openId,    // 访问的后端接口地址
              // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
              params: {                // get请求使用params,post请求使用data(data为json格式)

              }
            }).then(res => {
              var arr = []
              var newObj={}
              var obj =  JSON.parse(res.data.data.evaluate)
              that.textareas = res.data.data.content
              // this.showevaluates=  JSON.parse(res.data.data.evaluate)
              console.log(obj)
              for(var st in obj) {
                var oobj = {}
                oobj[st]= obj[st]
                arr.push(oobj)
              }
              console.log(arr)
              for(var i = 0 ; i < that.add.length ; i++){
                for(var aa = 0 ; aa < arr.length ; aa++){
                  if(that.add[i].keyword == Object.keys(arr[aa])[0]){
                    that.add[i].password = Object.values(arr[aa])[0]
                    // console.log(that.keyword[i][Object.keys(arr[aa])[0]] = Object.values(arr[aa])[0])
                  }
                }
              }
              // console.log( that.keyword)
              console.log( that.add)
              // for(var i=0;i<that.keyword.length;i++){
              //   for(j=0;j<5;j++){
              //     console.log(1)
              //   }
              // }
            }).catch(err => {
              console.log('请求错误')    // 请求错误弹出警告
            })
          }).catch(err => {
            console.log('请求错误')    // 请求错误弹出警告
          })
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
              this.stars0[i].src = starOffImg;
              this.stars0[i].active = false;
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
      evaluate:function(){
        let that =this;
        const Qs = require('qs');
        let params ={};
        let obj = {}
        for(var i=0;i<that.keyword.length;i++){
          if(that.keyword[i].type == 1){

            if(i==0){
              obj[that.keyword[0].keyword] = that.starNum0
            }else if(i==1){
              obj[that.keyword[1].keyword] = that.starNum1
            }else if(i==2){
              obj[that.keyword[2].keyword] = that.starNum2
            }

          }else{
            if(i==0){
              obj[that.keyword[0].keyword] = that.textPL0
            }else if(i==1){
              obj[that.keyword[1].keyword] = that.textPL1
            }else if(i==2){
              obj[that.keyword[2].keyword] = that.textPL2
            }
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
        // console.log(params)

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
        // this.$router.push("/")
        this.$router.back(-1)
        this.pl = false;
        this.plText = ''
      },
      // activityDetail:function(){
      //   this.axios({
      //     type: 'post',     // 通过设置type，来选择是get还是post请求
      //     url: this.getAjax+'/course/detail/'+this.courseId+'?openId='+this.openId,    // 访问的后端接口地址
      //     // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
      //     params: {                // get请求使用params,post请求使用data(data为json格式)
      //
      //     }
      //   }).then(res => {
      //     console.log(JSON.parse(res.data.data.evaluate))
      //     var arr = []
      //     var newObj={}
      //     var obj =  JSON.parse(res.data.data.evaluate)
      //     this.showevaluates=  JSON.parse(res.data.data.evaluate)
      //     // console.log(this.showevaluates)
      //   }).catch(err => {
      //     console.log('请求错误')    // 请求错误弹出警告
      //   })
      // },
    },
    created(){
    },
    mounted(){
      this.question();
      // if(this.evaluates){this.activityDetail()}
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
  /*.pf {border-bottom: 1px solid #e6e6e6;}*/
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
  .control-labels {font-size: .28rem;color: #4c4c4c;top:-.08rem;float:left;width:4.2rem;
    white-space:nowrap;
    text-overflow:ellipsis;
    -o-text-overflow:ellipsis;
    overflow: hidden;
  }
  textarea {height:2.2rem;padding: .3rem;font-size: .26rem;color: #999;width:6.4rem;border: none;background:#f7f7f7;
    resize: none;outline: none;border-radius: .2rem;
  }
  .btns {width:100%;position: relative;margin-top: 1rem;}
  .btn {
    width: 7.02rem;height:.8rem;text-align: center;line-height: .8rem;border-radius: .2rem;
    background: #fa5b55;font-size: .3rem;color: #fff;margin:auto;
  }
</style>
