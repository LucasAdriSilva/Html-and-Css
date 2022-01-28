function calcular(tipo, valor) {

    if (tipo === 'acao') {
        if(valor === 'c'){
            //limpar visor
            document.getElementById('tela').value = ''
        }
        if(valor === '+' || valor === '-'|| valor === '*' || valor === '/' || valor === '.'){
            document.getElementById('tela').value += valor
        }

        if(valor === '='){
           var res = eval(document.getElementById('tela').value)
           document.getElementById('tela').value = res
        }
    } else if (tipo === 'valor') {
        document.getElementById('tela').value += valor
    }
}