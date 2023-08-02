/*Ejercicio 35: ¿Hay una vocal ahí?

Dada una serie de números, compruebe si alguno de los números son los códigos de caracteres para las vocales en minúsculas ( a, e, i, o, u).

Si lo son, cambie el valor de la matriz a una cadena de esa vocal.

Devuelve la matriz resultante.*/

const isVow = (a) => {
    let obj = {
        97: 'a',
        101: 'e',
        105: 'i',
        111: 'o',
        117: 'u',
      }
      return a.map( num => obj[num] ? obj[num] : num);
    }

console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]))
console.log(isVow([101,121,110,113,113,103,121,121,101,107,103]))


