//generate tip

var result = document.querySelector('#result');

var cbtn = document.querySelector('#calculateBtn');
var resetB = document.querySelector('#resetBtn');

var drop = document.getElementById('tAmounts');
cbtn.addEventListener('click', calculate); //calculate
drop.addEventListener('change', updateSer);
resetB.addEventListener('click', resetForm); //reset

function calculate(){
	var total = document.getElementById('pBox').value;
	var tip = document.getElementById('tBox').value;
	if(tip == "" || total == ""){
		//console.log("Error: please enter vals");
		result.innerHTML = "Error: please enter values";
		return false;
	}

	
	result.innerHTML = "£" + total * (tip/100);
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
	document.getElementById('pBox').value = "";
	document.getElementById('tBox').value = "";
}
