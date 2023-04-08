const form = document.getElementById("form-atividade")
const imgAprovado = '<img src="./img/aprovado.png" alt="emoji comemorando">';
const imgReprovado = '<img src="./img/reprovado.png" alt="emoji triste">';
const notas = [];
const atividades = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt('Digite a nota mínima: '))


let linhas = "";


form.addEventListener('submit', function(e){
    e.preventDefault();


    atualiizaLinha()
    atualizaTavela()
    atualizaMediaFinal()



})

function atualiizaLinha(){

    const inputNomeAtividade = document.getElementById("nomeAtividade");
    const inputNotaAtividade = document.getElementById("notaAtividade");

    if (atividades.includes(inputNomeAtividade.value)){
        alert (`A atividade ${inputNomeAtividade.value} já foi incerida`)
    }else {

        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
    
        let linha = '<tr>';
        linha += `<td> ${inputNomeAtividade.value}</td>`;
        linha += `<td> ${inputNotaAtividade.value}</td>`;
        linha += `<td> ${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado } </td>`;
        linha += `</tr>`;
    
        linhas += linha;
    
    }

    inputNomeAtividade.value = "";
    inputNotaAtividade.value = "";
}

function atualizaTavela(){
    const corpoTabela = document.querySelector('tbody')

    corpoTabela.innerHTML = linhas
}


function atualizaMediaFinal (){

    const MediaFinal = calculaMediaFinal()

    document.getElementById('media-final-valor').innerHTML = MediaFinal.toFixed(2)
    document.getElementById('media-final-resultado').innerHTML = MediaFinal >= notaMinima ? spanAprovado : spanReprovado

}

function calculaMediaFinal (){
    let somaNotas = 0

    for (let i = 0; i< notas.length; i++ ){
        somaNotas += notas[i]
    }

    return somaNotas / notas.length

    
}