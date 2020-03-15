window.onload = function() {
    document.getElementById('submit').addEventListener('click', subscribe);
}

function subscribe() {
    var email = document.getElementById('email-form').innerHTML;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            subscribeCallback(xmlHttp.responseText);
        }
    }
    xmlHttp.open("GET", "https://listsprd.osu.edu/mailman/subscribe/code4community?email="+email, true); // true for asynchronous 
    xmlHttp.send(null);
}

function subscribeCallback(response) {
    if(response.body.contains("Your subscription request has been received, and will soon be acted upon.")) {
        document.getElementsById('form').classList.add('uk-form-success');
    } else {
        document.getElementsById('form').classList.add('uk-form-danger');
    }
}