
<template>
<div class="wrap">
     <!-- <top></top> -->
    <div class="login">
        <div class="login-inner">
            <!-- <img class="title-logo" src="../assets/logo2.png"> -->
            <div class="login-form">
                <h2><span>登录</span></h2>
                <ul>
                    <li>
                        <input id="user" class="user" type="text" placeholder="请输入手机号" name="user" v-model="users.phone">
                        <label class="label-img" for="user"><img src="../assets/user1.png" alt=""></label>
                        <label class="label-error" for="user"><div class="text-error">11位手机号</div></label>
                    </li>
                    <li>
                        <input id="key" class="key" type="password" placeholder="请输入密码" name="pwd" v-model="users.pwd">
                        <label class="label-img" for="key"><img src="../assets/key.png" alt=""></label>
                        <label class="label-error" for="key"><div class="text-error">首字母大写且不小于六位</div></label>
                    </li>
                </ul>
                <div class="error hide">输入错误，请检查手机号和密码格式</div>
                <div class="login-tab1">
                    <div class="login-tab1-item1">
                        <button type="" class="btn-login" @click="logins">登录</button>
                        不是会员？
                        <a href="#"  @click="regst">去注册</a>
                    </div>
                    <div class="login-tab1-item2">
                        <a href="#">忘记密码</a>
                    </div>
                </div>
                <div class="login-tab2">
                    <a href="#">
                        <img src="../assets/weixin.png" alt="">
                        微信登录
                    </a>
                    <a href="#">
                        <img src="../assets/zhifubao.png" alt="">
                        支付宝登录
                    </a>
                </div>
            </div>
        </div>
    </div>
		<!-- 注册 -->
    <div class="regst" v-if="flag">
        <div class="cancle" @click="cancle">x</div>
        <div class="regst-cont">
            <form action="">
            手机号：<input type="number" placeholder="绑定手机号" v-model="users.phone"><br>
            呢称：<input type="text" placeholder="用户名" v-model="users.username"><br>
            密码：<input type="password" placeholder="请输入密码" v-model="users.pwd"><br>
           <input type="button" value='提交' @click="tijiao">
        </form>
        </div>
        
    </div>
    </div>
</template>

<script>
import Top from './Top';
import axios from 'axios'
export default {
    name:'Login',
    data(){
        return{
            users:{

                username:'',
                pwd:'',
                phone:'',
            },
            flag:false,
        }
    },
    components: {
    'top': Top,
   
  },
  methods: {
      logins:function(){
          axios.get('http://localhost:9999/userlogin',{
						params: {
							phone: this.users.phone,
							pwd:this.users.pwd
						}
					}).then(response => {
						console.log("get发送Ajax请求成功", response.data);
                        // this.mydata = response.data;
                        console.log(response.data)
                         // this.indexUrl = localStorage.getItem('indexUrl');
                          sessionStorage.setItem('name',response.data.name);
                          sessionStorage.setItem('userid',response.data.id);
                          
                         axios.get('http://localhost:9999/userloginseletnum',{
                            
						params: {
                            userid :sessionStorage.getItem('userid')
						}
					}).then(response => {
						console.log("get发送Ajax请求成功");
                        // this.mydata = response.data;
                        console.log(response.data)
                         sessionStorage.setItem('num',response.data);
                          this.$router.push('/')
                         // this.indexUrl = localStorage.getItem('indexUrl');
                          
                          
					}).catch(response=> {
						console.log("get发送Ajax请求失败",response);
					})
                          
					}).catch(response=> {
						console.log("get发送Ajax请求失败",response);
					})
      },
      cancle(){
          this.flag = !this.flag;
      },
      regst(){
          this.flag = !this.flag;
          this. users = {};
      },
      tijiao(){
          axios.post("http://localhost:9999/getRegInfoweb", this.users, {
						transformRequest: [
							function(data) {
								let params = '';
								for(let index in data) {
									params += index + "=" + data[index] + "&";
								}
								return params;
							}
						]
					}).then(response => {
						console.log("post发送Ajax请求成功", response.data);
                        // this.mydata = response.data;
                        if(response.data == 'ok'){
                            this.flag = !this.flag;
                           
                        }
					}).catch(response => {
						console.log("post发送Ajax请求失败");
					})
      }
  }
}
// var oLogin = document.getElementsByClassName('btn-login')[0],
//     oUser = document.getElementsByClassName('user')[0],
//     oKey = document.getElementsByClassName('key')[0],
//     oError = document.getElementsByClassName('error')[0];
//     regUser = /^[1]\d{10}$/g;
//     regKey = /^[A-Z]\w{5,}/g;
// oLogin.addEventListener('click', function () {
//     var username = oUser.value;
//     var password = oKey.value;

