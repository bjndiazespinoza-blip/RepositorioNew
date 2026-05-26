/*
const prompt = require("prompt-sync")();

let nombre = prompt("Cual es tu Nombre? ")
let edad = prompt("Cual es tu Edad? ")
let comuna = prompt("Donde Vives? ")
console.log(`hola mi rey, mi nombre es <nombre>, tengo ${edad} anos y soy de ${comuna}.`)
*/

const prompt = require("prompt-sync")();

let nombre = prompt("Cual es tu Nombre?= ")
let trabajo = prompt("Cual es tu trabajo?= ")
let adjetivo = prompt("Cual es tu adjetivo?= ")
let adjetivo2 = prompt("<Cual es tu segundo adjetivo?>= ")
let comida = prompt("<Cual es tu comida?>= ")
let comida2 = prompt("<Cual es tu segunda comida?>= ")
let sentimiento = prompt("Como te sientes?= ")

console.log(
    `${nombre} comenzó hoy su primer curso de Generación.
    Se está capacitando como ${trabajo}.
    Encontró que su grupo era muy ${adjetivo},
    pero su profesor era, al menos, ${adjetivo2}.

    Para almorzar comió ${comida} y ${comida2}
    mientras repasaba sus apuntes.

    Tiene ${sentimiento}, pero está decidido a completar el curso.`);
