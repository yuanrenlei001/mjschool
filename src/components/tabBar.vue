<template>
    <!-- 顶部tab栏 -->
    <div class="tabBar iphoneX" >
        <div class="tabBar-item" @click="go('/')">
            <img v-if="index==false" src="@/assets/img/index/home_ico1.png" alt="" class="icon">
            <img v-if="index==true" src="@/assets/img/index/home_ico2.png" alt="" class="icon">
            <span v-show="index==false">首页</span>
            <span v-show="index==true"  style="color:#fa5b55;">首页</span>
        </div>
        <!--<div class="tabBar-item" @click="go('/share')">-->
            <!--<img v-if="share==false" src="@/assets/img/index/share_ico1.png" alt="" class="icon">-->
            <!--<img v-if="share==true" src="@/assets/img/index/share_ico2.png" alt="" class="icon">-->
            <!--<span v-show="share==false">牛人分享</span>-->
            <!--<span v-show="share==true"  style="color:#fa5b55;">牛人分享</span>-->
        <!--</div>-->
        <div class="tabBar-item" @click="go('/user')">
            <img v-if="user==false"  src="@/assets/img/index/person_ico1.png" alt="" class="icon">
            <img v-if="user==true"  src="@/assets/img/index/person_ico2.png" alt="" class="icon">
            <span v-if="user==true"  style="color:#fa5b55;">个人中心</span>
            <span v-if="user==false">个人中心</span>
        </div>
    </div>
    <!--<div class="top-bar">-->
        <!--<van-tabbar v-model="minShopActiveBar" @change="handleChangeMinShopTab">-->
            <!--<van-tabbar-item-->
                    <!--icon="home-o"-->
                    <!--to="MinShopIndex"-->
            <!--&gt;首页</van-tabbar-item>-->
            <!--<van-tabbar-item-->
                    <!--icon="cluster-o"-->
                    <!--dot-->
                    <!--to="MinShopCate"-->
            <!--&gt;团购</van-tabbar-item>-->
            <!--<van-tabbar-item-->
                    <!--icon="shopping-cart-o"-->
                    <!--:info="cartLength"-->
                    <!--to="MinShopCart"-->
            <!--&gt;购物车</van-tabbar-item>-->
            <!--<van-tabbar-item-->
                    <!--icon="user-o"-->
                    <!--to="MinShopMe"-->
            <!--&gt;我的</van-tabbar-item>-->
        <!--</van-tabbar>-->
    <!--</div>-->
</template>

<script>
    export default {
        name: 'minShopTab',

        props: {
            cartLength: {
                type: Number
            }
        },

        data () {
            return {
                minShopActiveBar: '1',
                index:true,
                user:false,
                share:false,
            }
        },
        watch: {
            /**
             * 侦听路由的变化,控制底部tabbar的显示
             */
            '$route' (to, from) {
                console.log(to)
                // if(to == '#/user'){
                //     this.index = false;
                //     this.user = true;
                // }else {
                //     this.index = true;
                //     this.user = false;
                // }
            }
        },
        mounted () {
            /**
             * 判断当前页面是哪个页面,解决刷新时,tab默认为 1 的bug
             */
            const to = window.location.hash;
            if(to === '#/user' || to === '#/myActivity' || to==='#/application' || to === '#/myShare'){
                this.index = false;
                this.share = false
                this.user = true;
                document.querySelector('body').setAttribute('style', 'background:#fff')
            }else if(to === '#/share'){
                this.index = false;
                this.share = true;
                this.user = false;
            } else {
                this.index = true;
                this.user = false;
                this.share = false;
                document.querySelector('body').setAttribute('style', 'background:#fff')
            }
            console.log(this.index,this.user)
            // if (CURRENTHREF.includes('MinShopIndex')) {
            //     this.minShopActiveBar = 0
            // } else if (CURRENTHREF.includes('MinShopCate')) {
            //     this.minShopActiveBar = 1
            // } else if (CURRENTHREF.includes('MinShopCart')) {
            //     this.minShopActiveBar = 2
            // } else if (CURRENTHREF.includes('MinShopMe')) {
            //     this.minShopActiveBar = 3
            // }
        },
        methods: {
            go:function(e){
                this.$router.push(e)
            },
            handleChangeMinShopTab () {
                if (this.minShopActiveBar === 0) {
                    this.$router.push({
                        path: 'MinShopIndex',
                        replace: true
                    })
                } else if (this.minShopActiveBar === 1) {
                    this.$router.push({
                        path: 'MinShopCate',
                        replace: true
                    })
                } else if (this.minShopActiveBar === 2) {
                    this.$router.push({
                        path: 'MinShopCart',
                        replace: true
                    })
                } else if (this.minShopActiveBar === 3) {
                    this.$router.push({
                        path: 'MinShopMe',
                        replace: true
                    })
                }
            }
        }
    }
</script>

<style scoped>
    .iphoneX{
        padding-bottom: env(safe-area-inset-bottom);
    }
    .icon{
        width:.42rem;
        height: .42rem;
    }
    .tabBar{
        width:100%;
        position: fixed;
        bottom:0;
        padding-left: .1rem;
        padding-right: .1rem;
        margin-left:-4px;
        background:#F7F7FA;
        font-size:.24rem;
        color:#828282;
        box-shadow: 0 0 3px 3px rgba(0,0,0,.1);
        z-index: 999;
        height:.98rem;
      max-width: 750px;
    }

    .tabBar-item{
        float:left;
        width:50%;
        text-align: center;
        overflow: hidden;
        padding-top: .1rem;
    }
    /*.tabBar-item.active {color:#619e28;}*/
    .tabBar-item span {
        display: block;
    }
</style>
