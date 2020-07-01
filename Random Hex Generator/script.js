//change colours to a random HEX code

const colourCodes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const hash = '#';

const bodyClr = document.querySelector('body');
const colourBtn =  document.querySelector('.colourBtn');
const cText = document.querySelector('.colourText');

colourBtn.addEventListener('click', function(){changeColour(generateCode());});

function generateCode(){
	var hexCode = hash + "";
	for (let i = 0; i < 6; i++) {
			let random = Math.floor(Math.random() * colourCodes.length);
			hexCode += colourCodes[random];
	}
	console.log(hexCode);
	cText.innerHTML = hexCode;
	return hexCode;
}

function changeColour(colour){
	bodyClr.style.backgroundColor = colour;
}
//bodyClr.style.backgroundColor = generateCode();