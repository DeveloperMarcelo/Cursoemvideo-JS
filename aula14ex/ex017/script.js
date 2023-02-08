function tabuada(){
    let num = document.getElementById("num");
    let res = document.getElementById("res");
    

    if (num.value.length == 0) {
        window.alert("Por favor, digite um número!");
    } else {
        let n = Number(num.value);
        let c = 1;
        res.innerHTML = " "
        while(c <= 10) {
            let item = document.createElement("option");
            item.text = `${n} * ${c} = ${n * c}`
            item.value = `tab${c}`;
            res.appendChild(item);
            c++;
        }
    }
}