/*Ciclos e iteraciones*/
/* FOR */

let num = Number(prompt("Ingrese un numero"))

for (i = 1; i <= num; i++) {
   if (i % 2 == 0) {
       console.log(`El número ${i} es Par`)
   }
   else {
       console.log(`El número ${i} es Impar`)
   }
} 

///////*********************************** MAS EJEMPLOS ************************************************ *///////////

// for (i = 0; i <= 10; i++) {
//     console.log(`Número ${i}`);
// }

/* WHILE */
// let num = 0

// while(num < 10){
//     console.log(`Estoy dentro de un while ${num}`);
//     num++
// }

/* DO WHILE*/

// let num = 0;

// do{
//     console.log("Hola Mundo");
//     num++
// } while (num < 10)



// switch (Number(prompt("Ingrese un numero"))) {
//     case 3:
//         console.log("El numero ingresado es 3");
//         break
//     case 5:
//         console.log("El numero ingresado es 5");
//         break
//     case 7:
//         console.log("El numero ingresado es 7");
//         break
//     default:
//         console.log("El numero ingresado no es 3, 5 o 7");
//         break
// }

// let pass = 22405
// let dato = Number(prompt("Ingrese su contraseña"))
// let intentos = 5

// while (intentos > 0 && pass != dato) {
//     alert(`Constraseña incorrecta. Intente nuevamente. Te quedan ${intentos} intentos`);
//     dato = Number(prompt("Ingrese su contraseña"))
//     intentos--

//     if (intentos == 0) {
//         let validar = confirm("Desea cambiar la contraseña?")
//         let passOld = prompt("Ingresa tu contraseña anterior")
//         if (validar && passOld == pass)  {
//             pass = Number(prompt("Ingresa tu nueva contraseña"))
//         }
//     }
// }

    // if (i == 5)
    // {
    //     //continue //Salta la condicion pero continua el ciclo
    //     break
    // }
    // console.log(i);