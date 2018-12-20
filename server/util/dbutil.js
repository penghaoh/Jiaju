var mysql = require("mysql");
//连接池
var pool = mysql.createPool({
	host: '192.168.2.109',
	user: 'tl',
	password: '123456',
	database: 'myproject',
	port: 3306
});
exports.pool = pool;

// function getCon(){
// 	var connection = mysql.createConnection({
// 		host: 'localhost',
// 		user: 'root',
// 		password: '571250',
// 		database: 'educational',
// 		
// 	});
// 	connection.connect();
// 	return connection;
// };
// exports.getCon = getCon;

