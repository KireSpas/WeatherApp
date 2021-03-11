const weatherData = {
    tempUnit: '°C',
    windSpeedUnit: 'm/s',
    days: [
        { day: 'Mon', temp: 22, windDirection: 'north-east', windSpeed: 10 , type:'sunny'},
        { day: 'Tue', temp: 14, windDirection: 'north-west', windSpeed: 14, type: 'rainy'},
        { day: 'Wed', temp: 17, windDirection: 'south-east', windSpeed: 20, type: 'rainy'},
        { day: 'Thu', temp: 11, windDirection: 'north-east', windSpeed: 15, type: 'cloudy'},
        { day: 'Fri', temp: 20, windDirection: 'north-west', windSpeed: 13, type: 'sunny'},
        { day: 'Sat', temp: 19, windDirection: 'south-east', windSpeed: 24, type: 'rainy'},
        { day: 'Sun', temp: 16, windDirection: 'north-west', windSpeed: 30, type: 'sunny'},
    ]
}

////////////////////////////////////////////////
let sectionDisplayWheatherDays = document.querySelector('.wheatherDays');
var wheatherDays = weatherData.days;
let buttonConverter = document.querySelector('#tempConverter');
let celsiusConverter = document.querySelector('#celsiusConverter');
//let windBtnConverter = document.querySelector('#windBtnConverter');
//let windBackConverter = document.querySelector('#windBackConverter');



function ShowData(weatherData){  
    celsiusConverter.style.display = "none";
    for (let i = 0; i < wheatherDays.length; i++) {

        let ul = document.createElement('ul')
        ul.classList.add("displayItemsList");
        sectionDisplayWheatherDays.appendChild(ul);
        ul.innerHTML = `<li><button onClick="openPopUp('${[i]}')" class="openDay"> ${wheatherDays[i].day} </button></li>
                        <li>${wheatherDays[i].temp} ${weatherData.tempUnit}</li>`
    }    
}

ShowData(weatherData);

//POP UP
var modal = document.getElementById("myModal");
let divDay = document.querySelector(".divDay");
var span = document.getElementsByClassName("close")[0];


function openPopUp(index) {
    
    modal.style.display = "block";
    ulPopUp = document.createElement('ul');
    ulPopUp.classList.add("ulForWidget");
    divDay.appendChild(ulPopUp);    
    
    for (let i = 0; i < wheatherDays.length; i++) {
        if(index.toString() == [i].toString()){

            let dayObj = wheatherDays[i];

            if(dayObj.windDirection.toString() == 'north-east'){
                ulPopUp.innerHTML = `<li><h4><b>Day: ${dayObj.day}</b></h4></li><br><hr>
                <li>Temp: ${dayObj.temp} ${weatherData.tempUnit}</li><br>
                <li>Wind Direction: ${dayObj.windDirection} <img class="imgArrow" src="./Assets/NE.png"></li><br>
                <li>Wind Speed: ${dayObj.windSpeed}</li><br>
                <li>Type: ${dayObj.type}</li>`
            }
            if(dayObj.windDirection.toString() == 'south-east'){
                ulPopUp.innerHTML = `<li><h4><b>Day: ${dayObj.day}</b></h4></li><br><hr>
                <li>Temp: ${dayObj.temp} ${weatherData.tempUnit}</li><br>
                <li>Wind Direction: ${dayObj.windDirection} <img class="imgArrow" src="./Assets/SE.png"></li><br>
                <li>Wind Speed: ${dayObj.windSpeed}</li><br>
                <li>Type: ${dayObj.type}</li>`
            }
            if(dayObj.windDirection.toString() == 'south-west'){
                ulPopUp.innerHTML = `<li><h4><b>Day: ${dayObj.day}</b></h4></li><br><hr>
                <li>Temp: ${dayObj.temp} ${weatherData.tempUnit}</li><br>
                <li>Wind Direction: ${dayObj.windDirection} <img class="imgArrow" src="./Assets/SW.png"></li><br>
                <li>Wind Speed: ${dayObj.windSpeed}</li><br>
                <li>Type: ${dayObj.type}</li>`
            }
            if(dayObj.windDirection.toString() == 'north-west'){
                ulPopUp.innerHTML = `<li><h4><b>Day: ${dayObj.day}</b></h4></li><br><hr>
                <li>Temp: ${dayObj.temp} ${weatherData.tempUnit}</li><br>
                <li>Wind Direction: ${dayObj.windDirection} <img class="imgArrow" src="./Assets/NW.png"></li><br>
                <li>Wind Speed: ${dayObj.windSpeed}</li><br>
                <li>Type: ${dayObj.type}</li>`
            }
        }
        else{
            console.log("No element found");
        }
        
    }
}

