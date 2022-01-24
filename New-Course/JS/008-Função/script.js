var largura = parseFloat(prompt('Digite a largura do terreno'))
var comprimento = parseFloat(prompt('Digite a comprimento do terreno'))

function calcularArea(largura, comprimento){
 var area = largura * comprimento 
 return area
}


document.write('A área do terreno é: ' + calcularArea(largura,comprimento))

