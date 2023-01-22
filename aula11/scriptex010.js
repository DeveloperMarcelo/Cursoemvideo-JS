function calcular() {
    let txtv = document.querySelector('input#txtvel')
    let res = document.querySelector('div#res')
    let vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade é de <strong>${vel} km/h:</strong></p> `
    if (vel > 60.0) {
        res.innerHTML += `<p><strong>Multado !</strong> ultrapassou o limite de velocidade!`
    }
    res.innerHTML += `<p>Dirija sempre com <strong>cinto de segurança !</strong></p>`
   
}
