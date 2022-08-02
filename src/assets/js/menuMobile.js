document.querySelector('.btn-menu-nav-bar')
    .addEventListener('click', (e) => {
        e.preventDefault(); 

        const itensMenu = document.querySelector('.nav-bar'); 
        itensMenu.classList.toggle('active-menu-mobile'); 

        /* toggle button menu - change state icon */

        const btnMenu = document.querySelector('.btn-menu-nav-bar'); 

        if (btnMenu.innerHTML == 'X') {
            btnMenu.innerHTML = '<i class="fa-solid fa-bars"></i>';
        } else {
            btnMenu.innerHTML = 'X' 
        }
    })

document.querySelectorAll('.nav-bar a').forEach(element => {
    element.onclick = function () {
        const itensMenu = document.querySelector('.nav-bar'); 
        itensMenu.classList.remove('active-menu-mobile'); 
    }
})