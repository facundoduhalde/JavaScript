/************SE AGREGAN TODOS LOS PRODUCTOS ALMACENADOS EN EL LOCAL STORAGE PREVIAMENTE GENERADOS EN EL BACKOFFICE************************************* */

const mostrarProductos = () => {
    if (localStorage.getItem("productos") != null) {
        for (const prd of JSON.parse(localStorage.getItem("productos"))) {

            let divProductos = $("#listaProductos");
            divProductos.append(`<div class="card" style="width: 18rem;">
                                <div class="card-body"></div>
                                <h5 class="card-title">` + prd.nombre + `</h5>
                                <p class="card-text">`+ prd.categoria + `</p>
                                <p class="card-text">Precio: $`+ prd.precio + `</p>
                                <p class="card-text">Precio con IVA: $`+ prd.precioIva + `</p>
                                <button class="btn btn-primary">Agregar al carrito</button>
                                </div>
        `
            )
        }
    }
}

mostrarProductos()


/*********************************************************ANIMACIONES JQUERY************************************************************************ */

let divCard = $(".card")
divCard.animate({
    top: '-30px',
    height: '270px',
    width: '320px'
});

divCard.animate({
    top: '0px',
    right: '0px',
    height: '250px',
    width: '300px'
});

divCard.animate({
    top: '-30px',
    height: '270px',
    width: '320px'
});

divCard.animate({
    top: '0px',
    right: '0px',
    height: '250px',
    width: '300px'
});

let divCardNombreProducto = $(".card-title")
divCardNombreProducto.fadeOut(0)
divCardNombreProducto.fadeIn(1000)

let divCardParrafo = $(".card-text")
divCardParrafo.fadeOut(0)
divCardParrafo.fadeIn(2000)