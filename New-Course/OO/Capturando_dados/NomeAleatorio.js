function nomeAleatorio() {

    let qtdSilabas = numAleatorio(2, 3);
    let nome = "";
    let sexo = numAleatorio(0,1)

    for (contadorSilaba = 1; contadorSilaba <= qtdSilabas; contadorSilaba++) {

        nome = nome + consoanteAleatoria() + vogalAleatorio();

    }

    if(sexo == 0 ){
        document.getElementById('sexo').value = 'Masculino'
    }else{
        document.getElementById('sexo').value = 'Femea'
    }

    
    document.getElementById('nome').value = nome
    document.getElementById('idade').value = numAleatorio(9, 68)
    document.getElementById('peso').value = numAleatorio(30, 150)
    document.getElementById('altura').value = numAleatorio(100, 230)

    atualizacao()

}

function numAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function vogalAleatorio() {

    let listaVogais = "AEOIU";
    let numeroAleatorio = numAleatorio(1, 5);

    return listaVogais.substring(numeroAleatorio - 1, numeroAleatorio);

}

function consoanteAleatoria() {

    let listaConsoantes = "BCDFGHJKLMNPQRSTWVXYZ";
    let numeroAleatorio = numAleatorio(1, 21);

    return listaConsoantes.substring(numeroAleatorio - 1, numeroAleatorio);

}
