$(document).ready(function(){
    $('form').on('submit', function(evento){
        evento.preventDefault();
        const nomeTarefa = $('#nome-tarefa').val();
        $(`<li>${nomeTarefa}</li>`).appendTo('ul');
        $('#nome-tarefa').val('');
    })

    $('ul').on('click', function(evento){
        if(evento.target.classList.contains('complete')){
            evento.target.classList.remove('complete');
        }else{
            evento.target.classList.add('complete');
        }
    })
})