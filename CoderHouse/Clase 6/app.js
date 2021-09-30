/* Arrays */

/* let lista = ["Persona", "Mascota", 50, 1000, true, false, { nombre: "Facundo", apellido: "Duhalde" }, [1, 2]]

/* console.log(lista[0]);
console.log(lista[6].nombre);
console.log(lista[7][0]); */
/*
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
} 
*/

// Metodo push()
/* 
let ferreteria = ["Tornillos", "Madera", "Tarugos"]
let supermercado = ["Pera", "Manzana", "Banana", "Jamon", "Queso", "Cerveza", "Vino", "Agua", "Leche"]
console.log(supermercado);

supermercado.push("Mani")
console.log(supermercado);

supermercado.push("Pan")
console.log(supermercado);

supermercado.unshift("Tomate") //Agrega el elemento al inicio del array
console.log(supermercado);

supermercado[3] = "Panceta" //Modifica el elemento del indice 
console.log(supermercado);

supermercado.sort()
console.log(supermercado);

let listaCompras = supermercado.concat(ferreteria)
console.log(listaCompras);

let listaComprasReducida = listaCompras.slice(0,5)
console.log(listaComprasReducida);
 */
//let listadoProductos = [{}] //carrito de compas => array de objetos

class Producto {
    constructor(nombreProducto, precioProducto) {
        this.nombre = nombreProducto;
        this.precio = precioProducto;
        // this.categoria = categoriaProducto;
        // this.stock = stockProducto;
        // this.activo = activo;
    }
}

let listaProductos = [];

listaProductos.push(new Producto("Colchoneta 100x50", 1500))
listaProductos.push(new Producto("Colchoneta 100x60", 16000))
listaProductos.push(new Producto("Mancuerna 3 Kg", 17800))
listaProductos.push(new Producto("Mancuerna 5 Kg", 1800))
listaProductos.push(new Producto("SmartWatch", 1900))

const agregarProductosALista = () => {
    let nombre = prompt("Nombre del producto")
    let precio = Number(prompt("Precio del producto"))
    // let categoria = prompt("Categoria del producto")
    // let stock = Number(prompt("Stock del producto"))

    let product = new Producto(nombre,  precio)
    //let product = new Producto(nombre,  precio, stock)

    listaProductos.push(product)
}

listaProductos.sort((a, b) => {
    if(a.precio > b.precio){
        return 1
    }
    if (a.precio < b.precio){
        return -1
    }
    return 0
})
//console.log(listaProductos);


/*****************RECORRER ARRAYS*************************** */

/*
for (let i = 0; i < listaProductos.length; i++) {
    console.log(listaProductos[i]);
} 

//console.log(listaProductos);

//For of
for(const obj of listaProductos){
    console.log(obj.nombre);
}

let obje = {nombre:"tomate", precio:200}

//for in
for(const prop in obje){
    console.log(prop);
}

//for each



*/

listaProductos.forEach(obj => {
    console.log(obj.precio);
})

//let search = prompt("Buscar Producto")
//let buscadorUnico = listaProductos.find(obj => obj.nombre == search)
//console.log(buscadorUnico);  


let search = prompt("Buscar Producto")
let buscadorMultiple = listaProductos.filter(obj => obj.nombre == search)
console.log(buscadorMultiple.nombre);