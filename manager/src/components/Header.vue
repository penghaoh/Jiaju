<template>
	<div id="top">
		<div id="topleft">
			<img src="../assets/logo.png" alt="logo">
			<h1>后台管理系统</h1>
		</div>
		<div id="topright">
			<img src="../assets/user.png" alt="用户">
			<el-dropdown>
				<span class="el-dropdown-link">{{name}}
					<i class="el-icon-arrow-down el-icon--right"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item @click.native = 'logOff()'>退出登录</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>	
	</div>
</template>

<script>
	export default {
		name: 'Header',
		data() {
			return {
				name : this.$route.params.name,
				isaddShow: false,
				isShow: false,
			};
		},
		methods: {
			getAdminInfo:function(){
				this.isShow = true;
			},
			addAdmin: function(){
				this.isaddShow = true;
			},
			logOff: function(){
				
			},
			
		}
	}
</script>

<style>
	#top,
	#topleft,
	#topright {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	#top {
		width: 90%;
		height: 103px;
		margin: 0px 5%;
		border-bottom: 3px solid #ccc;
	}
	#topleft {
		width: 400px;
		padding: 7px 0px;
	}
	#topleft h1 {
		line-height: 100px;
	}
	#topright {
		width: 110px;
		padding-top: 40px;
		box-sizing: border-box;
	}
	#topright>img {
		width: 30px;
		height: 30px;
	}
	#topright .el-dropdown {
		width: 70px;
		height: 30px;
	}
		
	#topright .el-dropdown .el-dropdown-link {
		font-size: 18px;
		line-height: 30px;
		color: #000;
	}  
	 
	 #getadmin,
	 #addadmin {
		 width: 500px;
		 height: 300px;
		 position: absolute;
		 top: 103px;
		 left: 30%;
		 background-color: green;
		 z-index: 999;
	 }
</style>
