const btnMenu = document.querySelector('.btn-menu-nav-bar'); 
const itensMenu = document.querySelector('.nav-bar'); 

document.querySelector('.btn-menu-nav-bar')
    .addEventListener('click', (e) => {
        e.preventDefault(); 

        itensMenu.classList.toggle('active-menu-mobile'); 

        /* toggle button menu - change state icon */

        if (btnMenu.innerHTML == 'X') {
            btnMenu.innerHTML = '<i class="fa-solid fa-bars"></i>';
        } else {
            btnMenu.innerHTML = 'X' 
        }
    })

document.querySelectorAll('.nav-bar a').forEach(element => {
    element.onclick = function () {
        itensMenu.classList.remove('active-menu-mobile'); 
        btnMenu.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
})