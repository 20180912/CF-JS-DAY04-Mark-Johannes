
function incircle() {
	document.getElementById('demo').innerHTML = "you are in the circle";
}
function outcircle() {
	document.getElementById('demo').innerHTML = "you are outside of the circle";
}
function click() {
	document.body.style.backgroundColor= 'grey';
}
function doubleclick() {
	document.body.style.backgroundColor= 'blue';
}

var elementNode = document.getElementById('circle');
elementNode.addEventListener('mouseover', incircle, false);
elementNode.addEventListener('mouseout', outcircle, false);
elementNode.addEventListener('click', click, false);
elementNode.addEventListener('dblclick', doubleclick, false);