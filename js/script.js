function sendMessage(){
 var message = document.getElementById("message_value").value;
 document.getElementById("message").innerHTML += "<div class=card>" + "<p>" + message + "</p>" + "</div>";
}