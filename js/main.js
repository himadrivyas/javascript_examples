(function(){
console.log('Self executed function called');
function showDate(){
	var today, day, hour, min, sec, time;
	today = new Date();
	day = today.getDay();
	hour = today.getHours(); min= today.getMinutes(); sec = today.getSeconds();
	time = hour + ':' + min + ':'+ sec;

	console.log(time);

	document.getElementById('day').innerHTML = day;
	document.getElementById('time').innerHTML = time;
}
window.addEventListener('load',showDate,false);
})();