const section = document.querySelector('section');
const requestURL = 'https://wighthouse.github.io/temple-inn-website/temples.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    let templeData = request.response;
    let temples = templeData['temples'];


    for (let i = 0; i < temples.length; i++) {
        if (temples[i].city == "Bogota"){ //|| temples[i].name == "Soda Springs" || temples[i].name == "Fish Haven") {
            let myArticle = document.createElement('article');
            let myH2 = document.createElement('h2');
            let myPara1 = document.createElement('p');
            let myPara2 = document.createElement('span');
            let myPara2span = document.createElement('span');
            let myPara3 = document.createElement('p');
            let myPara4 = document.createElement('p');
            let myImg = document.createElement('img');

            myH2.textContent = temples[i].templeName;
            //myPara1.textContent = temples[i].motto;
            myPara2.textContent = 'Year Dedicated: ';
            myPara2span.textContent = temples[i].yearDedicated;
            myPara3.textContent = 'Address: ' + temples[i].address +"\n" + temples[i].cityadd + "\n" +temples[i].country;
            myPara4.textContent = 'Telephone: \n' + temples[i].telephone ;
            myImg.setAttribute('src','images/' + temples[i].city +'.jpg');
            myImg.setAttribute('alt', 'The '+ temples[i].city +' Temple picture');
            myPara2.setAttribute('class', 'label')
            myPara2span.setAttribute ('class', 'info');
            section.setAttribute('class', 'temples');

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