$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000');
    $('form').validate({        
        submitHandler: function() {
            alert("Mensagem enviada com sucesso!")
        }        
    });
})
