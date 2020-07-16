//counter

function showTime(){
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	
	let formatHours = convertFormat(hours); //AM or PM
	
	hours = checkTime(hours);
	
	hours = addZero(hours);
	minutes = addZero(minutes);
	seconds = addZero(seconds);
	
	document.getElementById("clock").innerHTML = `${hours} : ${minutes} : ${seconds} ${formatHours}`;
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
	// console.log(hours);

}

function convertFormat(time){
	// let format = "AM";
	
	// if (time >= 12) {
		// format = "PM";
	// }
	
	// return format;
	return (time >= 12 ? "PM" : "AM");
}

function checkTime(time){
	if(time > 12) {
		time = time - 12;
	}
	if (time === 0) {
		time = 12;
	}
	return time;
}

function addZero(time) {
	if (time < 10) {
		time = "0" + time; //concatenate
	}
	return time;
}

showTime();
setInterval(showTime, 1000); //poll once a second
