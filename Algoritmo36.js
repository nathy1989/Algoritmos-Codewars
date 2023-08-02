/*Ejercicio 36: Numero opuesto

Muy simple, dado un número entero o de punto flotante, encuentre su opuesto.*/

const opposite = (number) => {
  return number > 0 ? number * -1 : number * -1
}
//return number * (-1);  

console.log(opposite(1))
console.log(opposite(0))
console.log(opposite(4.25))
console.log(opposite(-12525220.3325))

