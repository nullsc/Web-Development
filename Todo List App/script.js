var ul = document.querySelector("ul");
var btn = document.querySelector("#submit-button");
btn.addEventListener("click", add);

var input = document.getElementById("userInput");


function add() {
	if (input.value == "")
		return false;
	
	var li = document.createElement("li"); // creates an element "li"
	li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
	ul.appendChild(li); //adds li to ul
	console.log(input.value);
	input.value = ""; //Reset text input field
	
	function crossOut() { //func inside so only applies to new
		li.classList.toggle("done"); //toggle the completed class
	}

	li.addEventListener("click", crossOut);
	
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	
	function deleteListItem(){
		li.classList.add("delete");
	}
}

//use enter key to input
input.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) { //enter key
		event.preventDefault(); //cancel default action
		add();
	}
});
