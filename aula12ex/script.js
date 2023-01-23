function carregar(){
    let msg = document.querySelector('.msg');
    let imagem = document.querySelector('.imagem');
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    

    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`

    if(hora >= 0 && hora < 12) {
        imagem.src = 'src/imagens/manha.png'
        document.body.style.background = '#CBBA84'
    }else if (hora >= 12 && hora < 18 ){
        imagem.src = 'src/imagens/tarde.png'
        document.body.style.background = '#67393B'
    }else {
        imagem.src = 'src/imagens/noite.png'
        document.body.style.background = '#014670'
    }

}




