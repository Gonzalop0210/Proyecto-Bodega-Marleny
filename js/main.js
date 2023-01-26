const iconBar = document.querySelector('.icon__bar__nav');
const iconEquis = document.querySelector('.icon__equis');
const nav = document.querySelector('.list__nav__items');

function agregar() {
    nav.classList.add('navNone');
}
iconEquis.addEventListener('click', agregar);

function retirar() {
    nav.classList.remove('navNone');
}
iconBar.addEventListener('click', retirar);