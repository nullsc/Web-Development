//change colours

const colourBtn =  document.querySelector('.colourBtn');
const bodyClr = document.querySelector('body');

const colourArray = ['red', 'blue', 'green', 'pink', 'yellow']; //can use hex

colourBtn.addEventListener('click', changeColour);

function changeColour(){
	//bodyClr.style.backgroundColor = 'Blue';
	let random = Math.floor(Math.random() * colourArray.length)
	bodyClr.style.backgroundColor = colourArray[random];
}
