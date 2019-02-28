var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var days = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');

var n = new Date();
var y = n.getFullYear();
var m = n.getMonth();
var d = n.getDate();
var day = n.getDay();
document.getElementById("date").innerHTML = days[day] + ", " + d + " " + months[m] + " " + y;
