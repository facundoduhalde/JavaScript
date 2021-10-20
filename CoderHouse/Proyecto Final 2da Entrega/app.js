/************SE AGREGAN TODOS LOS PRODUCTOS ALMACENADOS EN EL LOCAL STORAGE PREVIAMENTE GENERADOS EN EL BACKOFFICE************************************* */

const mostrarProductos = () =>{

    for (const prd of JSON.parse(localStorage.getItem("productos"))) {
        
        const divCard = document.createElement("div")
        divCard.className = "card"
        divCard.style = "width: 18rem"

        const divProducto = document.createElement("div")
        divProducto.className = "card-body"
        divCard.appendChild(divProducto)

        const nombreProducto = document.createElement("h5")
        nombreProducto.textContent = prd.nombre
        nombreProducto.className = "card-title"
        divCard.appendChild(nombreProducto)

        const categoriaProducto = document.createElement("p")
        categoriaProducto.textContent = prd.categoria
        categoriaProducto.className = "card-text"
        divCard.appendChild(categoriaProducto)
        
        const precioProducto = document.createElement("p")
        precioProducto.textContent = `Precio $` + prd.precio
        precioProducto.className = "card-text"
        divCard.appendChild(precioProducto)

        const precioIVAProducto = document.createElement("p")
        precioIVAProducto.textContent = `Precio con IVA $` + prd.precioIva
        precioIVAProducto.className = "card-text"
        divCard.appendChild(precioIVAProducto)
        

        const btnProducto = document.createElement("button")
        btnProducto.textContent = "Agregar al carrito"
        btnProducto.className = "btn btn-primary"
        divCard.appendChild(btnProducto)


        document.getElementById("listaProductos").appendChild(divCard)
    }
}

mostrarProductos()
