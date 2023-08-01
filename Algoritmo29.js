/*Ejercicio 29: Regex cuenta letras minúsculas

Su tarea es simplemente contar el número total de letras minúsculas en una cadena.*/

const lowercaseCount = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'a' && str[i] <= 'z') {
      count++;
    }
  }
  return count; 
}

//return (str.match(/[a-z]/g) || []).length

console.log(lowercaseCount("abc"))
console.log(lowercaseCount("abcABC123"))
console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"))
