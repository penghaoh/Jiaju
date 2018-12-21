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
//输入/进入登陆页面
function login(req,res){
	res.render('login')
}
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


//产品所有查询
	function productsel(req,res){
		adminDba.productquery((result)=>{
			res.json(result)
		})
	}
//沙发
	function selectsofa(req,res){
		adminDba.sofaquery((result)=>{
			res,json(result)
		})
	}
//椅凳
	function selectyideng(req,res){
		adminDba.yidengquery((result)=>{
			res,json(result)
		})
	}
	//桌几
	function selectzuoji(req,res){
		adminDba.zuojiquery((result)=>{
			res,json(result)
		})
	}
	//灯具
	function selectdengju(req,res){
		adminDba.dengjuquery((result)=>{
			res,json(result)
		})
	}
	//餐具
	function selectcanju(req,res){
		adminDba.canjuquery((result)=>{
			res,json(result)
		})
	}
	//装饰
	function selectzshi(req,res){
		adminDba.zshiquery((result)=>{
			res,json(result)
		})
	}
//删除商品
	function deleproduct(req,res){
		var num = req.query.id;
		adminDba.productdele(num)
	}
// exports.toLogin = toLogin;
exports.adminlogin = adminlogin;
exports.login = login;
exports.productsel = productsel;
exports.selectsofa = selectsofa;
exports.selectyideng = selectyideng;
exports.selectzuoji = selectzuoji;
exports.selectdengju = selectdengju;
exports.selectcanju = selectcanju;
exports.selectzshi = selectzshi;
exports.deleproduct = deleproduct;