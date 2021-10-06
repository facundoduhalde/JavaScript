class Residente {
    constructor({ nombre,
        piso,
        departamento
    }) {
        this.nombre = nombre;
        this.piso = piso;
        this.departamento = departamento;
    }
}

const listaResidentes = [];

const archivarResidente = () => {
    let nombre = prompt("Ingrese su nombre")
    let piso = Number(prompt("Ingrese su piso"))
    let departamento = prompt("Ingrese su departamento")

    const residente = new Residente({
        nombre: nombre,
        piso: piso,
        departamento: departamento,
    })


    if (localStorage.getItem("residentes") == null) {
        listaResidentes.push(residente)
        localStorage.setItem("residentes", JSON.stringify(listaResidentes))
    }
    else {
        const newLista = JSON.parse(localStorage.getItem("residentes"))
        newLista.push(residente)
        localStorage.setItem("residentes", JSON.stringify(newLista))
    }
}

const mostrarResidentes = () => {
    if (localStorage.getItem("residentes") == null) {
        console.log("No hay residentes registrados");
    }
    else {
        const dato = JSON.parse(localStorage.getItem("residentes"))
        console.log(dato);
    }
}