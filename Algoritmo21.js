/*Ejercicio 21: Buscar múltiplos de un número

En este sencillo ejercicio, creará un programa que toma un valor, , y devuelve una lista de sus múltiplos hasta otro valor, . Si es un múltiplo de , también debe incluirse. Solo habrá enteros positivos pasados a la función, que no consistan en 0. El límite siempre será superior a la base.integer limit limitinteger

Por ejemplo, si los parámetros pasados son , la función debe devolver como 2, 4 y 6 son los múltiplos de 2 hasta 6.(2, 6)[2, 4, 6]
*/

const findMultiples = (integer, limit) => {
    const num = []
    for(let i = integer; i <= limit; i+= integer){
        num.push(i)
    }return num
}

console.log(findMultiples(5, 25))
console.log(findMultiples(1, 2))
console.log(findMultiples(5, 7))
console.log(findMultiples(4, 27))
console.log(findMultiples(11, 54))


