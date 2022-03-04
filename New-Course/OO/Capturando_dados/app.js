

class Personagem {
    constructor(nome, idade, sexo, altura, peso) {
        this.nome = nome
        this.idade = idade
        this.altura = altura
        this.peso = peso
        this.sexo = sexo
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

function enviarDados() {
    //Capturando os dados dos inputs
    let nome = document.getElementById('nome')
    let idade = document.getElementById('idade')
    let altura = document.getElementById('altura')
    let peso = document.getElementById('peso')
    let sexo = document.getElementById('sexo')
    //Salvando os dados do novo player no objeto
    let newPlayer = new Personagem(
        nome.value,
        idade.value,
        altura.value,
        peso.value,
        sexo.value
    )

    //Gravando o objeto no localstorage
    Bd.gravar(newPlayer)
    
    mostrarDados(nome, idade, sexo, altura, peso)

    //Mostrando o dados do obj no conteudo secundario
    //Limpando campos
    nome.value = ''
    idade.value = ''
    sexo.value = ''
    altura.value = ''
    peso.value = ''

    
    
}

// function mostrarDados(nome, idade, sexo, altura, peso){
    
// }








