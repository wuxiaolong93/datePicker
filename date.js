var now=new Date();
var year=now.getFullYear();
var month=now.getMonth()+1;
var day=now.getDate();

var str = '日期<input type="text" name="date" onclick="displaydiv(this)">'
str+='<div class="shower" id="datepanel" style="display:none">'
str+='<div style="height:25;text-align:center;margin:5px 5px;">'
str+='<input type="button" value="上翻" style="float:left">'
str+='<span id="year">___</span>年<span id="month">___</span>月'
str+='<input type="button" value="下翻" style="float:right">'
str+='</div>'
str+='<table>'
str+='<tr><td>日</td><td>一</td><td>二</td><td>三</td><td>四</td><td>五</td><td>六</td></tr>'
str+='<tr> <td id="1"></td> <td id="2"></td> <td id="3"></td> <td id="4"></td> <td id="5"></td> <td id="6"></td> <td id="7"></td> </tr>'
str+='<tr> <td id="8"></td> <td id="9"></td> <td id="10"></td> <td id="11"></td> <td id="12"></td> <td id="13"></td> <td id="14"></td> </tr>'
str+='<tr> <td id="15"></td> <td id="16"></td> <td id="17"></td> <td id="18"></td> <td id="19"></td> <td id="20"></td> <td id="21"></td> </tr>'
str+='<tr> <td id="22"></td> <td id="23"></td> <td id="24"></td> <td id="25"></td> <td id="26"></td> <td id="27"></td> <td id="28"></td> </tr>'
str+='<tr> <td id="29"></td> <td id="30"></td> <td id="31"></td> <td id="32"></td> <td id="33"></td> <td id="34"></td> <td id="35"></td> </tr>'
str+='</table>'
str+='</div>'
document.getElementById("date").innerHTML = str

function displaydiv(e){ //显示日期控件
	//var rec=getoffset(e)
	var date=document.getElementById("datepanel");
	date.style.display = "block"
	//date.setAttribute("style","position:absolute;left:"+rec[1]+"px;top:"+(rec[0]+rec[2])+"px;width: 200px;height: 180px;border:1px solid red;background-color:#F0F0F0;border:1px solid red;");
}
function addtd(){ //填空
		
}
function caculateWeek(year,month){ //算出月份第一天为星期几
	
}
function caculateDays(year,month){ //算出月份的天数
	
}

//控件定位
function getoffset(e) 
{  
 var t=e.offsetTop;  
 var l=e.offsetLeft;  
 var h=e.offsetHeight 
 while(e=e.offsetParent) 
 {  
  t+=e.offsetTop;  
  l+=e.offsetLeft;  
 }  
 var rec = new Array(2); 
 rec[0]  = t; 
 rec[1]  = l; 
 rec[2]  = h;
 return rec 
}
