window.onload = function() {
    document.addEventListener('click', subscribe);
}

function subscribe() {
    var email = document.getElementById('email').innerHTML;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            subscribeCallback(xmlHttp.responseText);
        }
    }
    xmlHttp.open("GET", "https://listsprod.osu.edu/mailman/subscribe/code4community?email="+email, true); // true for asynchronous 
    xmlHttp.send(null);
}

function subscribeCallback(response) {
    //do cool button stuff here
}