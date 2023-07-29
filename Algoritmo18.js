/*Ejercicio 18: Secuencia inversa

Cree una función que devuelva una matriz de enteros de n a 1 donde n>0.*/

const reverseSeq = n => {
    let arr = [];
    for (let i=n; i>0; i--) {
    arr.push(i);
    } return arr;
}

console.log(reverseSeq(5))