


	

		var ouser = document.getElementById("user");
		var opass = document.getElementById("pass");
		var opass2 = document.getElementById("pass2");
		var obtn = document.getElementById("btn");
		var omsg = document.getElementById("msg")
		var userOnOff = passOnOff = pass2OnOff = false;


	ouser.onblur = function(){
//			仅支持中文、字母、数字、“-”“_”,4-20个字符
			var reg = /^[\u2E80-\u9FFF\w-]{4,20}$/;
			if(reg.test(this.value)){
				this.nextElementSibling.innerHTML = "用户名成功"
				
				userOnOff = true
			}else{
				this.nextElementSibling.innerHTML = "用户名失败"
				userOnOff = false
			}
		}
		
//		数字字母特殊字符，一种类型，弱。两种类型为中，三种类型为强
		opass.onblur = function(){
			var a=b=c=0;
//			长度验证
			var lengthReg = /^.{6,18}$/;
			if(!lengthReg.test(this.value)){
				this.nextElementSibling.innerHTML = "长度不符";
				passOnOff = false
				return;
			}
//			是否存在数字
			var numReg = /\d/;
			if(numReg.test(this.value)){
				a = 1;
			}
//			是否存在字母
			var azReg = /[a-zA-Z]/;
			if(azReg.test(this.value)){
				b = 1;
			}
//			是否存在特殊字符
			var tsReg = /[\W_]/;
			if(tsReg.test(this.value)){
				c = 1;
			}
			
			switch(a+b+c){
				case 1:
					this.nextElementSibling.innerHTML = "简单";break;
				case 2:
					this.nextElementSibling.innerHTML = "一般";break;
				case 3:
					this.nextElementSibling.innerHTML = "困难";break;
			}
			
			passOnOff = true;
			
//			验证是否一致
			if(opass2.value != ""){
				if(opass2.value == this.value){
					opass2.nextElementSibling.innerHTML = "一致"				
					pass2OnOff = true
				}else{
					opass2.nextElementSibling.innerHTML = "不一致"				
					pass2OnOff = false
				}
			}
		}
		
//		跟第一次输入密码一致
		opass2.onblur = function(){
			if(this.value === opass.value){
				this.nextElementSibling.innerHTML = "一致"
				pass2OnOff = true
			}else{
				this.nextElementSibling.innerHTML = "不一致"
				pass2OnOff = false
			}
		}
		


		obtn.onclick = function(){
			if(userOnOff && passOnOff && pass2OnOff){
//				alert("注册成功，点击跳转页面")
console.log(ouser.value)
				var obj={"user":ouser.value,"pass":opass2.value,"expires":3}
				setCookie("zhanghao",JSON.stringify(obj))
				omsg.innerHTML = "恭喜，注册成功。3秒钟后自动跳转到<a href='land.html'>登陆</a>"
				setTimeout(function(){
					location.href = "land.html"
				},3000)
			}else{
				omsg.innerHTML = "注册失败"
			}
		}
		
		

	
 