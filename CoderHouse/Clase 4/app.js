/*Funciones*/

let calculoIva = precio => precio * 1.21

function tomarDatos() {
    let precio = Number(prompt("Ingrese el valor del producto del que desea calcular el IVA"))

    console.log(calculoIva(precio));
}

tomarDatos();


// function saludar(texto) {
//     console.log(texto);
// }

// saludar("Hola Mundo")
// saludar("Hola que tal")
// saludar("Hola cmo andas")

// function imprimirPorConsola(){

//     let dato = prompt("Ingrese el dato a mostrar")
//     let resultado = dato + "----- Este dato viene por prompt"
//     console.log(resultado);
// }

// imprimirPorConsola();

// function suma(num1, num2) {
//     console.log(num1 + num2);
// }

// suma(Number(prompt("Ingrese el primer numero")), Number(prompt("Ingrese el segundo numero")))

// function validar(nombre){
//     let nombreTrabajado = nombre.toLowerCase();

//     if(nombreTrabajado == 'juan')
//     {
//         console.log("podes entrar");
//     }
//     else{
//         console.log("No podes entrar");
//     }
// }

// function entrarAlEdificio(){
//     let pregunta = prompt("Como te llamas?")
//     validar(pregunta)
// }

// entrarAlEdificio()

// //RETURN
// function tomarDatos(){
//     let nombre = prompt("Ingrese su nombre")
//     let apellido = prompt("Ingrese su apellido")
//     let edad = Number(prompt("Ingrese su edad"))

//     console.log(mostrarNombreCompleto(nombre, apellido, edad));
// }

// function mostrarNombreCompleto(nombre, apellido,edad){
//     let respuesta = `Tu nombre es ${nombre} ${apellido} y tenes ${edad}`
//     return respuesta;
// }

// tomarDatos();

// // Funcion Declarada
// const unaMultiplicacion = function(){
//     console.log("Hola Mundo");
// }

// unaMultiplicacion();

// //Funcion expresada
// let unaResta = (numero1, numero2) => {
//     return numero1 - numero2
// }
// console.log(unaResta(Number(prompt("Ingrese numero 1")), Number(prompt("Ingrese Numero 2"))));





