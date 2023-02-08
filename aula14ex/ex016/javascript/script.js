function contar() {
    let ini = document.querySelector('#inicio');
    let fim = document.querySelector('#fim');
    let passo = document.querySelector('#passo');
    let res = document.querySelector('#res');

    if(ini.value.length == 0 || fim.value.length == 0 ||passo.value.lenght ==0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO! Não podemos continuar sem informações!]');
    }else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        if(p <= 0){
            window.alert('Passo Inválido!! Considerando passo "1"');
            p = 1;

        }

        if(i < f){
            for(let c = i;c <= f; c+= p) {
            res.innerHTML += `${c} \u{1F449}`;
            };
        }else {
            for(c = i; c >= f; c-= p) {
                res.innerHTML += `${c} \u{1F449}`;
            };
        };
        res.innerHTML += `\u{1F3C1}`;
    }
       
}