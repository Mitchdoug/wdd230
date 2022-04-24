// variables and the Date object

let date = new Date();
console.log(date);

let year = date.getFullYear();
console.log(year);

document.querySelector('h1').textContent = year;

document.querySelector('div').innerHTML = '<h2>My page</h2>'

let newpara = document.createElement('p');
newpara.textContent = 'This is my paragraph';
document.querySelector('div').appendChild(newpara);

DocumentFragment.querySelector('img').setAttribute('src', '../images/DSC1520.jpg');
document.querySelector('img').setAttribute

document.querySelector('img').classList.add('add_border');

function addayear(yr) {
    console.log(yr)
}

addayear(year);

if (year == 2022) {
    console.log('current year')
}

// Repetition

const myarray = ['CSE121', 'WDD230', 'CIT111']

function makelist(item) {
    document.querySelector('div').innerHTML += '<li>' + item + 
    '</li>'
}

myarray.forEach(makelist);

// last modified property that works with document

let currentdate = document.lastModified;

document.querySelector('#lastdate').textContent = currentdate

