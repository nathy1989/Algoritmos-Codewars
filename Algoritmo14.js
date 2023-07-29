/*Ejercicio 14: Corto Largo Corto

Dadas 2 cadenas, ay b, devuelve una cadena de la forma corta+larga+corta, con la cadena más corta en el exterior y la cadena más larga en el interior. Las cadenas no tendrán la misma longitud, pero pueden estar vacías ( zerolongitud).*/

const solution = (a, b) => {
    return a.length >= b.length ? b + a + b : a + b + a
}     

console.log(solution('45', '1'))
console.log(solution('13', '200'))
console.log(solution('Soon', 'Me'))
console.log(solution('U', 'False'))

