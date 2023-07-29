/*Ejercicio 13: Agregar longitud

¿Qué pasa si necesitamos que la longitud de las palabras separadas por un espacio se agregue al final de esa misma palabra y se devuelva como una matriz?*/

const addLength = (str) => {
    return str.split(" ").map((element) => element + " " + element.length)
}     

console.log(addLength('you will win'))
console.log(addLength('apple ban'))

