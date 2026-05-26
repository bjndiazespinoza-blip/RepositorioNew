const prompt = require("prompt-sync")();

console.log("ejercicio 1") // Un alumno desea saber cuál será su calificación final en una materia. Dicha calificación se compone de los siguientes porcentajes: 50% proyecto integrador, 30% nota técnica y 20% nota tareas.
let proyecto = Number(prompt("Ingresa la nota del proyecto integrador: "));
let tecnica = Number(prompt("Ingresa la nota técnica: "));
let tareas = Number(prompt("Ingresa la nota de tareas: "));

let calificacionFinal =
    (proyecto * 0.50) +
    (tecnica * 0.30) +
    (tareas * 0.20);

console.log("La calificación final es: " + calificacionFinal);

console.log("ejercicio 2") // Una tienda ofrece un descuento del 15% sobre el total de la compra y un cliente desea saber cuánto deberá pagar finalmente por su compra.
let totalCompra = Number(prompt("Ingresa el total de la compra: "));

let descuento = totalCompra * 0.15;
let totalPagar = totalCompra - descuento;

console.log("Descuento: " + descuento);
console.log("Total a pagar: " + totalPagar);

console.log("ejercicio 3") // Realizar un algoritmo que calcule la edad de una persona.
let anioNacimiento = Number(prompt("Ingresa tu año de nacimiento: "));
let anioActual = Number(prompt("Ingresa el año actual: "));

let edad = anioActual - anioNacimiento;

console.log("Tu edad es: " + edad + " años");