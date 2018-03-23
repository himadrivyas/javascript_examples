(function(){
console.log('Self executed function called');
document.querySelector('#time').addEventListener('click',showTime,false);
document.querySelector('#print').addEventListener('click',printPage,false);
document.querySelector('#date').addEventListener('click',showDate, false);
document.querySelector('.area').addEventListener('click',triangleArea,false);
function showTime(){
	document.querySelector('.hidden').style.display ="block";
	var today, day, hour, min, sec, time, dayList;
	today = new Date();
	day = today.getDay();
	hour = today.getHours(); 
	min= today.getMinutes(); 
	min = min < 10 ? '0'+min : min ;
	sec = today.getSeconds();
	var ampm = hour >=12 ? 'PM' : 'AM';
	hour = hour % 12;

	if(hour==0 && ampm=='AM'){
		if(min==0 && sec==0){
			hour = 12;
			ampm = 'Noon';
		}
	}
	if(hour==0 && ampm=='PM'){
		if(min==0 && sec==0){
			hour = 12;
			ampm = 'Midnight';
		}
	}

	time = ' '+hour + ' '+ampm+ ' : '+  min +  ' : '+ sec;
	dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	
	document.getElementById('day').innerHTML = dayList[day];
	document.querySelector('.time').innerHTML = time;
}

function printPage(){
	window.print();
}

function showDate(){
	var newDate, date, month, year;
	newDate = new Date();
	date = newDate.getDate();
	month =  newDate.getMonth();
	year = newDate.getFullYear();

	month = month<10? '0'+month : month;
	
	document.querySelector('.date').innerHTML = date+'/'+month+'/'+year;
}

function triangleArea(){
	var inputs, index,x1,x2,x3,first,second,third;
	inputs = document.querySelectorAll('input');
	for(index=0;index<inputs.length;++index){
		inputs[0]=x1;
		inputs[1]=x2;
		inputs[2]=x3;
		first = x1; second=x2, third=x3;
	}
	console.log(first.second,third);
}
})();

