/*Ejercicio 15: ¿Qué hay entre?

Complete la función que toma dos enteros ( a, b, where a < b) y devuelva una matriz de todos los enteros entre los parámetros de entrada, incluidos ellos.*/

const  between = (a, b) => {
    const element = []
    for(let i = a; i <= b; i++){
    element.push(i)
   }return element
}     

console.log(between(1, 4))
console.log(between(-2, 2))


