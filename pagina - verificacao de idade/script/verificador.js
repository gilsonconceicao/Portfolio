

function verificar() {
    var data = new Date(); 
    var ano = data.getFullYear(); // ano atual 

    var input_idade = window.document.getElementById('idade_input'); 
    var ano_nasc = input_idade.value; 
    var idade = ano - ano_nasc; //idade

    var res = window.document.getElementById('res'); //resposta

    if (idade == 0 || idade >= 2021) {
        alert('[erro] ano de nascimento inválido para nós.') // caso de erro 
    }
    else {
        var sexo = window.document.getElementsByName('text_sexo'); 
        var genero = ''; // input:radio 

        var img = window.document.createElement('img'); //create element image
        img.setAttribute('id', 'foto'); 

        if (sexo[0].checked) {
            genero = 'Homem'; // para homem 

            if (idade >= 0 && idade <= 10) {
                // criança  
                img.setAttribute('src', 'imagens/bebe_homem.png'); 
            } 
            else if (idade <= 25) {
                // jovem 
                img.setAttribute('src', 'imagens/homem_novo.png'); 
            } 
            else if (idade <= 60 ) {
                // adulto
                img.setAttribute('src', 'imagens/homem_media.png'); 
            } 
            else {
                // idoso
                img.setAttribute('src', 'imagens/homem_idoso.png')
            }
        }
        else if (sexo[1].checked) {
            genero = 'Mulher'; // para mulher

            if (idade >= 0 && idade <= 10) {
                // criança
                img.setAttribute('src', 'imagens/bebe_mulher.png');
            } 
            else if (idade <= 25) {
                // jovem 
                img.setAttribute('src', 'imagens/mulher_nova.png'); 
            } 
            else if (idade <= 60 ) {
                // adulto
                img.setAttribute('src', 'imagens/mulher_media.png'); 
            } 
            else {
                // idoso
                img.setAttribute('src', 'imagens/mulher_idosa.png')
            }
        }
    }

    res.style.textAlign = 'center'; 
    res.innerHTML = `Detectamos: ${genero} de ${idade} anos. <br><br> `; 
    res.appendChild(img)
}