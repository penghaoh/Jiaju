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

//搜索框搜索产品
function searchPro(searchKey,cb){
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
		}else{
				var sql = `select * from product where name like '%${searchKey}%'`;
				connection.query(sql,(qerr,result)=>{
					connection.release();
					cb(result);
					console.log('searchPro',result)
				})	
		}
	})
}
//测试
// searchPro('造作',function(result){
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
	console.log('=========',name,price,descs,imgurl,origin,brand,typeid);
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
		}else{
			var sql = "insert into product(name,price,descs,imgurl,origin,brand,typeid) values(?,?,?,?,?,?,?)";
			console.log('sql之后')
			connection.query(sql,[name,price,descs,imgurl,origin,brand,typeid],(qerr,result)=>{
				connection.release();
				console.log(result)
				cb(result.affectedRows)
			})
		}
	})
}

//修改商品
function updatepro(id,name,price,descs,origin,brand,imgurl,cb){
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
		}else{
			console.log(id,name,price)
			var sql = `update product set name=?,price=?,descs=?,origin=?,brand=?,imgurl=? where id =?`;
			// let sql = `update product set name='aa', price='44' where id=1`

			// console.log(sql);
			connection.query(sql,[name,price,,origin,brand,imgurl,id],(qerr,result)=>{
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
exports.searchPro = searchPro;
exports.productdele = productdele;
exports.producttype = producttype;
exports.addpro = addpro;
exports.updatepro = updatepro;





// const dbutil = require("../util/dbutil.js");
// var mysql = require("mysql");

// //根据用户名和密码进入数据库查询
// function checkAdminLogin(name,pwd,cb){
// 	dbutil.pool.getConnection(function(err,connection){
// 		if(err){
// 			console.log(err)
// 		}else {
// 			var sql = "select name,pwd from admin where name = ? and pwd = ?";
// 			connection.query(sql,[name,pwd],function(qerr,result){
// 				connection.release();
// 				console.log('---------result',result);
// 				cb(result);
// 			})
// 		}
// 	})
// }

// //根据用户名和密码进入数据库查询用户
// function checkUserLogin(phone,pwd,cb){
// 	dbutil.pool.getConnection(function(err,connection){
// 		if(err){
// 			console.log(err)
// 		}else {
// 			var sql = "select name,id from user where phone = ? and pwd = ?";
// 			connection.query(sql,[phone,pwd],function(qerr,result){
// 				connection.release();
// 				console.log('---------resultoooo',result);
// 				cb(result);
// 			})
// 		}
// 	})
// }
// //查询总条数
// function getTotalnum(cb) {
// 	dbutil.pool.getConnection(function(err,connection){
// 		if(err){
// 			console.log(err)
// 		}else{
// 				var sql = "select count(*)as num from product ";
// 				connection.query(sql,(qerr,result)=>{
// 					connection.release();
// 					cb(result);
// 					console.log('getTotalnum',result[0].num)
// 				})	
// 		}
// 	})
// }

// //产品所有查询
// function productquery (first,len,cb){
// 	console.log('index',first,'len',len)
// 	dbutil.pool.getConnection(function(err,connection){
// 		if(err){
// 			console.log(err)
// 		}else{
			
// 				var sql = "select * from product limit ?,? ";
// 			connection.query(sql,[first,len],(qerr,result)=>{
// 				connection.release();
// 				cb(result)
// 				// console.log('------productquery',result)
// 			})	
// 		}
// 	})
// }
// function productquerybyid (id,cb){
// 	dbutil.pool.getConnection(function(err,connection){
// 		if(err){
// 			console.log(err)
// 		}else{
			
// 				var sql = "select * from product where id=?";
// 			connection.query(sql,[id],(qerr,result)=>{
// 				connection.release();
// 				cb(result)
// 				console.log(result[0].name)
// 				// console.log('------productquery',result)
// 			})	
// 		}
// 	})
// }

// //按typeid查询
// function productquerys(typeid,cb){
// 	dbutil.pool.getConnection(function(err,connection){
// 		if(err){
// 			console.log(err)
// 		}else{
// 			var sql = "select product.name,price,origin,brand,product.id,descs,imgurl from product inner join protype on type_id = typeid where typeid = ?";
// 			connection.query(sql,[typeid],(qerr,result)=>{
// 				connection.release();
// 				cb(result)
// 				console.log(result)
// 			})
// 		}
// 	})
// }
// //自定义作品
// function showDefiningGoods(cb){
// 	dbutil.pool.getConnection(function(err,connection){
// 			if(err){
// 				throw err
// 			}else {
// 				var sql = "select * from product where defineid between 1 and  3";
// 				connection.query(sql,[],function(qerr,ru){
// 					connection.release();
// 					cb(ru);
// 					// console.log(ru);
// 					console.log(ru.length);
// 				})
// 			}
// 		})
// };
// //商品删除
// function productdele(num){
// 	dbutil.pool.getConnection(function(err,connection){
// 		if(err){
// 			console.log(err)
// 		}else{
// 			var sql = "delect from product where id =?";
// 			connection.query(sql,[num],(qerr,result)=>{
// 				connection.release();
// 				// cb('删除成功')
// 			})
// 		}
// 	})
// }
// //查询类型
// function producttype(){
// 	dbutil.pool.getConnection(function(err,connection){
// 		if(err){
// 			console.log(err)
// 		}else{
// 			var sql = "select * from protype";
// 			connection.query(sql,(qerr,result)=>{
// 				connection.release();
// 				cb(result)
// 			})
// 		}
// 	})
// }
// //用户表查询
// function queryuser(cb){
// 	dbutil.pool.getConnection(function(err,connection){
// 		if(err){
// 			console.log(err)
// 		}else{
// 			var sql = "select * from user";
// 			connection.query(sql,(qerr,result)=>{
// 				connection.release();
// 				cb(result)
// 			})
// 		}
// 	})
// }
// //增加商品
// function addpro(name,price,descs,imgurl,origin,brand,typeid,cb){
// 	dbutil.pool.getConnection(function(err,connection){
// 		if(err){
// 			console.log(err)
// 		}else{
// 			var sql = "insert into product(name,price,descs,imgurl,origin,brand,typeid) values(?,?,?,?,?,?,?)";
// 			connection.query(sql,[name,price,descs,imgurl,origin,brand,typeid],(qerr,result)=>{
// 				connection.release();
// 				cb(result)
// 				// console.log(result)
// 			})
// 		}
// 	})
// }
// //商品删除
// function productdele(num,cb){
// 	dbutil.pool.getConnection(function(err,connection){
// 		if(err){
// 			console.log(err)
// 		}else{
// 			var sql = "delect from product where id =?";
// 			connection.query(sql,[num],(qerr,result)=>{
// 				connection.release();
// 				cb('删除成功')
// 			})
// 		}
// 	})
// }

// //修改商品
// function updatepro(name,price,id,cb){
// 	dbutil.pool.getConnection(function(err,connection){
// 		if(err){
// 			console.log(err)
// 		}else{
// 			console.log(id,name,price)
// 			var sql = `update product set name=?,price=? where id =?`;
// 			// let sql = `update product set name='aa', price='44' where id=1`

// 			// console.log(sql);
// 			connection.query(sql,[name,price,id],(qerr,result)=>{
// 				connection.release();
// 				cb(result)
// 				// console.log(qerr)
// 				console.log('-----------',result)
// 			})
// 		}
// 	})
// }
// //检查注册用户名是否重复
// function checkRegName(name,cb){
// 	dbutil.pool.getConnection(function(err,connection){
// 		if(err){
// 			throw err
// 		}else {
// 			var sql = "select count(*)as num from user where name = ?";
// 			connection.query(sql,[name],function(qerr,ru){
// 				connection.release();
// 				cb(ru[0].num);
// 				//console.log(ru[0].num)

// 			})
// 		}
// 	})
// }
// //用户名注册
// function insertRegName(name,pwd,phone,cb){
// 	dbutil.pool.getConnection(function(err,connection){
// 		if(err){
// 			throw err
// 		}else {
// 			var sql = "insert into user(name,pwd,phone) value(?,?,?)";
// 			connection.query(sql,[name,pwd,phone],function(qerr,ru){
// 				connection.release();
// 				cb(ru.affectedRows);
// 				// console.log('10101101010',ru.affectedRows)

// 			})
// 		}
// 	})
// }

// //guctabselet
// function guctabselet(proid,userid,cb){
// 	dbutil.pool.getConnection(function(err,connection){
// 		if(err){
// 			throw err
// 		}else {
// 			var sql = "select * from guctab where proid=? and user_id=?";
// 			connection.query(sql,[proid,userid],function(qerr,ru){
// 				connection.release();
// 				console.log('guctabselet',ru)
				
// 				cb(ru)
			
// 			})
// 		}
// 	})
// }

// //guctabinsert
// function guctabinsert(proid,name,imgurl,price,num,userid,cb){
// 	console.log(typeof proid,typeof name,typeof imgurl,typeof price,typeof num,typeof userid)
// 	dbutil.pool.getConnection(function(err,connection){
// 		if(err){
// 			throw err
// 		}else {
// 			var sql = "insert into guctab(proid,name,imgurl,price,num,user_id) values (?,?,?,?,?,?)";
// 			connection.query(sql,[proid,name,imgurl,price,num,userid],function(qerr,result){
// 				connection.release();
// 				console.log('guctabinsert',result);
// 				cb(result.affectedRows)
// 				// console.log('10101101010',ru.affectedRows)

// 			})
// 		}
// 	})
// }

// //guctabupdate
// function guctabupdate(num1,proid,userid,cb){
// 	console.log(typeof num1,num1)
// 	dbutil.pool.getConnection(function(err,connection){
// 		if(err){
// 			throw err
// 		}else {
// 			// update stu set sex='男' where id>5 and id<10;
// 			var sql = "update guctab set num =? where proid=? and user_id =?";
// 			connection.query(sql,[num1,proid,userid],function(qerr,result){
// 				connection.release();
// 				console.log('guctabupdate',result)
// 				cb(result);
// 				// console.log('10101101010',ru.affectedRows)

// 			})
// 		}
// 	})
// }

// //guctabselets
// function guctabselets(userid,cb){
// 	dbutil.pool.getConnection(function(err,connection){
// 		if(err){
// 			throw err
// 		}else {
// 			var sql = "select * from guctab where user_id=?";
// 			connection.query(sql,[userid],function(qerr,ru){
// 				connection.release();
// 				console.log('guctabselets',ru)
				
// 				cb(ru)
			
// 			})
// 		}
// 	})
// }

// //guctabdelet
// function guctabdelet(userid,proid,cb){
// 	dbutil.pool.getConnection(function(err,connection){
// 		if(err){
// 			throw err
// 		}else {
// 			var sql = "delete from guctab where user_id=? and proid = ?";
// 			connection.query(sql,[userid,proid],function(qerr,ru){
// 				connection.release();
// 				console.log('guctabselets',ru)
				
// 				cb(ru)
				
// 			})
// 		}
// 	})
// }
// exports.guctabdelet = guctabdelet;
// exports.guctabselets = guctabselets;
// exports.guctabupdate = guctabupdate;
// exports.guctabinsert = guctabinsert;
// exports.guctabselet = guctabselet;
// exports.checkRegName = checkRegName;
// exports.insertRegName = insertRegName;
// exports.updatepro = updatepro;
// exports.getTotalnum = getTotalnum;
// exports.productquery = productquery;
// exports.productquerys = productquerys;
// exports.addpro = addpro;
// exports.queryuser = queryuser;
// exports.productquery = productquery;

// exports.checkAdminLogin=checkAdminLogin;
// exports.productdele = productdele;

// exports.producttype = producttype;
// exports.productquerybyid = productquerybyid;
// exports.showDefiningGoods = showDefiningGoods;
// exports.checkUserLogin = checkUserLogin;
