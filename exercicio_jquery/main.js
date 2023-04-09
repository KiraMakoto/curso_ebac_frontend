

$(document).ready(function() {
    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#novaTarefa').val();
        const novoItem = $('<li></li>');
        $(`<li>${novaTarefa}</li>`).appendTo(novoItem)
        $(novoItem).appendTo('ul')

        $('#novaTarefa').val('')


        console.log(novoItem)
        
        $('ul').on('click', 'li', function(){

            $('li').last().addClass('finalizado')

        }) 
            
    })
})