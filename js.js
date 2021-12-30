const btnmenu = document.getElementById('cabecalho-items__btn');

function toggleMenu(){
    const itemsMenu = document.getElementById('cabecalho-items__menu');

    itemsMenu.classList.toggle('active');

}

btnmenu.addEventListener('click', toggleMenu);