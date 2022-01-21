var x = parseInt(prompt('Digite um numero de 0 à 3'))

console.log(x)
switch(x){
    case (x = NaN):
       
        document.write('SEM DADOS')
        break

    case (0):
        document.write("Valor incerido foi 0")
        break
    
    case 1:
        document.write("Valor incerido foi 1")
        break

    case 2:
            document.write("Valor incerido foi 2")
            break
        
    case 3:
            document.write("Valor incerido foi 3")
            break
}