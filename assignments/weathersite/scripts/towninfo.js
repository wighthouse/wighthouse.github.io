//Assign the city name
let city = document.title
let cityid = 0
let cityname = ""
if (city.includes('Preston')){
    cityid = '5604473';
    cityname = "Preston";
}else if (city.includes('Soda Springs')){
        cityid = '5678757';
        cityname = "Soda Springs";
}else if(city.includes('Fish Haven')){
    cityid = '5585000';
    cityname = "Fish Haven";
}
//Weather Summary Script  
let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id='+ cityid +'&units=imperial&APPID=15f1af395f7479acc2b5498a332c81fe';
weatherRequest.open('Get', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    

    document.getElementById("currently").innerHTML =weatherData.main.temp.toFixed(0) +" &degF " + weatherData.weather[0].main;
    document.getElementById("high").innerHTML = weatherData.main.temp_max.toFixed(0);
    document.getElementById("low").innerHTML = weatherData.main.temp_min.toFixed(0);
    document.getElementById("humidity").innerHTML = weatherData.main.humidity.toFixed(0);
    document.getElementById("speed").innerHTML = weatherData.wind.speed.toFixed(0);

    let windchill = getWindChill();
    let icon = "https://openweathermap.org/img/w/" + weatherData.weather[0].icon +".png";
    let desc = weatherData.weather[0].description

}
//Forecast Script
let forecastRequest = new XMLHttpRequest();
let apiURLstring2 = 'https://api.openweathermap.org/data/2.5/forecast?id='+ cityid+'&units=imperial&APPID=15f1af395f7479acc2b5498a332c81fe';
forecastRequest.open('Get', apiURLstring2, true);
forecastRequest.send();

forecastRequest.onload = function() {
    let fiveDayData = JSON.parse(forecastRequest.responseText);
    let today = new Date();
    
        document.getElementById("5day1").innerHTML = days[(today.getDay()+1)%7];
        document.getElementById("5day2").innerHTML = days[(today.getDay()+2)%7];
        document.getElementById("5day3").innerHTML = days[(today.getDay()+3)%7];
        document.getElementById("5day4").innerHTML = days[(today.getDay()+4)%7];
        document.getElementById("5day5").innerHTML = days[(today.getDay()+5)%7];

    
    let c = 1
    for (i=0; i < fiveDayData.list.length; ) {
         if (fiveDayData.list[i].dt_txt.includes("18:00:00")) {
        
        let desc = fiveDayData.list[i].weather[0].description;
        let icon = "http://openweathermap.org/img/w/" + fiveDayData.list[i].weather[0].icon + ".png";
        document.getElementById("day"+c+"Temp").innerHTML=fiveDayData.list[i].main.temp.toFixed(0)+ " &degF";
        document.getElementById("day"+c).setAttribute("alt", desc);
        document.getElementById("day"+c).setAttribute("src", icon);
        c++;
        }
        i++;
    }    
}
//Town Events
const div = document.querySelector('div.upcomingEvents');
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    let townEvents = request.response;
    let towns = townEvents['towns'];


    for (let i = 0; i < towns.length; i++) {
        if (towns[i].name == cityname){ 
            
            let eventList = document.createElement('ul');
            for (let c = 0; c<towns[i].events.length; c++){
            
            let eventinfo = document.createElement('li');
            eventinfo.textContent = towns[i].events[c];
            eventList.appendChild(eventinfo);
                      
            }
            div.appendChild(eventList);
        }
    }
}    
