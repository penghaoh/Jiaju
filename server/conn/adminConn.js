const adminDba = require("../dba/adminDba.js");

//进入管理员登录主页
// function toLogin(req,res){
// 	 console.log('req.signedCookies',req.signedCookies);
// 	if("admin" in req.signedCookies) {
// 		res.render("main",req.signedCookies.admin);//进入主页
// 	}else{
// 		res.render("login",{inf:"请登录"});
// 	}
// };
//管理员登录时
function adminlogin(req,res){
	console.log('……');
	var name = req.body.name;
	var pwd = req.body.pwd;
	console.log('name',name,'pwd',pwd);
	adminDba.checkAdminLogin(name,pwd,function(result){
		if(result.length == '1'){
			// res.cookie("admin",result[0],{signed:true}),
			res.json("ok");//进入主页
		}else {
			res.json("no");
		}
	})
};
//员工退出
// function loginout(req,res){
// 	res.clearCookie('employee');
// 	res.render("login",{inf:"请登录"});
// }
	
// exports.toLogin = toLogin;
exports.adminlogin = adminlogin;
// exports.loginout = loginout;