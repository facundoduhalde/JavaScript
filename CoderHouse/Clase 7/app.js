 /*Storage*/
/*
let mensaje = "Hola Mundo"

localStorage.setItem("mensaje", Mensaje);

console.log(mensaje); */

//console.log(localStorage.getItem("mensaje"));

//sessionStorage.setItem("temporal", 2021);

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }
}

let producto1 = new Producto("Colchoneta 100*50", 2000);
let producto2 = new Producto("Colchoneta 100*80", 3000);

//PASO DE OBJETO A JSON
console.log(JSON.stringify(producto2))
localStorage.setItem("producto2", JSON.stringify(producto2))

let dato = localStorage.getItem("producto2")
console.log(dato);

//PASO DE JSON A OBJETO

let dato2 = console.log(JSON.parse(dato));
console.log(dato2);

localStorage.setItem("producto", producto1)
console.log(localStorage.getItem("producto"))
