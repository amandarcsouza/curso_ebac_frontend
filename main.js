const form = document.getElementById('form-verificar');

form.addEventListener('submit', function (evento){
    evento.preventDefault();

    const campoA = parseFloat(document.getElementById('numero-A').value);
    const campoB = parseFloat(document.getElementById('numero-B').value);   
    const mensagemIgualdade = "Os números são iguais. Tente novamente!";
    const mensagemErro = `O número ${campoA} é maior. Tente novamente!`;
    const mensagemValidado = `Validado com sucesso! O número ${campoB} é maior`;  

    if (campoA === campoB){
        const containerInvalido = document.querySelector('.error');    
        containerInvalido.innerHTML = mensagemIgualdade;
        containerInvalido.style.display = 'block';
    }else if (campoA > campoB){
        const containerInvalido = document.querySelector('.error');        
        containerInvalido.innerHTML = mensagemErro;
        containerInvalido.style.display = 'block';
    }
    else {
        const containerValido = document.querySelector('.success');
        containerValido.innerHTML = mensagemValidado;
        containerValido.style.display = 'block';
    }
    document.getElementById('numero-A').value = '';
    document.getElementById('numero-B').value = '';
})

document.getElementById('numero-A').addEventListener('focusin', function(){
    document.querySelector('.error').style.display = 'none';
    document.querySelector('.success').style.display = 'none';    
})
