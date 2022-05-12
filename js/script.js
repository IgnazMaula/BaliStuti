const eng = document.querySelector('#btnradio1');
const idn = document.querySelector('#btnradio2');

const content = document.querySelector('.content');

console.log(content);

eng.addEventListener('click', english);
idn.addEventListener('click', bahasa);

function english() {
    content.innerHTML = 'This is english';
}

function bahasa() {
    content.innerHTML = 'This is bahasa';
}
