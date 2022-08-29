/*21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y
 en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.*/

let elevarPotencia = function(array, exponente){
    try {
        let arrayElevado = []
        if(!(array instanceof Array)){
            throw new Error (`El dato ingresado debe ser una lista`)
        }
        if(array.length == 0){
            throw new Error (`La lista no puede estar vacia`)
        }
        if(exponente === undefined){
            throw new Error (`El exponente no puede estar vacio`)
        }
        else{
             arrayElevado = array.map(function(el){
              if(typeof el != "number"){
                  throw new Error (`El listado solo puede contener numeros`)
              }
              else{
                  return Math.pow(el, exponente)
                }
            })
            console.log(arrayElevado)
        }
    } catch (error) {
        console.log(error)
    }
} 

// elevarPotencia("ad")
// elevarPotencia([5],)
// elevarPotencia([5, "hola", 23],2)
// elevarPotencia([5, "153", 23])
// elevarPotencia([5, 3, 23], 3)

let altoBajo =  function(array){
   try {
       if(!(array instanceof Array)){
           throw new Error (`El dato ingresado debe ser una lista`)
       }
       if(array.length == 0){
           throw new Error (`La lista no se puede encontrar vacia`)
       }
       else{
        //    let nuevoArray = []
        //    nuevoArray.push(Math.max(array))
        //    nuevoArray.push(Math.min(array))
   
        //    console.log(nuevoArray)
           let mayor = array[0]
           let menor = array[0]
           for(let i  = 0; i < array.length; i++){
               if(typeof array[i] != "number"){
                   throw new Error (``)
               }

               if(mayor <= array[i]){
                   mayor = array[i]
               }
               if(menor >= array[i]){
                    menor = array[i]
               }
           }
           let nuevoArray = []
           nuevoArray.push(mayor,menor)
           console.log(nuevoArray)
        }
       
   } catch (error) {
       console.log(error)
   }
}
altoBajo([1, 4, 5, 99, -60])

let parImpar = function(array){
    try {
        let pares = []
        let impares = []
        if(!(array instanceof Array)){
            throw new Error(`El dato ingresado debe ser una lista`)
        }
        if(array.length == 0){
            throw new Error (`La lista no se puede encontrar vacia`)
        }
        else{
            for(let i = 0; i < array.length ;i++){
                if(typeof array[i] != "number"){
                    throw new Error(`El listado solo puede contener numeros`)
                }
                if(array[i] % 2 == 0){
                    pares.push(array[i])
                }
                if(array[i] % 2 != 0){
                    impares.push(array[i])
                }
            }
            console.log(pares)
            console.log(impares)
        }
    } catch (error) {
        console.log(error)
    }
}
parImpar([1,2,3,4,5,6,7,8,9,0])