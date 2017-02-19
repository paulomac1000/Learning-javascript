function initializeDrawer(divId) {
    if(typeof divId == undefined){
        divId = 'drawer';
    }
    var initDiv = document.getElementById(divId);
    if (initDiv != null) {
        var headerInfo = document.createElement('h2');
        var headerInfoContent = document.createTextNode("Wciśnij przycisk, aby wykonać określoną akcję");
        headerInfo.appendChild(headerInfoContent);
        initDiv.appendChild(headerInfo);

        var buttonCreateH1 = document.createElement('button');
        var buttonCreateH1Content = document.createTextNode("dopisz nagłówek H1");
        buttonCreateH1.setAttribute('onmousedown', 'createH1();');
        buttonCreateH1.appendChild(buttonCreateH1Content);
        initDiv.appendChild(buttonCreateH1);

        var buttonCreateH2 = document.createElement('button');
        var buttonCreateH2Content = document.createTextNode("dopisz nagłówek H2");
        buttonCreateH2.setAttribute('onmousedown', 'createH2();');
        buttonCreateH2.appendChild(buttonCreateH2Content);
        initDiv.appendChild(buttonCreateH2);

        var buttonCreateSquare = document.createElement('button');
        var buttonCreateSquareContent = document.createTextNode("dorysuj żółty kwadrat");
        buttonCreateSquare.setAttribute('onmousedown', 'createSquare();');
        buttonCreateSquare.appendChild(buttonCreateSquareContent);
        initDiv.appendChild(buttonCreateSquare);

        var buttonDeleteAllH1 = document.createElement('button');
        var buttonDeleteAllH1Content = document.createTextNode("usuń wszystkie H1");
        buttonDeleteAllH1.setAttribute('onmousedown', 'deleteAllH1();');
        buttonDeleteAllH1.appendChild(buttonDeleteAllH1Content);
        initDiv.appendChild(buttonDeleteAllH1);

        var buttonDeleteAllH2 = document.createElement('button');
        var buttonDeleteAllH2Content = document.createTextNode("usuń wszystkie H2");
        buttonDeleteAllH2.setAttribute('onmousedown', 'deleteAllH2();');
        buttonDeleteAllH2.appendChild(buttonDeleteAllH2Content);
        initDiv.appendChild(buttonDeleteAllH2);

        var buttonDeleteAllSquares = document.createElement('button');
        var buttonDeleteAllSquaresContent = document.createTextNode("usuń wszystkie żółte kwadraty");
        buttonDeleteAllSquares.setAttribute('onmousedown', 'deleteAllSquares();');
        buttonDeleteAllSquares.appendChild(buttonDeleteAllSquaresContent);
        initDiv.appendChild(buttonDeleteAllSquares);

        pageBody = document.body;
        pageBody.appendChild(initDiv);
    }
}

function createH1(){
    pageBody = document.body;
    var h1Tag = document.createElement('h1');
    var h1TagContent = document.createTextNode("nałówek H1");
    h1Tag.setAttribute('name', 'h1Tag');
    h1Tag.appendChild(h1TagContent);
    pageBody.appendChild(h1Tag);
}

function deleteAllH1(){
    pageBody = document.body;
    var h1Tags = document.getElementsByName('h1Tag');
    if(h1Tags.length == 0){
        return;
    }

    while(h1Tags.length > 0)
    {
        pageBody.removeChild(h1Tags[0]);
    }
}

function createH2()
{
    pageBody = document.body;
    var h2Tag = document.createElement('h2');
    var h2TagContent = document.createTextNode("nałówek H2");
    h2Tag.setAttribute('name', 'h2Tag');
    h2Tag.appendChild(h2TagContent);
    pageBody.appendChild(h2Tag);
}

function deleteAllH2(){
    pageBody = document.body;
    var h2Tags = document.getElementsByName('h2Tag');
    if(h2Tags.length == 0){
        return;
    }

    while(h2Tags.length > 0)
    {
        pageBody.removeChild(h2Tags[0]);
    }
}

function createSquare()
{
    pageBody = document.body;
    var divTag = document.createElement('div');
    divTag.setAttribute('style', 'width: 50px; height: 50px; background-color: yellow; padding: 20px;');
    divTag.setAttribute('name', 'square');
    pageBody.appendChild(divTag);
}

function deleteAllSquares(){
    pageBody = document.body;
    var squares = document.getElementsByName('square');
    if(squares.length == 0){
        return;
    }

    while(squares.length > 0)
    {
        pageBody.removeChild(squares[0]);
    }
}



