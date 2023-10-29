// En este kata, tu trabajo es devolver los dos valores más altos distintos en una lista. Si hay menos de 2 valores únicos, devuelva tantos como sea posible.

// El resultado también debe ordenarse de mayor a menor.

// Ejemplos:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []

const orderMatriz = (arr) => {
    return [...new Set(arr.sort((a,b)=> b-a))].slice(0,2)
}

console.log(orderMatriz([4, 10, 10, 9]))
console.log(orderMatriz([1, 1, 1]))
console.log(orderMatriz([]))