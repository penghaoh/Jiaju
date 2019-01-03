const dbutil = require("../util/dbutil.js");
var mysql = require("mysql");

//获取首页定义作品集和新品发布台和首页各类型显示
function showDefiningGoods(cb){
	dbutil.pool.getConnection(function(err,connection){
			if(err){
				throw err
			}else {
				var sql = "select * from product where defineid between 1 and  3";
				connection.query(sql,[],function(qerr,ru){
					connection.release();
					cb(ru);
					// console.log(ru);
					console.log(ru.length);
				})
			}
		})
};
// showDefiningGoods(function(){
// 	
// })

//根据id获取商品信息
function getProInfo(proId,cb){
	dbutil.pool.getConnection(function(err,connection){
			if(err){
				throw err
			}else {
				var sql = "select * from product where id = ?";
				connection.query(sql,[proId],function(qerr,ru){
					connection.release();
					cb(ru);
					//console.log(ru)
	
				})
			}
		})
};
//获取全部商品信息
function getAllPro(cb){
	dbutil.pool.getConnection(function(err,connection){
			if(err){
				throw err
			}else {
				var sql = "select * from product";
				connection.query(sql,function(qerr,ru){
					connection.release();
					cb(ru);
					//console.log(ru)
				})
			}
		})
};
//获取商品分类信息
function getProType(typeId,cb){
	dbutil.pool.getConnection(function(err,connection){
			if(err){
				throw err
			}else {
				var sql = "select * from product where typeid = ?";
				connection.query(sql,[typeId],function(qerr,ru){
					connection.release();
					cb(ru);
					//console.log(ru)
	
				})
			}
		})
};
//搜索框搜索产品
function getSearchList(searchKey,cb){
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
		}else{
				var sql = `select * from product where name like '%${searchKey}%'`;
				connection.query(sql,(qerr,result)=>{
					connection.release();
					cb(result);
					// console.log('getSearchList',result)
				})	
		}
	})
}
//加入购物车
function addShopcar(proId,num,color,userId,cb){
	console.log(proId,num,color,userId);
	dbutil.pool.getConnection(function(err,connection){
			if(err){
				throw err
			}else {
				var sql = "insert into shopcar(pro_id,num,color,user_id) value(?,?,?,?)";
				connection.query(sql,[proId,num,color,userId],function(qerr,ru){
					connection.release();
					cb(ru.affectedRows);
					// cb(ru[0].num);
					console.log(ru.affectedRows)
				})
			}
		})
}
//根据uesrid查询购物车列表
function getShopcarList(userId,cb){
	dbutil.pool.getConnection(function(err,connection){
			if(err){
				throw err
			}else {
				var sql = "select shopcar.id,pro_id,num,color,product.name,price,imgurl from shopcar,product where product.id = pro_id and user_id = ?";
				connection.query(sql,[userId],function(qerr,ru){
					connection.release();
					cb(ru);
					console.log(ru.length)
				})
			}
		})
};
//测试
// getShopcarList(1,function(){
// 	
// })
// addShopcar(1,1,'海蓝色',1,function(){
// 	
// })

//检查登录用户名
function checkLoginMsg(name,pwd,cb){
	dbutil.pool.getConnection(function(err,connection){
			if(err){
				throw err
			}else {
				var sql = "select id,count(*)as num from user where name = ? and pwd = ?";
				connection.query(sql,[name,pwd],function(qerr,ru){
					connection.release();
					cb(ru[0]);
					// cb(ru[0].num);
					console.log(ru[0])
				})
			}
		})
}
//测试
// checkLoginMsg('hello','123',function(){
// 	
// })

//检查注册用户名是否重复
function checkRegName(name,cb){
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			throw err
		}else {
			var sql = "select count(*)as num from user where name = ?";
			connection.query(sql,[name],function(qerr,ru){
				connection.release();
				cb(ru[0].num);
				//console.log(ru[0].num)

			})
		}
	})
}
//用户名注册
function insertRegName(name,pwd,phone,cb){
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			throw err
		}else {
			var sql = "insert into user(name,pwd,phone) value(?,?,?)";
			connection.query(sql,[name,pwd,phone],function(qerr,ru){
				connection.release();
				cb(ru.affectedRows);
				//console.log(ru.affectedRows)

			})
		}
	})
}
//获取用户资料
function getUserInfo(userid,cb){
	dbutil.pool.getConnection(function(err,connection){
			if(err){
				throw err
			}else {
				var sql = "select * from user where id = ?";
				connection.query(sql,[userid],function(qerr,ru){
					connection.release();
					cb(ru);
					// console.log(ru)
				})
			}
		})
}
//修改用户资料
function updateUserInfo(userid,pwd,phone,address,cb){
	dbutil.pool.getConnection(function(err,connection){
			if(err){
				throw err
			}else {
				var sql = "update user set pwd = ?,phone = ?,address = ? where id = ?";
				connection.query(sql,[pwd,phone,address,userid],function(qerr,ru){
					connection.release();
					cb(ru.affectedRows);
					// cb(ru[0].num);
					console.log(ru.affectedRows)
				})
			}
		})
}

//测试
//  checkRegName("张三",function(ru){
// 	 console.log("--------",ru);
//  })
//  insertRegName("李四","123456",function(ru){
// 	 console.log("--------",ru);
//  })

exports.showDefiningGoods = showDefiningGoods;
exports.getProInfo = getProInfo;
exports.getProType = getProType;
exports.getAllPro = getAllPro;
exports.getSearchList = getSearchList;
// 加入购物车
exports.addShopcar = addShopcar;
exports.getShopcarList = getShopcarList;
// 用户注册登录
exports.checkLoginMsg = checkLoginMsg;
exports.checkRegName = checkRegName;
exports.insertRegName = insertRegName;
//获取用户资料
exports.getUserInfo = getUserInfo;
//修改用户资料
exports.updateUserInfo = updateUserInfo;

