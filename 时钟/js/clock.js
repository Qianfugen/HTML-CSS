window.onload = function() {
	//获取时钟,分针,秒针
	var hourHand = document.querySelector(".hours-container");
	var minuteHand = document.querySelector(".minutes-container");
	var secondHand = document.querySelector(".seconds-container");

	//获取当前时间
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();

	//角度换算
	var secondDegree = second * 6;
	var minuteDegree = minute * 6 + (second / 10);
	var hourDegree = (hour * 30) + (minute / 2);
	
	//设置指针转动角度
	hourHand.style.transform = `rotateZ(${hourDegree}deg)`;
	minuteHand.style.transform = `rotateZ(${minuteDegree}deg)`;
	secondHand.style.transform = `rotateZ(${secondDegree}deg)`;
}