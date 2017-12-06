var time = setInterval(function() {Timer();}, 1000);

function Timer() {var d = new Date();
document.getElementById("clock1").innerHTML = d.toLocaleTimeString();
}
