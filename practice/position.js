const d = new Date();
let weekday = d.getDay();
if(weekday == 1 || weekday == 2){
    let output = document.querySelector('Bannerclass')
    output.style.display = "block"
}