/*18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva 
Vocales: 4, Consonantes: 5.
19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.*/

let vocConso = function(oracion){
    try {
        let vocal = 0
        let consonante = 0
        let regVocales = new RegExp("[aeiou]","")
        let regConsonantes = new RegExp("^[^aeiou\d]+$","g")

        if(typeof oracion != "string"){
            throw new Error(`Revisar dato ingresado, debe ser una oracion`)
        }
        if(oracion.trim() === ""){
            throw new Error(`La cadena no puede estar vacia`)
        }
        else{
            for(let i = 0; i < oracion.length; i++){
                if(regVocales.test(oracion.charAt(i))){
                    console.log(oracion.charAt(i))
                    vocal++
                }
                if(!(regVocales.test(oracion.charAt(i)))){
                    console.log(oracion.charAt(i))
                    consonante++
                }
            }
        }
        console.log(`Vocales: ${vocal}, consonante: ${consonante} `)
    } catch (error) {
        console.log(error)
    }
}

vocConso("  ")
vocConso("pablo")
vocConso("pablo15")

//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

let nombreValido = function(nombre){
    try {
        let reg = /^[A-Za-z\s]+$/g.test(nombre)
        if(typeof nombre != "string"){
            throw new Error(`El nombre debe ser un texto`)
        }
        if(nombre.trim() == ""){
            throw new Error(`El campo no puede estar vacio`)
        }
        if(reg){
            console.log(`El nombre ${nombre} es valido`)
        }
        else{console.log(`El nombre ${nombre} no es valido`)}
    } catch (error) {
        console.log(error)
    }
}

nombreValido("pablo 0")
nombreValido("pablo0")
nombreValido("pablo marrero")

//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
let validarMail = function(mail){
    let regMail = /[]/
}