/*Algoritmo 66:Método de división incorrecto

Este método, que se supone que devuelve el resultado de dividir su primer argumento por el segundo, no siempre devuelve valores correctos. Arreglalo.*/

const solve = (x, y) => {
    return x/y;
}

console.log(solve(2, 1))
console.log(solve(2, 4))
console.log(solve(42, 0))
console.log(solve(0, 8))
console.log(solve(7, 2))