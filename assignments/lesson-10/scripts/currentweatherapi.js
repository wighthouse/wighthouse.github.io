
let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=15f1af395f7479acc2b5498a332c81fe';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    

    document.getElementById("currently").innerHTML = weatherData.main.temp.toFixed(0);


    let icon = "http://openweathermap.org/img/w/" + weatherData.weather[0].icon +".png";
    let desc = weatherData.weather[0].description

    document.getElementById("day1").setAttribute("src", icon);
    document.getElementById("day1").setAttribute("alt", desc);

}