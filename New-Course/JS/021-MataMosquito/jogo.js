//Altura e Largura da tela
var largura = 0
var altura = 0
var vida = 1
var tempo = 10
var nivel = window.location.search.replace('?', '')
var tempoDoGame = 0


if(nivel == 'normal'){
    //1500
 tempoDoGame = 1500
}else if(nivel == 'dificil'){
    //1000
    tempoDoGame = 1000
}else if(nivel == 'muitoDificil'){
    //750
    tempoDoGame = 750
}

function telaTamanho() {
    largura = window.innerWidth
    altura = window.innerHeight
    // console.log(altura, largura)
}
telaTamanho()
//Finish

// Cronometro

var cronometro = setInterval(function() {
    tempo -= 1
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criamosca)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('temp').innerHTML = tempo
    }
    
}, 2000);
//Finish

function posicaoRandom() {
    //Excluindo mosquitos anteriores / Controle de Vida
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        if (vida > 3) {
            window.location.href = 'FimDoGame.html'
        } else {
            document.getElementById('v' + vida).src = "assest/coracao_vazio.png"
            vida++
        }

    }

    //Finish
    //Posição Random 
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    //Finish

    //Criar Elemento Html
    var mosquito = document.createElement('img')
    mosquito.src = 'assest/mosca.png'
    mosquito.className = tamanhoAleatorio(0, 3) + ' ' + ladoAleatorio(0, 1)
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    document.body.appendChild(mosquito)
    mosquito.onclick = function () {
        this.remove()
    }
    //Finish
}

//Tamanho Aleatório
function tamanhoAleatorio(min, max) {
    var classe = Math.floor(Math.random() * (max - min + 1)) + min;
    switch (classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
        case 3:
            return 'mosquito4'
    }

}
//Finish

// Lado aleatorio
function ladoAleatorio(min, max) {
    var lado = Math.floor(Math.random() * (max - min + 1)) + min;
    switch (lado) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
}
//Finish