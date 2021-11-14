/*****************************DESDE EL BACKOFFICE SE GENERAN LOS PRODUCTOS Y SE ALMACENAN EL EL LOCAL STORAGE AGREGANDOLOS AL DOM DEL INDEX************************************************************** */
/*DECLARACION CLASE PRODUCTOS*/
class Producto {
    constructor({ idProducto, nombreProducto, stockProducto, precioProducto, precioConIvaProducto, categoriaProducto, imgProducto }) {
        this.id = idProducto;
        this.nombre = nombreProducto;
        this.categoria = categoriaProducto;
        this.precio = precioProducto;
        this.precioIva = precioConIvaProducto;
        this.stock = stockProducto;
        this.imagen = imgProducto
    }
}

const urlApi = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"

/*DECLARACION ARRAY PRODUCTOS*/
const listaProductos = [];

const getNextId = () => {
    let id = 1;
    for (const prd of JSON.parse(localStorage.getItem("productos"))) {
        ++id
    }
    document.getElementById("id").value = id
}

getNextId()




/*FUNCION PARA TOMAR EL CAMPO PRECIO, CALCULAR EL IVA Y ACTUALIZAR EL CAMPO PRECIO IVA EN EL EVENTO CHANGE*/
var inputPrecio = document.getElementById("precio");
let divPrecioEnDolares = $(".divPrecioDolares")

inputPrecio.addEventListener("change", () => {
    calculoIva(document.getElementById("precio").value)
    calculaPrecioEnDolares()
})

const calculoIva = precio => {
    if (precio != null || precio != 0) {
        let precioConIva = precio * 1.21
        document.getElementById("precioIva").value = precioConIva
    }
}


/*FUNCION PARA AGREGAR EL PRODUCTO INGRESADO EN EL FORM, PUSHEARLO AL ARRAY Y AGREGARLO AL LOCAL STORAGE*/
const botonAgregar = document.getElementById("btnCrearProducto")

botonAgregar.addEventListener("click", (e) => {
    e.preventDefault()
    guardarDatos()
})

const guardarDatos = () => {
    const producto = new Producto({
        idProducto: id.value,
        nombreProducto: document.getElementById("nombre").value,
        categoriaProducto: document.getElementById("categoria").value,
        precioProducto: document.getElementById("precio").value,
        precioConIvaProducto: document.getElementById("precioIva").value,
        stockProducto: document.getElementById("stock").value,
        imgProducto: "./img/newItem.jpg"
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
        swal({
            text: "El producto se ha creado con exito!",
            icon: "success",
        });
        document.getElementById("formProductos").reset()
        divPrecioEnDolares.empty()
        getNextId()
    }
    else {
        swal({
            title: "Error!",
            text: "Con el fin de crear un producto, TODOS los campos deben estar completos",
            icon: "error",
        });
        return
    }
}

/*VALIDACION DE UN UNICO USUARIO PARA MOSTRAR EL FORMULARIO DE ALTA DE PRODUCTOS */
const botonLogin = document.getElementById("btnLogin")

botonLogin.addEventListener("click", (e) => {
    e.preventDefault()
    validarUsuario()
})

let intentosLogin = 3;
document.getElementById('Productos').hidden = true

function validarUsuario() {
    //debugger
    var username = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    //USUARIO ADMIN CLAVE ADMIN *************************************************************
    if (username == "admin" && password == "admin") {
        swal({
            title: "Bienvenido " + username,
            text: "Te has logueado con exito!",
            icon: "success",
        });
        document.getElementById('login').hidden = true
        document.getElementById('Productos').hidden = false
    }
    else {
        intentosLogin--;
        swal({
            title: "Error!",
            text: `Los datos ingresados no son válidos. Intentos restantes: ` + intentosLogin,
            icon: "error",
        });
        if (intentosLogin == 0) {
            document.getElementById("user").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("btnLogin").disabled = true;
        }
    }
}

/*LLAMADO A LA FUNCION DE VALIDACION DE USUARIO CUANDO DE PRESIONA EL ENTER EN EL CAMPO DE CONTRASEÑA*/
var inputPassword = document.getElementById("password");

inputPassword.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btnLogin").click();
    }
});

let calculaPrecioEnDolares = () => {
    divPrecioEnDolares.empty()
    divPrecioEnDolares.fadeIn(1500)

    $.get(urlApi, (data, estado) => {
        if (estado == "success") {
            data.forEach(element => {
                if (element.casa.nombre === "Dolar Oficial") {
                    let precioADolarOficial = parseInt(document.getElementById("precio").value) / parseInt(element.casa.venta)
                    divPrecioEnDolares.append(`<p class="dolarOficial">Precio en Dolar Oficial: US$ ` + precioADolarOficial.toFixed(2) + ` - Referencia: ` + element.casa.venta + `</p>`)
                } else if (element.casa.nombre === "Dolar Blue") {
                    let precioADolarBlue = parseInt(document.getElementById("precio").value) / parseInt(element.casa.venta)
                    divPrecioEnDolares.append(`<p class="dolarBlue">Precio en Dolar Blue: US$ ` + precioADolarBlue.toFixed(2) + ` - Referencia: ` + element.casa.venta + `</p>`)
                }
            });
        }
    })
}


