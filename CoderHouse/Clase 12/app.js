
class Producto {
    constructor({ nombreProducto, stockProducto, precioProducto, precioConIva,categoriaProducto }) {
        this.nombre = nombreProducto;
        this.categoria = categoriaProducto;
        this.precio = precioProducto;
        this.precioIva = precioConIva
        this.stock = stockProducto;
    }
}

const listaProductos = [];

 const guardarDatos = () => {
    const producto = new Producto({   
        nombreProducto: $("#nombre").val(),
        categoriaProducto: $("#categoria").val(),
        precioProducto: $("#precio").val(),
        precioConIva: $("#precioIVA").val(),
        stockProducto: $("#stock").val()
    })

    $("#aca").append(`<h2>Nombre Producto: ` + producto.nombre + `</h2>`)
    $("#aca").append(`<p>Categoria: ` + producto.categoria + `</h2>`)
    $("#aca").append(`<p>Precio: $ ` + producto.precio + `</p>`)
    $("#aca").append(`<p>Precio con IVA: $ ` + producto.precioIva + `</p>`)
    $("#aca").append(`<p>Stock: ` + producto.stock + `</p>`)


     if (localStorage.getItem("productos") == null) {
        listaProductos.push(producto)
        localStorage.setItem("productos", JSON.stringify(listaProductos))
    }
    else {
        const newListaProductos = JSON.parse(localStorage.getItem("productos"))
        newListaProductos.push(producto)
        localStorage.setItem("productos", JSON.stringify(newListaProductos))
    }

    const prds = JSON.parse(localStorage.getItem("productos")) 
    return prds;
} 

const boton = $("#btnAgregarArticulo")

boton.on("click", (e) => {
    e.preventDefault()
    guardarDatos()
})

var input = $("#nombre");

input.on("keypress", function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        $("#btnAgregarArticulo").trigger($("#btnAgregarArticulo").click())
    }
}); 
 
let precio = $("#precio");
let precioConIva = $("#precioIVA")

$("#precio").change(function(e){
    var precioIva =  precio.val() * 1.21
    precioConIva.val(precioIva)
})

