
let forecastRequest = new XMLHttpRequest();
let apiURLstring2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=15f1af395f7479acc2b5498a332c81fe';
forecastRequest.open('Get', apiURLstring2, true);
forecastRequest.send();

forecastRequest.onload = function() {
    let fiveDayData = JSON.parse(forecastRequest.responseText);
    console.log(fiveDayData);
 let icon = "http://openweathermap.org/img/w/" + fiveDayData.list[0].weather[0].icon + ".png";
    let desc = fiveDayData.list[0].weather[0].description
    let today = getDay();
    let daysofweek = new Array [Sun, Mon, Tue, Wed, Thu, Fri, Sat]
    
        document.getElementById("5day1").innerHTML = daysofweek[3] ;
        document.getElementById("5day2").innerHTML = daysofweek[(today+2)].value ;
        
    }
    

    

    //if (fiveDayData.hour.dt_txt.includes("18:00")) {
        document.getElementById("day1").innerHTML =fiveDayData.list[0].main.temp.toFixed(0);
    
        document.getElementById("day1").setAttribute("alt", desc);
        document.getElementById("day1").setAttribute("src", icon);
   // }

    

   

   

}