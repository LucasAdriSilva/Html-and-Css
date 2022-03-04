class Personagem {
    constructor(nome, idade, altura, peso, sexo, forca, inteligencia, agilidade) {
        this.nome = nome
        this.idade = idade
        this.altura = altura
        this.peso = peso
        this.sexo = sexo
        this.forca = forca
        this.inteligencia = inteligencia
        this.agilidade = agilidade
        this.somaAtt = forca + inteligencia + agilidade
        this.distribuição = 20

    }
    validarDados() {
        for (let i in this) {
            if (this[i] == undefined || this[i] == null || this[i] == '') {
                return "Falta de dados"
            }
        }
        if (this.somaAtt != this.distribuição) {
            return "Erro de dstribuição"
        }
        return true
    }
}


class BancoDeDados {
    constructor() {
        let id = localStorage.getItem('id')
        if (id === null) {
            localStorage.setItem('id', 0)
        }
    }

    getProximoId() {
        let x = localStorage.getItem('id')

        return parseInt(x) + 1
    }

    gravar(info) {
        let id = this.getProximoId()

        localStorage.setItem(id, JSON.stringify(info))
        localStorage.setItem('id', id)
    }

}
let Bd = new BancoDeDados()

function montandoPlayer() {
    let nome = document.getElementById('nome')
    let idade = document.getElementById('idade')
    let altura = document.getElementById('altura')
    let peso = document.getElementById('peso')
    let sexo = document.getElementById('sexo')
    let forca = document.getElementById('for')
    let inteligencia = document.getElementById('inte')
    let agilidade = document.getElementById('agi')

    let campo1 = document.getElementById('res1')
    let campo2 = document.getElementById('res2')
    let campo3 = document.getElementById('res3')

    //Salvando os dados do novo player no objeto
    let newPlayer = new Personagem(
        nome.value,
        idade.value,
        altura.value,
        peso.value,
        sexo.value,
        forca.value / 10,
        inteligencia.value / 10,
        agilidade.value / 10
    )
    return newPlayer
}

function atualizacao() {
    let idade = montandoPlayer().idade
    if (idade.value <= 10) {
        this.distribuição = 15
        document.getElementById('pont').innerHTML = 'Distribua seus 15 pontos'
    } else if (idade <= 20) {
        this.distribuição = 17
        document.getElementById('pont').innerHTML = 'Distribua seus 17 pontos'
    } else if (idade <= 25) {
        this.distribuição = 19
        document.getElementById('pont').innerHTML = 'Distribua seus 19 pontos'
    } else if (idade <= 30) {
        this.distribuição = 21
        document.getElementById('pont').innerHTML = 'Distribua seus 21 pontos'
    } else if (idade >= 40) {
        this.distribuição = 24
        document.getElementById('pont').innerHTML = 'Distribua seus 24 pontos'
    }
    return idade
}

function enviarDados() {
    //Capturando os dados dos inputs
    let newPlayer = montandoPlayer()
    atualizacao()

    //Validação
    if (newPlayer.validarDados() == "Falta de dados") {
        alert('Esta faltando dados')
    } else if (newPlayer.validarDados() == "Erro de dstribuição") {
        alert('Os ponsto não estão corretamente distribuidos')
    } else {
        Bd.gravar(newPlayer)
        alert('Personagem cadastrado com sucesso')
        //Limpando campos
        nome.value = ''
        idade.value = ''
        sexo.value = ''
        altura.value = ''
        peso.value = ''
        forca.value = 0
        inteligencia.value = 0
        agilidade.value = 0
    }
}
