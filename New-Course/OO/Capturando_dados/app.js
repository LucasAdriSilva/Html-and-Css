class Personagem {
    constructor(nome, idade, altura, peso, sexo, forca, inteligencia, agilidade) {
        this.nome = nome
        this.idade = idade
        this.altura = altura / 100
        this.peso = peso
        this.sexo = sexo
        this.forca = Math.round(forca)
        this.inteligencia = Math.round(inteligencia)
        this.agilidade = Math.round(agilidade)
        this.somaAtt = forca + inteligencia + agilidade
        this.distribuicao = 20
        
    }
    validarDados() {
        for (let i in this) {
            if (this[i] == undefined || this[i] == null || this[i] == '') {
                return "Falta de dados"
            }
        }
        if (this.somaAtt != this.distribuicao) {
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
    if (idade <= 10) {
        this.distribuicao = 15
        document.getElementById('pont').innerHTML = 'Distribua seus 15 pontos'

    } else if (idade <= 20) {
        this.distribuicao = 17
        document.getElementById('pont').innerHTML = 'Distribua seus 17 pontos'

    } else if (idade <= 25) {
        this.distribuicao = 19
        document.getElementById('pont').innerHTML = 'Distribua seus 19 pontos'

    } else if (idade <= 40) {
        this.distribuicao = 21
        document.getElementById('pont').innerHTML = 'Distribua seus 21 pontos'

    } else if (idade > 40) {
        this.distribuicao = 24
        document.getElementById('pont').innerHTML = 'Distribua seus 24 pontos'

    }
    return this.distribuicao
}

function mostrarDadosSecundarios(player) {
    let p = player

    document.getElementById('res1').innerHTML = `Olá ${p.nome}, segue seus dados de jogador:`
    
    let x = parseInt(p.forca)
    switch (x){
        case 0:
        document.getElementById('res2').innerHTML = `Por sua força ser ${p.forca} você recebe -3 no dados para ações que necessitam de força`
        break;
        case 1:
        document.getElementById('res2').innerHTML = `Por sua força ser ${p.forca} você recebe -2 no dados para ações que necessitam de força`
        break;
        case 2:
        document.getElementById('res2').innerHTML = `Por sua força ser ${p.forca} você recebe -2 no dados para ações que necessitam de força`
        break;
        case 3:
        document.getElementById('res2').innerHTML = `Por sua força ser ${p.forca} você recebe -1 no dados para ações que necessitam de força`
        break;
        case 4:
        document.getElementById('res2').innerHTML = `Por sua força ser ${p.forca} você recebe -1 no dados para ações que necessitam de força`
        break;
        case 5:
        document.getElementById('res2').innerHTML = `Por sua força ser ${p.forca} você recebe 0 no dados para ações que necessitam de força`
        break;
        case 6:
        document.getElementById('res2').innerHTML = `Por sua força ser ${p.forca} você recebe +1 no dados para ações que necessitam de força`
        break;
        case 7:
        document.getElementById('res2').innerHTML = `Por sua força ser ${p.forca} você recebe +1 no dados para ações que necessitam de força`
        break;
        case 8:
        document.getElementById('res2').innerHTML = `Por sua força ser ${p.forca} você recebe +2 no dados para ações que necessitam de força`
        break;
        case 9:
        document.getElementById('res2').innerHTML = `Por sua força ser ${p.forca} você recebe +2 no dados para ações que necessitam de força`
        break;
        case 10:
        document.getElementById('res2').innerHTML = `Por sua força ser ${p.forca} você recebe +3 no dados para ações que necessitam de força`
        break;
    }

    switch (parseInt(p.inteligencia)){
        case (p.inteligencia >= 0 && p.inteligencia <= 1):
        document.getElementById('res2').innerHTML = `Por sua força ser ${p.forca} você recebe -2 no dados para ações que necessitam de inteligência`
        break
        case (p.inteligencia >= 1 && p.inteligencia <= 2):
        document.getElementById('res2').innerHTML = `Por sua força ser ${p.inteligencia} você recebe -2 no dados para ações que necessitam de inteligência`
        break
        case (p.inteligencia >= 2 && p.inteligencia <= 3):
        document.getElementById('res2').innerHTML = `Por sua força ser ${p.inteligencia} você recebe -1 no dados para ações que necessitam de inteligência`
        break
        case (p.inteligencia >= 3 && p.inteligencia <= 4):
        document.getElementById('res2').innerHTML = `Por sua força ser ${p.inteligencia} você recebe -1 no dados para ações que necessitam de inteligência`
        break
        case (p.inteligencia >= 4 && p.inteligencia <= 5):
        document.getElementById('res2').innerHTML = `Por sua força ser ${p.inteligencia} você recebe 0 no dados para ações que necessitam de inteligência`
        break
        case (p.inteligencia >= 5 && p.inteligencia <= 6):
        document.getElementById('res2').innerHTML = `Por sua força ser ${p.inteligencia} você recebe +1 no dados para ações que necessitam de inteligência`
        break
        case (p.inteligencia >= 7 && p.inteligencia <= 8):
        document.getElementById('res2').innerHTML = `Por sua força ser ${p.inteligencia} você recebe +1 no dados para ações que necessitam de inteligência`
        break
        case (p.inteligencia >= 8 && p.inteligencia <= 9):
        document.getElementById('res2').innerHTML = `Por sua força ser ${p.forca} você recebe +2 no dados para ações que necessitam de inteligência`
        break
        case (p.inteligencia >= 9 && p.inteligencia <= 10):
        document.getElementById('res2').innerHTML = `Por sua força ser ${p.inteligencia} você recebe +2 no dados para ações que necessitam de inteligência`
        break
    }

    switch (parseInt(p.agilidade)){
        case (p.agilidade >= 0 && p.agilidade <= 1):
        document.getElementById('res2').innerHTML = `Por sua força ser ${p.forca} você recebe -2 no dados para ações que necessitam de agilidade`
        break
        case (p.agilidade >= 1 && p.agilidade <= 2):
        document.getElementById('res2').innerHTML = `Por sua força ser ${p.agilidade} você recebe -2 no dados para ações que necessitam de agilidade`
        break
        case (p.agilidade >= 2 && p.agilidade <= 3):
        document.getElementById('res2').innerHTML = `Por sua força ser ${p.agilidade} você recebe -1 no dados para ações que necessitam de agilidade`
        break
        case (p.agilidade >= 3 && p.agilidade <= 4):
        document.getElementById('res2').innerHTML = `Por sua força ser ${p.agilidade} você recebe -1 no dados para ações que necessitam de agilidade`
        break
        case (p.agilidade >= 4 && p.agilidade <= 5):
        document.getElementById('res2').innerHTML = `Por sua força ser ${p.agilidade} você recebe 0 no dados para ações que necessitam de agilidade`
        break
        case (p.agilidade >= 5 && p.agilidade <= 6):
        document.getElementById('res2').innerHTML = `Por sua força ser ${p.agilidade} você recebe +1 no dados para ações que necessitam de agilidade`
        break
        case (p.agilidade >= 7 && p.agilidade <= 8):
        document.getElementById('res2').innerHTML = `Por sua força ser ${p.agilidade} você recebe +1 no dados para ações que necessitam de agilidade`
        break
        case (p.agilidade >= 8 && p.agilidade <= 9):
        document.getElementById('res2').innerHTML = `Por sua força ser ${p.forca} você recebe +2 no dados para ações que necessitam de agilidade`
        break
        case (p.agilidade >= 9 && p.agilidade <= 10):
        document.getElementById('res2').innerHTML = `Por sua força ser ${p.agilidade} você recebe +2 no dados para ações que necessitam de agilidade`
        break
    }
}

function enviarDados() {
    //Capturando os dados dos inputs
    let newPlayer = montandoPlayer()
    newPlayer.distribuicao = atualizacao()

    //Validação
    if (newPlayer.validarDados() == "Falta de dados") {
        alert('Esta faltando dados')
    } else if (newPlayer.validarDados() == "Erro de dstribuição") {
        alert('Os ponsto não estão corretamente distribuidos')
    } else {
        Bd.gravar(newPlayer)
        alert('Personagem cadastrado com sucesso')
        //Mostrar os dados na segunda tela
        mostrarDadosSecundarios(newPlayer)

        //Limpando campos
        nome.value = ''
        idade.value = ''
        sexo.value = ''
        altura.value = ''
        peso.value = ''
        newPlayer.forca.value = 0
        newPlayer.inteligencia.value = 0
        newPlayer.agilidade.value = 0
    }
}

