function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}
const x = document.getElementById("hambutton");
x.onclick = toggleMenu;

const d = new Date();
let weekday = d.getDay();
if(weekday == 1 || weekday == 2){
    let output = document.getElementById('Bannerclass')
    output.style.display = "block"
}

let temp = 48;
let speed = 16;
let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(speed,0.16)) + (0.4275*temp*Math.pow(speed,0.16)));
function windchill(chill, temp, windspeed){
    
    if (temp <= 50 && windspeed > 3){
        return chill;
        }
    else {
        return "N/A";
    }
    
}
let wchill = windchill(chill, temp, speed);
console.log(wchill);
document.querySelector(".windchill").textContent = wchill;
const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=34.1&lon=-84.03&appid=19199c92410025f4c5c3ad28faf06bfa&units=imperial";
const getWeather = async () => {
    const response = await fetch(apiURL);
    jsObject = await response.json();
    console.log(jsObject);
    const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    // document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('.current-temp').textContent = Math.round(jsObject.main.temp);
    document.querySelector('.windspeed').textContent = jsObject.wind.speed;
    document.querySelector('.weather-description').textContent = jsObject.weather[0].main;
    let chill = Math.round((35.74 + (0.6215 * jsObject.main.temp))-(35.75 * Math.pow(jsObject.wind.speed,0.16)) + (0.4275*jsObject.main.temp*Math.pow(jsObject.wind.speed,0.16)));
    console.log(chill);
    if (jsObject.main.temp <= 50 && windspeed > 3){
        document.querySelector(".windchill").textContent = chill + "&deg;";
    }
    else {
        document.querySelector(".windchill").textContent = "N/A";
    }
  };
getWeather();