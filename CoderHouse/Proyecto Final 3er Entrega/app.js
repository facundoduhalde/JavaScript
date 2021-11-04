if (localStorage.getItem("productos") == null) {
    localStorage.setItem("productos", JSON.stringify([{"id":1,"nombre":"Colchoneta 100*5*5","categoria":"Colchonetas","precio":1000,"precioIva":1210,"stock":50,"imagen":"./img/1.png"}, {"id":2,"nombre":"Core Bag 10 Kg Fitness","categoria":"Peso","precio":2700,"precioIva":3267,"stock":10,"imagen":"./img/2.jpg"}, {"id":3,"nombre":"Tobilleras Reforzadas + Rueda Abdominal","categoria":"Combos","precio":1109,"precioIva":1341.89,"stock":10,"imagen":"./img/combo1.jpg"}]))
} 

/************SE AGREGAN TODOS LOS PRODUCTOS ALMACENADOS EN EL LOCAL STORAGE PREVIAMENTE GENERADOS EN EL BACKOFFICE************************************* */

const mostrarProductos = () => {
    if (localStorage.getItem("productos") != null) {
        for (const prd of JSON.parse(localStorage.getItem("productos"))) {

            let divProductos = $("#listaProductos");
            divProductos.append(`<div class="card card` + prd.id + `">
                                <h5 class="card-title" id="prd` + prd.id + `">` + prd.nombre + `</h5>
                                <img src="` + prd.imagen + `" class="card-img-top" alt="`+ prd.nombre + `">
                                <p class="card-text">`+ prd.categoria + `</p>
                                <p class="card-text">Precio: $`+ prd.precio + `</p>
                                <p class="card-text">Precio con IVA: $`+ prd.precioIva + `</p>
                                <input type="number" class="form-control" id="cantidad" placeholder="Cantidad"><br>
                                <button class="btn btn-primary" id="btnComprarProd` + prd.id + `">Comprar</button>
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


const boton = $(".btn")

boton.on("click", (e) => {
    e.preventDefault()
    swal({
        title: "Exito",
        text: "Muchas gracias por tu compra!",
        icon: "success",
    });
})

/* async function getAllProducts(){
    const response = await fetch('./json/productos.json');
    return response.json()
}
localStorage.setItem()
renderProductsSection(products);
getLocalStorage();
 */