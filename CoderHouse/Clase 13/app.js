
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
let divStock = $(".divStock");
let divBoton = $(".divBoton");

inputNombre.on("keypress", function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        $("#btnAgregarArticulo").trigger($("#btnAgregarArticulo").click())
    }
}); 
 
inputNombre.change(function(e){
    divCategoria.fadeIn("10000", function(){});
    inputCategoria.focus();
})

inputCategoria.change(function(e){
    divPrecio.fadeIn("10000", function(){});
    inputPrecio.focus();
})

inputPrecio.change(function(e){
    divPrecioConIva.fadeIn("10000", function(){});
    divStock.fadeIn("10000", function(){});
    var precioIva =  inputPrecio.val() * 1.21
    inputPrecioConIva.val(precioIva)
    
})

inputStock.change(function(e){
    divBoton.fadeIn("10000", function(){});
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
    divProductos.fadeIn("slow", function(){});
    divProductos.fadeOut("fast", function(){});
    divProductos.fadeIn("fast", function(){});
    divProductos.animate({
        left: '250px',
        height: '300px',
        width: '500px'
      });

      divNombre.fadeOut(500, function(){});
      divCategoria.fadeOut(600, function(){});
      divPrecio.fadeOut(700, function(){});
      divPrecioConIva.fadeOut(800, function(){});
      divStock.fadeOut(900, function(){});
      divBoton.fadeOut(1000, function(){});
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

/*     $("#btnAgregarArticulo").click(function(){
      var div = $("#aca");
      div.fadeIn( "5000", function() {
        // Animation complete
      });
    });
  
 */