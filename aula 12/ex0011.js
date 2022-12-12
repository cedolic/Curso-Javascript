var idade= 15
console.log(`Você tem ${idade} anos.`)
if (idade <= 15) {
    console.log('Não vota!')
} else if (idade < 18 || idade >= 65) {
    console.log('Voto opicional!')
} else {
    console.log('Voto obrigatório!')
}


//Obs: Menor e igual a 15 porque no ano que se faz 16 anos, o voto já é opcional, ou seja, ainda terá 15 anos.