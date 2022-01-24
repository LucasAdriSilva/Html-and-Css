var peso = parseFloat(prompt('Digite seu peso'))
var altura = (parseFloat(prompt('Digite seu altura em centimetros')))/100
var imc = peso/(altura * altura) 

console.log(imc)

    // if (imc < 16){
    //     document.write('Baixo do peso muito grave')
    //     }

    // if (imc >= 16 && imc <= 16.99){
    //     document.write('Baixo do peso grave')
    // }

    // if (imc >= 17 && imc <= 18.49){
    //     document.write('Baixo do peso')
    // }

    // if (imc >= 18.50 && imc <= 24.99){
    //     document.write('Peso normal')
    // }

    // if (imc >= 25 && imc <= 29.99){
    //     document.write('Sobre peso')
    // }   
        
    // if (imc >= 30 && imc <= 34.99){
    //     document.write('Obesidade Grau 1')
    // }    

    // if (imc >= 35 && imc <= 39.99){
    //     document.write('Obesidade Grau 2')
    // }   

    // if (imc >= 40){
    //     document.write('Obesidade Grau 3')
    // }

     if (imc < 16){
        document.write('Baixo do peso muito grave')
        } else if (imc >= 16 && imc <= 16.99) {
            document.write('Baixo do peso grave')

        } else if (imc >= 17 && imc <= 18.49) {
            document.write('Baixo do peso')   

        } else if (imc >= 18.50 && imc <= 24.99){
            document.write('Peso normal')

        } else if (imc >= 25 && imc <= 29.99){
            document.write('Sobre peso')

        } else if (imc >= 30 && imc <= 34.99){
            document.write('Obesidade Grau 1')

        } else if (imc >= 35 && imc <= 39.99){
            document.write('Obesidade Grau 2')
            
        } else if (imc >= 40){
            document.write('Obesidade Grau 3')
        }

          
    
