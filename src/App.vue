<template>
  <div id="app">
    <router-view/>

  </div>
</template>

<script>
    import rem from './adaptive-version2.js'
    export default {
        name: 'App',
        data () {
            return {
                // showMinShopTab: true
            }
        },
        methods:{
        },
        mounted(){
        }
    }
</script>
<style>

  /*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*margin: 0;*/
  /*padding: 0;*/
  /*}*/
  html,body,#app {
    width: 100%;
    height:100%;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    position: relative;
    height:100%;
  }
  a {
    text-decoration: none;
  }
  p {margin: 0;padding: 0;}
  ul,li{ padding:0;margin:0;list-style:none}
  .alert {width:5rem;background: #fff;position: relative;margin:60% auto 0;font-size: .28rem;height:3rem;border-radius: .2rem;}
  .titles ,.alerts,.alertBtn{height:1rem;line-height: 1rem;font-size: .28rem;text-align: center;}
</style>
