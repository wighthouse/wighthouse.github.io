//Assign the city name
let city = document.title
let cityid = 0
let cityname = ""
if (city.includes('Rome')){
    cityid = '3174976';
    cityname = "Rome";
}else if (city.includes('Paris')){
        cityid = '6455402';
        cityname = "Paris";
}else if(city.includes('Laie')){
    cityid = '5850027';
    cityname = "Laie";
}else if(city.includes('Bogota')){
    cityid = '3688689';
    cityname = "Bogota";
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
      

}

//Temple Events
const div = document.querySelector('div.services');
const request2URL = 'https://wighthouse.github.io/temple-inn-website/temples.json';
const request2 = new XMLHttpRequest();
request2.open('GET', request2URL);
request2.responseType = 'json';
request2.send();

request2.onload = function () {
    let templeEvents = request2.response;
    let temples = templeEvents['temples'];


    for (let i = 0; i < temples.length; i++) {
        if (temples[i].name == cityname){ 
            
            let serviceList = document.createElement('ul');
            for (let c = 0; c<temples[i].services.length; c++){
            
            let serviceInfo = document.createElement('li');
            serviceInfo.textContent = temples[i].services[c];
            serviceList.appendChild(serviceInfo);
                      
            }
            div.appendChild(serviceList);
        }
    }
}    
