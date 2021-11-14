window.addEventListener('DOMContentLoaded', (event) => {
    
    const botonesProducto = document.querySelectorAll('.btnComprar')
    botonesProducto.forEach(btns => {
        btns.addEventListener("click", agregarItemAlCarrito)

    })

    const btnFinalizarCompra = document.querySelector('.btn-success')
    btnFinalizarCompra.addEventListener("click", finalizarCompra)

});

let carrito = []
const bodyCarrito = document.querySelector('.tbodyCarrito')


function agregarItemAlCarrito(e) {
    const button = e.target
    const item = button.closest('.card')
    const nombreProductoCarrito = item.querySelector('.card-title').textContent;
    const precioProductoCarrito = item.querySelector('#valorPrecioProducto').textContent;
    const cantidadProductoCarrito = item.querySelector('#cantidad').value;

    const newProducto = {
        nombre: nombreProductoCarrito,
        precio: precioProductoCarrito,
        cantidad: cantidadProductoCarrito,
        precioFinal: parseInt(precioProductoCarrito) * cantidadProductoCarrito
    }

    //console.log(newProducto);

    agregarAlCarrito(newProducto);
}

function agregarAlCarrito(newProducto) {

    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].nombre.trim() === newProducto.nombre.trim()) {
            calculaTotalCarrito()
            return null;
        }
    }

    carrito.push(newProducto);
    addLocalStorage()
    renderCarrito()
}

function renderCarrito() {

    bodyCarrito.innerHTML = '';
    carrito.map(item => {
        const tr = document.createElement('tr')
        tr.classList.add("productoCarrito")

        const Content = `    
        
        
        <td class="table__productos">
          <p class="title">${item.nombre}</p>
        </td>
        <td class="table__price"><p>${item.precio}</p></td>
        <td class="table__cantidad"><p>${item.cantidad}</p></td>
        <td class="table__price"><p>${item.precioFinal}</p></td>

`

        tr.innerHTML = Content;
        bodyCarrito.append(tr)
        bodyCarrito.focus()

        calculaTotalCarrito()

    })



}

function calculaTotalCarrito() {
    let Total = 0;
    const itemCartTotal = document.querySelector('.itemCartTotal')
    carrito.forEach((item) => {
        const precio = item.precioFinal
        Total = Total + precio
    })

    itemCartTotal.innerHTML = `Total $${Total}`
    
    document.getElementById('listaCarrito').scrollIntoView();
}

function addLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

 window.onload = function () {
    const storage = JSON.parse(localStorage.getItem('carrito'));
    if (storage) {
        carrito = storage;
        renderCarrito()
    }
} 

function finalizarCompra ( ){
    swal({
        title: "Exito",
        text: "Muchas gracias por tu compra!",
        icon: "success",
    }); 

    localStorage.removeItem("carrito")
    let botonesCantidad = document.querySelectorAll('#cantidad')
    botonesCantidad.forEach(btns => {
        btns.value = ""

    })
    carrito = []
    renderCarrito()
    calculaTotalCarrito()
}