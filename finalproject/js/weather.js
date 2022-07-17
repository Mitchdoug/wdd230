const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=33.4&lon=-84.23&appid=19199c92410025f4c5c3ad28faf06bfa&units=imperial";
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
    document.querySelector('.humidity').textContent = jsObject.main.humidity;
    document.querySelector('.weather-description').textContent = jsObject.weather[0].main;
  };
getWeather();