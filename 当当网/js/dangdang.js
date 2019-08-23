var time;
var num = 1;
var hh=280;
//显示我的当当下拉菜单
function showInfo() {
	document.getElementById("account_info").style.display = "block";
}

//隐藏我的当当下拉菜单
function hiddenInfo() {
	document.getElementById("account_info").style.display = "none";
}

//更改图片
function changeImg(index) {

	if(index != null) {
		num = index;
	} else {
		num++;
	}

	if(num > 6) {
		num = 1;
	}
	//获取图片节点
	var img = document.getElementById("body_center_top2").getElementsByTagName("img")[0];
	//获取li节点
	var lis = document.getElementById("body_center").getElementsByTagName("li");

	//更改图片路径
	img.src = "img/dd_scroll_" + num + ".jpg";

	//初始化每个Li的样式
	for(var i = 0; i < lis.length; i++) {
		lis[i].className = "num";
	}
	//设置正在播放的Li的样式
	lis[num - 1].className = "chgcolor";
}

//恢复图片播放
function outImg() {
	time = window.setInterval("changeImg()", 1000);
}

//清除时间
function stopImg() {
	window.clearInterval(time);
}

//改变书籍菜单
function changeBook(index) {
	for(var i = 1; i <= 4; i++) {
		var book = document.getElementById("bookMenu" + i);
		book.style.display = "none";
	}
	var book = document.getElementById("bookMenu" + index);
	book.style.display = "block";
}

//书讯快递
function myScroll() {
	var div1=document.getElementById("div_1");
	var all=document.getElementById("body_right_top2");
	if(all.scrollTop>div1.offsetHeight){
		all.scrollTop=0;
	}else{
		all.scrollTop++;
	}
	
}

window.onload = function() {
	time = window.setInterval("changeImg()", 1000);
	var div1 = document.getElementById("div_1");
	var div2 = document.getElementById("div_2");
	div2.innerHTML = div1.innerHTML;
	//开启定时器
	var time_scroll = window.setInterval("myScroll()", 40);
	div1.onmouseenter = function() {
		clearInterval(time_scroll);
	}
	div1.onmouseleave = function() {
		time_scroll = setInterval("myScroll()", 40)
	}

}