const pedir = document.querySelector('#pedir');
const products = document.querySelector('#products');
const modal = document.querySelector('#modal');
const anime = document.querySelector('#anime');
const cancel = document.querySelector('#cancel');
const aceptar = document.querySelector('#aceptar');

pedir.addEventListener('click',()=>{

    if(products.options[products.selectedIndex].value == ''){

        alert("No escogiste ninguna opcion");

    }else{

        modal.style.top = 0;
        anime.innerHTML = products.options[products.selectedIndex].text 

    }
})

cancel.addEventListener('click', ()=>{

    modal.style.top = '';
    products.selectedIndex = '';
})

aceptar.addEventListener('click', ()=>{

    location = 'producto.html';
})