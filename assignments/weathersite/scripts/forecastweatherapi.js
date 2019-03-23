
let forecastRequest = new XMLHttpRequest();
let apiURLstring2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=15f1af395f7479acc2b5498a332c81fe';
forecastRequest.open('Get', apiURLstring2, true);
forecastRequest.send();

forecastRequest.onload = function() {
    let fiveDayData = JSON.parse(forecastRequest.responseText);
    console.log(fiveDayData);
    
    
    
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

