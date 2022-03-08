

function creatMedieval() {
    posicaoRandom()
    
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
            return 'assets/oculos.png'
        case 1:
            return 'cidade2'
        case 2:
            return 'cidade3'
        case 3:
            return 'cidade4'
        case 4:
            return 'cidade5'
        case 5:
            return 'cidade6'
    }
}

function posicaoRandom() {
    let div = document.getElementById('creat_maps')
    console.log('div.window.innerHeight')

    let altura = document.querySelector('#creat_maps').offsetHeight
    let largura = document.querySelector('#creat_maps').offsetWidth

    console.log(altura)
    console.log(largura)

    let x = Math.floor(Math.random() * largura) - 170
    let y = Math.floor(Math.random() * altura) - 170
    x = x < 0 ? 0 : x
    y = y < 0 ? 0 : y

    let cidade = document.createElement('img');
    cidade.src = cidadeAleatoria(0,0)
    cidade.style.left = x + 'px';
    cidade.style.top = y + 'px';
    cidade.style.position = 'absolute';
    cidade.id = 'Cidade';

    div.appendChild(cidade)
    console.log(cidade)


}