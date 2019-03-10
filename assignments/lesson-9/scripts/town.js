const section = document.querySelector('section');
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    let townData = request.response;
    let towns = townData['towns'];


    for (let i = 0; i < towns.length; i++) {
        if (towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven") {
            let myArticle = document.createElement('article');
            let myH2 = document.createElement('h2');
            let myPara1 = document.createElement('p');
            let myPara2 = document.createElement('span');
            let myPara2span = document.createElement('span');
            let myPara3 = document.createElement('p');
            let myPara4 = document.createElement('p');
            let myImg = document.createElement('img');

            myH2.textContent = towns[i].name;
            myPara1.textContent = towns[i].motto;
            myPara2.textContent = 'Year Founded: ';
            myPara2span.textContent = towns[i].yearFounded;
            myPara3.textContent = 'Population: ' + towns[i].currentPopulation;
            myPara4.textContent = 'Average Rainfall: ' + towns[i].averageRainfall + " inches";
            myImg.setAttribute('src','images/' + towns[i].name +'.jpg');
            myImg.setAttribute('alt', 'The city of '+ towns[i].name +' picture');
            myPara2.setAttribute('class', 'label')
            myPara2span.setAttribute ('class', 'info');

            myArticle.appendChild(myH2);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara2span);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara4);
            myArticle.appendChild(myImg);

            section.appendChild(myArticle);
        }
    }

}    