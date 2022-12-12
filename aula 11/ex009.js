
//exercicio if else

var pais = 'eua'
console.log(`Vivendo em ${pais}`)
if(pais=='Brasil') { //condição 
    console.log(`Você é Brasileiro`)
}
else {
    console.log('Você é estrangeiro.')
}

//saudações do dia

var hora = 19
if (hora < 5){
console.log("boa madrugada")
}else if(hora < 12 ){
console.log("bom dia")
}else if(hora == 12){
console.log("bom meio dia")
}else if(hora < 18){
console.log("boa tarde")
}else{
    console.log("boa noite")
}