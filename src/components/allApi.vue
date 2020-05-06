<script>

    var xhr = new XMLHttpRequest();
    // var  id='231';
    var  id=sessionStorage.getItem('userId')==null?'':sessionStorage.getItem('userId');
    var token = '';
    var that = this;
        function getCode(){
            var code = getUrlParam('code'); // 截取路径中的code，如果没有就去微信授权，如果已经获取到了就直接传code给后台获取openId
            // var code = ''; // 截取路径中的code，如果没有就去微信授权，如果已经获取到了就直接传code给后台获取openId
            var local = window.location.href;
            var APPID = "ww76673d8a0d7cd9d7"; // 企业微信
            if (code == null || code == "") {
                window.location.href =
                    "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
                    APPID +
                    "&redirect_uri=" +
                    encodeURIComponent(local) +
                    "&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect";
            } else {
                // xhr.open('GET', 'http://39.100.95.204:8080/api/home/activity', false);
                // xhr.open('GET', 'http://39.100.95.204:8080/api/auth/'+code, false);
                xhr.open('GET', ' https://trainingadmin.yunjiglobal.com/api/auth/'+code, false);
                xhr.onreadystatechange = function() {
                    // alert(1)
                    // readyState == 4说明请求已完成
                    if (xhr.readyState == 4 && xhr.status == 200) {
                        // alert('******3333********')
                        // alert(xhr)
                        // alert(JSON.parse(xhr.responseText).data.openId);
                        // alert(JSON.parse(xhr.responseText).data.data.openId +'22');
                      sessionStorage.setItem('userId',JSON.parse(xhr.responseText).data.openId);
                         id = sessionStorage.getItem('userId')
                        // id = JSON.parse(xhr.response).data.openId;
                        // // id = '2222';
                        // alert(id)
                        // // token = JSON.parse(xhr.response.data.token);
                        setTimeout(function () {
                            console.log("5.在ajax赋值后ajax外面  _STR 的值：" + id);
                        }, 100);
                        // return /id
                    }else {
                        alert('错误')
                    }
                }
                // if (method == 'POST') {
                //     //给指定的HTTP请求头赋值
                //     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                // }
                xhr.send()
                // this.getOpenId(code); //把code传给后台获取用户信息
                console.log(code);
            }
        }

    function getUrlParam(name){
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);

        return null;
    };

         if(id == ''){
            getCode();
         }
         // if(apps == ''){
         //   sessionStorage.setItem('userId','123')
         // }else{
         //   alert(1)
         // }
    var isIos = true;
    var u = navigator.userAgent;
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isIOS) {
        if (screen.height == 812 && screen.width == 375){
            //是iphoneX
            isIos = false
        }else{
            //不是iphoneX
            isIos = true
        }
    }
    export default{
        id,isIos
    }
</script>
