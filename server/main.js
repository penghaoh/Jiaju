const express = require("express");
const ejs = require("ejs");
const app = express();
const url = require("url");

app.engine("html",ejs.renderFile);
app.set("view engine","html");
app.set("views","./views");

//为接收post请求而使用的代码,这样处理post请求的request会有body对象
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
//导入cookie-parse模块
const cookieParser = require("cookie-parser");
app.use(cookieParser("aabbcc12345"));

var adminConn = require('./conn/adminConn');
app.post('/*',function(req,res){
	res.setHeader("Access-Control-Allow-Origin","*");
	var pathname = url.parse(req.url).pathname;
	
	if(pathname == "/login"){
		// 验证管理员登录信息
		adminConn.adminlogin(req,res);
	}else if(pathname == '/updateUser'){
		console.log('updateUser--pathname',pathname);
		//用户管理模块用户表修改
		adminConn.updateUserinfo(req,res)
	}else if(pathname == '/dele'){
		//删除商品
		adminConn.deleproduct(req,res)
	}else if(pathname == '/add'){
		//增加商品
		console.log(pathname);
		adminConn.addprod(req,res)
	}
})

app.get('/*',function(req,res){
	res.setHeader("Access-Control-Allow-Origin","*");
	var pathname = url.parse(req.url).pathname;
	console.log('---------pathname',pathname)
	if(pathname == "/getTotalnum"){
		//查询所有商品条数
		adminConn.getTotalnum(req,res);
	}else if(pathname == '/showtype'){
		//查询类型 protyoe表
		adminConn.showtype(req,res)
	}else if(pathname == '/proupdate'){
		//修改商品
		adminConn.proupdate(req,res)
	}else if(pathname == '/selectpro'){
		//查询类型商品根据typeid, 请求后通过?typeid = 传递
		adminConn.selectpro(req,res)
	}else if(pathname == '/dele'){
		//删除商品
		adminConn.deleproduct(req,res)
	}else if(pathname == '/usersele'){
		console.log('pathname',pathname);
		//用户管理模块用户表分页查询
		adminConn.usersele(req,res)
	}
})

app.use(express.static("public"));
app.listen(9999,function(){
	console.log('starting')
})