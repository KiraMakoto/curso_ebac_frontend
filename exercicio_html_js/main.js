const form = document.getElementById("formulario");


function ValidaNumero(campoA, campoB){
    return campoB > campoA
    

}

form.addEventListener("submit", function(e){
    var FormEValido = false
    e.preventDefault();
    
    const campoA = document.getElementById("campoA")
    const campoB = document.getElementById("campoB")
    const mensagemSucesso = `O número <b>${campoB.value}</b> é maior que o número <b>${campoA.value}</b>`

    FormEValido = ValidaNumero(campoA.value, campoB.value)
    if(FormEValido){
        const containerMensagemSucesso = document.querySelector('.mensagem-sucesso')
        containerMensagemSucesso.innerHTML = mensagemSucesso
        containerMensagemSucesso.style.display = "block"
    
    } else {
        campoB.style.border = "1px solid red"
        document.querySelector('.mensagemErro').style.display = "block"
    }

})


console.log(form);