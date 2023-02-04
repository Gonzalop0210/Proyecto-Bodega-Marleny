const vegetales = document.querySelector('.product__vegetal');
const frutas = document.querySelector('.product__frutas');
const limpieza = document.querySelector('.product__limpieza');
const carnes = document.querySelector('.product__carnes');
const abarrotes = document.querySelector('.product__abarrotes');
const golosinas = document.querySelector('.product__golosinas');
const desayunos = document.querySelector('.product__desayunos');
const bebidas = document.querySelector('.product__bebidas');
const lacteos = document.querySelector('.product__lacteos');
const bebe = document.querySelector('.product__bebe');
const salud = document.querySelector('.product__salud');
const mascotas = document.querySelector('.product__mascotas');

const container__main = document.querySelector('.container__productos');

vegetales.addEventListener('click', () => {
    limpieza.classList.remove('cambia__color');
    carnes.classList.remove('cambia__color');
    abarrotes.classList.remove('cambia__color');
    golosinas.classList.remove('cambia__color');
    desayunos.classList.remove('cambia__color');
    bebidas.classList.remove('cambia__color');
    bebe.classList.remove('cambia__color');
    salud.classList.remove('cambia__color');
    mascotas.classList.remove('cambia__color');
    frutas.classList.remove('cambia__color')
    vegetales.classList.add('cambia__color');

    for(product of vegetalesArray) {
        const div__box__product = document.createElement('div');
        div__box__product.classList.add('box__producto');

        //Para crear elementos, en éste caso una img
        const img__img__product = document.createElement('img');
        //Para cambiar las propiedades, en éste caso el src del img
        img__img__product.setAttribute('src', product.img);
        img__img__product.classList.add('img__product');

        const price__name__container = document.createElement('div');
        price__name__container.classList.add('container__price__name__product');

        const name__product = document.createElement('h3');
        name__product.innerHTML = product.nombre;
        name__product.classList.add('name__product');

        const price__product = document.createElement('h4');
        price__product.innerHTML = 'Precio: S/' + product.precio + ' un';
        price__product.classList.add('price__product');

        price__name__container.append(name__product, price__product);
        div__box__product.append(img__img__product, price__name__container);
        container__main.appendChild(div__box__product);
    }
});

frutas.addEventListener('click', () => {
    vegetales.classList.remove('cambia__color');
    limpieza.classList.remove('cambia__color');
    carnes.classList.remove('cambia__color');
    abarrotes.classList.remove('cambia__color');
    golosinas.classList.remove('cambia__color');
    desayunos.classList.remove('cambia__color');
    bebidas.classList.remove('cambia__color');
    bebe.classList.remove('cambia__color');
    salud.classList.remove('cambia__color');
    mascotas.classList.remove('cambia__color');
    frutas.classList.add('cambia__color');

    for(product of frutasArray) {
        const div__box__product = document.createElement('div');
        div__box__product.classList.add('box__producto');

        //Para crear elementos, en éste caso una img
        const img__img__product = document.createElement('img');
        //Para cambiar las propiedades, en éste caso el src del img
        img__img__product.setAttribute('src', product.img);
        img__img__product.classList.add('img__product');

        const price__name__container = document.createElement('div');
        price__name__container.classList.add('container__price__name__product');

        const name__product = document.createElement('h3');
        name__product.innerHTML = product.nombre;
        name__product.classList.add('name__product');

        const price__product = document.createElement('h4');
        price__product.innerHTML = 'Precio: S/' + product.precio + ' un';
        price__product.classList.add('price__product');

        price__name__container.append(name__product, price__product);
        div__box__product.append(img__img__product, price__name__container);
        container__main.appendChild(div__box__product);
    }
    
});

limpieza.addEventListener('click', () => {
    vegetales.classList.remove('cambia__color');
    frutas.classList.remove('cambia__color');
    carnes.classList.remove('cambia__color');
    abarrotes.classList.remove('cambia__color');
    golosinas.classList.remove('cambia__color');
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
    golosinas.classList.remove('cambia__color');
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
    golosinas.classList.remove('cambia__color');
    desayunos.classList.remove('cambia__color');
    bebidas.classList.remove('cambia__color');
    lacteos.classList.remove('cambia__color');
    bebe.classList.remove('cambia__color');
    salud.classList.remove('cambia__color');
    mascotas.classList.remove('cambia__color');
    abarrotes.classList.add('cambia__color');
});

golosinas.addEventListener('click', () => {
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
    desayunos.classList.remove('cambia__color');
    golosinas.classList.add('cambia__color');
});

desayunos.addEventListener('click', () => {
    vegetales.classList.remove('cambia__color');
    frutas.classList.remove('cambia__color');
    limpieza.classList.remove('cambia__color');
    carnes.classList.remove('cambia__color');
    abarrotes.classList.remove('cambia__color');
    golosinas.classList.remove('cambia__color');
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
    golosinas.classList.remove('cambia__color');
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
    golosinas.classList.remove('cambia__color');
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
    golosinas.classList.remove('cambia__color');
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
    golosinas.classList.remove('cambia__color');
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
    golosinas.classList.remove('cambia__color');
    desayunos.classList.remove('cambia__color');
    bebidas.classList.remove('cambia__color');
    lacteos.classList.remove('cambia__color');
    bebe.classList.remove('cambia__color');
    salud.classList.remove('cambia__color');
    mascotas.classList.add('cambia__color');
});