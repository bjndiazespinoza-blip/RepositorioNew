const prompt = require("prompt-sync")();

console.log("Ejercicio 1: Crear un array")
const frutas = ["Manzana", "Pera", "Plátano", "Kiwi", "Uva"];
    console.log(frutas);

console.log("Ejercicio 2: Mostrar un elemento de un array")
const colores = ["Rojo", "Azul", "Verde", "Amarillo"];
    console.log("Primer Color: ", colores[0]);
    console.log("Ultimo Color: ", colores[colores.length - 1]);

console.log("Ejercicio 3: Contar elementos")
const animales = ["Perro", "Gato", "Conejo", "Tigre", "Elefante"];
    console.log("Cantidad de animales:", animales.length);

console.log("Ejercicio 4: Mostrar todos los elementos")
let numeros = [10, 20, 30, 40, 50];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

console.log("Ejercicio 5: Sumar números5")
let numeros = [2, 4, 6, 8];

let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
}

console.log("La suma es: " + suma);

Ejercicio 6: Contar mayores de edad

Ejercicio 7: Agregar elementos

Ejercicio 8: Eliminar el último elemento

Ejercicio 9: Buscar elemento

Ejercicio 10: Números pares

Ejercicio 11: Número mayor

Ejercicio 12: Promedio

Ejercicio 13: Contar letras

