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
	}
})
app.use(express.static("public"));
app.listen(9999,function(){
	console.log('starting')
})