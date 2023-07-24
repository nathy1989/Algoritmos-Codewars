/*Algoritmo 9:Eliminar duplicados de la lista

Defina una función que elimine los duplicados de una matriz de números no negativos y los devuelva como resultado.

El orden de la secuencia tiene que permanecer igual.*/

const  distinct = (a) => {
      return a.filter((valor, indice) => {
      return a.indexOf(valor) === indice;
  });
}

//return [...new Set(a)];
//return Array.from(new Set(a));

  console.log(distinct([1])) //
  console.log(distinct([1,2]))//
  console.log(distinct([1,1,2]))

/*Interpretación: */