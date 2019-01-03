const adminDba = require("../dba/adminDba.js");

//管理员登录时
function adminlogin(req,res){
	console.log('……');
	var name = req.body.name;
	var pwd = req.body.pwd;
	console.log('name',name,'pwd',pwd);
	adminDba.checkAdminLogin(name,pwd,function(result){
		if(result.length == '1'){
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
			 // console.log('adminConn 用户修改结果',result)
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
						// console.log("obj1.totlenum",obj1);
						proTypeInfo.push(obj1);
						res.json(proTypeInfo);
						// console.log('adminConn 所有商品分页查询结果',proTypeInfo)
					}
				})
			})
		}else {//查询其他分类商品
			adminDba.productquerys(first,len,typeid,function(result){
				// console.log('adminConn 商品分页查询结果',result)
				var searchinfo = result;
				//获取分类总条数
				adminDba.getTypeNum(typeid,(num)=>{
					console.log("getTypeNum",num)
					if(num != ''){
						var obj2 = {};
						obj2.totlenum = num;
						// console.log("obj2.totlenum",obj2);
						searchinfo.push(obj2);
						res.json(searchinfo);
						// console.log('adminConn 商品分页查询结果searchinfo',searchinfo)
					}
				})
			})
		}
		
	}
	
//搜索框搜索商品
	function searchPro(req,res){
		var searchKey = req.query.searchKey;
		console.log('searchKey',searchKey)
		adminDba.searchPro(searchKey,function(result){
			res.json(result);
		})
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
	var descs = req.query.descs;
	var origin = req.query.origin;
	var brand = req.query.brand;
	var imgurl = req.query.imgurl;
	// var desc = req.query.desc;
	adminDba.updatepro(id,name,price,descs,origin,brand,imgurl,function(result){
	res.json(result.affectedRows)
	})
}

