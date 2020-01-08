<template>
    <div class="container" style="background: #f2f2f2;overflow: hidden;height:100%">
        <div class="course">
            <div style="width:100%;height:5px;background: #fff;"></div>
            <div class="courseLeft">
                <div v-for="(item,index) in category " :class="activeindex == index ? 'active':''" @click='changeIndex(index,item.id)'>{{item.name}}</div>
            </div>
            <div class="courseRight">
                <router-link class="courseList" :to="{path: '/courseList', query: { id: item.id }}"  v-for="item in list"><img :src="getImg+item.frontCover" alt="">
                    <div class="texts">{{item.name}}</div>
                </router-link>
                <div v-show="list.length==0" style="width:5rem;position: relative;margin:2rem auto 0;text-align: center;"><img src="@/assets/null.png" alt="" style="width:5rem;"></div>
            </div>
        </div>
        <!--<minShopBar v-if="showMinShopTab" />-->
    </div>
</template>

<script>
    import minShopBar  from '@/components/tabBar'
    export default {
        name: "index",
        data () {
            return {
                showMinShopTab: true,
                activeindex:0,
                list:[],
                category:{}
            };
        },
        components: {
            minShopBar
        },
        methods:{
            changeIndex(index,id){
                this.activeindex=index;
                localStorage.setItem('listId',id)
                this.axios({
                    type: 'get',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/course/category?pid='+id,    // 访问的后端接口地址
                    // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
                    params: {                // get请求使用params,post请求使用data(data为json格式)

                    }
                }).then(res => {
                    console.log(res.data.data)
                this.list = res.data.data;
            }).catch(err => {
                    console.log('请求错误')    // 请求错误弹出警告
            })
            },
            // 一级分类
            getCategory:function(){
                this.axios({
                    type: 'get',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/course/category',    // 访问的后端接口地址
                    // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
                    params: {                // get请求使用params,post请求使用data(data为json格式)

                    }
                }).then(res => {
                    console.log(res.data.data)
                    this.category = res.data.data;
                    localStorage.setItem('listId',this.category[0].id)
                this.axios({
                    type: 'get',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/course/category?pid='+this.category[0].id,    // 访问的后端接口地址
                    // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
                    params: {                // get请求使用params,post请求使用data(data为json格式)

                    }
                }).then(res => {
                    console.log(res.data.data)
                this.list = res.data.data;
            }).catch(err => {
                    console.log('请求错误')    // 请求错误弹出警告
            })
            }).catch(err => {
                    console.log('请求错误')    // 请求错误弹出警告
            })
            },
        },
        created(){
        },
        mounted(){
            this.getCategory();
        }
    }
</script>

<style scoped>
    .course {position: relative;width:100%;height:100%;}
    .courseLeft {width:2.1rem;height:100%;float:left;overflow-y: scroll;margin-bottom: 1rem;}
    .courseLeft div {width:100%;height:.8rem;text-align: center;line-height: .8rem;
        white-space:nowrap;
        text-overflow:ellipsis;
        -o-text-overflow:ellipsis;
        overflow: hidden;
        cursor: pointer;
        font-size: .26rem;
    }
    .courseLeft .active {background: #fff;position: relative;}
    .courseLeft .active:before {
        content: '';
        width:.08rem;
        height:100%;
        background: #fa5b55;
        position: absolute;
        top:0;
        left:0;
    }

    .courseRight {
        background: #fff;
        margin-left: 2.1rem;
        width: 4.9rem;
        height: 100%;
        padding: .15rem .24rem 0 .24rem;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    .courseList {
        display: block;
        width: 2.3rem;
        position: relative;
        overflow: hidden;
        float:left;
        margin-left: .15rem;
    }
    .texts {height:.7rem;line-height: .7rem;font-size: .28rem;color: #4c4c4c;text-align: center;}
    .courseList img {width:2.3rem;height:1.8rem;border-radius: .2rem;}
</style>