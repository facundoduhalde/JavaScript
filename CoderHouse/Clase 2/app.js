/* Desafio Clase 2 */

const nombreAlumno1 = "facundo"
const nombreAlumno2 = "denise"
const nombreAlumno3 = "ignacio"

let nombre = prompt("Ingrese el nombre del alumno").toLowerCase();

if (nombre === nombreAlumno1 || nombre === nombreAlumno2 || nombre === nombreAlumno3) {
    console.log(`Bienvenido ${nombre}`);
    let notaParcial1 = Number(prompt("Ingrese la nota del primer parcial"))
    let notaParcial2 = Number(prompt("Ingrese la nota del segundo parcial"))
    let notaParcial3 = Number(prompt("Ingrese la nota del tercer parcial"))

    let promedioParciales = ((notaParcial1 + notaParcial2 + notaParcial3) / 3)

    if (promedioParciales < 4) {
        console.log(`Has aplazado el cuatrimestre, tu promedio es ${promedioParciales}`);
    }
    else if (promedioParciales >= 4) {
        console.log(`Felicitaciones ${nombre}, aprobaste el cuatrimestre, tu promedio es ${promedioParciales}`);
    }
    else{
        console.log("Ha ocurrido un error con los datos ingresados, proba nuevamente.");
    }
}
else {
    console.log(`El alumno ${nombre} no existe`);
}

//Buenas practicas --> Los datos en la base en minusculas