//增加商品
	function addprod(req,res){
		console.log(req.body)
		var name = req.body.name;
		var price =req.body.price;
		var descs = req.body.descs;
		var imgurl = req.body.imgurl;
		var origin  = req.body.origin;
		var brand =  req.body.brand;
		var typeid =req.body.typeid;
		console.log(typeof typeid)
		
		// console.log('-------------------------77777',name,price,descs,imgurl,origin,brand,typeid)
		adminDba.addpro(name,price,descs,imgurl,origin,brand,typeid,function(result){
			res.json(result)
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
exports.searchPro = searchPro;
exports.deleproduct = deleproduct;
exports.addprod = addprod;
exports.proupdate = proupdate;




// const adminDba = require("../dba/adminDba.js");

// //进入管理员登录主页
// // function toLogin(req,res){
// // 	 console.log('req.signedCookies',req.signedCookies);
// // 	if("admin" in req.signedCookies) {
// // 		res.render("main",req.signedCookies.admin);//进入主页
// // 	}else{
// // 		res.render("login",{inf:"请登录"});
// // 	}
// // };
// //输入/进入登陆页面
// function login(req,res){
// 	res.render('login')
// }

// //增加商品
// function addprod(req,res){
// 	console.log(req.body)
// 	var name = req.body.name;
// 	var price = req.body.price;
// 	var descs = req.body.descs;
// 	var imgurl = req.body.imgurl;
// 	var origin  = req.body.origin;
// 	var brand = req.body.brand;
// 	var typeid =req.body.typeid;
// 	console.log(typeid)
// 	console.log(typeof typeid)
	
// 	// console.log('-------------------------77777',name,price,descs,imgurl,origin,brand,typeid)
// 	adminDba.addpro(name,price,descs,imgurl,origin,brand,typeid,function(result){
// 		res.json(result.affectedRows)
// 	});
// }
// //管理员登录时
// function adminlogin(req,res){
// 	console.log('……');
// 	var name = req.body.name;
// 	var pwd = req.body.pwd;
// 	console.log('name',name,'pwd',pwd);
// 	adminDba.checkAdminLogin(name,pwd,function(result){
// 		if(result.length == '1'){
// 			// res.cookie("admin",result[0],{signed:true}),
// 			res.json("ok");//进入主页
// 		}else {
// 			res.json("no");
// 		}
// 	})
// };
// //用户登录时
// function userlogin(req,res){
// 	console.log('……');
// 	var phone = req.query.phone;
// 	var pwd = req.query.pwd;
// 	console.log('phone',phone,'pwd',pwd);
// 	adminDba.checkUserLogin(phone,pwd,function(result){
// 		if(result.length == 1){
// 			// res.cookie("admin",result[0],{signed:true}),
// 			console.log('11111111111111',result[0])
// 			res.json(result[0]);//进入主页
// 		}else {
// 			res.json("no");
// 		}
// 	})
// };
// //员工退出
// // function loginout(req,res){
// // 	res.clearCookie('employee');
// // 	res.render("login",{inf:"请登录"});
// // }

// // 将总条数返回
// 	function getTotalnum(req,res){
// 		console.log("总条数");
// 		// var typeid = req.query.typeid;
// 		// console.log('0000000000000000',typeid)
// 		adminDba.getTotalnum((num)=>{
// 			res.json(num)
// 		})
// 	}

// //产品所有查询
// 	function productsel(req,res){
// 		console.log("hhhh");
// 		// var typeid = req.query.typeid;
// 		var nowpage = req.query.nowPage;
// 		console.log('------nowpage',nowpage)
// 		console.log('------nowpage',typeof nowpage)
// 		var len = 5;
// 		var first = (nowpage-1)*len;
// 		console.log('index',first,'len',len)
// 		adminDba.productquery(first,len,function(result){
// 			res.json(result)
// 		})
	
	
// 	}
// //根据id查询
// 	function productselbyid(req,res){
// 		var id = req.query.id;
// 		console.log(id)
// 		adminDba.productquerybyid(id,function(result){
// 			res.json(result)
// 		})
// 	}
// //根据typeid查询商品
// 	function selectpro(req,res){
// 		var typeid = req.query.typeid;
// 		console.log(typeid)
// 		adminDba.productquerys(typeid,function(result){
// 			res.json(result)
// 		})
// 	}
// 	//自定义作品
// function showDefiningGoods(req,res){
// 	adminDba.showDefiningGoods(function(result){
// 				res.json(result)
// 			})
// 	};
// //删除商品
// 	function deleproduct(req,res){
// 		var num = req.query.id;
// 		adminDba.productdele(num,function(){
// 			res.json('删除成功')
// 		})
// 	}
// //类型查询
// 	function showtype(req,res){
// 		adminDba.producttype((result)=>{
// 			res.json(result)
// 		})
// 	}
// //用户表查询
// 	function usersele(req,res){
// 		adminDba.queryuser((result)=>{
// 			res.json(result)
// 		})
// 	}	
// //将总条数返回
// 	// function getTotalnum(req,res){
// 	// 	console.log("总条数");
// 	// 	adminDba.getTotalnum((num)=>{
// 	// 		res.json(num)
// 	// 	})
// 	// }
// //商品修改
// function proupdate(req,res){
// 	var id = parseInt(req.query.id);
// 	var name = req.query.name;
// 	var price = parseInt(req.query.price);
// 	// var desc = req.query.desc;
// 	adminDba.updatepro(name,price,id,function(result){
// 	res.json(result.affectedRows)
// 	})
// }

// //用户注册
// function getRegInfo(req,res){
// 	console.log('0111012222',req.body)
// 	var name = req.body.username;
// 	var pwd = req.body.pwd;
// 	var phone =parseInt(req.body.phone);
	
// 	adminDba.checkRegName(name,function(num){
// 		if(num == 0){//用户名没有重复
// 			adminDba.insertRegName(name,pwd,phone,function(nums){
// 				if(nums == 1){//录入成功
// 					res.json("ok")
// 				}else {//录入失败
// 					res.json("no")
// 				}
// 			})
// 		}else {//用户名重复
// 			res.json("repeat")
// 		}
// 	})
// }

// //用户购物车增添
// function guctab(req,res){
// 	var proid = parseInt(req.query.id) ;
// 	var name = req.query.name;
// 	var imgurl = req.query.imgurl;
// 	var price = parseInt(req.query.price);
// 	var num = parseInt(req.query.num);
// 	var userid = parseInt(req.query.userid);
// console.log(proid,name,imgurl,price,num,userid)
// 	adminDba.guctabselet(proid,userid,function(ru){
// 		console.log('guctabselet1',ru)
// 		if(ru.length == 0){
// 			adminDba.guctabinsert(proid,name,imgurl,price,num,userid,function(){
// 				console.log('加入成功')
// 			})
// 		}else{
// 			console.log(ru[0].num)
// 			var num1 = num + ru[0].num;
// 			adminDba.guctabupdate(num1,proid,userid,function(){

// 			})
// 		}
// 	})
// }

// //用户购物车查询
// function guctabs(req,res){
// 	var userid = req.query.userid;
// 	adminDba.guctabselets(userid,function(result){
// 			res.json(result)
// 	})
// }
// //deletshopcar
// function deletshopcar(req,res){
// 	var proid = req.query.proid;
// 	var userid = req.query.userid;
// 	adminDba.guctabdelet(userid,proid,function(result){
// 			res.json(result)
// 	})
// }
// exports.deletshopcar = deletshopcar;
// exports.guctabs = guctabs;
// exports.guctab = guctab;
// exports.userlogin = userlogin;
// exports.getRegInfo = getRegInfo;
// exports.proupdate = proupdate;
// exports.getTotalnum = getTotalnum;
// exports.selectpro = selectpro;
// exports.usersele = usersele;
// exports.adminlogin = adminlogin;
// exports.getTotalnum = getTotalnum;
// exports.productsel = productsel;
// exports.deleproduct = deleproduct;
// exports.showtype = showtype;
// exports.addprod = addprod;
// exports.productselbyid = productselbyid;
// exports.showDefiningGoods = showDefiningGoods;

