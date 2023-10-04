/*11. Validación de objeto:

Enunciado: Crea una función que valide si un objeto tiene todas las propiedades requeridas.
Ejemplo de entrada y salida:
const persona = { nombre: "Juan", edad: 30, ciudad: "Madrid" };
const propiedadesRequeridas = ["nombre", "edad", "ciudad"];
const valido = validarObjeto(persona, propiedadesRequeridas);
console.log(valido); // Salida: true*/

const persona = { nombre: "Juan", edad: 30, ciudad: "Madrid" };
const propiedadesRequeridas = ("nombre", "edad", "ciudad")

const hasKey = persona.hasOwnProperty(propiedadesRequeridas);

console.log(hasKey)