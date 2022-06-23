
let temp = document.getElementById("temperature");
let speed = document.getElementById("windchill")
function windchill(temp, speed){
// let temp = document.getElementById("temperature");
// let windspeed = document.getElementById("windspeed");
let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(speed,0.16)) + (0.4275*temp*Math.pow(speed,0.16)));
console.log("works");
// if (temp >= 50 && windspeed > 3) {
//     document.getElementById("windchill").innerHTML = chill;
//     document.log("works");
// }
// else {
//     document.getElementById("windchill").innerHTML = "N/A";
//     document.log("works");
// }
if (temp >= 50 && windspeed > 3){
    return chill;
    }
else {
    return "N/A";
}
}
let chill = windchill(temp, speed);
console.log(chill);

const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=34&lon=-84&appid=19199c92410025f4c5c3ad28faf06bfa";
const getWeather = async () => {
    const response = await fetch(apiURL);
    jsObject = await response.json();
    console.log(jsObject);
  };
getWeather();