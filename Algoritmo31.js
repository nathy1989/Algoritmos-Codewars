/*Ejercicio 31: Contando ovejas

Considere una serie / lista de ovejas donde algunas ovejas pueden faltar en su lugar. Necesitamos una función que cuente el número de ovejas presentes en la matriz (verdadero significa presente).*/

const array1 = [true,  true,  true,  false, true,  true,  true,  true, true,  false, true,  false, true,  false, false, true, true,  true,  true,  true, false, false, true,  true]

const countSheeps = (arrayOfSheep) => {
    let contar = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      contar++;
    }
  }
  return contar;
}
//return arrayOfSheeps.filter(Boolean).length;

console.log(countSheeps(array1))

