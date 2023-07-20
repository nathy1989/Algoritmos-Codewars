//Algoritmo 1: Multiplicación sencilla

//Este kata consiste en multiplicar un número dado por ocho si es un número par y por nueve en caso contrario.

const simpleMultiplication = (number) => {
    return number % 2 === 0 ? number * 8 : number * 9
}

console.log(simpleMultiplication(2))
console.log(simpleMultiplication(1))
console.log(simpleMultiplication(8))
console.log(simpleMultiplication(4))
console.log(simpleMultiplication(5))

/*Interpretación: Utilicé el operador ternario o también llamado condicional, este está compuesto por tres operandos, (condición, expresión 1 y expresión 2). Se coloca la condición dependiendo si es verdadero retorna el valor de la expresión 1, de lo contrario devuelve el valor de la expresión 2 */