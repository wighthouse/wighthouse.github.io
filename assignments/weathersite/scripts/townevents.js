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
        if (towns[i].name == "Preston"){ //|| towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven") {
            
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