const vegetales = document.querySelector('.product__vegetal');
const frutas = document.querySelector('.product__frutas');
const limpieza = document.querySelector('.product__limpieza');
const carnes = document.querySelector('.product__carnes');
const abarrotes = document.querySelector('.product__abarrotes');
const desayunos = document.querySelector('.product__desayunos');
const bebidas = document.querySelector('.product__bebidas');
const lacteos = document.querySelector('.product__lacteos');
const bebe = document.querySelector('.product__bebe');
const salud = document.querySelector('.product__salud');
const mascotas = document.querySelector('.product__mascotas');

vegetales.addEventListener('click', () => {
    limpieza.classList.remove('cambia__color');
    carnes.classList.remove('cambia__color');
    abarrotes.classList.remove('cambia__color');
    desayunos.classList.remove('cambia__color');
    bebidas.classList.remove('cambia__color');
    bebe.classList.remove('cambia__color');
    salud.classList.remove('cambia__color');
    mascotas.classList.remove('cambia__color');
    frutas.classList.remove('cambia__color')
    vegetales.classList.add('cambia__color');
});

frutas.addEventListener('click', () => {
    vegetales.classList.remove('cambia__color');
    limpieza.classList.remove('cambia__color');
    carnes.classList.remove('cambia__color');
    abarrotes.classList.remove('cambia__color');
    desayunos.classList.remove('cambia__color');
    bebidas.classList.remove('cambia__color');
    bebe.classList.remove('cambia__color');
    salud.classList.remove('cambia__color');
    mascotas.classList.remove('cambia__color');
    frutas.classList.add('cambia__color');
});

limpieza.addEventListener('click', () => {
    vegetales.classList.remove('cambia__color');
    frutas.classList.remove('cambia__color');
    carnes.classList.remove('cambia__color');
    abarrotes.classList.remove('cambia__color');
    desayunos.classList.remove('cambia__color');
    bebidas.classList.remove('cambia__color');
    bebe.classList.remove('cambia__color');
    salud.classList.remove('cambia__color');
    mascotas.classList.remove('cambia__color');
    limpieza.classList.add('cambia__color');
});

carnes.addEventListener('click', () => {
    vegetales.classList.remove('cambia__color');
    frutas.classList.remove('cambia__color');
    limpieza.classList.remove('cambia__color');
    abarrotes.classList.remove('cambia__color');
    desayunos.classList.remove('cambia__color');
    bebidas.classList.remove('cambia__color');
    lacteos.classList.remove('cambia__color');
    bebe.classList.remove('cambia__color');
    salud.classList.remove('cambia__color');
    mascotas.classList.remove('cambia__color');
    carnes.classList.add('cambia__color');
});

abarrotes.addEventListener('click', () => {
    vegetales.classList.remove('cambia__color');
    frutas.classList.remove('cambia__color');
    limpieza.classList.remove('cambia__color');
    carnes.classList.remove('cambia__color');
    desayunos.classList.remove('cambia__color');
    bebidas.classList.remove('cambia__color');
    lacteos.classList.remove('cambia__color');
    bebe.classList.remove('cambia__color');
    salud.classList.remove('cambia__color');
    mascotas.classList.remove('cambia__color');
    abarrotes.classList.add('cambia__color');
});

desayunos.addEventListener('click', () => {
    vegetales.classList.remove('cambia__color');
    frutas.classList.remove('cambia__color');
    limpieza.classList.remove('cambia__color');
    carnes.classList.remove('cambia__color');
    abarrotes.classList.remove('cambia__color');
    bebidas.classList.remove('cambia__color');
    lacteos.classList.remove('cambia__color');
    bebe.classList.remove('cambia__color');
    salud.classList.remove('cambia__color');
    mascotas.classList.remove('cambia__color');
    desayunos.classList.add('cambia__color');
});

bebidas.addEventListener('click', () => {
    vegetales.classList.remove('cambia__color');
    frutas.classList.remove('cambia__color');
    limpieza.classList.remove('cambia__color');
    carnes.classList.remove('cambia__color');
    abarrotes.classList.remove('cambia__color');
    desayunos.classList.remove('cambia__color');
    lacteos.classList.remove('cambia__color');
    bebe.classList.remove('cambia__color');
    salud.classList.remove('cambia__color');
    mascotas.classList.remove('cambia__color');
    bebidas.classList.add('cambia__color');
});

lacteos.addEventListener('click', () => {
    vegetales.classList.remove('cambia__color');
    frutas.classList.remove('cambia__color');
    limpieza.classList.remove('cambia__color');
    carnes.classList.remove('cambia__color');
    abarrotes.classList.remove('cambia__color');
    desayunos.classList.remove('cambia__color');
    bebidas.classList.remove('cambia__color');
    bebe.classList.remove('cambia__color');
    salud.classList.remove('cambia__color');
    mascotas.classList.remove('cambia__color');
    lacteos.classList.add('cambia__color');
});

bebe.addEventListener('click', () => {
    vegetales.classList.remove('cambia__color');
    frutas.classList.remove('cambia__color');
    limpieza.classList.remove('cambia__color');
    carnes.classList.remove('cambia__color');
    abarrotes.classList.remove('cambia__color');
    desayunos.classList.remove('cambia__color');
    bebidas.classList.remove('cambia__color');
    lacteos.classList.remove('cambia__color');
    salud.classList.remove('cambia__color');
    mascotas.classList.remove('cambia__color');
    bebe.classList.add('cambia__color');
});

salud.addEventListener('click', () => {
    vegetales.classList.remove('cambia__color');
    frutas.classList.remove('cambia__color');
    limpieza.classList.remove('cambia__color');
    carnes.classList.remove('cambia__color');
    abarrotes.classList.remove('cambia__color');
    desayunos.classList.remove('cambia__color');
    bebidas.classList.remove('cambia__color');
    lacteos.classList.remove('cambia__color');
    bebe.classList.remove('cambia__color');
    mascotas.classList.remove('cambia__color');
    salud.classList.add('cambia__color');
});

mascotas.addEventListener('click', () => {
    vegetales.classList.remove('cambia__color');
    frutas.classList.remove('cambia__color');
    limpieza.classList.remove('cambia__color');
    carnes.classList.remove('cambia__color');
    abarrotes.classList.remove('cambia__color');
    desayunos.classList.remove('cambia__color');
    bebidas.classList.remove('cambia__color');
    lacteos.classList.remove('cambia__color');
    bebe.classList.remove('cambia__color');
    salud.classList.remove('cambia__color');
    mascotas.classList.add('cambia__color');
});