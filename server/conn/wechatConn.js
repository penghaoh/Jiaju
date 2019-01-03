const dba = require("../dba/wechatDba.js");

//获取首页定义作品集和新品发布台和首页各类型显示
function showDefiningGoods(req,res){
	dba.showDefiningGoods(function(result){
		res.json(result)
	})
};
//根据id获取商品信息
function getProInfo(req,res){
	var proId = req.query.proId;
	console.log(proId);
	dba.getProInfo(proId,function(proMsg){
		res.json(proMsg)
		//console.log(MovieMsg)
	})
}
//根据typeid获取商品分类信息
function getProList(req,res){
	var typeId = req.query.typeId;
	if(typeId == 0){
		dba.getAllPro(function(proList){
			res.json(proList)
			//console.log(MovieMsg)
		})
	}else {
		dba.getProType(typeId,function(proList){
			res.json(proList)
			//console.log(MovieMsg)
		})
	}
}
//根据搜索词搜索商品
function getSearchList(req,res){
	var searchKey = req.query.searchKey;
	console.log(searchKey);
	dba.getSearchList(searchKey,function(proList){
		res.json(proList)
		//console.log(MovieMsg)
	})
}

//加入购物车
function addShopcar(req,res){
	var proId = req.query.proId;
	var num = req.query.num;
	var userId = req.query.userId;
	var color = req.query.color;
	console.log('proId',proId,'num',num,'userId',userId,'color',color);
	dba.addShopcar(proId,num,color,userId,function(num){
		if(num == 1){//录入成功
			res.json("ok")
		}else {//录入失败
			res.json("no")
		}
	})
}
//根据uesrid查询购物车列表
function getShopcarList(req,res){
	var userId = req.query.userId;
	dba.getShopcarList(userId,function(shopcarList){
			res.json(shopcarList)
		
	})
}

// 登录注册


//检查用户登录checkLoginMsg post
function checkLogin(req,res){
	var name = req.body.username;
	var pwd = req.body.pwd;
	console.log("name",name,"pwd",pwd);
	dba.checkLoginMsg(name,pwd,function(ru){
		if(ru.num == 1){//登录成功
			res.json(ru)
		}else {
			//登录失败
			res.json("no")
		}
		//console.log(num)
	})
	
}
//用户注册
function getRegInfo(req,res){
	var name = req.body.username;
	var phone = req.body.phone;
	var pwd = req.body.pwd;
	dba.checkRegName(name,function(num){
		if(num == 0){//用户名没有重复
			dba.insertRegName(name,phone,pwd,function(nums){
				if(nums == 1){//录入成功
					res.json("ok")
				}else {//录入失败
					res.json("no")
				}
			})
		}else {//用户名重复
			res.json("repeat")
		}
	})
}
//获取用户资料
function getUserInfo(req,res){
	var userid = req.body.userid;
	console.log("userid",userid);
	dba.getUserInfo(userid,function(ru){
		res.json(ru)
	})
}
//修改用户资料
function updateUserInfo(req,res){
	var userid = req.body.userid;
	var userame = req.body.userame;
	var pwd = req.body.pwd;
	var phone = req.body.phone;
	var address = req.body.address;
	console.log("userid",userid);
	dba.checkRegName(userame,function(num){
		if(num == 0){//用户名没有重复
			dba.updateUserInfo(userid,userame,pwd,phone,address,function(ru){
				if(ru.num == 1){//修改成功
					res.json("ok")
				}else {
					//修改失败
					res.json("no")
				}
			})
		}else {//用户名重复
			res.json("repeat")
		}
	})
	
}
//显示商品
exports.showDefiningGoods = showDefiningGoods;
exports.getProInfo = getProInfo;
exports.getProList = getProList;
exports.getSearchList = getSearchList;
//加入购物车
exports.addShopcar = addShopcar;
//显示购物车列表
exports.getShopcarList = getShopcarList;
// 用户登录注册
exports.checkLogin = checkLogin;
exports.getRegInfo = getRegInfo;
//获取用户资料
exports.getUserInfo = getUserInfo;
//修改用户资料
exports.updateUserInfo = updateUserInfo;


