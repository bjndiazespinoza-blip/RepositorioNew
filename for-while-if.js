const prompt = require("prompt-sync")();

/* 
console.log("ejercicios for")

// 1. Imprimir los números del 1 al 10 utilizando un bucle for

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2. Imprimir los números pares del 1 al 20 utilizando for e if

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 3. Tabla de multiplicar de un número ingresado por el usuario

let numero = parseInt(prompt("Ingresa un número: "));

for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${numero} = ${numero * i}`);
}

// 4. Suma de todos los elementos de una lista

let numeros = [5, 10, 15, 20];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

console.log("La suma es:", suma);

console.log("ejercicios while")

// 1. Contar hacia atrás desde 10 hasta 1

let contador = 10;

while (contador >= 1) {
    console.log(contador);
    contador--;
}

// 2. Sumar números hasta ingresar un número negativo

let suma = 0;
let numero = 0;

while (numero >= 0) {
    numero = parseInt(prompt("Ingresa un número: "));

    if (numero >= 0) {
        suma += numero;
    }
}

console.log("La suma total es:", suma);

// 3. Juego de adivinanza

let secreto = 7;
let intento = 0;

while (intento !== secreto) {
    intento = parseInt(prompt("Adivina el número secreto: "));

    if (intento === secreto) {
        console.log("¡Correcto! Adivinaste el número.");
    } else {
        console.log("Incorrecto, intenta nuevamente.");
    }
}

// 4. Calcular factorial de un número

let n = parseInt(prompt("Ingresa un número para calcular su factorial: "));
let factorial = 1;
let i = 1;

while (i <= n) {
    factorial *= i;
    i++;
}

console.log("El factorial es:", factorial); 

let limite = parseInt(prompt("Ingresa el límite de Fibonacci: "));

let a = 0;
let b = 1;

while (a <= limite) {
    console.log(a);

    let siguiente = a + b;
    a = b;
    b = siguiente;
}
*/
console.log("ejercicios if")

// 1. Determinar si un número es positivo o cero

let numero = parseInt(prompt("Ingresa un número: "));

if (numero > 0) {
    console.log("El número es positivo");
} else if (numero === 0) {
    console.log("El número es cero");
} else {
    console.log("El número es negativo");
}


// 2. Verificar si un número es par o impar

let numero2 = parseInt(prompt("Ingresa otro número: "));

if (numero2 % 2 === 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}


// 3. Determinar si un año es bisiesto

let año = parseInt(prompt("Ingresa un año: "));

if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
    console.log("El año es bisiesto");
} else {
    console.log("El año no es bisiesto");
}


// 4. Determinar cuál número es mayor

let num1 = parseInt(prompt("Ingresa el primer número: "));
let num2 = parseInt(prompt("Ingresa el segundo número: "));

if (num1 > num2) {
    console.log(num1 + " es mayor");
} else if (num2 > num1) {
    console.log(num2 + " es mayor");
} else {
    console.log("Ambos números son iguales");
} 