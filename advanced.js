
function incircle() {
	document.getElementById('demo').innerHTML = 'you are in the circle';

}

var elementNode = document.getElementById('circle');
elementNode.addEventListener('click',incircle,false)