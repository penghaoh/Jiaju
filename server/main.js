const express = require("express");
const ejs = require("ejs");
const app = express();
const url = require("url");

app.engine("html",ejs.renderFile);
app.set("view engine","html");
app.set("views","./views");

const fs = require("fs");
const multer  = require('multer');
const formidable = require('formidable');
//为接收post请求而使用的代码,这样处理post请求的request会有body对象
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
//handle request entity too large
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}));
//2,设置模板引擎
var path = require('path');
//导入cookie-parse模块
const cookieParser = require("cookie-parser");
app.use(cookieParser("aabbcc12345"));

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",'3.2.1')
    next();
});

// 引入模块
var COS = require('cos-nodejs-sdk-v5');
//腾讯云平台的配置文件
var config = {
    SecretId: 'AKIDKpZMlZlNzBSaU8JCd5Yr2pZAXkmg38Uk',
    SecretKey: 'IPpnfR7dyFHHdAYEIPn5HKGWiWCk8PVQ',
    Bucket: "hello-1258367539", /* 必须 */ // Bucket 格式：test-1250000000
    Region: "ap-chengdu",
};
var cos = new COS({
    // 必选参数
    SecretId: config.SecretId,
    SecretKey: config.SecretKey,
});

app.post("/upload",multer({dest: __dirname + '/public/upload/'}).array('file'), function (req, res) {

    var filepath = req.files[0].path;

    var fileKey = "nodejs"+new Date().getTime();
    // 调用方法
    cos.putObject({
        Bucket: "hello-1258367539", /* 必须 */ // Bucket 格式：test-1250000000
        Region: "ap-chengdu",
        Key: fileKey, /* 必须 */
        TaskReady: function (tid) {
        },
        onProgress: function (progressData) {

        },
        // 格式1. 传入文件内容
        // Body: fs.readFileSync(filepath),
        // 格式2. 传入文件流，必须需要传文件大小
        Body: fs.createReadStream(filepath),
        ContentLength: fs.statSync(filepath).size
    }, function (err, data) {

         console.log(data);
        if(data.statusCode==200){
            var url = cos.getObjectUrl({
                Bucket: "hello-1258367539", // Bucket 格式：test-1250000000
                Region: "ap-chengdu",
                Key: fileKey,
                Expires: 600000,
                Sign: true,
            }, function (err, data) {
            });
            var body = {
                key:fileKey,
                url:url
            }
            res.json(body);
        }
    });

});

var adminConn = require('./conn/adminConn');
var wechatConn = require('./conn/wechatConn');
var webConn = require('./conn/webConn');
app.post('/*',function(req,res){
	// res.setHeader("Access-Control-Allow-Origin","*");
	var pathname = url.parse(req.url).pathname;
	console.log(pathname);

	//admin
	if(pathname == "/login"){
		// 验证管理员登录信息
		adminConn.adminlogin(req,res);
	}else if(pathname == '/updateUser'){
		console.log('updateUser--pathname',pathname);
		//用户管理模块用户表修改
		adminConn.updateUserinfo(req,res)
	}else if(pathname == '/add'){
		//增加商品
		console.log(pathname);
		adminConn.addprod(req,res)
	}

	//web
	else if(pathname == "/getRegInfoweb"){
		//用户注册
		console.log('pathname',pathname);
		webConn.getRegInfo(req,res);
	}

	//wechat
	else if(pathname == "/checkLogin"){
		//检查用户登录
		console.log('pathname',pathname);
		wechatConn.checkLogin(req,res);
	}else if(pathname == "/getRegInfo"){
		//用户注册
		console.log('pathname',pathname);
		wechatConn.getRegInfo(req,res);
	}else if(pathname == "/getUserInfo"){
		//获取用户资料
		console.log('pathname',pathname);
		wechatConn.getUserInfo(req,res);
	}else if(pathname == "/updateUserInfo"){
		//修改用户资料
		console.log('pathname',pathname);
		wechatConn.updateUserInfo(req,res);
	}
})

app.get('/*',function(req,res){
	// res.setHeader("Access-Control-Allow-Origin","*");
	var pathname = url.parse(req.url).pathname;
	console.log('---------pathname',pathname)
	
	//admin
	if(pathname == "/getTotalnum"){
		//查询所有商品条数
		adminConn.getTotalnum(req,res);
	}
	else if(pathname == '/showtype'){
		//查询类型 protyoe表
		adminConn.showtype(req,res)
	}else if(pathname == '/proupdate'){
		//修改商品
		adminConn.proupdate(req,res)
	}
	else if(pathname == '/selectpro'){
		//查询类型商品根据typeid, 请求后通过?typeid = 传递
		adminConn.selectpro(req,res)
	}
	else if(pathname == '/dele'){
		//根据id删除商品
		adminConn.deleproduct(req,res)
	}else if(pathname == '/searchPro'){
		//搜索框搜索商品
		adminConn.searchPro(req,res)
	}else if(pathname == '/usersele'){
		console.log('pathname',pathname);
		//用户管理模块用户表分页查询
		adminConn.usersele(req,res)
	}

	//web
	else if(pathname == '/userlogin'){

		webConn.userlogin(req,res)
	}else if(pathname == '/selectpros'){
		//查询类型商品根据typeid, 请求后通过?typeid = 传递
		webConn.selectpro(req,res)
	}else if(pathname == "/showDefiningGoodsweb"){
		webConn.showDefiningGoods(req,res);
	}else if(pathname == "/guctab"){
		//购物车商品增添
		webConn.guctab(req,res);
	}else if(pathname == "/selectbyid"){
		//查询所有商品
		webConn.productselbyid(req,res);
	}else if(pathname == "/deletshopcar"){
		//购物车删除
		webConn.deletshopcar(req,res);
	}else if(pathname == "/guctabs"){
		//购物车商品查询
		webConn.guctabs(req,res);
	}else if(pathname == "/userloginseletnum"){
		//购物车商品查询
		webConn.userloginseletnum(req,res);
	}
	//wechat
	//获取首页定义作品集和新品发布台和首页各类型显示
	else if(pathname == "/showDefiningGoods"){
		wechatConn.showDefiningGoods(req,res);}
		else if(pathname == "/getProInfo"){
		//根据商品id查询商品信息
		console.log('pathname',pathname);
		wechatConn.getProInfo(req,res);
	}else if(pathname == "/getProList"){
		//根据商品分类typeid查询商品列表
		console.log('pathname',pathname);
		wechatConn.getProList(req,res);
	}else if(pathname == "/getSearchList"){
		//根据商品分类typeid查询商品列表
		console.log('pathname',pathname);
		wechatConn.getSearchList(req,res);
 	}
})

app.use(express.static("public"));
app.listen(9999,function(){
	console.log('starting')
})