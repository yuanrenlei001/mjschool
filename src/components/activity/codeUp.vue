<template>
    <div class="container" style="padding-bottom: 1.2rem;">
        <div class="list" v-for="item in list.signs"><img :src="item.user.avatar" alt=""><span>{{item.user.name}}</span><span>{{item.createTime}}</span></div>
    </div>
</template>

<script>
    import minShopBar  from '@/components/tabBar'
    export default {
        name: "index",
        data () {
            return {
                show:false,
                id:'',
                openId:this.userId,
                list:{applies:[],detail:[],files:[],signs:[],views:[],courses:[{teacher:{}}]},
                is_apply:''
            };
        },
        components: {
            minShopBar
        },
        methods:{
            activityDetail:function(){
                this.axios({
                    type: 'post',     // 通过设置type，来选择是get还是post请求
                    url: this.getAjax+'/activity/detail/'+localStorage.getItem('id')+'?openId='+this.openId,    // 访问的后端接口地址
                    // url: this.getAjax+'/newsRotatePic.do',    // 访问的后端接口地址
                    params: {                // get请求使用params,post请求使用data(data为json格式)

                    }
                }).then(res => {
                    this.list = res.data.data;
                }).catch(err => {
                    console.log('请求错误')    // 请求错误弹出警告
                })
            },
        },
        created(){
        },
        mounted(){
            this.activityDetail();
        }
    }
</script>

<style scoped>
    .list {padding: 0 .24rem;height:1rem;line-height: 1rem;border-bottom: 1px solid #f2f3f9;background: #fff;

    }
    .list img {width:.74rem;height:.74rem;border-radius: 50%;vertical-align: middle;}
    .list span:nth-child(2) {font-size: .32rem;margin-left: .4rem;}
    .list span:nth-child(3) {float:right;font-size: .26rem;color: #808080;}
</style>