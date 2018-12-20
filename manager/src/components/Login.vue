<template>
    <div>
        <div class="login-wrap">
            <h3>登录</h3>
            <p v-show="showTishi">{{tishi}}</p>
            <input type="text" placeholder="请输入用户名" v-model="users.name">
            <input type="password" placeholder="请输入密码" v-model="users.pwd">
            <button v-on:click="login">登录</button>
        </div>
    </div>
</template>
 
<style>
    .login-wrap{text-align:center;}
    input{display:block; width:250px; height:40px; line-height:40px; margin:0 auto; margin-bottom: 10px; outline:none; border:1px solid #888; padding:10px; box-sizing:border-box;}
    p{color:red;}
    button{display:block; width:250px; height:40px; line-height: 40px; margin:0 auto; border:none; background-color:#41b883; color:#fff; font-size:16px; margin-bottom:5px;}
    span{cursor:pointer;}
    span:hover{color:#41b883;}
</style>
 
<script>
	import axios from 'axios';
    export default{
        data(){
            return{
                showTishi: false,
                tishi: '',
				users: {
					name:  '',
					pwd:  ''
				}
            }
        },
		methods: {
			login: function(){
				console.log(this.users)
				axios.post('http://192.168.2.103:9999/login',this.users,{
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
					console.log(response.data);
					if(response.data == 'ok'){
						this.$router.push('main');
					}else {
						
					}
				}).catch(response => {
					console.log("请求失败");
				})	
			}
		}
    }
</script>