span.onclick = function() {    
  ulPopUp.innerHTML = "";
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {      
    ulPopUp.innerHTML = "";
    modal.style.display = "none";
  }
}
//POP UP END

//TEMP CONVERTER

function tempConverter(){
    sectionDisplayWheatherDays.innerHTML = "";
       
        for (let i = 0; i < wheatherDays.length; i++) {

            let ul = document.createElement('ul')
            ul.classList.add("displayItemsList");
            sectionDisplayWheatherDays.appendChild(ul);        
            ul.innerHTML = `<li><button onClick="openPopUp('${[i]}')" class="openDay"> ${wheatherDays[i].day} </button></li>
                            <li>${wheatherDays[i].temp += 273.15} K</li>`
        }
        
        buttonConverter.style.display = "none";
        celsiusConverter.style.display = "block";
    return wheatherDays;
}

function reload(){
    window.location.reload();
    ShowData(weatherData);
}

// //wind speed
// function windConverter(){

//     ulPopUp.innerHTML = "";
    
//     windBtnConverter.style.display = "none";
//     windBackConverter.style.display = "block";
//     for (let i = 0; i < wheatherDays.length; i++) {

//             let dayObj = wheatherDays[i];

//             if(dayObj.windDirection.toString() == 'north-east'){
//                 ulPopUp.innerHTML = `<li><h4><b>Day: ${dayObj.day}</b></h4></li><br><hr>
//                 <li>Temp: ${dayObj.temp} ${weatherData.tempUnit}</li><br>
//                 <li>Wind Direction: ${dayObj.windDirection} <img class="imgArrow" src="./Assets/NE.png"></li><br>
//                 <li>Wind Speed: ${dayObj.windSpeed*3.6}km/h </li><br>
//                 <li>Type: ${dayObj.type}</li>`
//             }
//             if(dayObj.windDirection.toString() == 'south-east'){
//                 ulPopUp.innerHTML = `<li><h4><b>Day: ${dayObj.day}</b></h4></li><br><hr>
//                 <li>Temp: ${dayObj.temp} ${weatherData.tempUnit}</li><br>
//                 <li>Wind Direction: ${dayObj.windDirection} <img class="imgArrow" src="./Assets/SE.png"></li><br>
//                 <li>Wind Speed: ${dayObj.windSpeed*3.6}km/h</li><br>
//                 <li>Type: ${dayObj.type}</li>`
//             }
//             if(dayObj.windDirection.toString() == 'south-west'){
//                 ulPopUp.innerHTML = `<li><h4><b>Day: ${dayObj.day}</b></h4></li><br><hr>
//                 <li>Temp: ${dayObj.temp} ${weatherData.tempUnit}</li><br>
//                 <li>Wind Direction: ${dayObj.windDirection}<img class="imgArrow" src="./Assets/SW.png"></li><br>
//                 <li>Wind Speed: ${dayObj.windSpeed*3.6}km/h </li><br>
//                 <li>Type: ${dayObj.type}</li>`
//             }
//             if(dayObj.windDirection.toString() == 'north-west'){
//                 ulPopUp.innerHTML = `<li><h4><b>Day: ${dayObj.day}</b></h4></li><br><hr>
//                 <li>Temp: ${dayObj.temp} ${weatherData.tempUnit}</li><br>
//                 <li>Wind Direction: ${dayObj.windDirection} <img class="imgArrow" src="./Assets/NW.png"></li><br>
//                 <li>Wind Speed: ${dayObj.windSpeed*3.6}km/h</li><br>
//                 <li>Type: ${dayObj.type}</li>`
//             }
        
//     }
//     return number + "km/h";

// }




