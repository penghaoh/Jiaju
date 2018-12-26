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
}

// 用户管理模块

//用户表分页查询
function queryuser(first,len,cb){
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
		}else{
			var sql = "select *  from user limit ?,?";
			connection.query(sql,[first,len],(qerr,result)=>{
				connection.release();
				cb(result)
				 // console.log(result);
			})
		}
	})
}
//用户总条数查询
function getUserNum(cb) {
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
		}else{
			var sql = "select count(*)as num from user ";
			connection.query(sql,(qerr,result)=>{
				connection.release();
				cb(result[0].num);
				// console.log('getUserNum',result[0].num)

			})
		}
	})
}
//用户表修改
function updateUserinfo(id,address,cb){
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
		}else{
			var sql = "update user set address = ? where id = ?";
			connection.query(sql,[address,id],(qerr,result)=>{
				connection.release();
				cb(result.affectedRows)
				console.log('updateUserinfo',result.affectedRows);
			})
		}
	})
}

// 产品管理模块
//查询全部商品总条数
function getTotalnum(cb) {
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
		}else{
				var sql = "select count(*)as num from product ";
				connection.query(sql,(qerr,result)=>{
					connection.release();
					cb(result[0].num);
					console.log('getTotalnum',result[0].num)
				})	
		}
	})
}

//根据typeid值查询当前分类的总条数
function getTypeNum(typeid,cb) {
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
		}else{
				var sql = "select count(*)as num from product where typeid = ? ";
				connection.query(sql,[typeid],(qerr,result)=>{
					connection.release();
					cb(result[0].num);
					console.log('getTypeNum',result[0].num)
				})	
		}
	})
}
//测试： 
// getTypeNum(2,function(){
// 	
// })

//分页查询所有产品
function productquery (first,len,cb){
	console.log('index',first,'len',len)
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
		}else{
			var sql = "select * from product limit ?,? ";
			connection.query(sql,[first,len],(qerr,result)=>{
				connection.release();
				cb(result)
				// console.log('------productquery',result)
			})	
		}
	})
}

//按typeid查询当前页商品
function productquerys(first,len,typeid,cb){
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
		}else{
			var sql = "select * from product where typeid = ? limit ?,?";
			connection.query(sql,[typeid,first,len],(qerr,result)=>{
				connection.release();
				cb(result)
				console.log('productquerysresult',result)
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
//查询类型
function producttype(cb){
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
		}else{
			var sql = "select * from protype";
			connection.query(sql,(qerr,result)=>{
				connection.release();
				cb(result)
			})
		}
	})
}

//增加商品
function addpro(name,price,descs,imgurl,origin,brand,typeid,cb){
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
		}else{
			var sql = "insert into product(name,price,descs,imgurl,origin,brand,typeid) values(?,?,?,?,?,?,?)";
			connection.query(sql,[name,price,descs,imgurl,origin,brand,typeid],(qerr,result)=>{
				connection.release();
				cb(result)
				// console.log(result)
			})
		}
	})
}

//修改商品
function updatepro(name,price,id,cb){
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
		}else{
			console.log(id,name,price)
			var sql = `update product set name=?,price=? where id =?`;
			// let sql = `update product set name='aa', price='44' where id=1`

			// console.log(sql);
			connection.query(sql,[name,price,id],(qerr,result)=>{
				connection.release();
				cb(result)
				// console.log(qerr)
				console.log('-----------',result)
			})
		}
	})
}


// 管理员登录
exports.checkAdminLogin=checkAdminLogin;
// 用户模块
exports.queryuser = queryuser;
exports.getUserNum = getUserNum;
exports.updateUserinfo = updateUserinfo;
// 产品管理模块
exports.getTotalnum = getTotalnum;
exports.getTypeNum = getTypeNum;
exports.productquery = productquery;
exports.productquerys = productquerys;
exports.productdele = productdele;
exports.producttype = producttype;
exports.addpro = addpro;
exports.updatepro = updatepro;
