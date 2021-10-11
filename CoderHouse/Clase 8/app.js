
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
/* console.log(document);
console.log(document.body);



//ENTRAR POR ID - getElementById
console.log(document.getElementById("unico"));

//ENTRAR POR CLASE - getElementsByClassName()
console.log(document.getElementsByClassName("clase1"))
// TRAR UN ARRAY DE OBJETOS HTML

//ENTRAR POR ETIQUETA
console.log(document.getElementsByTagName("p")[3]);
// TRAR UN ARRAY DE OBJETOS HTML

document.getElementsByTagName("p")[3].textContent = "Este es el nuevo texto"

//querySelector
/*
# id
. clase
etiqueta

console.log(document.querySelector("#unico"));
console.log(document.querySelector(".clase1"));
console.log(document.querySelector("p"));

console.log(document.querySelectorAll("p"));

document.getElementById("unico").textContent = "Este es el nuevo contenido"
//document.getElementById("unico").style.color = "red"

//document.getElementById("unico").style.display = "none"

document.getElementById("unico").setAttribute("class", "truco"); */



