//1.-Crear una función que reciba un número como parámetro y con el bucle for mostrar todos los números positivos hasta dicho número

const number1 = (num) => {
    for(let i = 1; i<=num; i++){
        console.log(i)
    }
}
console.log(number1(5))
//---------------------------------------------------------------------------------------
const number2 = (num) => {
    for(let i = num; i>=1; i--){
        console.log(i)
    }
}

console.log(number2(5))
//---------------------------------------------------------------------------------------
//Agregue elementos en un array:
const number3 = (num) => {
    let result = []
    for(let i = 1; i<=num; i++){
        result.push(i)
            }
        return result
}

console.log(number3(5))
//-----------------------------------------------------------------------------------------
const array1 = (arr, num) => {
    let result = []
    for(let i=0; i<=arr.length-1; i++){
        result.push(arr[i] * num)
    }
    return result
}

console.log(array1([2, 3, 4], 5))
//-----------------------------------------------------------------------------------------------
//1.-Contar hasta 10: Escribe un programa que utilice un bucle for para contar del 1 al 10 e imprima cada número en la consola

const countNumbers = (number) => {
    for(let i = 1; i<=number; i++){
        console.log(i)
    }  
}

console.log(countNumbers(10))

//2.-Sumar números pares: Crea un programa que sume todos los números pares del 1 al 20 utilizando un bucle for y luego muestre el resultado

const pairNumbers = (num) => {
    let result = 0
    for(let i = 2; i<=num; i+=2){
        result +=i
    }return result
}

console.log(pairNumbers(20))

//-----------------------------------------------------------------------------------------------
//3.-Contar hacia atrás: Crea un programa que cuente desde 10 hasta 1 utilizando un bucle for y muestre los numeros en orden descendete.

const countNumbers2 = (num) => {
    for(let i = num; i>=1; i--){
        console.log(i)
    }
}

console.log(countNumbers2(10))
//-----------------------------------------------------------------------------------------------
//4.-Factorial de un número: Escribe un programa que calcule el factorial de un número ingresado por el usuario utilizando un bucle for. EL factorial de un número n se calcula multiplicando todos los números enteros positivos desde a hasta n

const factorialNumber = (num) => {
    let factorialNumber = 1;
    for(let i = 1; i<=num; i++){
        factorialNumber = factorialNumber * i;
    }
    return factorialNumber
}

console.log(factorialNumber(4))
//1*1=1
//1*2=2
//2*3=6
//6*4=24
//-------------------------------------------------------------------------------------------
//5.- Tabla de multiplicar: Escribe un programa que muestre la tabla de multiplicar de un número utilizando un bucle for. Debe mostrar las multiplicaciones de ese número del 1 al 10.

const multiplicacionNumber = (num) => {
    let result = 0
    for(let i = 1; i<=10; i++){ 
        result = num * i       
        console.log(`${num} x ${i} = ${result}`)
    }
}

console.log(multiplicacionNumber(2))

//6.- Suma de elementos de un arreglo: Dado un arreglo de números, escribe un programa que calcule la suma de todos los elementos utilizando un bucle for.

const sumaElements = (arr) => {
    //return arr.reduce((acc, cur) => acc + cur)
    let suma = 0
    for(let i = 0; i<arr.length; i++){
        suma = suma + arr[i]       
    }
    return suma
}

console.log(sumaElements([1,2,3,4,5]))

//7.-Invertir un arreglo: Escribe un programa que invierta un arreglo dado utilizando un bucle for
//Entrada:[1,2,3,4,5]
//Salida: [5,4,3,2,1]

const invertirArray = (arr) => {
    let length = arr.length //5
    for(let i = 0; i<length/2; i++){
        let position = arr[i]
        arr[i] = arr[length-1-i]
        arr[length-1-i] = position
    }
    return arr
}

console.log(invertirArray([1,2,3,4,5]))

//8.-Buscar un elemento en un arreglo: Crea un programa que busque un elemento en específico en un arreglo y muestre el elemento.

const elementArr = (arr, num) => {
    //return arr.find((item) => item === num)
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === num){
            return arr[i]
        }
    }
}

console.log(elementArr([1,2,3,4,20], 20))

//9.-Números primos: Escribe un programa que solicite al usuario un número y determine si es un número primo o no. Utiliza un bucle for para verificar si el número es divisible por algún otro número que no sea 1 ni el mismo.

const numeroPrimo = (num) => {
    if(num <=1)return false
    for(let i = 2; i<num; i++){
        if(num % i === 0)return false
    }
    return true
}

console.log(numeroPrimo(2))
console.log(numeroPrimo(7))
console.log(numeroPrimo(8))

//10.-Crear una función que reciba un array de números cómo parámetros, multiplicar cada número del array por 2, hacerlo con un bucle for.

const arrNumbers = (arr, num) => {
    let result = []
    for(let i = 0; i<arr.length; i++){
        let total = arr[i] * num
        result.push(total)
    }    
    return result
}

console.log(arrNumbers([1,2,3,4,5], 2))

//11.-Crear una función que reciba un array de número como parámetro, devolver un nuevo array con solo los números pares, utilizando un bucle for.

const numerosPares = (arr) => {
    let result = []
    for(let i = 0; i<arr.length; i++){
        if(arr[i] % 2 === 0){
            result.push(arr[i])            
        }
    }
    return result
}

console.log(numerosPares([1,2,3,4,5,6]))

//12.-Encontrar el número más grande : Encuentra el número más grande en un arreglo de números utilizando un bucle for

const maxNumbers = (arr) => {
    let result = []
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > result){
            result = arr[i]
        }
    }
    return result
}

console.log(maxNumbers([10,5,8,14,6,20]))

