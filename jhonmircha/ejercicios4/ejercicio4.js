/*12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) 
  devolverá true.
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.*/

let esPrimo = function(num){
    try {
        if(typeof num != "number"){
            throw new Error (`El dato ingresaro es del tipo ${typeof(num)}, y debe ser del tipo Number`)
       }
       if(num == 0 || num == 1){
            throw new Error (`El numero ingresaro no puede ser 0 o 1`)
       }
       if((num % 1 != 0)){
           throw new Error (`El numero ingresado debe ser entero`)
       }
       else{
           for(let i = 2; i <= num; i++){
                if(i == num && num % i == 0){
                    console.log(`El numero es primo`)
               }
                else if(num % i == 0){
                    console.log(`El numero no es primo`)
                    break
               }
           }
       }
    } catch (error) {
        console.log(error)
    }
}
/*esPrimo(6)*/

let parImpar = function(num){
    try {
        if(typeof num != "number"){
            throw new Error (`El dato ingresaro es del tipo ${typeof(num)}, y debe ser del tipo Number`)
        }
        if(num % 2 == 0){
            console.log(`El numero es par`)
        }
        else{console.log(`El numero es impar`)}

    } catch (error) {
        console.log(error)
    }
}

// parImpar(0)

let celFar = function(num, g){
    try {
        if(typeof num != "number"){
            throw new Error (`El dato ingresaro es del tipo ${typeof(num)}, y debe ser del tipo Number`)
        }
        if(g != "c" && g != "f"){
            throw new Error (`Solo se calculan grados Celcius(C) o Fahrenheit(F)`)
        }
        if(g == "c"){
            console.log((num * 9/5) + 32) 
        }
        if(g == "f"){
            console.log(Math.round((num - 32) / 1.8))
        }
    } catch (error) {
        console.log(error)
    }
}
celFar(2,"c")
celFar(37.4, "f")