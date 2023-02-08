function verificar(){
    let caixaAno = document.querySelector('.nascimento');
    let data = new Date();
    let ano = data.getFullYear();
    let res = document.querySelector('.res');
    if(caixaAno.value.length == 0 || Number(caixaAno.value > ano)) {
        window.alert('[ERRO] Verifique os Dados e tente novamente');
    } else {
        let sexo = document.getElementsByName('sexo');
        let idade = ano - Number(caixaAno.value);
        let genero = ''
        let img = document.createElement('img');
        img.setAttribute('id', 'foto');
            if(sexo[0].checked) {
                genero = 'HOMEN';
                if(idade >=0 && idade < 15 ){
                    //criança
                    img.setAttribute('src', 'crianca-m.png');
                } else if(idade < 22){
                    //jovem
                    img.setAttribute('src', 'jovem-m.png');
                } else if (idade < 49){
                    //homem
                    img.setAttribute('src', 'homem.png');
                } else {
                    //idoso
                    img.setAttribute('src', 'idoso-m.png');
                }
                res.style.textAlign = 'center';
                res.innerHTML = `Detectamos um ${genero} de ${idade} anos`;
                res.appendChild(img);
            } else if(sexo[1].checked){
                genero = 'MULHER';
                if(idade >= 0 && idade < 15) {
                    // criança
                    img.setAttribute('src', 'crianca-f.png');
                } else if(idade < 22) {
                    //jovem
                    img.setAttribute('src', 'jovem-f.png');
                } else if(idade < 49) {
                    //Mulher
                    img.setAttribute('src', 'mulher.png');
                } else {
                    //idosa
                    img.setAttribute('src', 'idosa-f.png');
                }
                res.style.textAlign = 'center';
                res.innerHTML = `Detectamos uma ${genero} de ${idade} anos`;
                res.appendChild(img);
            }
        
    }


}