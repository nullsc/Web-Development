//generate tip

var result = document.querySelector('#result');

var cbtn = document.querySelector('.cBtn');
var drop = document.getElementById('tAmounts');
cbtn.addEventListener('click', calculate);
drop.addEventListener('change', updateSer);

function calculate(){
	var total = document.getElementById('pBox').value;
	var tip = document.getElementById('tBox').value;
	if(tip == "" || total == "")
		console.log("Error: please enter vals"); //debug
	
	result.innerHTML = total * (tip/100);
	var drop = document.getElementById('tAmounts').value;

}

function updateSer(){
	var tip = document.getElementById('tBox');
	tip.value = document.getElementById('tAmounts').value;
}

function validate(){
	return 0; //later
}

function resetForm(){
	return 0; //later
}
