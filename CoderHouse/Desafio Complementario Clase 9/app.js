class Producto {
    constructor({ nombreProducto, stockProducto, precioProducto, precioConIvaProducto, categoriaProducto }) {
        this.nombre = nombreProducto;
        this.categoria = categoriaProducto;
        this.precio = precioProducto;
        this.precioIva = precioConIvaProducto;
        this.stock = stockProducto;
    }
}

const listaProductos = [];
const botonAgregar = document.getElementById("btnAgregarArticulo")
const botonMostrarTodos = document.getElementById("btnMostrarArticulos")

const guardarDatos = () => {
    const producto = new Producto({
        nombreProducto: document.getElementById("nombre").value,
        categoriaProducto: document.getElementById("categoria").value,
        precioProducto: document.getElementById("precio").value,
        precioConIvaProducto: document.getElementById("precioIVA").value,
        stockProducto: document.getElementById("stock").value
    })
    if (document.getElementById("nombre").value != "" && document.getElementById("categoria").value != "" && document.getElementById("precio").value != "" && document.getElementById("stock").value != "") {
        if (localStorage.getItem("productos") == null) {
            listaProductos.push(producto)
            localStorage.setItem("productos", JSON.stringify(listaProductos))
        }
        else {
            const newListaProductos = JSON.parse(localStorage.getItem("productos"))
            newListaProductos.push(producto)
            localStorage.setItem("productos", JSON.stringify(newListaProductos))
        }
        alert("El articulo se ha creado con exito")
        document.getElementById("formProductos").reset()
        const prds = JSON.parse(localStorage.getItem("productos"))
        return prds;
    }
    else{
        alert("Con el fin de crear un producto, TODOS los campos deben estar completos")
        return
    }
}

const calculoIva = precio => {
    if (precio != null || precio != 0) {
        let precioConIva = precio * 1.21
        document.getElementById("precioIVA").value = precioConIva
    }
}



botonAgregar.addEventListener("click", (e) => {
    e.preventDefault()
    guardarDatos()
})

botonMostrarTodos.addEventListener("click", (e) => {
    e.preventDefault()

    document.getElementById("aca").innerHTML = ""

    for (const prd of JSON.parse(localStorage.getItem("productos"))) {
        const divProducto = document.createElement("div")

        const nombreProducto = document.createElement("h2")
        nombreProducto.textContent = `Nombre producto: ` + prd.nombre
        divProducto.appendChild(nombreProducto)

        const categoriaProducto = document.createElement("p")
        categoriaProducto.textContent = `Categoria producto: ` + prd.categoria
        divProducto.appendChild(categoriaProducto)

        const precioProducto = document.createElement("p")
        precioProducto.textContent = `Precio producto: $` + prd.precio
        divProducto.appendChild(precioProducto)

        const precioConIVAProducto = document.createElement("p")
        precioConIVAProducto.textContent = `Precio producto con IVA: $` + prd.precioIva
        divProducto.appendChild(precioConIVAProducto)

        const stockProducto = document.createElement("p")
        stockProducto.textContent = `Stock producto: ` + prd.stock
        divProducto.appendChild(stockProducto)

        document.getElementById("aca").appendChild(divProducto)
    }
})

var input = document.getElementById("nombre");

input.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btnAgregarArticulo").click();
    }
});

var inputPrecio = document.getElementById("precio");

inputPrecio.addEventListener("change", () => {
    calculoIva(document.getElementById("precio").value)
})


/* const divProducto = document.createElement("div")

const nombreProducto = document.createElement("h2")
nombreProducto.textContent = `Nombre producto: ` + producto.nombre
divProducto.appendChild(nombreProducto)

const categoriaProducto = document.createElement("p")
categoriaProducto.textContent = `Categoria producto: ` + producto.categoria
divProducto.appendChild(categoriaProducto)

const precioProducto = document.createElement("p")
precioProducto.textContent = `Precio producto: $` + producto.precio
divProducto.appendChild(precioProducto)

const stockProducto = document.createElement("p")
stockProducto.textContent = `Stock producto: ` + producto.stock
divProducto.appendChild(stockProducto)

document.getElementById("aca").appendChild(divProducto)
 */


/* const parrafo = document.getElementById("parrafo")
//const parrafo = document.querySelector("#parrafo")

const boton = document.getElementById("btn")

const escribir = () => {
    let texto = prompt("Que queres escribir?")
    parrafo.textContent = texto
}
 */
// Primera forma de escuchar el evento
//SELECTOR -> METODO(EVENTO, FUNCION) -> 

//boton.addEventListener("click", escribir)
//const evento = "click"

/* boton.addEventListener("click", () => {
    console.log(input.value);
})  */

/* boton.addEventListener("mousemove", () => {
    console.log("a");
}) */

/* boton.addEventListener("mouseout", () => {
    console.log("a");
}) */
/*
boton.addEventListener("mousemove", () => {
    console.log("a");
}) */

/* boton.addEventListener(evento, () => {
    escribir()
})  */

//Segunda forma de escuchar un evento resumida
/* boton.onclick = () => {
    escribir()
} */
/*
boton.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(input.value);
})

boton.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(input.value);
})



//EVENTOS DE TECLADO

const input = document.getElementById("texto")
input.addEventListener("change", () => {
    console.log("cambio el valor del text");
})

//input.addEventListener("keypress", () => {})
*/










