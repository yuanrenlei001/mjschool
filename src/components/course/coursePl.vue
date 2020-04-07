<template>
  <div class="container">
    <div class="top">
      <div class="top01">对{{names}}的评价</div>
      <div class="top02">您的评价决定了{{names}}的江湖地位，请认真点评！</div>
    </div>
    <div class="pf">
      <div class="pf01">评分</div>
      <div class="form-group clearfix" v-for="(item,indexs) in add" v-if="item.type == 1">
        <label class="control-label col-md-4" v-if="indexs == 0">{{starNum0}}.0分</label>
        <label class="control-label col-md-4" v-if="indexs == 1">{{starNum1}}.0分</label>
        <label class="control-label col-md-4" v-if="indexs == 2">{{starNum2}}.0分</label>
        <label class="control-label col-md-4" v-if="indexs == 3">{{starNum3}}.0分</label>
        <label class="control-label col-md-4" v-if="indexs == 4">{{starNum4}}.0分</label>
        <label class="control-label col-md-4" v-if="indexs == 5">{{starNum5}}.0分</label>
        <label class="control-label col-md-4" v-if="indexs == 6">{{starNum6}}.0分</label>
        <label class="control-label col-md-4" v-if="indexs == 7">{{starNum7}}.0分</label>
        <label class="control-label col-md-4" v-if="indexs == 8">{{starNum8}}.0分</label>
        <label class="control-label col-md-4" v-if="indexs == 9">{{starNum9}}.0分</label>
        <label class="control-label col-md-4" v-if="indexs == 10">{{starNum10}}.0分</label>
        <label class="control-label col-md-4" v-if="indexs == 11">{{starNum11}}.0分</label>
        <label class="control-label col-md-4" v-if="indexs == 12">{{starNum12}}.0分</label>
        <label class="control-label col-md-4" v-if="indexs == 13">{{starNum13}}.0分</label>
        <label class="control-label col-md-4" v-if="indexs == 14">{{starNum14}}.0分</label>
        <label class="control-label col-md-4" v-if="indexs == 15">{{starNum15}}.0分</label>
        <label class="control-label col-md-4" v-if="indexs == 16">{{starNum16}}.0分</label>
        <label class="control-label col-md-4" v-if="indexs == 17">{{starNum17}}.0分</label>
        <label class="control-label col-md-4" v-if="indexs == 18">{{starNum18}}.0分</label>
        <label class="control-label col-md-4" v-if="indexs == 19">{{starNum19}}.0分</label>
        <label class="control-label col-md-4" v-if="indexs == 20">{{starNum20}}.0分</label>
        <label class="control-labels">{{item.name}}</label>
        <div class="col-md-8">
          <div class="grade-box" v-if="indexs == 0"><img v-for="(star,index) in stars0" v-bind:src="star.src"
                                                         v-on:click="rating(index)" alt="星星图片"/></div>
          <div class="grade-box" v-if="indexs == 1"><img v-for="(star,index) in stars1" v-bind:src="star.src"
                                                         v-on:click="rating2(index)" alt="星星图片"/></div>
          <div class="grade-box" v-if="indexs == 2"><img v-for="(star,index) in stars2" v-bind:src="star.src"
                                                         v-on:click="rating3(index)" alt="星星图片"/></div>
          <div class="grade-box" v-if="indexs == 3"><img v-for="(star,index) in stars3" v-bind:src="star.src"
                                                         v-on:click="rating4(index)" alt="星星图片"/></div>
          <div class="grade-box" v-if="indexs == 4"><img v-for="(star,index) in stars4" v-bind:src="star.src"
                                                         v-on:click="rating5(index)" alt="星星图片"/></div>
          <div class="grade-box" v-if="indexs == 5"><img v-for="(star,index) in stars5" v-bind:src="star.src"
                                                         v-on:click="rating6(index)" alt="星星图片"/></div>
          <div class="grade-box" v-if="indexs == 6"><img v-for="(star,index) in stars6" v-bind:src="star.src"
                                                         v-on:click="rating7(index)" alt="星星图片"/></div>
          <div class="grade-box" v-if="indexs == 7"><img v-for="(star,index) in stars7" v-bind:src="star.src"
                                                         v-on:click="rating8(index)" alt="星星图片"/></div>
          <div class="grade-box" v-if="indexs == 8"><img v-for="(star,index) in stars8" v-bind:src="star.src"
                                                         v-on:click="rating9(index)" alt="星星图片"/></div>
          <div class="grade-box" v-if="indexs == 9"><img v-for="(star,index) in stars9" v-bind:src="star.src"
                                                         v-on:click="rating10(index)" alt="星星图片"/></div>
          <div class="grade-box" v-if="indexs == 10"><img v-for="(star,index) in stars10" v-bind:src="star.src"
                                                          v-on:click="rating11(index)" alt="星星图片"/></div>
          <div class="grade-box" v-if="indexs == 11"><img v-for="(star,index) in stars11" v-bind:src="star.src"
                                                          v-on:click="rating12(index)" alt="星星图片"/></div>
          <div class="grade-box" v-if="indexs == 12"><img v-for="(star,index) in stars12" v-bind:src="star.src"
                                                          v-on:click="rating13(index)" alt="星星图片"/></div>
          <div class="grade-box" v-if="indexs == 13"><img v-for="(star,index) in stars13" v-bind:src="star.src"
                                                          v-on:click="rating14(index)" alt="星星图片"/></div>
          <div class="grade-box" v-if="indexs == 14"><img v-for="(star,index) in stars14" v-bind:src="star.src"
                                                          v-on:click="rating15(index)" alt="星星图片"/></div>
          <div class="grade-box" v-if="indexs == 15"><img v-for="(star,index) in stars15" v-bind:src="star.src"
                                                          v-on:click="rating16(index)" alt="星星图片"/></div>
          <div class="grade-box" v-if="indexs == 16"><img v-for="(star,index) in stars16" v-bind:src="star.src"
                                                          v-on:click="rating17(index)" alt="星星图片"/></div>
          <div class="grade-box" v-if="indexs == 17"><img v-for="(star,index) in stars17" v-bind:src="star.src"
                                                          v-on:click="rating18(index)" alt="星星图片"/></div>
          <div class="grade-box" v-if="indexs == 18"><img v-for="(star,index) in stars18" v-bind:src="star.src"
                                                          v-on:click="rating19(index)" alt="星星图片"/></div>
          <div class="grade-box" v-if="indexs == 19"><img v-for="(star,index) in stars19" v-bind:src="star.src"
                                                          v-on:click="rating20(index)" alt="星星图片"/></div>
          <div class="grade-box" v-if="indexs == 20"><img v-for="(star,index) in stars20" v-bind:src="star.src"
                                                          v-on:click="rating21(index)" alt="星星图片"/></div>
        </div>
      </div>
      <div v-for="(item,indexs) in add" v-if="item.type == 2">
        <label class="control-labels">{{item.name}}</label>
        <textarea style="margin-top: .1rem;" placeholder="请输入您的评价" v-if="indexs == 0" v-model="textPL0"></textarea>
        <textarea style="margin-top: .1rem;" placeholder="请输入您的评价" v-if="indexs == 1" v-model="textPL1"></textarea>
        <textarea style="margin-top: .1rem;" placeholder="请输入您的评价" v-if="indexs == 2" v-model="textPL2"></textarea>
        <textarea style="margin-top: .1rem;" placeholder="请输入您的评价" v-if="indexs == 3" v-model="textPL3"></textarea>
        <textarea style="margin-top: .1rem;" placeholder="请输入您的评价" v-if="indexs == 4" v-model="textPL4"></textarea>
        <textarea style="margin-top: .1rem;" placeholder="请输入您的评价" v-if="indexs == 5" v-model="textPL5"></textarea>
        <textarea style="margin-top: .1rem;" placeholder="请输入您的评价" v-if="indexs == 6" v-model="textPL6"></textarea>
        <textarea style="margin-top: .1rem;" placeholder="请输入您的评价" v-if="indexs == 7" v-model="textPL7"></textarea>
        <textarea style="margin-top: .1rem;" placeholder="请输入您的评价" v-if="indexs == 8" v-model="textPL8"></textarea>
        <textarea style="margin-top: .1rem;" placeholder="请输入您的评价" v-if="indexs == 9" v-model="textPL9"></textarea>
        <textarea style="margin-top: .1rem;" placeholder="请输入您的评价" v-if="indexs == 10" v-model="textPL10"></textarea>
        <textarea style="margin-top: .1rem;" placeholder="请输入您的评价" v-if="indexs == 11" v-model="textPL11"></textarea>
        <textarea style="margin-top: .1rem;" placeholder="请输入您的评价" v-if="indexs == 12" v-model="textPL12"></textarea>
        <textarea style="margin-top: .1rem;" placeholder="请输入您的评价" v-if="indexs == 13" v-model="textPL13"></textarea>
        <textarea style="margin-top: .1rem;" placeholder="请输入您的评价" v-if="indexs == 14" v-model="textPL14"></textarea>
        <textarea style="margin-top: .1rem;" placeholder="请输入您的评价" v-if="indexs == 15" v-model="textPL15"></textarea>
        <textarea style="margin-top: .1rem;" placeholder="请输入您的评价" v-if="indexs == 16" v-model="textPL16"></textarea>
        <textarea style="margin-top: .1rem;" placeholder="请输入您的评价" v-if="indexs == 17" v-model="textPL17"></textarea>
        <textarea style="margin-top: .1rem;" placeholder="请输入您的评价" v-if="indexs == 18" v-model="textPL18"></textarea>
        <textarea style="margin-top: .1rem;" placeholder="请输入您的评价" v-if="indexs == 19" v-model="textPL19"></textarea>
        <textarea style="margin-top: .1rem;" placeholder="请输入您的评价" v-if="indexs == 20" v-model="textPL20"></textarea>
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
<!--    <div class="pf" style="border-bottom: transparent;">-->
<!--      <div class="pf01">您对本次评价的留言</div>-->
<!--      <textarea placeholder="请输入您要留言的内容" v-model="text"></textarea>-->
<!--    </div>-->
    <div class="btns">
      <div class="btn" @click="evaluate()">提交</div>
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
  var starOffImg = require('@/assets/img/teacher/iconxx01.png')
  var starOnImg = require('@/assets/img/teacher/iconxx02.png')
  import minShopBar from '@/components/tabBar'

  export default {
    name: 'index',
    data () {
      return {
        codes:this.$route.query.codes,
        starOffImg: require('@/assets/img/teacher/iconxx01.png'),
        starOnImg: require('@/assets/img/teacher/iconxx02.png'),
        openId: this.userId,
        pdId: localStorage.getItem('plId'),
        id: this.$route.query.id,
        names: this.$route.query.name,
        courseId: this.$route.query.courseId,
        evaluates: this.$route.query.evaluate,
        showevaluates: '',
        appstars: {},
        appstarNum: {},
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
        keyword: [],
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
        stars2: [{src: starOffImg, active: false}, {src: starOffImg, active: false}, {
          src: starOffImg,
          active: false
        }, {src: starOffImg, active: false}, {src: starOffImg, active: false}],
        stars3: [{src: starOffImg, active: false}, {src: starOffImg, active: false}, {
          src: starOffImg,
          active: false
        }, {src: starOffImg, active: false}, {src: starOffImg, active: false}],
        stars4: [{src: starOffImg, active: false}, {src: starOffImg, active: false}, {
          src: starOffImg,
          active: false
        }, {src: starOffImg, active: false}, {src: starOffImg, active: false}],
        stars5: [{src: starOffImg, active: false}, {src: starOffImg, active: false}, {
          src: starOffImg,
          active: false
        }, {src: starOffImg, active: false}, {src: starOffImg, active: false}],
        stars6: [{src: starOffImg, active: false}, {src: starOffImg, active: false}, {
          src: starOffImg,
          active: false
        }, {src: starOffImg, active: false}, {src: starOffImg, active: false}],
        stars7: [{src: starOffImg, active: false}, {src: starOffImg, active: false}, {
          src: starOffImg,
          active: false
        }, {src: starOffImg, active: false}, {src: starOffImg, active: false}],
        stars8: [{src: starOffImg, active: false}, {src: starOffImg, active: false}, {
          src: starOffImg,
          active: false
        }, {src: starOffImg, active: false}, {src: starOffImg, active: false}],
        stars9: [{src: starOffImg, active: false}, {src: starOffImg, active: false}, {
          src: starOffImg,
          active: false
        }, {src: starOffImg, active: false}, {src: starOffImg, active: false}],
        stars10: [{src: starOffImg, active: false}, {src: starOffImg, active: false}, {
          src: starOffImg,
          active: false
        }, {src: starOffImg, active: false}, {src: starOffImg, active: false}],
        stars11: [{src: starOffImg, active: false}, {src: starOffImg, active: false}, {
          src: starOffImg,
          active: false
        }, {src: starOffImg, active: false}, {src: starOffImg, active: false}],
        stars12: [{src: starOffImg, active: false}, {src: starOffImg, active: false}, {
          src: starOffImg,
          active: false
        }, {src: starOffImg, active: false}, {src: starOffImg, active: false}],
        stars13: [{src: starOffImg, active: false}, {src: starOffImg, active: false}, {
          src: starOffImg,
          active: false
        }, {src: starOffImg, active: false}, {src: starOffImg, active: false}],
        stars14: [{src: starOffImg, active: false}, {src: starOffImg, active: false}, {
          src: starOffImg,
          active: false
        }, {src: starOffImg, active: false}, {src: starOffImg, active: false}],
        stars15: [{src: starOffImg, active: false}, {src: starOffImg, active: false}, {
          src: starOffImg,
          active: false
        }, {src: starOffImg, active: false}, {src: starOffImg, active: false}],
        stars16: [{src: starOffImg, active: false}, {src: starOffImg, active: false}, {
          src: starOffImg,
          active: false
        }, {src: starOffImg, active: false}, {src: starOffImg, active: false}],
        stars17: [{src: starOffImg, active: false}, {src: starOffImg, active: false}, {
          src: starOffImg,
          active: false
        }, {src: starOffImg, active: false}, {src: starOffImg, active: false}],
        stars18: [{src: starOffImg, active: false}, {src: starOffImg, active: false}, {
          src: starOffImg,
          active: false
        }, {src: starOffImg, active: false}, {src: starOffImg, active: false}],
        stars19: [{src: starOffImg, active: false}, {src: starOffImg, active: false}, {
          src: starOffImg,
          active: false
        }, {src: starOffImg, active: false}, {src: starOffImg, active: false}],
        stars20: [{src: starOffImg, active: false}, {src: starOffImg, active: false}, {
          src: starOffImg,
          active: false
        }, {src: starOffImg, active: false}, {src: starOffImg, active: false}],
        starNum0: 0,
        starNum1: 0,
        starNum2: 0,
        starNum3: 0,
        starNum4: 0,
        starNum5: 0,
        starNum6: 0,
        starNum7: 0,
        starNum8: 0,
        starNum9: 0,
        starNum10: 0,
        starNum11: 0,
        starNum12: 0,
        starNum13: 0,
        starNum14: 0,
        starNum15: 0,
        starNum16: 0,
        starNum17: 0,
        starNum18: 0,
        starNum19: 0,
        starNum20: 0,
        text: '',
        textPL0: '',
        textPL1: '',
        textPL2: '',
        textPL3: '',
        textPL4: '',
        textPL5: '',
        textPL6: '',
        textPL7: '',
        textPL8: '',
        textPL9: '',
        textPL10: '',
        textPL11: '',
        textPL12: '',
        textPL13: '',
        textPL14: '',
        textPL15: '',
        textPL16: '',
        textPL17: '',
        textPL18: '',
        textPL19: '',
        textPL20: '',
        pl: false,
        plText: '',
        add: [{name: ''}],
        is_evaluate: ''
      }
    },
    components: {
      minShopBar
    },
    methods: {

      question: function () {
        this.axios({
          type: 'get',     // 通过设置type，来选择是get还是post请求
          url: this.getAjax + '/activity/course/question?courseId=' + this.courseId,    // 访问的后端接口地址
          // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
          params: {                // get请求使用params,post请求使用data(data为json格式)

          }
        }).then(res => {

          this.add = res.data.data
          console.log(this.add)
          let startArr = [{src: this.starOffImg, active: false}, {
            src: this.starOffImg,
            active: false
          }, {src: this.starOffImg, active: false}, {src: this.starOffImg, active: false}, {
            src: this.starOffImg,
            active: false
          }]
          for (var i = 0; i < res.data.data.length; i++) {
            let objs = {}
            // this.keyword.push(res.data.data[i].keyword);
            objs['type'] = res.data.data[i].type
            objs['keyword'] = res.data.data[i].keyword
            if (res.data.data[i].type == 1) {
              this.appstars['stars' + i] = startArr
              this.appstarNum['starNum' + i] = 0
            }
            this.keyword.push(objs)
          }
          console.log(this.appstars['stars0'])
        }).catch(err => {
          console.log('请求错误')    // 请求错误弹出警告
        })
      },
      //评分
      rating: function (index) {
        var total = this.stars0.length //星星总数
        var idx = index + 1 //这代表选的第idx颗星-也代表应该显示的星星数量

        //进入if说明页面为初始状态
        if (this.starNum0 == 0) {
          this.starNum0 = idx
          for (var i = 0; i < idx; i++) {
            this.stars0[i].src = starOnImg
            this.stars0[i].active = true
          }
        } else {
          //如果再次点击当前选中的星级-仅取消掉当前星级，保留之前的。
          if (idx == this.starNum0) {
            for (var i = index; i < total; i++) {
              this.stars0[i].src = starOffImg
              this.stars0[i].active = false
            }
          }
          //如果小于当前最高星级，则直接保留当前星级
          if (idx < this.starNum0) {
            for (var i = idx; i < this.starNum0; i++) {
              this.stars0[i].src = starOffImg
              this.stars0[i].active = false
            }
          }
          //如果大于当前星级，则直接选到该星级
          if (idx > this.starNum0) {
            for (var i = 0; i < idx; i++) {
              this.stars0[i].src = starOnImg
              this.stars0[i].active = true
            }
          }

          var count = 0 //计数器-统计当前有几颗星
          for (var i = 0; i < total; i++) {
            if (this.stars0[i].active) {
              count++
            }
          }
          this.starNum0 = count
        }
      },
      rating2: function (index) {
        var total = this.stars1.length //星星总数
        var idx = index + 1 //这代表选的第idx颗星-也代表应该显示的星星数量

        //进入if说明页面为初始状态
        if (this.starNum1 == 0) {
          this.starNum1 = idx
          for (var i = 0; i < idx; i++) {
            this.stars1[i].src = starOnImg
            this.stars1[i].active = true
          }
        } else {
          //如果再次点击当前选中的星级-仅取消掉当前星级，保留之前的。
          if (idx == this.starNum1) {
            for (var i = index; i < total; i++) {
              this.stars1[i].src = starOffImg
              this.stars1[i].active = false
            }
          }
          //如果小于当前最高星级，则直接保留当前星级
          if (idx < this.starNum1) {
            for (var i = idx; i < this.starNum1; i++) {
              this.stars1[i].src = starOffImg
              this.stars1[i].active = false
            }
          }
          //如果大于当前星级，则直接选到该星级
          if (idx > this.starNum1) {
            for (var i = 0; i < idx; i++) {
              this.stars1[i].src = starOnImg
              this.stars1[i].active = true
            }
          }

          var count = 0 //计数器-统计当前有几颗星
          for (var i = 0; i < total; i++) {
            if (this.stars1[i].active) {
              count++
            }
          }
          this.starNum1 = count
        }
      },
      rating3: function (index) {
        var total = this.stars2.length //星星总数
        var idx = index + 1 //这代表选的第idx颗星-也代表应该显示的星星数量

        //进入if说明页面为初始状态
        if (this.starNum2 == 0) {
          this.starNum2 = idx
          for (var i = 0; i < idx; i++) {
            this.stars2[i].src = starOnImg
            this.stars2[i].active = true
          }
        } else {
          //如果再次点击当前选中的星级-仅取消掉当前星级，保留之前的。
          if (idx == this.starNum2) {
            for (var i = index; i < total; i++) {
              this.stars2[i].src = starOffImg
              this.stars2[i].active = false
            }
          }
          //如果小于当前最高星级，则直接保留当前星级
          if (idx < this.starNum2) {
            for (var i = idx; i < this.starNum2; i++) {
              this.stars2[i].src = starOffImg
              this.stars2[i].active = false
            }
          }
          //如果大于当前星级，则直接选到该星级
          if (idx > this.starNum2) {
            for (var i = 0; i < idx; i++) {
              this.stars2[i].src = starOnImg
              this.stars2[i].active = true
            }
          }

          var count = 0 //计数器-统计当前有几颗星
          for (var i = 0; i < total; i++) {
            if (this.stars2[i].active) {
              count++
            }
          }
          this.starNum2 = count
        }
      },
      rating4: function (index) {
        var total = this.stars3.length //星星总数
        var idx = index + 1 //这代表选的第idx颗星-也代表应该显示的星星数量

        //进入if说明页面为初始状态
        if (this.starNum3 == 0) {
          this.starNum3 = idx
          for (var i = 0; i < idx; i++) {
            this.stars3[i].src = starOnImg
            this.stars3[i].active = true
          }
        } else {
          //如果再次点击当前选中的星级-仅取消掉当前星级，保留之前的。
          if (idx == this.starNum3) {
            for (var i = index; i < total; i++) {
              this.stars3[i].src = starOffImg
              this.stars3[i].active = false
            }
          }
          //如果小于当前最高星级，则直接保留当前星级
          if (idx < this.starNum3) {
            for (var i = idx; i < this.starNum3; i++) {
              this.stars3[i].src = starOffImg
              this.stars3[i].active = false
            }
          }
          //如果大于当前星级，则直接选到该星级
          if (idx > this.starNum3) {
            for (var i = 0; i < idx; i++) {
              this.stars3[i].src = starOnImg
              this.stars3[i].active = true
            }
          }

          var count = 0 //计数器-统计当前有几颗星
          for (var i = 0; i < total; i++) {
            if (this.stars3[i].active) {
              count++
            }
          }
          this.starNum3 = count
        }
      },
      rating5: function (index) {
        var total = this.stars4.length //星星总数
        var idx = index + 1 //这代表选的第idx颗星-也代表应该显示的星星数量

        //进入if说明页面为初始状态
        if (this.starNum4 == 0) {
          this.starNum4 = idx
          for (var i = 0; i < idx; i++) {
            this.stars4[i].src = starOnImg
            this.stars4[i].active = true
          }
        } else {
          //如果再次点击当前选中的星级-仅取消掉当前星级，保留之前的。
          if (idx == this.starNum4) {
            for (var i = index; i < total; i++) {
              this.stars4[i].src = starOffImg
              this.stars4[i].active = false
            }
          }
          //如果小于当前最高星级，则直接保留当前星级
          if (idx < this.starNum4) {
            for (var i = idx; i < this.starNum4; i++) {
              this.stars4[i].src = starOffImg
              this.stars4[i].active = false
            }
          }
          //如果大于当前星级，则直接选到该星级
          if (idx > this.starNum4) {
            for (var i = 0; i < idx; i++) {
              this.stars4[i].src = starOnImg
              this.stars4[i].active = true
            }
          }

          var count = 0 //计数器-统计当前有几颗星
          for (var i = 0; i < total; i++) {
            if (this.stars4[i].active) {
              count++
            }
          }
          this.starNum4 = count
        }
      },
      rating6: function (index) {
        var total = this.stars5.length //星星总数
        var idx = index + 1 //这代表选的第idx颗星-也代表应该显示的星星数量

        //进入if说明页面为初始状态
        if (this.starNum5 == 0) {
          this.starNum5 = idx
          for (var i = 0; i < idx; i++) {
            this.stars5[i].src = starOnImg
            this.stars5[i].active = true
          }
        } else {
          //如果再次点击当前选中的星级-仅取消掉当前星级，保留之前的。
          if (idx == this.starNum5) {
            for (var i = index; i < total; i++) {
              this.stars5[i].src = starOffImg
              this.stars5[i].active = false
            }
          }
          //如果小于当前最高星级，则直接保留当前星级
          if (idx < this.starNum5) {
            for (var i = idx; i < this.starNum5; i++) {
              this.stars5[i].src = starOffImg
              this.stars5[i].active = false
            }
          }
          //如果大于当前星级，则直接选到该星级
          if (idx > this.starNum5) {
            for (var i = 0; i < idx; i++) {
              this.stars5[i].src = starOnImg
              this.stars5[i].active = true
            }
          }

          var count = 0 //计数器-统计当前有几颗星
          for (var i = 0; i < total; i++) {
            if (this.stars5[i].active) {
              count++
            }
          }
          this.starNum5 = count
        }
      },
      rating7: function (index) {
        var total = this.stars6.length //星星总数
        var idx = index + 1 //这代表选的第idx颗星-也代表应该显示的星星数量

        //进入if说明页面为初始状态
        if (this.starNum6 == 0) {
          this.starNum6 = idx
          for (var i = 0; i < idx; i++) {
            this.stars6[i].src = starOnImg
            this.stars6[i].active = true
          }
        } else {
          //如果再次点击当前选中的星级-仅取消掉当前星级，保留之前的。
          if (idx == this.starNum6) {
            for (var i = index; i < total; i++) {
              this.stars6[i].src = starOffImg
              this.stars6[i].active = false
            }
          }
          //如果小于当前最高星级，则直接保留当前星级
          if (idx < this.starNum6) {
            for (var i = idx; i < this.starNum6; i++) {
              this.stars6[i].src = starOffImg
              this.stars6[i].active = false
            }
          }
          //如果大于当前星级，则直接选到该星级
          if (idx > this.starNum6) {
            for (var i = 0; i < idx; i++) {
              this.stars6[i].src = starOnImg
              this.stars6[i].active = true
            }
          }

          var count = 0 //计数器-统计当前有几颗星
          for (var i = 0; i < total; i++) {
            if (this.stars6[i].active) {
              count++
            }
          }
          this.starNum6 = count
        }
      },
      rating8: function (index) {
        var total = this.stars7.length //星星总数
        var idx = index + 1 //这代表选的第idx颗星-也代表应该显示的星星数量

        //进入if说明页面为初始状态
        if (this.starNum7 == 0) {
          this.starNum7 = idx
          for (var i = 0; i < idx; i++) {
            this.stars7[i].src = starOnImg
            this.stars7[i].active = true
          }
        } else {
          //如果再次点击当前选中的星级-仅取消掉当前星级，保留之前的。
          if (idx == this.starNum7) {
            for (var i = index; i < total; i++) {
              this.stars7[i].src = starOffImg
              this.stars7[i].active = false
            }
          }
          //如果小于当前最高星级，则直接保留当前星级
          if (idx < this.starNum7) {
            for (var i = idx; i < this.starNum7; i++) {
              this.stars7[i].src = starOffImg
              this.stars7[i].active = false
            }
          }
          //如果大于当前星级，则直接选到该星级
          if (idx > this.starNum7) {
            for (var i = 0; i < idx; i++) {
              this.stars7[i].src = starOnImg
              this.stars7[i].active = true
            }
          }

          var count = 0 //计数器-统计当前有几颗星
          for (var i = 0; i < total; i++) {
            if (this.stars7[i].active) {
              count++
            }
          }
          this.starNum7 = count
        }
      },
      rating9: function (index) {
        var total = this.stars8.length //星星总数
        var idx = index + 1 //这代表选的第idx颗星-也代表应该显示的星星数量

        //进入if说明页面为初始状态
        if (this.starNum8 == 0) {
          this.starNum8 = idx
          for (var i = 0; i < idx; i++) {
            this.stars8[i].src = starOnImg
            this.stars8[i].active = true
          }
        } else {
          //如果再次点击当前选中的星级-仅取消掉当前星级，保留之前的。
          if (idx == this.starNum8) {
            for (var i = index; i < total; i++) {
              this.stars8[i].src = starOffImg
              this.stars8[i].active = false
            }
          }
          //如果小于当前最高星级，则直接保留当前星级
          if (idx < this.starNum8) {
            for (var i = idx; i < this.starNum8; i++) {
              this.stars8[i].src = starOffImg
              this.stars8[i].active = false
            }
          }
          //如果大于当前星级，则直接选到该星级
          if (idx > this.starNum8) {
            for (var i = 0; i < idx; i++) {
              this.stars8[i].src = starOnImg
              this.stars8[i].active = true
            }
          }

          var count = 0 //计数器-统计当前有几颗星
          for (var i = 0; i < total; i++) {
            if (this.stars8[i].active) {
              count++
            }
          }
          this.starNum8 = count
        }
      },
      rating10: function (index) {
        var total = this.stars9.length //星星总数
        var idx = index + 1 //这代表选的第idx颗星-也代表应该显示的星星数量

        //进入if说明页面为初始状态
        if (this.starNum9 == 0) {
          this.starNum9 = idx
          for (var i = 0; i < idx; i++) {
            this.stars9[i].src = starOnImg
            this.stars9[i].active = true
          }
        } else {
          //如果再次点击当前选中的星级-仅取消掉当前星级，保留之前的。
          if (idx == this.starNum9) {
            for (var i = index; i < total; i++) {
              this.stars9[i].src = starOffImg
              this.stars9[i].active = false
            }
          }
          //如果小于当前最高星级，则直接保留当前星级
          if (idx < this.starNum9) {
            for (var i = idx; i < this.starNum9; i++) {
              this.stars9[i].src = starOffImg
              this.stars9[i].active = false
            }
          }
          //如果大于当前星级，则直接选到该星级
          if (idx > this.starNum9) {
            for (var i = 0; i < idx; i++) {
              this.stars9[i].src = starOnImg
              this.stars9[i].active = true
            }
          }

          var count = 0 //计数器-统计当前有几颗星
          for (var i = 0; i < total; i++) {
            if (this.stars9[i].active) {
              count++
            }
          }
          this.starNum9 = count
        }
      },
      rating11: function (index) {
        var total = this.stars10.length //星星总数
        var idx = index + 1 //这代表选的第idx颗星-也代表应该显示的星星数量

        //进入if说明页面为初始状态
        if (this.starNum10 == 0) {
          this.starNum10 = idx
          for (var i = 0; i < idx; i++) {
            this.stars10[i].src = starOnImg
            this.stars10[i].active = true
          }
        } else {
          //如果再次点击当前选中的星级-仅取消掉当前星级，保留之前的。
          if (idx == this.starNum10) {
            for (var i = index; i < total; i++) {
              this.stars10[i].src = starOffImg
              this.stars10[i].active = false
            }
          }
          //如果小于当前最高星级，则直接保留当前星级
          if (idx < this.starNum10) {
            for (var i = idx; i < this.starNum10; i++) {
              this.stars10[i].src = starOffImg
              this.stars10[i].active = false
            }
          }
          //如果大于当前星级，则直接选到该星级
          if (idx > this.starNum10) {
            for (var i = 0; i < idx; i++) {
              this.stars10[i].src = starOnImg
              this.stars10[i].active = true
            }
          }

          var count = 0 //计数器-统计当前有几颗星
          for (var i = 0; i < total; i++) {
            if (this.stars10[i].active) {
              count++
            }
          }
          this.starNum10 = count
        }
      },
      rating12: function (index) {
        var total = this.stars11.length //星星总数
        var idx = index + 1 //这代表选的第idx颗星-也代表应该显示的星星数量

        //进入if说明页面为初始状态
        if (this.starNum11 == 0) {
          this.starNum11 = idx
          for (var i = 0; i < idx; i++) {
            this.stars11[i].src = starOnImg
            this.stars11[i].active = true
          }
        } else {
          //如果再次点击当前选中的星级-仅取消掉当前星级，保留之前的。
          if (idx == this.starNum11) {
            for (var i = index; i < total; i++) {
              this.stars11[i].src = starOffImg
              this.stars11[i].active = false
            }
          }
          //如果小于当前最高星级，则直接保留当前星级
          if (idx < this.starNum11) {
            for (var i = idx; i < this.starNum11; i++) {
              this.stars11[i].src = starOffImg
              this.stars11[i].active = false
            }
          }
          //如果大于当前星级，则直接选到该星级
          if (idx > this.starNum11) {
            for (var i = 0; i < idx; i++) {
              this.stars11[i].src = starOnImg
              this.stars11[i].active = true
            }
          }

          var count = 0 //计数器-统计当前有几颗星
          for (var i = 0; i < total; i++) {
            if (this.stars11[i].active) {
              count++
            }
          }
          this.starNum11 = count
        }
      },
      rating13: function (index) {
        var total = this.stars12.length //星星总数
        var idx = index + 1 //这代表选的第idx颗星-也代表应该显示的星星数量

        //进入if说明页面为初始状态
        if (this.starNum12 == 0) {
          this.starNum12 = idx
          for (var i = 0; i < idx; i++) {
            this.stars12[i].src = starOnImg
            this.stars12[i].active = true
          }
        } else {
          //如果再次点击当前选中的星级-仅取消掉当前星级，保留之前的。
          if (idx == this.starNum12) {
            for (var i = index; i < total; i++) {
              this.stars12[i].src = starOffImg
              this.stars12[i].active = false
            }
          }
          //如果小于当前最高星级，则直接保留当前星级
          if (idx < this.starNum12) {
            for (var i = idx; i < this.starNum12; i++) {
              this.stars12[i].src = starOffImg
              this.stars12[i].active = false
            }
          }
          //如果大于当前星级，则直接选到该星级
          if (idx > this.starNum12) {
            for (var i = 0; i < idx; i++) {
              this.stars12[i].src = starOnImg
              this.stars12[i].active = true
            }
          }

          var count = 0 //计数器-统计当前有几颗星
          for (var i = 0; i < total; i++) {
            if (this.stars12[i].active) {
              count++
            }
          }
          this.starNum12 = count
        }
      },
      rating14: function (index) {
        var total = this.stars13.length //星星总数
        var idx = index + 1 //这代表选的第idx颗星-也代表应该显示的星星数量

        //进入if说明页面为初始状态
        if (this.starNum13 == 0) {
          this.starNum13 = idx
          for (var i = 0; i < idx; i++) {
            this.stars13[i].src = starOnImg
            this.stars13[i].active = true
          }
        } else {
          //如果再次点击当前选中的星级-仅取消掉当前星级，保留之前的。
          if (idx == this.starNum13) {
            for (var i = index; i < total; i++) {
              this.stars13[i].src = starOffImg
              this.stars13[i].active = false
            }
          }
          //如果小于当前最高星级，则直接保留当前星级
          if (idx < this.starNum13) {
            for (var i = idx; i < this.starNum13; i++) {
              this.stars13[i].src = starOffImg
              this.stars13[i].active = false
            }
          }
          //如果大于当前星级，则直接选到该星级
          if (idx > this.starNum13) {
            for (var i = 0; i < idx; i++) {
              this.stars13[i].src = starOnImg
              this.stars13[i].active = true
            }
          }

          var count = 0 //计数器-统计当前有几颗星
          for (var i = 0; i < total; i++) {
            if (this.stars13[i].active) {
              count++
            }
          }
          this.starNum13 = count
        }
      },
      rating15: function (index) {
        var total = this.stars14.length //星星总数
        var idx = index + 1 //这代表选的第idx颗星-也代表应该显示的星星数量

        //进入if说明页面为初始状态
        if (this.starNum14 == 0) {
          this.starNum14 = idx
          for (var i = 0; i < idx; i++) {
            this.stars14[i].src = starOnImg
            this.stars14[i].active = true
          }
        } else {
          //如果再次点击当前选中的星级-仅取消掉当前星级，保留之前的。
          if (idx == this.starNum14) {
            for (var i = index; i < total; i++) {
              this.stars14[i].src = starOffImg
              this.stars14[i].active = false
            }
          }
          //如果小于当前最高星级，则直接保留当前星级
          if (idx < this.starNum14) {
            for (var i = idx; i < this.starNum14; i++) {
              this.stars14[i].src = starOffImg
              this.stars14[i].active = false
            }
          }
          //如果大于当前星级，则直接选到该星级
          if (idx > this.starNum14) {
            for (var i = 0; i < idx; i++) {
              this.stars14[i].src = starOnImg
              this.stars14[i].active = true
            }
          }

          var count = 0 //计数器-统计当前有几颗星
          for (var i = 0; i < total; i++) {
            if (this.stars14[i].active) {
              count++
            }
          }
          this.starNum14 = count
        }
      },
      rating16: function (index) {
        var total = this.stars15.length //星星总数
        var idx = index + 1 //这代表选的第idx颗星-也代表应该显示的星星数量

        //进入if说明页面为初始状态
        if (this.starNum15 == 0) {
          this.starNum15 = idx
          for (var i = 0; i < idx; i++) {
            this.stars15[i].src = starOnImg
            this.stars15[i].active = true
          }
        } else {
          //如果再次点击当前选中的星级-仅取消掉当前星级，保留之前的。
          if (idx == this.starNum15) {
            for (var i = index; i < total; i++) {
              this.stars15[i].src = starOffImg
              this.stars15[i].active = false
            }
          }
          //如果小于当前最高星级，则直接保留当前星级
          if (idx < this.starNum15) {
            for (var i = idx; i < this.starNum15; i++) {
              this.stars15[i].src = starOffImg
              this.stars15[i].active = false
            }
          }
          //如果大于当前星级，则直接选到该星级
          if (idx > this.starNum15) {
            for (var i = 0; i < idx; i++) {
              this.stars15[i].src = starOnImg
              this.stars15[i].active = true
            }
          }

          var count = 0 //计数器-统计当前有几颗星
          for (var i = 0; i < total; i++) {
            if (this.stars15[i].active) {
              count++
            }
          }
          this.starNum15 = count
        }
      },
      rating17: function (index) {
        var total = this.stars16.length //星星总数
        var idx = index + 1 //这代表选的第idx颗星-也代表应该显示的星星数量

        //进入if说明页面为初始状态
        if (this.starNum16 == 0) {
          this.starNum16 = idx
          for (var i = 0; i < idx; i++) {
            this.stars16[i].src = starOnImg
            this.stars16[i].active = true
          }
        } else {
          //如果再次点击当前选中的星级-仅取消掉当前星级，保留之前的。
          if (idx == this.starNum16) {
            for (var i = index; i < total; i++) {
              this.stars16[i].src = starOffImg
              this.stars16[i].active = false
            }
          }
          //如果小于当前最高星级，则直接保留当前星级
          if (idx < this.starNum16) {
            for (var i = idx; i < this.starNum16; i++) {
              this.stars16[i].src = starOffImg
              this.stars16[i].active = false
            }
          }
          //如果大于当前星级，则直接选到该星级
          if (idx > this.starNum16) {
            for (var i = 0; i < idx; i++) {
              this.stars16[i].src = starOnImg
              this.stars16[i].active = true
            }
          }

          var count = 0 //计数器-统计当前有几颗星
          for (var i = 0; i < total; i++) {
            if (this.stars16[i].active) {
              count++
            }
          }
          this.starNum16 = count
        }
      },
      rating18: function (index) {
        var total = this.stars17.length //星星总数
        var idx = index + 1 //这代表选的第idx颗星-也代表应该显示的星星数量

        //进入if说明页面为初始状态
        if (this.starNum17 == 0) {
          this.starNum17 = idx
          for (var i = 0; i < idx; i++) {
            this.stars17[i].src = starOnImg
            this.stars17[i].active = true
          }
        } else {
          //如果再次点击当前选中的星级-仅取消掉当前星级，保留之前的。
          if (idx == this.starNum17) {
            for (var i = index; i < total; i++) {
              this.stars17[i].src = starOffImg
              this.stars17[i].active = false
            }
          }
          //如果小于当前最高星级，则直接保留当前星级
          if (idx < this.starNum17) {
            for (var i = idx; i < this.starNum17; i++) {
              this.stars17[i].src = starOffImg
              this.stars17[i].active = false
            }
          }
          //如果大于当前星级，则直接选到该星级
          if (idx > this.starNum17) {
            for (var i = 0; i < idx; i++) {
              this.stars17[i].src = starOnImg
              this.stars17[i].active = true
            }
          }

          var count = 0 //计数器-统计当前有几颗星
          for (var i = 0; i < total; i++) {
            if (this.stars17[i].active) {
              count++
            }
          }
          this.starNum17 = count
        }
      },
      rating19: function (index) {
        var total = this.stars18.length //星星总数
        var idx = index + 1 //这代表选的第idx颗星-也代表应该显示的星星数量

        //进入if说明页面为初始状态
        if (this.starNum18 == 0) {
          this.starNum18 = idx
          for (var i = 0; i < idx; i++) {
            this.stars18[i].src = starOnImg
            this.stars18[i].active = true
          }
        } else {
          //如果再次点击当前选中的星级-仅取消掉当前星级，保留之前的。
          if (idx == this.starNum18) {
            for (var i = index; i < total; i++) {
              this.stars18[i].src = starOffImg
              this.stars18[i].active = false
            }
          }
          //如果小于当前最高星级，则直接保留当前星级
          if (idx < this.starNum18) {
            for (var i = idx; i < this.starNum18; i++) {
              this.stars18[i].src = starOffImg
              this.stars18[i].active = false
            }
          }
          //如果大于当前星级，则直接选到该星级
          if (idx > this.starNum18) {
            for (var i = 0; i < idx; i++) {
              this.stars18[i].src = starOnImg
              this.stars18[i].active = true
            }
          }

          var count = 0 //计数器-统计当前有几颗星
          for (var i = 0; i < total; i++) {
            if (this.stars18[i].active) {
              count++
            }
          }
          this.starNum18 = count
        }
      },
      rating20: function (index) {
        var total = this.stars19.length //星星总数
        var idx = index + 1 //这代表选的第idx颗星-也代表应该显示的星星数量

        //进入if说明页面为初始状态
        if (this.starNum19 == 0) {
          this.starNum19 = idx
          for (var i = 0; i < idx; i++) {
            this.stars19[i].src = starOnImg
            this.stars19[i].active = true
          }
        } else {
          //如果再次点击当前选中的星级-仅取消掉当前星级，保留之前的。
          if (idx == this.starNum19) {
            for (var i = index; i < total; i++) {
              this.stars19[i].src = starOffImg
              this.stars19[i].active = false
            }
          }
          //如果小于当前最高星级，则直接保留当前星级
          if (idx < this.starNum19) {
            for (var i = idx; i < this.starNum19; i++) {
              this.stars19[i].src = starOffImg
              this.stars19[i].active = false
            }
          }
          //如果大于当前星级，则直接选到该星级
          if (idx > this.starNum19) {
            for (var i = 0; i < idx; i++) {
              this.stars19[i].src = starOnImg
              this.stars19[i].active = true
            }
          }

          var count = 0 //计数器-统计当前有几颗星
          for (var i = 0; i < total; i++) {
            if (this.stars19[i].active) {
              count++
            }
          }
          this.starNum19 = count
        }
      },
      evaluate: function () {
        let that = this
        const Qs = require('qs')
        let params = {}
        let obj = {}
        for (var i = 0; i < that.keyword.length; i++) {
          if (that.keyword[i].type == 1) {

            if (i == 0) {
              obj[that.keyword[0].keyword] = that.starNum0
            } else if (i == 1) {
              obj[that.keyword[1].keyword] = that.starNum1
            } else if (i == 2) {
              obj[that.keyword[2].keyword] = that.starNum2
            } else if (i == 3) {
              obj[that.keyword[3].keyword] = that.starNum3
            } else if (i == 4) {
              obj[that.keyword[4].keyword] = that.starNum4
            } else if (i == 5) {
              obj[that.keyword[5].keyword] = that.starNum5
            } else if (i == 6) {
              obj[that.keyword[6].keyword] = that.starNum6
            } else if (i == 7) {
              obj[that.keyword[7].keyword] = that.starNum7
            } else if (i == 8) {
              obj[that.keyword[8].keyword] = that.starNum8
            } else if (i == 9) {
              obj[that.keyword[9].keyword] = that.starNum9
            } else if (i == 10) {
              obj[that.keyword[10].keyword] = that.starNum10
            } else if (i == 11) {
              obj[that.keyword[11].keyword] = that.starNum11
            } else if (i == 12) {
              obj[that.keyword[12].keyword] = that.starNum12
            } else if (i == 13) {
              obj[that.keyword[13].keyword] = that.starNum13
            } else if (i == 14) {
              obj[that.keyword[14].keyword] = that.starNum14
            } else if (i == 15) {
              obj[that.keyword[15].keyword] = that.starNum15
            } else if (i == 16) {
              obj[that.keyword[16].keyword] = that.starNum16
            } else if (i == 17) {
              obj[that.keyword[17].keyword] = that.starNum17
            } else if (i == 18) {
              obj[that.keyword[18].keyword] = that.starNum18
            } else if (i == 19) {
              obj[that.keyword[19].keyword] = that.starNum19
            } else if (i == 20) {
              obj[that.keyword[20].keyword] = that.starNum20
            }

          } else {
            if (i == 0) {
              obj[that.keyword[0].keyword] = that.textPL0
            } else if (i == 1) {
              obj[that.keyword[1].keyword] = that.textPL1
            } else if (i == 2) {
              obj[that.keyword[2].keyword] = that.textPL2
            }else if(i==3){
             obj[that.keyword[3].keyword] = that.textPL3
            }else if(i==4){
              obj[that.keyword[4].keyword] = that.textPL4
            }else if(i==5){
              obj[that.keyword[5].keyword] = that.textPL5
            }else if(i==6){
              obj[that.keyword[6].keyword] = that.textPL6
            }else if(i==7){
              obj[that.keyword[7].keyword] = that.textPL7
            }else if(i==8){
              obj[that.keyword[8].keyword] = that.textPL8
            }else if(i==9){
              obj[that.keyword[9].keyword] = that.textPL9
            }else if(i==10){
              obj[that.keyword[10].keyword] = that.textPL10
            }else if(i==11){
              obj[that.keyword[11].keyword] = that.textPL11
            }else if(i==12){
              obj[that.keyword[12].keyword] = that.textPL12
            }else if(i==13){
              obj[that.keyword[13].keyword] = that.textPL13
            }else if(i==14){
              obj[that.keyword[14].keyword] = that.textPL14
            }else if(i==15){
              obj[that.keyword[15].keyword] = that.textPL15
            }
            else if(i==16){
                obj[that.keyword[16].keyword] = that.textPL16
            }else if(i==17){
                obj[that.keyword[17].keyword] = that.textPL17
            }else if(i==18){
                obj[that.keyword[18].keyword] = that.textPL18
            }else if(i==19){
                obj[that.keyword[19].keyword] = that.textPL19
            }else if(i==20){
                obj[that.keyword[20].keyword] = that.textPL20
            }



          }
        }
        params = {
          openId: that.openId,
          teacherId: that.id,
          courseId: that.courseId,
          content: that.text == '' ? '您没有对该导师留言' : that.text,
          // attitudeCount:that.starNum0,
          // shareCount:that.starNum1,
          // clotheCount:that.starNum2,
          question: JSON.stringify(obj)
        }
        console.log(params)

        this.axios.post(this.getAjax + '/activity/evaluate?', Qs.stringify(params), {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
        }, {}).then(function (res) {
          // this.islike = res.data.data.rows.total;
          that.pl = true
          that.plText = '评论成功！'
          console.log(res)
        })
          .catch(function (error) {
            console.log(error)
          })
      },
      alertBtn: function () {
        // this.$router.push("/")
        if(this.codes){
          this.$router.push({path:'/coursePl2',query:{ id: this.id ,courseId:this.courseId,name:this.name,evaluate:true,codes:true}})
        }else{
          if (this.is_evaluate == 1) {
            // alert(this.is_evaluate)
            this.$router.go(-2)
          } else {
            // alert(this.is_evaluate)
            this.$router.go(-1)
          }
        }

        this.pl = false
        this.plText = ''
      },
      activityDetail: function () {
        this.axios({
          type: 'post',     // 通过设置type，来选择是get还是post请求
          url: this.getAjax + '/course/detail/' + this.courseId + '?openId=' + this.openId,    // 访问的后端接口地址
          // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
          params: {                // get请求使用params,post请求使用data(data为json格式)

          }
        }).then(res => {
          console.log(JSON.parse(res.data.data.evaluate))
          var arr = []
          var newObj = {}
          var obj = JSON.parse(res.data.data.evaluate)
          this.showevaluates = JSON.parse(res.data.data.evaluate)
          // console.log(this.showevaluates)
        }).catch(err => {
          console.log('请求错误')    // 请求错误弹出警告
        })
      },
    },
    created () {
    },
    mounted () {
      this.question()
      console.log(this.evaluates)
      if (this.evaluates) {
        this.activityDetail()
        this.is_evaluate = 1
      } else {
        this.is_evaluate = 0
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

  .container {
    padding: 0 .24rem;
  }

  .top {
    height: 1.4rem;
    border-bottom: 1px solid #e6e6e6;
  }

  .top01 {
    height: .8rem;
    line-height: .8rem;
    font-size: .3rem;
    color: #4c4c4c;
    position: relative;
    padding-left: .45rem;
  }

  .top01:before {
    content: '';
    width: .26rem;
    height: .33rem;
    background-image: url("../../assets/icon001.png");
    background-repeat: no-repeat;
    background-size: .26rem .33rem;
    position: absolute;
    top: .2rem;
    left: 0;
  }

  .top02 {
    font-size: .26rem;
    color: #666;
    padding-left: .45rem;
  }

  /*.pf {border-bottom: 1px solid #e6e6e6;}*/
  .pf01 {
    height: .9rem;
    line-height: .9rem;
    font-size: .3rem;
    color: #4c4c4c;
    position: relative;
    padding-left: .2rem;
  }

  .pf01:before {
    content: '';
    width: .06rem;
    height: .28rem;
    background: #fa5b55;
    position: absolute;
    top: .3rem;
    left: 0;
  }

  .form-group {
    position: relative;
    height: .8rem;
    line-height: .8rem;
  }

  .form-group img {
    width: .35rem;
    height: .33rem;
  }

  .control-label {
    color: #f4a409;
    font-size: .28rem;
    top: -.08rem;
    float: right;
  }

  .col-md-8 {
    margin: 0 auto;
    position: relative;
    font-size: .24rem;
    display: block;
  }

  .control-labels {
    font-size: .28rem;
    color: #4c4c4c;
    top: -.08rem;
    float: left;
    width: 4.2rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    overflow: hidden;
  }

  textarea {
    height: 2.2rem;
    padding: .3rem;
    font-size: .26rem;
    color: #999;
    width: 6.4rem;
    border: none;
    background: #f7f7f7;
    resize: none;
    outline: none;
    border-radius: .2rem;
  }

  .btns {
    width: 100%;
    background: #f2f3f9;
    position: relative;
    margin-top: 1rem;
  }

  .btn {
    width: 7.02rem;
    height: .8rem;
    text-align: center;
    line-height: .8rem;
    border-radius: .2rem;
    background: #fa5b55;
    font-size: .3rem;
    color: #fff;
    margin: auto;
  }
</style>
