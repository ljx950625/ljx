
//	class GoodsListtwo{
//					
//
//		constructor(){
//		  
//			this.img = document.querySelectorAll("#f img")
//			
//			this.addEvent();
//		}
//		
//		
//		 addEvent(){
//          var that = this;
//
//        	document.onclick = function(eve){
//        		
//        	
//              var e = eve || window.event;
//              var t = e.target || e.srcElement;
//              if(t.className == "re"){
//                  that.id = t.parentNode.parentNode.getAttribute("index");
//                  that.setData();
//                  
//                  
//              }
//          }
//      }
//		
//		
//		 setData(){
//		 
//          this.goods = localStorage.getItem("goods");
//         
//          if(this.goods){
//          	this.goods = JSON.parse(this.goods)
//                  this.goods.push({
//                      id:this.id
//                     
//                  })
//          }else{
//              this.goods = [{
//                  id:this.id
//              }];
//          }
//        
//          localStorage.setItem("goods",JSON.stringify(this.goods))
//        
//      }
//	
//	
//	}
// new GoodsListtwo;

		
			
			

	
// class Car{
//      constructor(){
//      	 
//          this.tbody = document.getElementById("f");
//          this.url = "http://localhost/1905/anmo/shouye/anmo.json";
//
//          this.init();
//          // 1.删除：绑定删除按钮的事件
//        
//      }
//   
//   
//      init(){
//          var that = this;
//          ajaxPost(this.url,function(res){
//          	
//              that.res = JSON.parse(res)
//              that.display();
//          })
//      }
//     
//        display(){
//          var str = "";
//          for(var i=0;i<this.res.length;i++){
//			str += `<a href="../xiangqing/xiang.html?id=${this.res[i].id}">
//			    <ul  index="${this.res[i].id}">
//					 <li>
//								
//						<img src="${this.res[i].src}" class="re">
//						<strong>${this.res[i].name}</strong>
//						<p>${this.res[i].pl}</p>
//						<div class="n">
//						<span>${this.res[i].bj}</span>
//						<p>${this.res[i].ni}</p>
//						</div>
//						<div class="k">
//						<i></i>
//						<span>${this.res[i].hh}</span>
//						<p>${this.res[i].Mm}</p>
//						</div>				
//					</li>
//				</ul>
//			</a>`
//				
//              }
//                  
//          this.tbody.innerHTML = str;
//      }
//  }
//  new Car;

<!--轮播图-->

	
		$(".right").banner({
			aimg:$(".right").find("img"),			//必传
			left:$(".right").find("#left"),		//可选,传了有功能，不传没有功能
			right:$(".right").find("#right"),		//可选,传了有功能，不传没有功能
			isList:false,			//可选，默认为true
			
			autoPlay:true,			//可选，默认为true
			delayTime:1500,			//可选，默认为2000
			moveTime:200,			//可选，默认为200
			index:0
		})



   $("#floor").children("li").click(function(){
   		var index = $(this).index();
   		var j = $(".floor").eq(index);
   	   $("html").stop().animate({
   	   	 scrollTop:j.offset().top
   	   })
   	
   })
 
	var left=document.querySelector("#zhuti .left .left1");
	var left1=document.querySelector("#zhuti .right .right-1");
	var left3=document.querySelector("#zhuti .left .left2");
	var left4=document.querySelector("#zhuti .right .right-2");
	var left5=document.querySelector("#zhuti .left .left3");
	var left6=document.querySelector("#zhuti .right .right-3");
	var a=document.querySelector("#header .b a");
	var div=document.querySelector("#nav .xia");
	var left7=document.querySelector("#zhuti .right .right-4");

	 left.onmouseover=function(){
	 	left1.style.display="block";
	 	left4.style.display="none";
	 	left6.style.display="none";
	 }
	 
	 left1.onmouseleave =function(){
	 left1.style.display="none";
	 } 
	
	 left3.onmouseover=function(){
	 	left4.style.display="block";
	 	left1.style.display="none";
	 	left6.style.display="none";	 	
	 }
	 
	 left4.onmouseleave=function(){
	 	left4.style.display="none";s	 	
	 }
	 
	 left5.onmouseover=function(){
	 	left1.style.display="none";
	 	left6.style.display="block";
	 	left4.style.display="none";
	 }
	 
	 left6.onmouseleave =function(){
	 	left6.style.display="none";
	 }
	 
	 a.onmouseover=function(){
	 	div.style.display="block";
	 }
	 
	 a.onmouseout=function(){
	 	div.style.display="none";
	 }