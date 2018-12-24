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

<<<<<<< HEAD
//产品所有查询
function productquery (first,len,cb){
	console.log('index',first,'len',len)
=======
//查询总条数
function getTotalnum(cb) {
>>>>>>> 5a48d76753da3767b4155fb6ea55b220d0db5c38
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
		}else{
<<<<<<< HEAD
			var sql = "select * from product limit ?,? ";
			connection.query(sql,[first,len],(qerr,result)=>{
=======
			var sql = "select count(*)as num from product ";
			connection.query(sql,(qerr,result)=>{
>>>>>>> 5a48d76753da3767b4155fb6ea55b220d0db5c38
				connection.release();
				cb(result);
				console.log('getTotalnum',result[0].num)

			})
		}
	})
}

//产品所有查询
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
<<<<<<< HEAD
				//console.log('------productquery',result[0])
=======
				console.log('------productquery',result)
>>>>>>> 5a48d76753da3767b4155fb6ea55b220d0db5c38
			
			})
		}
	})
}
<<<<<<< HEAD
//根据typeid查询
<<<<<<< HEAD
function productquerys(typeid,cb){
=======
function productquery(typeid){
=======
// productquery(2,5,function(){
// 	console.log('njnjcdn')
// })

//沙发
function sofaquery(cb){
>>>>>>> ddd
>>>>>>> 5a48d76753da3767b4155fb6ea55b220d0db5c38
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
		}else{
			var sql = "select product.name,price from product inner join protype on type_id = typeid where typeid = ?";
			connection.query(sql,[typeid],(qerr,result)=>{
				connection.release();
				cb(result);
				console.log(result)
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
function producttype(){
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
//用户表查询
function queryuser(){
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
		}else{
			var sql = "select * from user";
			connection.query(sql,(qerr,result)=>{
				connection.release();
				cb(result)
			})
		}
	})
}
//增加商品
function addpro(name,price,desc,imgurl,origin,brand,typeid){
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
		}else{
			var sql = "insert into product(name,price,desc,imgurl,origin,brand,typeid) values(?,?,?,?,?,?,?)";
			connection.query(sql,[name,price,desc,imgurl,origin,brand,typeid],(qerr,result)=>{
				connection.release();
				cb(result)
			})
		}
	})
}
<<<<<<< HEAD

//查询总条数
function getTotalnum(cb) {
=======
<<<<<<< HEAD
=======
//商品删除
function productdele(num){
>>>>>>> 5a48d76753da3767b4155fb6ea55b220d0db5c38
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
		}else{
<<<<<<< HEAD
			var sql = "select count(*) as num from product ";
			connection.query(sql,(qerr,result)=>{
				connection.release();
				cb(result);
				console.log('getTotalnum',result)

=======
			var sql = "delect from product where id =?";
			connection.query(sql,[num],(qerr,result)=>{
				connection.release();
				// cb('删除成功')
>>>>>>> 5a48d76753da3767b4155fb6ea55b220d0db5c38
			})
		}
	})
}

<<<<<<< HEAD
=======
exports.getTotalnum = getTotalnum;

>>>>>>> ddd
>>>>>>> 5a48d76753da3767b4155fb6ea55b220d0db5c38
exports.productquery = productquery;
exports.addpro = addpro;
exports.queryuser = queryuser;
exports.productquerys = productquerys;

exports.checkAdminLogin=checkAdminLogin;
exports.productdele = productdele;

exports.producttype = producttype;
exports.getTotalnum = getTotalnum;
