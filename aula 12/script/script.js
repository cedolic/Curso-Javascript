function carregar() {
    var msg = window.document.getElementById('msg') //objeto msg
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours() //mostra a hora corrente
    var hora = 13
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //Mostra imagem de Bom dia!
        img.src = 'imagens/manha.png'
        document.body.style.background = '#e2cd9ef'
    } else if (hora >= 12 && hora < 18) {
        //Mostra imagem de Boa tarde! 
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        //Mostra imagem de Boa noite!
        img.src ='imagens/noite.png'
        document.body.style.background = '#515154'
    }
}

