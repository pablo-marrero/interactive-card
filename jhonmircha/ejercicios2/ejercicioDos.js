/*5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/
let oracion = " Hola mundo "
let oraInversa  = ""

function invertCadena(oracion) {
    try {
        if(typeof oracion != "string"){
            throw new Error(`Ingresaste un dato tipo ${typeof(oracion)}`)
        }
        // oracion.trim()
        if(!oracion){
            throw new Error (`error, el campo no puede encontrase vacio`)
        }
        else{
            // console.log(oracion.split("").reverse().join(""));
            for(let i = oracion.trim().length; i >= 0; i--){
                oraInversa += oracion.charAt(i)
                console.log(oraInversa)
            }
        }
    } catch (error) {
        console.log(error)
    }
}
invertCadena(oracion)

let oracion1 = "Hola mundo, mundo , mundo"
let contarPalabra = function (oracion1) {
    try {
        let cantidad = oracion1.match("mundo")
        console.log(cantidad)
    } catch (error) {
        
    }
}

contarPalabra(oracion1)