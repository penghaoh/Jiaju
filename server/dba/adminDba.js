const dbutil = require("../util/dbutil.js");
var mysql = require("mysql");
//根据用户名和密码进入数据库查询
function checkAdminLogin(name,pwd,cb){
	dbutil.pool.getConnection(function(err,connection){
		if(err){
			throw error
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
exports.checkAdminLogin=checkAdminLogin;
