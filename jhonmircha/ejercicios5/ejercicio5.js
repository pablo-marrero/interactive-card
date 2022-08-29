/*15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20)
 devolverá 800.

 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) 
 devolverá 35 años (en 2020).*/

let logaritmo = function(numero, base){
    try {
        if(numero == "undefined"){
            throw new Error(`No ingresaste ningun numero`)
        }
        if(base == "undefined"){
            throw new Error(`La ${base} no puede ser vacia`)
        }
        if(typeof numero != "number"){
            throw new Error(`El dato debe ser de tipo number`)
        }
        if(typeof base != "number"){
            throw new Error(`El dato debe ser de tipo number`)
        }
        if(base == 2){
            return console.log(parseInt(numero,base))
        }
        else if(base == 10){
            return console.log(numero.toString(2))
        }
    } catch (error) {
        
    }
}

logaritmo(100,2)
logaritmo(4,10)

let aplicarDescuento = function(numero, descuento){
    try {
        if(numero == "undefined"){
            throw new Error(`No ingresaste ningun numero`)
        }
        if(descuento == "undefined"){
            throw new Error(`La ${base} no puede ser vacia`)
        }
        if(typeof numero != "number"){
            throw new Error(`El dato debe ser de tipo number`)
        }
        if(typeof descuento != "number"){
            throw new Error(`El dato debe ser de tipo number`)
        }
        else{
            return console.log(numero- (numero * descuento)/100)
        }
    } catch (error) {
        console.log(error)
    }
}

aplicarDescuento(1000,15)
/*
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) 
devolverá 35 años (en 2020).*/
//let fecha = new Date()

//console.log(fecha.getFullYear())
//console.log(Date())

let calcularAnio = function(fecha){
    //let fechaActual = new Date().getFullYear()
    let difEnMS = new Date().getTime() - fecha.getTime()

        let anioEnMS = 1000 * 60 * 60 * 24 * 365
        let diferenciaAnio = Math.floor(difEnMS / anioEnMS)
        if(!(fecha instanceof Date)){
            throw new Error(`El dato debe ser una fecha valida`)
        }
        // if(fecha > fechaActual){
        //     throw new Error(`La fecha ingresada no puede ser mayor a la fecha actual`)
        // }
            return (Math.sign(diferenciaAnio) === -1)
            ? console.log(`Faltan ${Math.abs(diferenciaAnio)} años para el ${fecha.getFullYear()}`)
            : (Math.sign(diferenciaAnio) === 1)
            ? console.log(`Han pasado ${Math.abs(diferenciaAnio)} años desde ${fecha.getFullYear()}`)
            : console.log(`Estamos en el año actual ${fecha.getFullYear()}`)
}
let anio = new Date(2022,4,23)
//console.log(anio)
calcularAnio(anio)
