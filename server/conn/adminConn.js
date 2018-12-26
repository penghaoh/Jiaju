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


//用户管理模块
	//用户表分页查询，并返回总条数
	function usersele(req,res){
		var currPage = req.query.currpage;
		console.log('----------currPage',currPage);
		var len = 5;
		var first = (currPage-1)*len;
		console.log('index',first,'len',len)
		adminDba.queryuser(first,len,function(result){
			// console.log('adminConn 用户分页查询结果',result)
			var userInfo = result;
			//获取用户表总条数
			adminDba.getUserNum((num)=>{
				console.log("getUserNum",num)
				if(num != ''){
					var obj = {};
					obj.totlenum = num;
					// console.log("obj.totlenum",obj);
					userInfo.push(obj);
					res.json(userInfo);
					// console.log('adminConn 用户分页查询结果',userInfo)
				}
			})
		})
	}
	//测试

	
	//用户表修改
	function updateUserinfo(req,res){
		var userID = req.body.id
		var userAddress = req.body.address
		adminDba.updateUserinfo(userID,userAddress,function(result){
			if(result == 1){
				res.json('ok');
			}else {
				res.json('no');
			}
			 console.log('adminConn 用户修改结果',result)
		})
	}


// 产品管理模块
//商品类型查询
	function showtype(req,res){
		adminDba.producttype((result)=>{
			res.json(result)
		})
	}
	
	
//根据typeid分页查询商品
	function selectpro(req,res){
		var nowPage = req.query.nowPage;
		var typeid =parseInt(req.query.typeid);
		console.log('----------nowPage',nowPage);
		console.log('----------typeid',typeid);
		var len = 5;
		var first = (nowPage-1)*len;
		console.log('first',first,'len',len)
		if(typeid == '0'){
			//查询所有商品
			adminDba.productquery(first,len,function(result){
				// console.log('adminConn 商品分页查询结果',result)
				var proTypeInfo = result;
				//获取商品分类总条数
				adminDba.getTotalnum((num)=>{
					console.log("getTotalnum",num)
					if(num != ''){
						var obj1 = {};
						obj1.totlenum = num;
						console.log("obj1.totlenum",obj1);
						proTypeInfo.push(obj1);
						res.json(proTypeInfo);
						// console.log('adminConn 所有商品分页查询结果',proTypeInfo)
					}
				})
			})
		}else {//查询其他分类商品
			adminDba.productquerys(first,len,typeid,function(result){
				// console.log('adminConn 商品分页查询结果',result)
				var proInfo = result;
				//获取分类总条数
				adminDba.getTypeNum(typeid,(num)=>{
					console.log("getTypeNum",num)
					if(num != ''){
						var obj2 = {};
						obj2.totlenum = num;
						console.log("obj2.totlenum",obj2);
						proInfo.push(obj2);
						res.json(proInfo);
						// console.log('adminConn 商品分页查询结果proInfo',proInfo)
					}
				})
			})
		}
		
	}

//删除商品
	function deleproduct(req,res){
		var num = req.query.id;
		adminDba.productdele(num,function(){
			res.json('删除成功')
		})
	}


//商品修改
function proupdate(req,res){
	var id = parseInt(req.query.id);
	var name = req.query.name;
	var price = parseInt(req.query.price);
	// var desc = req.query.desc;
	adminDba.updatepro(name,price,id,function(result){
	res.json(result.affectedRows)
	})
}

//增加商品
	function addprod(req,res){
		console.log(req.body)
		var name = req.body.name;
		var price = req.body.price;
		var descs = req.body.descs;
		var imgurl = req.body.imgurl;
		var origin  = req.body.origin;
		var brand = req.body.brand;
		var typeid =req.body.typeid;
		console.log(typeid)
		console.log(typeof typeid)
		
		// console.log('-------------------------77777',name,price,descs,imgurl,origin,brand,typeid)
		adminDba.addpro(name,price,descs,imgurl,origin,brand,typeid,function(result){
			res.json(result.affectedRows)
		});
	}

	
//管理员登录
exports.adminlogin = adminlogin;
// 用户模块
exports.usersele = usersele;
exports.updateUserinfo = updateUserinfo;
//产品管理模块
exports.showtype = showtype;
exports.selectpro = selectpro;
exports.deleproduct = deleproduct;
exports.addprod = addprod;
exports.proupdate = proupdate;