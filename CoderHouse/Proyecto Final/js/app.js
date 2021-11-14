const URLJSON = "./json/productos.json"; //url de .json donde se almacenan los productos a mostrar


const agregarProductos = () => {
    $.ajax({
        method: "GET",
        url: URLJSON,
        success: (respuesta) => {
            for (let i = 1; i <= respuesta.length; i++) {
                if (localStorage.getItem("productos") == null || localStorage.getItem("productos") == undefined) {
                    localStorage.setItem("productos", JSON.stringify(respuesta))   
                }
            }
        },
    });
};



/************SE AGREGAN TODOS LOS PRODUCTOS ALMACENADOS EN EL LOCAL STORAGE PREVIAMENTE GENERADOS EN EL BACKOFFICE************************************* */

const mostrarProductos = () => {
    if (localStorage.getItem("productos") != null) {
        for (const prd of JSON.parse(localStorage.getItem("productos"))) {

            let divProductos = $("#listaProductos");
            divProductos.append(`<div class="card card` + prd.id + `">
                                <h5 class="card-title" id="prd` + prd.id + `">` + prd.nombre + `</h5>
                                <img src="` + prd.imagen + `" class="card-img-top" alt="` + prd.nombre + `">
                                Precio: $ <b><p class="card-text" id="valorPrecioProducto">`+ prd.precio + `</p></b><br>
                                <input type="number" min="1" class="form-control" id="cantidad" placeholder="Cantidad"><br>
                                <button class="btnComprar" data-id="` + prd.id + `" id="btnComprarProd` + prd.id + `">Agregar al carrito</button>
                                </div>
        `
            )
        }
    }
}


agregarProductos()
mostrarProductos()

/*********************************************************ANIMACIONES JQUERY************************************************************************ */

let divCard = $(".card")
divCard.animate({
    top: '-30px'
});

divCard.animate({
    top: '0px'
});

divCard.animate({
    top: '-30px'
});

divCard.animate({
    top: '0px'
});

let divCardNombreProducto = $(".card-title")
divCardNombreProducto.fadeOut(0)
divCardNombreProducto.fadeIn(1000)

let divCardParrafo = $(".card-text")
divCardParrafo.fadeOut(0)
divCardParrafo.fadeIn(2000)
