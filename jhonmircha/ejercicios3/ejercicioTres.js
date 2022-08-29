/*9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde
    1 hasta n), pe. miFuncion(5) devolverá 120.*/

    const numAleatorio = function(num1, num2) {
        try {
            if(!num1 && !num2){
                throw new Error(`El campo no puede estar vacio`)
            }
            if(typeof num1 != `number` && num2 != `number`){
                throw new Error(`El dato ingresado debe ser de tipo number`)
            }
            else{
                console.log(Math.random() * (num1 - num2) + num2)
            }
        } catch (error) {
            console.log(error)            
        }
    }

numAleatorio(600,501)

const capicua = function(num) {
    try {
        if(!num){
            throw new Error(`El campo no puede estar vacio`)
        }
        if(typeof num != `number`){
            throw new Error (`El dato debe ser de tipo number`)
        }
        else{
            num = Math.floor(num)
            let numAlrevez = num.toString().split("").reverse().join("") 
            if(num != numAlrevez){
                console.log(`el numero no es capicua`)
            }
            else{console.log(`el numero es capicua`)}
        }
    } catch (error) {
        console.log(error)
    }
}

capicua(55)

