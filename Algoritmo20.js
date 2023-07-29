/*Ejercicio 20:Suma de múltiplos 

Encuentra la suma de todos los múltiplos de n abajo m

Tenga en cuenta: n y m son números naturales (enteros positivos) m se excluye de los múltiplos*/

const  sumMul = (n, m) => {
    const num = []
    for(let i = n; i < m; i+= n){
        num.push(i) 
    }return n < m ? num.reduce((acc, item) => acc + item) : "INVALID" 
}

console.log(sumMul(0,0))
console.log(sumMul(2,9))
console.log(sumMul(4,-7))


