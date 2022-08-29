/*1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.*/


const contarcarter = (cadena)=>{
    try {
        if(typeof cadena === "string"){
            console.log(cadena.length)
        }
        else{
            throw new Error("El dato ingresado no es una cadena")
        }
    } catch (error) {
        console.log(`Se produjo el siguiente error ${error} sino que es del tipo ${typeof(cadena)}`)
    }
}

contarcarter("perro amarillo")

const cortarCadena = (cadena)=>{
    try {
        if(typeof cadena === "string"){
            console.log(cadena.substring(0,4))
        }
        else{
            throw new Error("El dato ingresado no es Cadena")
        }
    } catch (error) {
        console.log(`Se produjo el siguiente error ${error} sino que es del tipo ${typeof(cadena)}`)
    }
}
cortarCadena("perro amarillo")


const dividirCadena = (cadena)=>{
    try {
        if(typeof cadena === "string"){
            console.log(cadena.split(" "))
        }
        else{
            throw new Error("El dato ingreado no es una cadena")
        }
    } catch (error) {
        console.log(`Se produjo el siguiente ${error}, sino que es del tipo ${typeof(cadena)}`)
    }
}
dividirCadena(123)
dividirCadena("perro amarillo,rojo negro")


const repetirCadena = (cadena)=>{
    try {
        if(typeof cadena === "string"){
            console.log(cadena.repeat(3))
        }
        else{
            throw new Error("El dato ingreado no es una cadena")
        }
    } catch (error) {
        console.log(`Se produjo el siguiente ${error}, sino que es del tipo ${typeof(cadena)}`)
    }
}

repetirCadena("perro amarillo ")