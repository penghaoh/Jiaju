const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const url = require("url");

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser("aabbcc12345")); 

app.engine("html",ejs.renderFile);
app.set("view engine","html");
app.set("views","./views");

//为接收post请求而使用的代码,这样处理post请求的request会有body对象


//导入cookie-parse模块

var adminConn = require('./conn/adminConn');
app.get('/*',function(req,res){
	var pathname = url.parse(req.url).pathname;
	console.log(pathname)
	if(pathname == "/"){
		console.log('login')
		adminConn.login(req,res)
	}else if(pathname == '/dele'){
		//删除商品
		adminConn.deleproduct(req,res)
	}else if(pathname == '/usersele'){
		//用户表查询
		adminConn.usersele(req,res)
	}else if(pathname == '/selectpro'){
		//查询类型商品根据typeid, 请求后通过?typeid = 传递
		adminConn.selectpro(req,res)
	}
})
app.post('/*',function(req,res){
	// res.setHeader("Access-Control-Allow-Origin","*");
	var pathname = url.parse(req.url).pathname;
	
	if(pathname == "/login"){
		adminConn.adminlogin(req,res);
	}else if(pathname == "/selectAll"){
		//查询所有商品
		adminConn.productsel(req,res);
	}else if(pathname == '/showtype'){
		//查询类型 protyoe表
		adminConn.showtype(req,res)
	}else if(pathname == '/add'){
		//增加商品
		adminConn.addprod(req,res)
	}
})
app.use(express.static("public"));
app.listen(9999,function(){
	console.log('starting')
})