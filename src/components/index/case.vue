<template>
    <div class="container" style="padding-bottom: 1.5rem;">
      12312
    </div>
</template>

<script>
    import ChildrenItem from "./children"
    export default {
        data() {
            return {
                list: [
                    { id: "001", title: "这是父组件第一项内容" },
                    { id: "002", title: "这是父组件第二项内容" },
                    { id: "003", title: "这是父组件第三项内容" }
                ]
            }
        },
        components: {
            "children-item": ChildrenItem
        }
    }
</script>

<style scoped>
    .bg {position: relative;width:7.5rem;height:2.95rem;z-index: 1;}
    .bg img {width:100%;height:100%;}
    .sort {width:7.02rem;position: absolute;z-index: 2;height:2rem;background: #fff;top:2.15rem;left:.24rem;
        border-radius: .2rem;box-shadow: 0 2px 5px rgba(0,0,0,.2);
    }
    .sort .sortDetail {display: block;width:25%;float:left;text-align: center;color: #333;font-size: .26rem;}
    .sortDetail img {width:.8rem;height:.84rem;padding-top: .4rem;}
    .sortDetail p {margin-top: .1rem;}
    .show {position: relative;padding: 0 .24rem;margin-top: 1.5rem;}
    .courseTop {font-size: .32rem;color: #333;width:100%;height:.4rem;line-height: .4rem;}
    .courseTop .more {font-size: .26rem;color: #666;float:right;height:100%;}
    .more img {width:.13rem;height:.23rem;vertical-align: middle;}
    .detail {width:100%;position: relative;display: block;height:1.53rem;margin-top: .4rem;}
    .left {width:2.3rem;height:100%;float:left;position: relative;border-radius: .2rem;overflow: hidden;}
    .left .Img {width:2.3rem;height:100%;z-index: 1;}
    .left .active {width:1.12rem;height:.5rem;z-index: 2;position: absolute;top:-2px;left:-.1rem;}
    .right {margin-left: 2.5rem;width:4.5rem;height:100%;position: relative;}
    .right01 {font-size: .3rem;color: #333;
        white-space:nowrap;
        text-overflow:ellipsis;
        -o-text-overflow:ellipsis;
        overflow: hidden;
        }
    .right02 {font-size: .26rem;color: #666;height:.4rem;line-height: .4rem;margin-top: .2rem;
        white-space:nowrap;
        text-overflow:ellipsis;
        -o-text-overflow:ellipsis;
        overflow: hidden;
    }
    .right02 img {width:.22rem;height:.22rem;margin-right: .2rem;}
    .right03 {font-size: .26rem;color: #666;position: absolute;bottom:0;left:0;
        white-space:nowrap;
        text-overflow:ellipsis;
        -o-text-overflow:ellipsis;
        overflow: hidden;
        width:4.5rem;
    }
    .right03 img {width:.23rem;height:.23rem;margin-right: .2rem;}
    .right04 {font-size: .26rem;color: #666;position: absolute;bottom:0;left:0;width:100%;}
    .right04 span:last-child {float:right;}
    .right04 img {width:.3rem;height:.22rem;margin-right: .05rem;}
</style>
