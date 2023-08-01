/*Ejercicio 28: ¡Encuentra el puesto!

Cuando se le proporcione una letra, devuelva su posición en el alfabeto.
Entrada :: "a"
Ouput :: "Posición del alfabeto: 1"*/

const position = (letter) => {
    return `Position of alphabet: ${letter.charCodeAt() - 96}`;
}

console.log(position("a"))
console.log(position("z"))
console.log(position("e"))

