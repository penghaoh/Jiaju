const dbutil = require("../util/dbutil.js");
var mysql = require("mysql");
//根据用户名和密码进入数据库查询
function checkAdminLogin(name,pwd,cb){
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
		}else {
			var sql = "select name,pwd from admin where name = ? and pwd = ?";
			connection.query(sql,[name,pwd],function(qerr,result){
				connection.release();
				console.log('---------result',result);
				cb(result);

			})
		}
	})
};

//产品所有查询
function productquery (cb){
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
		}else{
			var sql = "select * from product ";
			connection.query(sql,(qerr,result)=>{
				connection.release();
				cb(result)
			})
		}
	})
}
//沙发
function sofaquery(cb){
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
		}else{
			var sql = "select product.name,price from product inner join protype on type_id = typeid where typeid = 1 ";
			connection.query(sql,(qerr,result)=>{
				connection.release();
				cb(result)
			})
		}
	})
}
//椅凳
function yidengquery(cb){
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
		}else{
			var sql = "select product.name,price from product inner join protype on type_id = typeid where typeid = 2 ";
			connection.query(sql,(qerr,result)=>{
				connection.release();
				cb(result)
			})
		}
	})
}
//桌几
function zuojiquery(cb){
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
		}else{
			var sql = "select product.name,price from product inner join protype on type_id = typeid where typeid = 2 ";
			connection.query(sql,(qerr,result)=>{
				connection.release();
				cb(result)
			})
		}
	})
}
//灯具
function dengjuquery(cb){
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
		}else{
			var sql = "select product.name,price from product inner join protype on type_id = typeid where typeid = 2 ";
			connection.query(sql,(qerr,result)=>{
				connection.release();
				cb(result)
			})
		}
	})
}
//餐具
function canjuquery(cb){
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
		}else{
			var sql = "select product.name,price from product inner join protype on type_id = typeid where typeid = 2 ";
			connection.query(sql,(qerr,result)=>{
				connection.release();
				cb(result)
			})
		}
	})
}
//装饰
function zshiquery(cb){
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
		}else{
			var sql = "select product.name,price from product inner join protype on type_id = typeid where typeid = 2 ";
			connection.query(sql,(qerr,result)=>{
				connection.release();
				cb(result)
			})
		}
	})
}
//商品删除
function productdele(num){
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
		}else{
			var sql = "delect from product where id =?";
			connection.query(sql,[num],(qerr,result)=>{
				connection.release();
				// cb('删除成功')
			})
		}
	})
}
exports.productquery = productquery;
exports.sofaquery = sofaquery;

exports.yidengquery = yidengquery;
exports.zuojiquery = zuojiquery;
exports.dengjuquery = dengjuquery;
exports.canjuquery = canjuquery;
exports.zshiquery = zshiquery;
exports.checkAdminLogin=checkAdminLogin;
exports.productdele = productdele;
