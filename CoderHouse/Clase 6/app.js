/* Arrays */

class Producto {
    constructor(nombreProducto, precioProducto, categoriaProducto, stockProducto, activo) {
        this.nombre = nombreProducto;
        this.precio = precioProducto;
        this.categoria = categoriaProducto;
        this.stock = stockProducto;
        this.activo = activo;

    }

    calculoIva = precio => {
        let precioConIva = precio * 1.21
        return precioConIva
    }


}

let listaProductos = [];

listaProductos.push(new Producto("Colchoneta 100x50", 1500, "Colchonetas", 100, true))
listaProductos.push(new Producto("Colchoneta 100x60", 1600, "Colchonetas", 150, true))
listaProductos.push(new Producto("Mancuerna 3 Kg", 800, "Mancuernas", 50, true))
listaProductos.push(new Producto("Mancuerna 5 Kg", 950, "Mancuernas", 0, false))
listaProductos.push(new Producto("SmartWatch", 5000, "Relojes inteligentes", 30, true))

const agregarProductosALista = () => {
    let nombre = prompt("Nombre del producto a agregar")
    let precio = Number(prompt("Precio del producto a agregar"))
    let categoria = prompt("Categoria del producto a agregar")
    let stock = Number(prompt("Stock del producto a agregar"))

    let product = new Producto(nombre, precio, categoria, stock, true)

    listaProductos.push(product)
}

agregarProductosALista();


/*Orderna lista de mayor a menor precio*/
listaProductos.sort((a, b) => {
    if (a.precio > b.precio) {
        return -1
    }
    if (a.precio < b.precio) {
        return 1
    }
    return 0
})

for (let i = 0; i < listaProductos.length; i++) {
    console.log(`Producto Nº ${i + 1} : Nombre Producto: ` + listaProductos[i].nombre + ` - Categoria Producto:  ` + listaProductos[i].categoria + ` - Precio Producto: ` + listaProductos[i].precio + `- Precio con IVA: ` + listaProductos[i].calculoIva(listaProductos[i].precio));
}



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

/* listaProductos.forEach(obj => {
    console.log(obj.precio);
})

//let search = prompt("Buscar Producto")
//let buscadorUnico = listaProductos.find(obj => obj.nombre == search)
//console.log(buscadorUnico);


let search = prompt("Buscar Producto")
let buscadorMultiple = listaProductos.filter(obj => obj.nombre == search)
console.log(buscadorMultiple.nombre); */