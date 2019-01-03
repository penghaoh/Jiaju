const dbutil = require("../util/dbutil.js");
var mysql = require("mysql");

function productquerybyid (id,cb){
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
		}else{
			
				var sql = "select * from product where id=?";
			connection.query(sql,[id],(qerr,result)=>{
				connection.release();
				cb(result)
				console.log(result[0].name)
				// console.log('------productquery',result)
			})	
		}
	})
}

//按typeid查询
function productquerys(typeid,cb){
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
		}else{
			var sql = "select product.name,price,origin,brand,product.id,descs,imgurl from product inner join protype on type_id = typeid where typeid = ?";
			connection.query(sql,[typeid],(qerr,result)=>{
				connection.release();
				cb(result)
				console.log(result)
			})
		}
	})
}

//自定义作品
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

//根据用户名和密码进入数据库查询用户
function checkUserLogin(phone,pwd,cb){
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			console.log(err)
		}else {
			var sql = "select name,id from user where phone = ? and pwd = ?";
			connection.query(sql,[phone,pwd],function(qerr,result){
				connection.release();
				console.log('---------resultoooo',result);
				cb(result);
			})
		}
	})
}

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
	console.log('89',name,typeof pwd,typeof phone)
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			throw err
		}else {
			var sql = "insert into user (name,pwd,phone) values (?,?,?)";
			connection.query(sql,[name,pwd,phone],function(qerr,ru){
				connection.release();
				console.log(ru)
				cb(ru.affectedRows);
				// console.log('10101101010',ru.affectedRows)

			})
		}
	})
}

//guctabselet
function guctabselet(proid,userid,cb){
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			throw err
		}else {
			var sql = "select * from guctab where proid=? and user_id=?";
			connection.query(sql,[proid,userid],function(qerr,ru){
				connection.release();
				console.log('guctabselet',ru)
				
				cb(ru)
			
			})
		}
	})
}



//guctabinsert
function guctabinsert(proid,name,imgurl,price,num,userid,cb){
	console.log(typeof proid,typeof name,typeof imgurl,typeof price,typeof num,typeof userid)
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			throw err
		}else {
			var sql = "insert into guctab(proid,name,imgurl,price,num,user_id) values (?,?,?,?,?,?)";
			connection.query(sql,[proid,name,imgurl,price,num,userid],function(qerr,result){
				connection.release();
				console.log('guctabinsert',result);
				cb(result.affectedRows)
				// console.log('10101101010',ru.affectedRows)

			})
		}
	})
}

//guctabupdate
function guctabupdate(num1,proid,userid,cb){
	console.log(typeof num1,num1)
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			throw err
		}else {
			// update stu set sex='男' where id>5 and id<10;
			var sql = "update guctab set num =? where proid=? and user_id =?";
			connection.query(sql,[num1,proid,userid],function(qerr,result){
				connection.release();
				console.log('guctabupdate',result)
				cb(result);
				// console.log('10101101010',ru.affectedRows)

			})
		}
	})
}

//guctabselets
function guctabselets(userid,cb){
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			throw err
		}else {
			var sql = "select * from guctab where user_id=?";
			connection.query(sql,[userid],function(qerr,ru){
				connection.release();
				console.log('guctabselets',ru)
				
				cb(ru)
			
			})
		}
	})
}

//guctabdelet
function guctabdelet(userid,proid,cb){
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			throw err
		}else {
			var sql = "delete from guctab where user_id=? and proid = ?";
			connection.query(sql,[userid,proid],function(qerr,ru){
				connection.release();
				console.log('guctabselets',ru)
				
				cb(ru)
				
			})
		}
	})
}
exports.guctabdelet = guctabdelet;
exports.guctabselets = guctabselets;
exports.guctabupdate = guctabupdate;
exports.guctabinsert = guctabinsert;
exports.guctabselet = guctabselet;
exports.insertRegName = insertRegName;
exports.checkRegName = checkRegName;
exports.checkUserLogin = checkUserLogin;
exports.showDefiningGoods = showDefiningGoods;
exports.productquerys = productquerys;
exports.productquerybyid = productquerybyid;
