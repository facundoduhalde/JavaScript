// Objetos

class Productos {
    constructor(nombreProducto, categoriaProducto, precioProducto, stockProducto, activo) {
        this.nombre = nombreProducto,
        this.categoria = categoriaProducto,
        this.precio = precioProducto,
        this.stock = stockProducto
        this.activo = activo
    }


    calculoIva = precio => {
        let precioConIva = precio * 1.21
        return precioConIva
    }

    comprar = cantidad => {
        if (this.stock <= 0) {
            console.log("No hay suficiente stock del articulo que desea comprar");
            this.activo = false;
        }
        else {
            this.stock = this.stock - cantidad
            console.log(`Compraste un ${this.nombre} y te salio ${this.precio}`);
        }
    }




}

let nombre = prompt("Ingrese el nombre del producto")
let precio = Number(prompt("Ingrese el precio del producto"))
let categoria = prompt("Ingrese la categoria del producto")
let stock = Number(prompt("Ingrese el stock del producto"))

let product = new Productos(nombre, categoria, precio, stock, true)

console.log(`Se ha creado el articulo correctamente, el precio del articulo con IVA incluido es de $ ${product.calculoIva(product.precio)}`);


// Objeto literal

/* let persona = {
    nombre: "Facundo",
    apellido: "Duhalde",Colc
    edad: 33,
    lenguajeFavorito: {
        nombre: "JS",
        version: "ecma6+"
    },
    casaPropia: true
}

persona.lenguajeFavorito.nombre = "C#"

console.log(persona);
//console.log(persona["nombre"]); // No mejores practicas
console.log(persona.nombre); // Mejores practicas
console.log(persona.lenguajeFavorito.nombre); // Mejores practicas
 */

/* Funciones constructoras */

/* function Personas(nombre, apellido, edad, lf) {
    this.nombre = nombre,
        this.apellido = apellido,
        this.edad = edad,
        this.lf = lf
}

Personas.prototype.hablar = function() { 
    console.log(`Hola, estoy hablando, mi nombre es ${this.nombre} `);
}

let nombre = prompt("Ingrese el nombre de la persona")
let apellido = prompt("Ingrese el apellido de la persona")
let edad = prompt("Ingrese la edad de la persona")
let lf = prompt("Ingrese el lenguaje de programacion preferido de la persona")


const persona = new Personas(nombre, apellido, edad, lf)

console.log(persona.apellido);
console.log(persona.hablar()); */

/* class Personas {
    constructor(nombre, apellido, edad, lf,experiencia) {
        this.nombre = nombre,
            this.apellido = apellido,
            this.edad = edad,
            this.lf = lf;
            this.experiencia = experiencia
    }
    hablar() {
        console.log(`Hola, estoy hablando, mi nombre es ${this.nombre} `);
    }
    caminar() {
        console.log(`Hoy camine ${this.edad * 10} metros`);
    }
    entrenar(time){
        let tiempo = time * 10
        this.experiencia = this.experiencia + tiempo
        console.log("Ganaste " + tiempo + " experiencia");
    }
}

let persona1 = new Personas("Facundo", "Duhalde", 33, "JS", 0)

persona1.hablar()
persona1.caminar()
persona1.entrenar(60)
 */

// Ecommerce
/* 
class Productos {
    constructor(nombreProducto, categoriaProducto, precioProducto, stockProducto, activo) {
        this.nombre = nombreProducto,
        this.categoria = categoriaProducto,
        this.precio = precioProducto,
        this.stock = stockProducto,
        this.activo = activo
    }

    comprar(cantidad) {
        if (this.stock <= 0) {
            console.log("No hay suficiente stock del articulo que desea comprar");
            this.activo = false;
        }
        else {
            this.stock = this.stock - cantidad
            console.log(`Compraste un ${this.nombre} y te salio ${this.precio}`);
        }
    }


}

const producto1 = new Productos("Colchoneta 1*50*5", "Colchonetas", 800, 100, true)
const producto2 = new Productos("Colchoneta 1*90*5", "Colchonetas", 1000, 50, true)

console.log(producto1);
console.log(producto2); */