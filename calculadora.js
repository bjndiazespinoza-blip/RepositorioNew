const prompt = require("prompt-sync")();

// Preguntar qué operación quiere hacer el usuario
let o = prompt("suma, resta, multiplicacion o division");
let a = +prompt("Número 1");
let b = +prompt("Número 2");

if(o=="suma") console.log(a+b);
else if(o=="resta") console.log(a-b);
else if(o=="multiplicacion") console.log(a*b);
else if(o=="division") console.log(a/b);