//     if(regUser.test(username) && regKey.test(password)) {
//         oLogin.innerText = '登录中...';
//     }else {
//         oError.classList.remove('hide');
//     }
// })

// document.getElementsByTagName('ul')[0].addEventListener('click', function () {
//     oLogin.innerText = '登录';
//     oError.classList.add('hide');
// });
</script>

<style scoped>
    /* *{
    padding: 0;
    margin:0;
    list-style: none;
    text-decoration: none;
} */
.wrap{
    width: 100%;
    height:600px;
    font-size:14px;
    position: relative;
}
.login{
    width: 100%;
    height: 100%;
    background-image: url('../assets/bg.png');
    background-repeat: no-repeat;
    background-color:#fef9f0;
    background-position:center center; 
}
.login-inner{
    /* position: fixed;
    top: 100px;
    left:50%;
    transform:translate( -50%); */
    
}
.login-inner {
    position: relative;
    left:50%;
    margin-left:-50px;
    margin-bottom: 10px;
    width: 100px;
    height:100px;  
}
.login-form{
    position: absolute;
       left: -188%;
    top: 42px;
    background: #fff;
    width:450px;
    padding:50px;
    border-top: 5px solid #dd3e42;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}
.login-form h2{
    margin-bottom:30px;
    text-align: center;
}
.login-form h2 span{
    display: inline-block;
    color: #dd3e42;
    border-bottom: 1px solid #ee3e42;
    padding-bottom: 10px;
    font-size:16px;
}

.login-form li {
    position: relative;
    margin-bottom:20px;
    list-style: none;
}
.login-form li input{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    width: 100%;
    padding: 12px;
    height: 54px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius: 4px;
}
.login-form li .label-img{
    position: absolute;
    right:12px;
    top: 50%;
    margin-top:-10px;
    width: 20px;
    height:20px;
}
.login-form li .label-img img{
    width:100%;
}
.login-form li .label-error{
    position: absolute;
    left: 12px;
    bottom: -8px;
    background: #fff;
}
.login-form li .text-error{
    color: orange;
}
.login-form .error{
    color: #ee3e42;
}
.login-form .hide{
    display: none;
    content: '输入错误，请检查手机号或密码';
}

.login-form .login-tab1{
    position: relative;
    width:100%;
    margin: 20px 0 40px;
    color:#999;
}
.login-form .login-tab1 > div{
    display: inline-block;

}
.login-form .login-tab1 .btn-login{
    width: 150px;
    height:45px;
    background-color:#ee3e42;
    color:#fff;
    line-height:45px;
    border: none;
    cursor: pointer;
}

.login-form .login-tab1 .login-tab1-item1 a{
    color: #ee3e42;
}
.login-form .login-tab1-item2 {
    position: absolute;
    right:0;
    line-height:45px;
}
.login-form .login-tab1-item2 a{
    color:#999;
}

.login-form .login-tab2{
    width: 100%;
    text-align: center;
}
.login-form .login-tab2 a{
    margin:0 30px; 
    color:#999; 
}
.login-form .login-tab2 img{
    width: 36px;
    height:36px;
    margin-right:7px;
    vertical-align: middle;
}
.regst {
    width: 90%;
    height:600px;
    border:1px solid black;
    position: absolute;
    left: 100px;
    top:0;
    background-color: lightgray;
    /* opacity: 0.7; */
    background-image: url(https://img.zaozuo.com/d88925065008995f9633326d418de5f6);
    background-size: contain;
    margin: 0 auto;
}
.regst-cont {
    position: absolute;
    /* display: flex; */
    /* flex-direction: column;  */
    /* justify-items: center; */
    /* align-content: center; */
    /* align-items: center; */
    background-color: #fff;
    width: 506px;
    height: 335px;
    border:1px solid black;
    left: 50%;
    top: 50%;
    transform:translate( -50%,-50%);
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.regst-cont input {
    width: 200px;
    height: 40px;
    margin-top: 20px;
}
.cancle {
    position: absolute;
    right: 0;
    width: 20px;
    height: 20px;
    color: #dc0d0d;
    font-size: 19px;
}
.cancle:hover {
    color: #000;
}
</style>
