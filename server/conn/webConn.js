const dba = require("../dba/webDba.js");

//根据typeid查询商品
function selectpro(req,res){
    var typeid = req.query.typeid;
    console.log(typeid)
    dba.productquerys(typeid,function(result){
        res.json(result)
    })
}

//自定义作品
function showDefiningGoods(req,res){
	dba.showDefiningGoods(function(result){
				res.json(result)
			})
    };
    
//用户登录时
function userlogin(req,res){
	console.log('……');
	var phone = req.query.phone;
	var pwd = req.query.pwd;
	console.log('phone',phone,'pwd',pwd);
	dba.checkUserLogin(phone,pwd,function(result){
		if(result.length == 1){
			// res.cookie("admin",result[0],{signed:true}),
			console.log('11111111111111',result[0])
			res.json(result[0]);//进入主页
		}else {
			res.json("no");
		}
	})
};

//用户注册
function getRegInfo(req,res){
	console.log('0111012222',req.body)
	var name = req.body.username;
	var pwd = req.body.pwd;
	var phone =req.body.phone;
	
	dba.checkRegName(name,function(num){
		if(num == 0){//用户名没有重复
			dba.insertRegName(name,pwd,phone,function(nums){
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

//用户购物车增添
function guctab(req,res){
	var proid = parseInt(req.query.id) ;
	var name = req.query.name;
	var imgurl = req.query.imgurl;
	var price = parseInt(req.query.price);
	var num = parseInt(req.query.num);
	var userid = parseInt(req.query.userid);
console.log(proid,name,imgurl,price,num,userid)
dba.guctabselet(proid,userid,function(ru){
		console.log('guctabselet1',ru)
		if(ru.length == 0){
			dba.guctabinsert(proid,name,imgurl,price,num,userid,function(){
				console.log('加入成功')
			})
		}else{
			console.log(ru[0].num)
			var num1 = num + ru[0].num;
			dba.guctabupdate(num1,proid,userid,function(){

			})
		}
	})
}

//根据id查询
function productselbyid(req,res){
    var id = req.query.id;
    console.log(id)
    dba.productquerybyid(id,function(result){
        res.json(result)
    })
}

//用户购物车查询
function guctabs(req,res){
	var userid = req.query.userid;
	dba.guctabselets(userid,function(result){
			res.json(result)
	})
}
//deletshopcar
function deletshopcar(req,res){
	var proid = req.query.proid;
	var userid = req.query.userid;
	dba.guctabdelet(userid,proid,function(result){
			res.json(result)
	})
}

//用户登陆查询购物车商品
function userloginseletnum(req,res){
	var userid = parseInt(req.query.userid);
console.log(userid)
dba.guctabselets(userid,function(ru){
		console.log('guctabselet1',ru)
		if(ru.length == 0){			
			res.json(0)
		}else{
			var num = 0;
			for(var i=0;i<ru.length;i++){
				num += ru[i].num
			}
			res.json(num)
		}
	})
}
exports.userloginseletnum = userloginseletnum;
exports.deletshopcar = deletshopcar;
exports.guctabs = guctabs;
exports.productselbyid = productselbyid;
exports.guctab = guctab;
exports.getRegInfo = getRegInfo;
exports.userlogin = userlogin;
exports.showDefiningGoods = showDefiningGoods;
exports.deletshopcar = deletshopcar;
exports.selectpro = selectpro;