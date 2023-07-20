//Algoritmo 2:Sin ceros para los héroes

//Los números que terminan en ceros son aburridos.Pueden ser divertidos en tu mundo, pero no aquí.Deshazte de ellos. Solo los finales.

const noBoringZeros = (n) => {
    return n.slice(-2)
}

console.log(noBoringZeros(1450))
console.log(noBoringZeros(96000))
console.log(noBoringZeros(1050))
console.log(noBoringZeros(-1050))