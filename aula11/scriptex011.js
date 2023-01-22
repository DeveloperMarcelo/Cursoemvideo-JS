function verificar() {
    let pais = document.querySelector('.pais').value.toUpperCase();
    let res = document.querySelector('.resposta');
    

    res.innerHTML = `<p> Seu país de origem é <strong>${pais}</strong></p>`;
    
    if(pais == 'BRASIL') {
        res.innerHTML += `Se seu país é: ${pais} você é brasileiro(a)`;
    }else{
        res.innerHTML += `Como seu pais é: ${pais} você é estrangeiro`;
    }
   
    
}

