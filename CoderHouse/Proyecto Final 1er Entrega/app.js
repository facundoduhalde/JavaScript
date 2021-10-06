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
    let nombre = prompt("Ingrese el nombre del producto a agregar")
    let precio = Number(prompt("Ingrese el precio del producto a agregar"))
    let categoria = prompt("Ingrese la categoria del producto a agregar")
    let stock = Number(prompt("Ingrese el stock del producto a agregar"))

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

