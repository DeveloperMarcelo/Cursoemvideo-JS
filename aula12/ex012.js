let now = new Date()
let horas = now.getHours();

console.log(`São exatamente ${horas} horas!`)

if(horas < 12) {
    console.log('Bom dia!');
} else if (horas < 18) {
    console.log('Boa Tarde!');
}else {
    console.log('Boa noite!');
}
