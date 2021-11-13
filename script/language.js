// momento de aprendizado 
var language_radio = window.document.getElementsByName('language');
var linguagem = ''; // linguagens 
var resposta = window.document.getElementById('res_language'); // resposta 

var conteiner = window.document.getElementById('aprendizado'); //conteiner

var img = window.document.createElement('img');
img.setAttribute('id', 'foto');

function language_descontrair() {
   
    if (language_radio[0].checked) {
        linguagem = '<h3>JavaScript</h3> <br> <p>Uma linguagem de programação voltada para interação de paginas web. </p>';
        img.setAttribute('src', 'imagens/imagem javascript.png');

        conteiner.style.background = '#e1fa3c'
        conteiner.style.color = 'black'

    } else if (language_radio[1].checked) {
        linguagem = '<h3>Java</h3> <br> <p>Java é uma linguagem de programação orientada a objetos desenvolvida na década de 90 . </p>';
        img.setAttribute('src', 'imagens/imagem java.png');


        conteiner.style.background = '#805dcf'; 

    } else if (language_radio[2].checked) {
        linguagem = '<h3>Python</h3> <br> <p>Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.</p>';
        img.setAttribute('src', 'imagens/imagem python.jpg');

        conteiner.style.background = '#5928c9'
    } else if (language_radio[3].checked) {
        linguagem = '<h3>PHP</h3> <br> <p>PHP é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor</p>';
        img.setAttribute('src', 'imagens/imagem php.jpg');

        conteiner.style.background = '#7646e3'
    } else if (language_radio[4].checked) {
        linguagem = '<h3>Linguagem C</h3> <br> <p>C é uma linguagem de programação compilada de propósito geral, estruturada, imperativa, procedural, padronizada pela Organização Internacional.</p>'
        img.setAttribute('src', 'imagens/imagem C.png');

        conteiner.style.background = '#3d0bb0'
    }


    resposta.style.display = 'block'
    img.style.display = 'block'
    resposta.innerHTML = `${linguagem}<br>`;
    resposta.appendChild(img);
}


function restaurar() {
    conteiner.style.color = 'black'
    resposta.style.display = 'none'
    img.style.display = 'none'
    conteiner.style.background = 'white';
}