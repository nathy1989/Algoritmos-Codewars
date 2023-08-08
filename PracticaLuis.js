/*Suma de múltiplos: Dado un array de números y un número multiplicador, devuelve la suma de todos los números que sean múltiplos de ese multiplicador.*/

/* const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const multiplicador = 3;

const multiplos = (arr, multiplicador) => arr.filter((item) => item % multiplicador == 0).reduce((acum, num) => acum + num)

    
console.log(multiplos(arr, multiplicador)) */

let cuentaAtras = numero => {
    //base case
    if (numero === 0) {
        return;
    }
    console.log(numero);
    return cuentaAtras(numero - 1);
  };

  console.log(cuentaAtras(-5))