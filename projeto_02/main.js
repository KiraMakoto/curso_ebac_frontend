const form = document.getElementById('list_telefone');
let linhas = '';

form.addEventListener("submit", function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){
    const inputNome = document.getElementById('nome');
    const inputTell = document.getElementById('telefone');
    const inputImg = document.getElementById('img');

    let linha = '<tr>';
    linha += `<td><img src="./img/icone_tranp_contato.png" alt="icone de foto do contato"></td>`;
    linha += `<td>${nome.value}</td>`;
    linha += `<td>${telefone.value}</td>`;
    linha += `</tr>`;
    
    linhas += linha;

    inputNome.value = '';
    inputTell.value = '';
}

function atualizaTabela(){

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}