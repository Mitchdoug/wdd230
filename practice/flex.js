let hammenu = document.querySelector(".ham");
let mainnav = document.querySelector('nav');

function menu(){
    hammenu.classList.toggle('responsive');
}
mainnav.addEventListener('click', menu);

