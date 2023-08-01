/*Ejercicio 30: Binario falso 

Dada una cadena de dígitos, debe reemplazar cualquier dígito debajo de 5 con '0' y cualquier dígito 5 y superior con '1'. Devuelve la cadena resultante.*/

const fakeBin = (x) => {
    return x.split('').map(d => d < 5 ? '0' : '1').join('')
}

console.log(fakeBin('45385593107843568'))
console.log(fakeBin('509321967506747'))
console.log(fakeBin('366058562030849490134388085'))
