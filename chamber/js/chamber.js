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
document.getElementById("windchill").innerHTML = wchill;

