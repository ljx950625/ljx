	

		
		
		var ouser = document.getElementById("user");
		var opass = document.getElementById("pass");
		var obtn = document.getElementById("btn");
		var omsg = document.getElementById("msg")
		var op = document.getElementById("p")


//			obtn.onclick = function(){
//			var u = getCookie(ouser.value);
//			if(u == ""){
//				op1.style.display = "block";
//				op1.innerHTML = "用户名不存在，请重新输入"
//			}else if(u = opass.value){
//				op1.style.display = "block";
//				op1.innerHTML = "登录成功，三秒后跳转页面<a href='../register/register.html'>首页</a>"
//				setTimeout(
//					function(){
//						location.href = "../register/register.html"
//					},3000
//				)
//			}
//		
//	}
	
		obtn.onclick=function(){
		console.log(ouser.value)	
		var a=getCookie("zhanghao")
		console.log(getCookie("zhanghao"))
		
		if(a==""){
//			console.log("输入的用户名不存在，请重新输入")
				op.style.display="block";
				op.innerHTML="输入的用户名不存在，请重新输入"
		}else {
//			console.log("登陆成功，即将跳转到首页")
				op.style.display="block"	
				op.innerHTML="恭喜，登陆成功。3秒钟后自动跳转到<a href='../shouye/anmo.html'>首页</a>"
				setTimeout(function(){
					location.href="../shouye/anmo.html"
				},3000)
		}
	}


