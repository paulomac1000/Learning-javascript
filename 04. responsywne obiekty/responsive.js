var queue = new Array();

function initialize(idSizeDiv, idRectangleDiv){
    showWindowSize(idSizeDiv);
    drawRectangle(idRectangleDiv);

    setResizeToBody(idSizeDiv, idRectangleDiv);
}

function showWindowSize(idSizeDiv){
    var sizeDiv = document.getElementById(idSizeDiv);
    sizeDiv.innerHTML = 'Wysokość okna: ' + innerHeight + '</br>';
    sizeDiv.innerHTML += 'Szerokość okna: ' + innerWidth +'</br>';
} 

function drawRectangle(idRectangleDiv){
    var rectangleDiv = document.getElementById(idRectangleDiv);

    var height = innerHeight/2;
    var width = innerWidth/2;

    rectangleDiv.setAttribute('style', 'width: ' + width + 'px; height: ' + height + 'px; background-color: red;');
}

function setResizeToBody(idSizeDiv, idRectangleDiv){
    var body = document.body;

    body.onresize = function(){
        showWindowSize(idSizeDiv);
        drawRectangle(idRectangleDiv);
    }
}