var mysql = require("mysql");
//连接池
var pool = mysql.createPool({
	host: '129.204.78.65',
	user: 'root',
	password: 'Hkqcs.2018',
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

