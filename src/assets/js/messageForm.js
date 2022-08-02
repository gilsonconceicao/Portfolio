const message = document.querySelector('.box-message'); 
const text = document.querySelector('.text-message'); 

function messageButton(e) {
    message.style.display = 'block'; 

    text.innerHTML = 'Devido a página exibir meus conhecimentos de HTML, CSS e JS. Está na hospedagem do GiHub onde não permite backend na aplicação. Por gentileza, entre em contato comigo por whatsapp, instagram ou linkdIn. Agredeço pela compreensão. <a href="index.html">Clique aqui</a>';

    return
}

function removeMessage() {
    message.style.display = 'none'
}