var queue = new Array();

function initialize(IdEventsQueueDiv){
    setMouseEventsToBody(IdEventsQueueDiv);
    setKeyboardEventsToBody(IdEventsQueueDiv);
    showQueue(IdEventsQueueDiv);
}

function showQueue(IdEventsQueueDiv){
    var EventsQueueDiv = document.getElementById(IdEventsQueueDiv);

    if(queue.length == 0){
        EventsQueueDiv.innerHTML = 'Stos jest jeszcze pusty, wykonaj jakąś akcję!</br>';
        return;
    }

    EventsQueueDiv.innerHTML = "";
    for(var elem in queue){
        EventsQueueDiv.innerHTML += queue[elem] + '</br>';
    }
}

function addEventToQueue(eventName){
    if(queue.length >= 30){
        queue.shift();
    }

    queue.push(eventName);
}

function setMouseEventsToBody(IdEventsQueueDiv){
    var body = document.body;

    body.onclick = function(){
        addEventToQueue('Zdarzenie <b>onclick</b>');
        showQueue(IdEventsQueueDiv);
    }

    body.ondblclick = function(){
        addEventToQueue('Zdarzenie <b>ondblclick</b>');
        showQueue(IdEventsQueueDiv);
    }

    body.onmousedown = function(){
        addEventToQueue('Zdarzenie <b>onmousedown</b>');
        showQueue(IdEventsQueueDiv);
    }

    body.onmouseup = function(){
        addEventToQueue('Zdarzenie <b>onmouseup</b>');
        showQueue(IdEventsQueueDiv);
    }

    body.onmousemove = function(){
        addEventToQueue('Zdarzenie <b>onmousemove</b>');
        showQueue(IdEventsQueueDiv);
    }
}

function setKeyboardEventsToBody(IdEventsQueueDiv){
    var body = document.body;

    body.onkeydown = function(){
        addEventToQueue('Zdarzenie <b>onkeydown</b>');
        showQueue(IdEventsQueueDiv);
    }

    body.onkeypress = function(){
        addEventToQueue('Zdarzenie <b>onkeypress</b>');
        showQueue(IdEventsQueueDiv);
    }

    body.onkeyup = function(){
        addEventToQueue('Zdarzenie <b>onkeyup</b>');
        showQueue(IdEventsQueueDiv);
    }
}