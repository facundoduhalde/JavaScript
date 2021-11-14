
class Producto {
    constructor({ nombreProducto, stockProducto, precioProducto, precioConIva, categoriaProducto }) {
        this.nombre = nombreProducto;
        this.categoria = categoriaProducto;
        this.precio = precioProducto;
        this.precioIva = precioConIva
        this.stock = stockProducto;
    }
}

const listaProductos = [];
const urlApi = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"

const boton = $("#btnAgregarArticulo")

boton.on("click", (e) => {
    e.preventDefault()
    guardarDatos()
})

let inputNombre = $("#nombre");
let inputCategoria = $("#categoria");
let inputPrecio = $("#precio");
let inputPrecioConIva = $("#precioIVA")
let inputStock = $("#stock")

let divNombre = $(".divNombre");
let divCategoria = $(".divCategoria");
let divPrecio = $(".divPrecio");
let divPrecioConIva = $(".divPrecioIva");
let divPrecioEnDolares = $(".divPrecioDolares")
let divStock = $(".divStock");
let divBoton = $(".divBoton");

inputNombre.on("keypress", function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        $("#btnAgregarArticulo").trigger($("#btnAgregarArticulo").click())
    }
});

inputNombre.change(function (e) {
    divCategoria.fadeIn(1500);
    inputCategoria.focus();
})

inputCategoria.change(function (e) {
    divPrecio.fadeIn(1500);
    inputPrecio.focus();
})

inputPrecio.change(function (e) {
    divPrecioConIva.fadeIn(1500);
    divStock.fadeIn(1500);
    var precioIva = inputPrecio.val() * 1.21
    inputPrecioConIva.val(precioIva)
    calculaPrecioEnDolares()
})

inputStock.change(function (e) {
    divBoton.fadeIn(1500);
})

const guardarDatos = () => {
    const producto = new Producto({
        nombreProducto: $("#nombre").val(),
        categoriaProducto: $("#categoria").val(),
        precioProducto: $("#precio").val(),
        precioConIva: $("#precioIVA").val(),
        stockProducto: $("#stock").val()
    })

    $("#aca").append(`<h1>Nuevo producto ingresado</h1>`)
    $("#aca").append(`<h2>Nombre Producto: ` + producto.nombre + `</h2>`)
    $("#aca").append(`<p>Categoria: ` + producto.categoria + `</h2>`)
    $("#aca").append(`<p>Precio: $ ` + producto.precio + `</p>`)
    $("#aca").append(`<p>Precio con IVA: $ ` + producto.precioIva + `</p>`)
    $("#aca").append(`<p>Stock: ` + producto.stock + `</p>`)

    let divProductos = $("#aca");
    divProductos.fadeIn("fast");
    divProductos.animate({
        left: '250px',
        height: '300px',
        width: '500px'
    });

    let divFormulario = $("#divForm");
    divFormulario.fadeOut(2000);

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

let calculaPrecioEnDolares = () => {
    divPrecioEnDolares.empty()
    divPrecioEnDolares.fadeIn(1500)

    $.get(urlApi, (data, estado) => {
        if (estado == "success") {
            data.forEach(element => {
                if (element.casa.nombre === "Dolar Oficial") {
                    let precioADolarOficial = parseInt(inputPrecio.val()) / parseInt(element.casa.venta)
                    divPrecioEnDolares.append(`<p class="dolarOficial">Precio en Dolar Oficial: US$ ` + precioADolarOficial.toFixed(2) + ` - Referencia: ` + element.casa.venta + `</p>`)
                } else if (element.casa.nombre === "Dolar Blue") {
                    let precioADolarBlue = parseInt(inputPrecio.val()) / parseInt(element.casa.venta)
                    divPrecioEnDolares.append(`<p class="dolarBlue">Precio en Dolar Blue: US$ ` + precioADolarBlue.toFixed(2) + ` - Referencia: ` + element.casa.venta + `</p>`)
                }
            });
        }
    })
}






