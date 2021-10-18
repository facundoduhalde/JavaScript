
class Producto {
    constructor({ nombreProducto, stockProducto, precioProducto, categoriaProducto }) {
        this.nombre = nombreProducto;
        this.categoria = categoriaProducto;
        this.precio = precioProducto;
        this.stock = stockProducto;
    }
}


const listaProductos = [];


const guardarDatos = () => {
    const producto = new Producto({
        nombreProducto: document.getElementById("nombre").value,
        categoriaProducto: document.getElementById("categoria").value,
        precioProducto: document.getElementById("precio").value,
        stockProducto: document.getElementById("stock").value
    })

    const divProducto = document.createElement("div")

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

const calculoIva = precio => {
    if (precio != null || precio != 0) {
        let precioConIva = precio * 1.21
        document.getElementById("precioIVA").value = precioConIva
    }
}

const boton = document.getElementById("btnAgregarArticulo")

boton.addEventListener("click", (e) => {
    e.preventDefault()
    guardarDatos()
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










