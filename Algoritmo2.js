//Algoritmo 2:Sin ceros para los héroes

//Los números que terminan en ceros son aburridos.Pueden ser divertidos en tu mundo, pero no aquí.Deshazte de ellos. Solo los finales.

const noBoringZeros = (n) => {
    let delCero = Number(n.toString().split("").reverse().join(""))
    if(n<0) {
        return Number((n*-1).toString().split("").reverse().join("")).toString().split("").reverse().join("")*-1
    }else {
        return Number(delCero.toString().split("").reverse().join(""))
    }
}

console.log(noBoringZeros(1450))
console.log(noBoringZeros(96000))
console.log(noBoringZeros(1050))
console.log(noBoringZeros(-1050))

/*Interpretación:*/