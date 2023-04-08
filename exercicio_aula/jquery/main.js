$(document).ready(function(){
    $('header button').click(function(){
        alert("passei por aqui")
    })

    $('form').on('submit', function(e){
        e.preventDeFault();
    })
})

