const prompt = require("prompt-sync")();

console.log("ejercicio 1") // Obtener la suma de dos números cualesquiera
let numero1 = Number(prompt("Ingresa el primer número: "));
let numero2 = Number(prompt("Ingresa el segundo número: "));

let suma = numero1 + numero2;

console.log("La suma es: " + suma);

console.log("ejercicio 2") // Obtener e imprimir el nombre y la edad de una persona
let nombre1 = prompt("Ingresa tu nombre: ");
let edad = Number(prompt("Ingresa tu edad: "));

console.log("Nombre: " + nombre1);
console.log("Edad: " + edad);

console.log("ejercicio 3") // Obtener e imprimir el nombre, dirección y estado civil de una persona
let nombre2 = prompt("Ingresa tu nombre: ");
let direccion = (prompt("Ingresa tu direccion: "));
let estadocivil = prompt("Ingresa tu estado civil: ")

console.log("Nombre: " + nombre2);
console.log("Direccion: " + direccion);
console.log("Estado Civil: " + estadocivil);

console.log("ejercicio 4") // Capturar el nombre y dos calificaciones de un alumno e imprimir el promedio de estas.
let nombre3 = prompt("Ingresa el nombre del alumno: ");

let calificacion1 = Number(prompt("Ingresa la primera calificación: "));
let calificacion2 = Number(prompt("Ingresa la segunda calificación: "));

let promedio = (calificacion1 + calificacion2) / 2;

console.log("Alumno: " + nombre3);
console.log("Promedio: " + promedio);

console.log("ejercicio 5") // Obtener la suma y el promedio de cinco calificaciones que de un alumno

let nombre4 = prompt("Ingresa el nombre del alumno: ");

let nota1 = Number(prompt("Ingresa la primera calificación: "));
let nota2 = Number(prompt("Ingresa la segunda calificación: "));
let nota3 = Number(prompt("Ingresa la tercera calificación: "));
let nota4 = Number(prompt("Ingresa la cuarta calificación: "));
let nota5 = Number(prompt("Ingresa la quinta calificación: "));

let suma1 = nota1 + nota2 + nota3 + nota4 + nota5;
let promedio1 = suma / 5;

console.log("Alumno: " + nombre4);
console.log("Suma de calificaciones: " + suma1);
console.log("Promedio: " + promedio1);

console.log("ejercicio 6") // Convertir dólares a pesos
let dolares = Number(prompt("Ingresa la cantidad de dólares: "));
let tipoCambio = Number(prompt("Ingresa el valor del dólar en pesos: "));

let pesos = dolares * tipoCambio;

console.log("La cantidad en pesos es: " + pesos);

console.log("ejercicio 7") // Obtener el descuento de un producto e imprimirlo.
let precio = Number(prompt("Ingresa el precio del producto: "));
let porcentajeDescuento = Number(prompt("Ingresa el porcentaje de descuento: "));

let descuento = (precio * porcentajeDescuento) / 100;
let precioFinal = precio - descuento;

console.log("Descuento: " + descuento);
console.log("Precio final: " + precioFinal);

console.log("ejercicio 8") // Imprimir el sueldo neto de un empleado considerando impuestos.
let sueldoBruto = Number(prompt("Ingresa el sueldo bruto: "));
let porcentajeImpuesto = Number(prompt("Ingresa el porcentaje de impuesto: "));

let impuesto = (sueldoBruto * porcentajeImpuesto) / 100;
let sueldoNeto = sueldoBruto - impuesto;

console.log("Impuesto: " + impuesto);
console.log("Sueldo neto: " + sueldoNeto);