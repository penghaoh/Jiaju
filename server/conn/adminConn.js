const adminDba = require("../dba/adminDba.js");

//管理员登录时
function adminlogin(req,res){
	console.log('……');
	var name = req.body.name;
	var pwd = req.body.pwd;
	console.log('name',name,'pwd',pwd);
	adminDba.checkAdminLogin(name,pwd,function(result){
		if(result.length == '1'){
			// res.cookie("admin",result[0],{signed:true}),
			res.json("ok");//进入主页
		}else {
			res.json("no");
		}
	})
};
//员工退出
// function loginout(req,res){
// 	res.clearCookie('employee');
// 	res.render("login",{inf:"请登录"});
// }
//用户管理模块

	//用户表查询
	function usersele(req,res){
		adminDba.queryuser(function(result){
			res.json(result);
			// console.log('adminConn 用户查询结果',result)
		})
	}


// 产品管理模块

//商品类型查询
	function showtype(req,res){
		adminDba.producttype((result)=>{
			res.json(result)
		})
	}

// 将商品总条数返回
	function getTotalnum(req,res){
		console.log("总条数");
		adminDba.getTotalnum((num)=>{
			res.json(num)
		})
	}
	
//查询所有产品
	function productsel(req,res){
		console.log("hhhh");
		var nowpage = req.query.nowPage;
		console.log('------nowpage',nowpage)
		console.log('------nowpage',typeof nowpage)
		var len = 5;
		var first = (nowpage-1)*len;
		console.log('index',first,'len',len)
		adminDba.productquery(first,len,function(result){
			res.json(result)
		})
	}
//根据商品类型typeid查询商品
	function selectpro(req,res){
		var typeid = req.query.typeid;
		adminDba.productquery(typeid)
	}
	
//增加商品
function addprod(req,res){
	var name = req.body.name;
	var price = req.body.price;
	var desc = req.body.desc;
	var imgurl = req.body.imgurl;
	var origin  = req.body.origin;
	var brand = req.body.brand;
	var typeid = req.query.typeid;
	adminDba.addpro(name,price,desc,imgurl,origin,brand,typeid);
}



//删除商品
	function deleproduct(req,res){
		var num = req.query.id;
		adminDba.productdele(num)
	}
	
	
exports.getTotalnum = getTotalnum;
exports.selectpro = selectpro;
exports.usersele = usersele;
exports.adminlogin = adminlogin;
exports.getTotalnum = getTotalnum;
exports.productsel = productsel;
exports.deleproduct = deleproduct;
exports.showtype = showtype;
exports.addprod = addprod;