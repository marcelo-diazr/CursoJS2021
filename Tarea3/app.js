// Función que me permita encontrar todas las ordenes que contengan de **ingredients** lechuga y palta


const filtrarOrdenes = () =>{
    const filtroIngredients = sandwichOrders.filter(
        filtroingredient=>filtroingredient.ingredients.includes('palta') 
        && filtroingredient.ingredients.includes('lechuga'))
    return filtroIngredients ;
}

//- Función que me permita encontrar una orden a través del id y que me devuelva un **string** con el 
//siguiente formato de ejemplo: `La orden fue realizada el (09-10-2020), la orden llevó (mechada) y (bagette)`. En caso de no encontrar nada a través del id, el mensaje, a modo de ejemplo, deberá ser: `No se encontró la orden con id (800)`
//- Las palabras encerradas en paréntesis corresponden a información que debe venir desde la búsqueda.
//- Usar **destructuración** [-> Documentación <-](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment)


const filtrarIds = (id) => {
    const result = sandwichOrders.find(
        filtrarOrden => filtrarOrden.id === id)
    if(result){
        return `La orden fue realizada el ${result.ordered}, la orden llevó ${result.protein} y ${result.bread}`
    }return `No se encontró la orden con id ${id}`
}

//- Función que me permita encontrar una orden a través del id y que me indique si la orden incluye `pepinillos` 
//entre sus **ingredients**, debería devolver un `true|false` como respuesta.


const filtrarPepinillos = (id) => {
    const result = sandwichOrders.find(
        filtrarOrden => filtrarOrden.id === id 
        && filtrarOrden.ingredients.includes('pepinillos') )
    if(result){
        return true
    }return false
}

// - Función que me permita encontrar todas las orden que se hicieron en un día en específico, 
//es decir, si yo coloco **20-10-2020**, la función me debería devolver: 
//`Se encontraron N ordenes para la fecha 20-10-2020`.

const filtrarFechas= (fecha) => {
    const busquedaFecha = ({ filter = fecha}) => sandwichOrders.filter(
        fechaorden => fechaorden.ordered === filter)
    const result = busquedaFecha({filter: fecha}).length;
        return `Se encontraron ${result} ordenes para la fecha ${fecha}`
}

// - Función que me devuelva las fechas de todas las ordenes que tuvieron como proteina `not burger` y de ingredients `cebolla caramelizada`

const filtrarProteina = () =>{
    const filtroProteinas = sandwichOrders.filter(
        filtroProteina=>filtroProteina.protein === 'not burger' 
        && filtroProteina.ingredients.includes('cebolla caramelizada'))
        console.table(filtroProteinas.map(filtroProteina=>filtroProteina.ordered))
        return true
        
        
    
}
// ## Ejercicio dificil

// No es obligatorio que lo completen pero les servirá para entender como funciona `.reduce()`

// - Función que me devuelva un objeto, con la cantidad correspondiente de ordenes por cada `bread`:

//    - Deben usar `.reduce()`
//    - La lista de ingredientes es la siguiente: 
//    ```js
//     const breads = ["bagette", "brioche", "pita", "marraqueta", "hallulla"]
//    ```
//    - Resultado de la operación para que puedan evaluar:
//    ```js
//    Result:
//    {
//        hallulla: 335,
//        marraqueta: 438,
//        bagette: 628,
//        brioche: 257,
//        pita: 342
//    }
//    ```


const breads = ["bagette", "brioche", "pita", "marraqueta", "hallulla"]

const filtrarBread = () =>{
    
    const filtrarBreads = sandwichOrders.reduce((previo,actual) =>{ 
        previo = {
            ...previo,
            hallulla: actual.bread === 'hallulla'? 1+previo.hallulla : previo.hallulla,
            marraqueta: actual.bread === 'marraqueta'? 1+previo.marraqueta : previo.marraqueta,
            bagette: actual.bread === 'bagette'? 1+previo.bagette : previo.bagette,
            brioche: actual.bread === 'brioche'? 1+previo.brioche : previo.brioche,
            pita: actual.bread === 'pita'? 1+previo.pita : previo.pita,

        }
        return previo
     },{
        hallulla: 0,
        marraqueta: 0,
        bagette: 0,
        brioche: 0,
        pita: 0 
     })
    console.table(filtrarBreads)
    return true

}

