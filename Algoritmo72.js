/*
Ejercicio 1: Crear un objeto
Enunciado: Crea un objeto llamado persona con propiedades nombre y edad.*/

const person = {
    name: "Nathy",
    age: 34,
}

console.log(person)

/*Ejercicio 2 : Acceder a propiedades de un objeto
Enunciado: Accede a las propiedades nombre y edad del objeto persona y muestra su valor.*/

console.log(person.name)

/*Ejercicio 3: Agregar una propiedad
Enunciado: Agrega una propiedad ciudad con valor 'Madrid' al objeto persona.*/

person.city = "Merida";
console.log(person)

/*Ejercicio 4: Modificar una propiedad
Enunciado: Modifica la propiedad edad del objeto persona para que tenga un valor de 35. */

const persona3 = {
    nombre: 'Elena',
    age: 28
  };

persona3.age = 35

console.log(persona3)

/*Ejercicio 5: Eliminar una propiedad
Enunciado: Elimina la propiedad ciudad del objeto persona.*/

const persona4 = {
    nombre: "David",
    edad: 50,
    ciudad: "Barcelona"
}

delete persona4.ciudad

console.log(persona4)

/*Ejercicio 6: Verificar si una propiedad existe
Enunciado: Verifica si la propiedad email existe en el objeto usuario y muestra "Sí" o "No" en función de si existe o no.*/

const user = {
    name : "Laura",
    age: 30
}

if("email" in user){
    console.log('La propiedad "email" si existe en el objeto.')
}else{
    console.log('La propiedad "email" no existe en el objeto.')
}

console.log(user)

/*Ejercicio 7: Iterar sobre las propiedades de un objeto
Enunciado: Itera sobre las propiedades del objeto coche e imprime el nombre de cada propiedad y su valor.*/

const auto = {
    marca: "Toyota",
    modelo:"Corolla",
    año: 2022
}

for (const key in auto) {
    console.log(`${key}: ${auto[key]}`);
  }

/*Ejercicio 8: Copiar un objeto
Enunciado: Crea un nuevo objeto llamado clon que sea una copia del objeto original.*/
  
  const original = {
      a: 1,
      b: 2
  };

const clon = Object.assign({}, original);
console.log(clon);

/*Ejercicio 9: Fusionar objetos
Enunciado: Fusiona los objetos obj1 y obj2 en un nuevo objeto llamado obj3.*/

const obj1 = {
    a: 1,
    b: 2
};
const obj2 = {
    b: 3,
    c: 4
};

const fusion = {...obj1, ...obj2}
console.log(fusion)

/*Ejercicio 10: Contar propiedades
Enunciado: Cuenta cuántas propiedades tiene el objeto producto y muestra el resultado.*/

const producto = {
    nombre: "Lapto",
    precio: 999,
    marca: "Deil"
}

const contarPropiedades = Object.keys(producto).length
console.log(contarPropiedades)



