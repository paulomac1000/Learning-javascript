function numberOfElements(idNumberOfElementsDiv){
	var numberOfElementsDiv = document.getElementById(idNumberOfElementsDiv);
	if(numberOfElementsDiv != null){
		numberOfElementsDiv.innerHTML += '<p>Obiekt history przechowuje aktualnie obiektów: ' + history.length + '</p>';
	}
}

function backAndForwardButtons(idBackAndForwardButtonsDiv){
	var backAndForwardButtonsDiv = document.getElementById(idBackAndForwardButtonsDiv);
	if(backAndForwardButtonsDiv != null){
		backAndForwardButtonsDiv.innerHTML += '<button onclick="history.back();">Wstecz</button>';
		backAndForwardButtonsDiv.innerHTML += '<button onclick="history.forward();">Naprzód</button>';
	}
}

function goToInput(idGoToInputDiv){
	var goToInputDiv = document.getElementById(idGoToInputDiv);
	if(goToInputDiv != null){
		goToInputDiv.innerHTML += '<p>Lub wpisz poniżej, o ile stron chcesz się przesunąć.</p>';
		goToInputDiv.innerHTML += '<input id="goTo"></br>';
		goToInputDiv.innerHTML += '<button onclick="history.go(document.getElementById(\'goTo\').value);">Go</button>';
	}
}

function initialize(idNumberOfElementsDiv, idBackAndForwardButtonsDiv, idGoToInputDiv){
	numberOfElements(idNumberOfElementsDiv);
	backAndForwardButtons(idBackAndForwardButtonsDiv);
	goToInput(idGoToInputDiv);
}