

function creatMedieval() {
    console.log(` A ${ cidadeAleatoria(0,5) } vai ficar na posição ${ posicaoRandom() }`)
    
}

function creatModerno() {
}

function numAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cidadeAleatoria(min, max) {
    let x = Math.floor(Math.random() * (max - min + 1)) + min;
    switch (x) {
        case 0:
            return 'cidade1'
        case 1:
            return 'cidade2'
        case 2:
            return 'cidade3'
        case 3:
            return 'cidade4'
        case 4:
            return 'cidade5'
        case 5:
            return 'cidade6s'
    }
}

function posicaoRandom() {
    let altura = window.innerWidth
    let largura = window.innerHeight
    let x = Math.floor(Math.random() * largura) - 90
    let y = Math.floor(Math.random() * altura) - 90
    x = x < 0 ? 0 : x
    y = y < 0 ? 0 : y

    let cidade = cidadeAleatoria(0, 5)

    var mosquito = document.createElement('img')
    cidade.src = 'assets/pergaminho.png'
    mosquito.className = tamanhoAleatorio(0, 3) + ' ' + ladoAleatorio(0, 1)
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    document.body.appendChild(mosquito)
    mosquito.onclick = function () {
        this.remove()
    }

}