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
<<<<<<< HEAD
 
var adminConn = require('./conn/adminConn');
app.get('/*',function(req,res){
=======
const cookieParser = require("cookie-parser");
app.use(cookieParser("aabbcc12345"));

var adminConn = require('./conn/adminConn');
app.post('/*',function(req,res){
>>>>>>> 5a48d76753da3767b4155fb6ea55b220d0db5c38
	res.setHeader("Access-Control-Allow-Origin","*");
	var pathname = url.parse(req.url).pathname;
	console.log(pathname)
<<<<<<< HEAD
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
<<<<<<< HEAD
	}else if(pathname == "/selectAll"){
		//查询所有商品
		adminConn.productsel(req,res);
	}else if(pathname == "/getTotalnum"){
		//查询所有商品
		adminConn.getTotalnum(req,res);
	}
})
app.post('/*',function(req,res){
	res.setHeader("Access-Control-Allow-Origin","*");
	var pathname = url.parse(req.url).pathname;
	
	if(pathname == "/login"){
		adminConn.adminlogin(req,res);
=======
=======
	if(pathname == "/login"){
		adminConn.adminlogin(req,res);
>>>>>>> ddd
	}
})
app.get('/*',function(req,res){
	res.setHeader("Access-Control-Allow-Origin","*");
	var pathname = url.parse(req.url).pathname;
	console.log('---------pathname',pathname)
	if(pathname == "/getTotalnum"){
		//查询所有商品
		adminConn.getTotalnum(req,res);
	}
	if(pathname == "/selectAll"){
		//查询所有商品
		adminConn.productsel(req,res);
<<<<<<< HEAD
>>>>>>> 5a48d76753da3767b4155fb6ea55b220d0db5c38
	}else if(pathname == '/showtype'){
		//查询类型 protyoe表
		adminConn.showtype(req,res)
	}else if(pathname == '/add'){
		//增加商品
		adminConn.addprod(req,res)
=======
	}else if(pathname == '/sofa'){
		//沙发
		adminConn.selectsofa(req,res)
	}else if(pathname == '/yideng'){
		//椅凳
		adminConn.selectyideng(req,res)
	}else if(pathname == '/zuoji'){
		//桌几
		adminConn.selectzuoji(req,res)
	}else if(pathname == '/dengju'){
		//灯具
		adminConn.selectdengju(req,res)
	}else if(pathname == '/canju'){
		//餐具
		adminConn.selectcanju(req,res)
	}else if(pathname == '/zshi'){
		//装饰
		adminConn.selectzshi(req,res)
	}else if(pathname == '/dele'){
		//删除商品
		adminConn.deleproduct(req,res)
>>>>>>> ddd
	}
})

app.use(express.static("public"));
app.listen(9999,function(){
	console.log('starting')
})