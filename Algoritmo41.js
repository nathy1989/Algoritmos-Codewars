/*Ejercicio 41: Barajador de nombres

Escriba una función que devuelva una cadena en la que el nombre se intercambie con el apellido.*/

const nameShuffler = (str) => {
    return str.split(" ").reverse().join(" ")
}


console.log(nameShuffler('john McClane'))
console.log(nameShuffler('Mary jeggins'))
console.log(nameShuffler('tom jerry'))


