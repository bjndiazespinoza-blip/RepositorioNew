const prompt = require("prompt-sync")();
/* 
console.log("ejercicio 1");
let persona1 = {
  nombre: "Benjamín",
  edad: 18,
  genero: "Masculino"
};
console.log(persona1);

console.log("ejercicio 2");
let persona2 = {
  nombre: "Benjamín",
  edad: 18,
  genero: "Masculino",

  mostrarInfo: function () {
    console.log("Nombre: " + this.nombre);
    console.log("Edad: " + this.edad);
    console.log("Género: " + this.genero);
  }
};
persona2.mostrarInfo();

console.log("ejercicio 3");

let libro1 = {
  titulo: "Harry Potter",
  autor: "J.K Rowling",
  año: 1997
}
console.log(libro1);

console.log("ejercicio 4");
let libro2 = {
  titulo: "Harry Potter",
  autor: "J.K Rowling",
  año: 1997,

  mostrarInfo: function () {
    console.log("titulo: " + this.titulo);
    console.log("autor: " + this.autor);
    console.log("año: " + this.año);
  }
};
libro2.mostrarInfo();

console.log("ejercicio 5");
let cuentabancaria1 = {
  titular: "Benjamin",
  saldo: 10000000
};
console.log(cuentabancaria1);

console.log("ejercicio 6");
let cuentaBancaria2 = {
  titular: "Benjamín",
  saldo: 100000,

  depositar: function () {
    let monto = Number(prompt("¿Cuánto dinero quieres depositar?"));

    this.saldo += monto;

    console.log("Depositaste: " + monto);
    console.log("Nuevo saldo: " + this.saldo);
  },

  retirar: function () {
    let monto = Number(prompt("¿Cuánto dinero quieres retirar?"));

    this.saldo -= monto;

    console.log("Retiraste: " + monto);
    console.log("Nuevo saldo: " + this.saldo);
  }
};

cuentaBancaria2.depositar();
cuentaBancaria2.retirar();

console.log("ejercicio 7");
let rectangulo1 = {
  largo: 10,
  ancho: 5,
}
console.log(rectangulo1);

console.log("ejercicio 8");
let rectangulo2 = {
  largo: 10,
  ancho: 5,

  calcularArea: function () {
    console.log("Area: " + (this.largo * this.ancho));
  }
}
rectangulo2.calcularArea();

console.log("ejercicio 9");
let circulo1 = {
  radio: 4
}
console.log(circulo1);
*/

console.log("ejercicio 10");
let circulo2 = {
  radio: 4,

  calcularArea: function () {
    let area = Math.PI * this.radio * this.radio;
    console.log("Área: " + area);
  }
};

circulo2.calcularArea();

/* console.log("ejercicio 11");
let estudiante1 = {
  nombre: "Benjamín",
  edad: 18,
  materias: ["Historia, Lenguaje"]
};
console.log(estudiante1);

console.log("ejercicio 12");
let estudiante2 = {
  nombre: "Benjamín",
  edad: 18,
  materias: [],

  agregarMateria: function () {
    let materia = prompt("Ingresa una materia:");

    this.materias.push(materia);

    console.log("Materias actuales:");
    console.log(this.materias);
  },

  eliminarMateria: function () {
    let materiaEliminar;
    let posicion;

    do {
      materiaEliminar = prompt("¿Qué materia quieres eliminar?");
      posicion = this.materias.indexOf(materiaEliminar);

      if (posicion === -1) {
        console.log("La materia no existe, intenta nuevamente");
      }

    } while (posicion === -1);

    this.materias.splice(posicion, 1);

    console.log("Materia eliminada");
    console.log(this.materias);
  }
};

estudiante2.agregarMateria();
estudiante2.agregarMateria();
estudiante2.eliminarMateria();

console.log("ejercicio 13");
let tiendaOnline1 = {
  nombre: "TecnoStore",
  productos: ["mouspad", "mouse", "Teclados"]
};
console.log(tiendaOnline1);

console.log("ejercicio 14");
let tiendaOnline2 = {
  nombre: "TechStore",
  productos: [],

  agregarProducto: function () {
    let producto = prompt("Ingresa un producto:");

    this.productos.push(producto);

    console.log("Productos actuales:");
    console.log(this.productos);
  },

  eliminarProducto: function () {
    let productoEliminar;
    let posicion;

    do {
      productoEliminar = prompt("¿Qué producto quieres eliminar?");
      posicion = this.productos.indexOf(productoEliminar);

      if (posicion === -1) {
        console.log("El producto no existe, intenta nuevamente");
      }

    } while (posicion === -1);

    this.productos.splice(posicion, 1);

    console.log("Producto eliminado");
    console.log(this.productos);
  }
};

tiendaOnline2.agregarProducto();
tiendaOnline2.agregarProducto();
tiendaOnline2.eliminarProducto();

console.log("ejercicio 15");
let playlist1 = {
  nombre: "Favoritas",
  canciones: ["continentales", "turista"]
};
console.log(playlist1);
;

console.log("ejercicio 16");
let playlist2 = {
  nombre: "Favoritas",
  canciones: [],

  agregarCancion: function () {
    let cancion = prompt("Ingresa una cancion:");

    this.canciones.push(cancion);

    console.log("Canciones actuales:");
    console.log(this.canciones);
  },

  eliminarCancion: function () {
    let cancionEliminar;
    let posicion;

    do {
      cancionEliminar = prompt("¿Qué cancion quieres eliminar?");
      posicion = this.canciones.indexOf(cancionEliminar);

      if (posicion === -1) {
        console.log("La cancion no existe, intenta nuevamente");
      }

    } while (posicion === -1);

    this.canciones.splice(posicion, 1);

    console.log("Cancion eliminado");
    console.log(this.canciones);
  }
};

playlist2.agregarCancion();
playlist2.agregarCancion();
playlist2.eliminarCancion();

console.log("ejercicio 17");
let o = prompt("suma, resta, multiplicacion o division");
let a = +prompt("Número 1");
let b = +prompt("Número 2");

if(o=="suma") console.log(a+b);
else if(o=="resta") console.log(a-b);
else if(o=="multiplicacion") console.log(a*b);
else if(o=="division") console.log(a/b);

console.log("ejercicio 18");
let equipoDeFutbol ={
  nombre_del_equipo: "nada",
  jugadores: ["jugador1", "jugador2", "jugador3"]
};
console.log(equipoDeFutbol); */




