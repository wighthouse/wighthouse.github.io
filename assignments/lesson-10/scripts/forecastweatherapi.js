
let forecastRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=15f1af395f7479acc2b5498a332c81fe';
forecastRequest.open('Get', apiURLstring, true);
forecastRequest.send();

forecastRequest.onload = function() {
    let fiveDayData = JSON.parse(forecastRequest.responseText);
    console.log(fiveDayData);


    if (fiveDayData.hour.dt_txt.includes("18:00")) {

    }

    

    let icon = "http://openweathermap.org/img/w/" + weatherData.weather[0].icon +".png";
    let desc = weatherData.weather[0].description

    document.getElementById("cc-img").setAttribute("src", icon);
    document.getElementById("cc-img").setAttribute("alt", desc);

}