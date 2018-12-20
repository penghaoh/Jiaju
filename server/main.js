const express = require("express");
const ejs = require("ejs");
const app = express();
//设置ejs
app.set("view engine","html");
app.engine(".html",require("ejs").__express);
//设置视图
app.set("views",__dirname+"/views");
//设置静态资源
app.use(express.static(__dirname+"/public"));
//为接收post请求参数而加入的模块
const bodyParser = require("body-parser");
//为接收post请求而使用的代码,这样处理post请求的request会有body对象
app.use(bodyParser.urlencoded({extended:false}));
//导入数据库的模块

//导入cookie-parse模块
const cookieParser = require("cookie-parser");
app.use(cookieParser("aabbcc12345")); 

const url = require("url");
var adminConn = require('./conn/adminConn');

app.post('/*',function(req,res){
	res.setHeader("Access-Control-Allow-Origin","*");
	var pathname = url.parse(req.url).pathname;
	if(pathname == "/login"){
		adminConn.adminlogin(req,res);
	}
})

app.listen(9999,function(){
	console.log("服务器运行中");
})