$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    })
    $('#cpf').mask('000.000.000-00', {
        placeholder: '___.___.___-__'})
    $('#cep').mask('00000-000', {
        placeholder: '_____-___'})

    $('form').validate({
        rules:{
            nome:{
            required: true
        },
        email:{
            required: true,
            email: true
        },
        telefone:{
            required: true
        },
        cpf:{
            required: true
        },
        endereco:{
            required: true
        },
        cep:{
            required: true
        },
    },
    messages: {
        nome: 'Por favor, insira o seu nome',
        email: 'Por favor, insira o seu email',
        telefone: 'Por favor, insira o seu telefone',
        cpf: 'Por favor, insira o seu cpf',
        endereco: 'Por favor, insira o seu endereçoe',
        cep: 'Por favor, insira o seu CEP'

    },
    submitHandler: function(form){
        console.log(form)
    },
    invalidHandler: function(evento, validador){
        let campoIncorreto = validador.numberOfInvalids();
        if(campoIncorreto) {
            alert(`Existe ${campoIncorreto} campos incorretos`)
        }
    }
    })
})