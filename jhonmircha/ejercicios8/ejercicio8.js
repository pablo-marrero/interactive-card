/*
24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de
 forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
*/

const ordenarArrglos = function(array){
    let objArray = {
        asc:[],
        desc:[]
    }
    try {
        if(!(array instanceof Array)){
            throw new Error(`El dato debe ser de tipo lista`)
        }
        if(array.length == 0){
            throw new Error(`La lista no se puede encontrar vacia`)
        }
        else{
            //METODO TRAMPOSO QUE USE YO JEJEJ
            // for(let i = 0; i < array.length; i++){
            //     // objArray.asc.push(Math.min(...array))
            //     // array.splice(array.indexOf(Math.min(...array)),1,999999999)
            // }
            objArray.asc = [...array].sort((a,b)=>a-b)
        }
        console.log(objArray.asc)
        objArray.desc = objArray.asc.reverse()
        console.log(objArray.desc)
    } catch (error) {
        console.log(error)
    }
}

ordenarArrglos([7, 5,7,8,6])


const eliminarDuplicados = function(array){
     try {
         if(!(array instanceof Array)){
            throw new Error(`eliminarDuplicados solo acepta arrays`)
         }
         if(array.length == 0){
             throw new Error (`eliminarDuplicados no acepta un array vacio`)
         }
         else{
            //  console.log(array)
            //  for(let i = 0; i < array.length; i++){
            //     if(array.includes(array[i],i + 1)){
            //         // console.log(array[i + 1])
            //         array.splice(array[i],1)
            //         console.log(array.length)
            //     }
            //  }
         
            // array.find(function(valor, indice){
            //     if(array.includes(valor, indice + 1)){
            //         array.splice(indice,1)
            //     }  
            // })

            /***************  MI SOLUCION(ORGULLO DE MI MISMO) ******************/
            // let nuevoArray = array.filter((val, i)=>{            [2,"x","x", 10,2,"m","x"]
            //     if(!(array.includes(val, i + 1))){                0  1   2    3 4  5  6
            //         return val
            //     }
            // })
            // console.log(nuevoArray)
            
            
            /***************  SOLUCION UTILIZANDO SET ******************/
            return console.info({
                original : array,
                sinDuplicados: [... new Set(array)]
            })
        }
        //  console.log(array)
     } catch (error) {
         console.log(error)
     }
}

// eliminarDuplicados(["x",10, "x","10",10])
eliminarDuplicados(["pablo","pablo","pablo"])
eliminarDuplicados([2,"x","x", 10,2,"m","x"])
eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true])

//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const promedioTotal = function(array){
    try {
        if(!(array instanceof Array)){
            throw new Error(`La funcion promedioTotal debe recibir una lista`)
        }
        if(array.length === 0){
            throw new Error (`La funcion promedioTotal no puede recibir un array vacio`)
        }
        else{
            let nuevoArray = array.reduce(function(acumuluador, el){
               return (acumuluador + el)
            })
            console.log(nuevoArray/ array.length)
        }
    } catch (error) {
        console.log(error)
    }    
}


promedioTotal([9,8,7,6,5,4,3,2,1,0])
promedioTotal([90,80,70,60,50,40,30,20,10,0])
