var str = null;
element = document.getElementById('discoverul');
if (element != null) {
    str = element.value;
}
else {
    str = null;
}


const images = document.querySelectorAll('img');
const options = {threshold: .5, rootMargin: "0px 0px 100px 0px"};

function preloadImage(img) {
    const source = img.getAttribute('data-src');
    if(!source) {
        return;
    }
    img.src = source;
}
const io = new IntersectionObserver (
    (entries, io) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting){
                return;
            }
            else {
                preloadImage(entry.target);
                io.unobserve(entry.target);
            }

        })
    }, options
    );


images.forEach(image => {
    io.observe(image);
})

// ---- Get Date and set localStorage Date ----- //
let now_date = new Date();

let visit_heading = document.querySelector('.visited');

console.log(now_date);

localStorage.setItem('date', now_date);

let old_date = localStorage.getItem('date');

let o_date = new Date(old_date);

let diff_time = now_date.getTime() - o_date.getTime();

let diff_sec = diff_time/1000;

let diff_days = diff_time/(1000 * 60 * 60 * 24);

localStorage.setItem('diff_date', diff_days);
let stored_date = localStorage.getItem('date');
console.log(stored_date);
let last_date = new Date(stored_date);
if (!stored_date){
    visit_heading.textContent = "Welcome to our website!";
}
else {
    let diff_time = now_date.getDate() - last_date.getDate();
    let diff_days = diff_time/(1000 * 60);
    visit_heading.textContent = diff_days + ' days since your last visit.';
}