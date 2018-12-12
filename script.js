var enterButton = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var newLi = document.createElement('li');
	// newLi.appendChild(document.createTextNode(input.value));
	newLi.innerHTML = input.value;
	newLi.title = 'list';
	ul.appendChild(newLi);
	var button = document.createElement('button');
	button.innerHTML = 'Delete';
	button.classList.add('del');
	newLi.appendChild(button);
	input.value = '';
}

//AddListAfterClick
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}
enterButton.addEventListener('click', addListAfterClick);

//AddListAfterKeyPress
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
input.addEventListener('keypress', addListAfterKeypress);

//
//
//
//
//CrossOffToggle
function crossOffToggle(event) {
	if (event.target.title == 'list') {
		event.target.classList.toggle('done');
	}
}
ul.addEventListener('click', crossOffToggle);
//
//
// //Delete Event
function deleteItem(event) {
	if (event.target.className == 'del') {
		event.target.parentNode.remove();
	}
}

ul.addEventListener('click', deleteItem);
