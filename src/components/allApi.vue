<script>

    var xhr = new XMLHttpRequest();
    var  id='ou_5e2a22ab52616a45a6121f46a60c3f35';
    // var  id = localStorage.getItem('userId')==null?'':localStorage.getItem('userId');
    // var token = '';
    var that = this;
    // alert(id)
    if(id === ''){
        getCode();
    }

    function getCode(){
        var code = getUrlParam('code'); // 截取路径中的code，如果没有就去微信授权，如果已经获取到了就直接传code给后台获取openId
        // alert(code)
        // var code = ''; // 截取路径中的code，如果没有就去微信授权，如果已经获取到了就直接传code给后台获取openId
        // var local = window.location.href;
        // var local = "http://college.zhamengtec.com";
        var local = "https://training.yunjiglobal.com"
        // alert(code)
        var APPID = "cli_9fc6046fe0ad500b"; // 企业微信
        if (code == null || code == "") {
            // alert(1)
            window.location.href =
                "https://open.feishu.cn/open-apis/authen/v1/index?app_id=" +
                APPID +"&redirect_uri=" +
                encodeURIComponent(local) +
                "&state=STATE";
        } else {
            // alert(2)
            // xhr.open('GET', 'http://39.100.95.204:8080/api/home/activity', false);
            // xhr.open('GET', 'http://39.100.95.204:8080/api/auth/'+code, false);
            xhr.open('GET', 'https://trainingadmin.yunjiglobal.com/api/fsauth/'+code, false);
            // alert("http://college.zhamengtec.com:8080/api/fsauth/"+code)
            // xhr.open('GET', 'http://college.zhamengtec.com:8080/api/fsauth/'+code, false);
            xhr.onreadystatechange = function() {
                // alert(3)
                // alert(xhr)
                // readyState == 4说明请求已完成
                if (xhr.readyState == 4 && xhr.status == 200) {
                    // alert('******3333********')
                    // alert(xhr)
                    // alert(JSON.parse(xhr.responseText).data.openId);
                    // alert(JSON.parse(xhr.responseText).data.data.openId +'22');
                    localStorage.setItem('userId',JSON.parse(xhr.responseText).data.openId);
                    id = localStorage.getItem('userId')
                    var openid = JSON.parse(xhr.response).data.openId;
                    // // id = '2222';
                    // // token = JSON.parse(xhr.response.data.token);
                    // alert(openid)
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
