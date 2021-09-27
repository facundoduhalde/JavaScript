/*Funciones*/

let calculoIva = precio => precio * 1.21
let precioConIva = 0;
let cantidadCuotas = 0;
let precioEnCuotas = 0;

function tomarDatos() {
    let precio = Number(prompt("Ingrese el valor del producto del que desea calcular el IVA"))
    precioConIva = calculoIva(precio);
    console.log(`El precio con IVA del producto ingresado es de $ ` + precioConIva);
    calculoCuotas(precioConIva)
}

function calculoCuotas(precioConIva) {
    cantidadCuotas = Number(prompt("Ingrese la cantidad de cuotas con las que desea abonar el producto (3, 6, 12 o 18 cuotas)"))

    switch (cantidadCuotas) {
       case 3: 
            precioEnCuotas = precioConIva / 3
            break;
        case 6:
            precioEnCuotas = precioConIva / 6
            break;
        case 12:
            precioEnCuotas = precioConIva / 12
            break;
        case 18:
            precioEnCuotas = precioConIva / 18
            break;
        default:
            console.log("Solo puede seleccionar 3, 6, 12 o 18 cuotas")
            cantidadCuotas = 1;
            precioEnCuotas = precioConIva;
            break;
    }
    console.log(`Se abonara el producto en ${cantidadCuotas} cuotas de $ ${precioEnCuotas} c/u`);

}

tomarDatos();
