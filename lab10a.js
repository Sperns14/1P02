var start = new Date();
var startMilli = start.getTime();

console.log(startMilli);

function stopTime(){
  var end = new Date();
  var endMilli = end.getTime();
  var diffMilli = endMilli - startMilli;
  var diffSec = diffMilli/1000
  alert("the number of seconds you have been on this site is " +  diffSec)
}
