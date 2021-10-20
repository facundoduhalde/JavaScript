//
//
//
//
console.log(document.getElementById("zoom")); 
console.log(document.getElementsByClassName("coder"));
console.log(document.getElementsByTagName("h1"));
/**************************************************************** */
console.log("*************************************************");
//JQUERY
console.log($("h1")); 
console.log($("#zoom")); 
console.log($(".coder")); 
console.log("*************************************************");

// document.getElementById("btn").addEventListener("click", () => {
//     console.log(document.getElementById("dato").value);
// })

/* const elemento = document.createElement("p")
elemento.textContent = "TEXTO DE CREATE ELEMENT"

document.getElementById("print").appendChild(elemento) */

/*
document.getElementById("print").innerHTML = `
<p>DESDE INNER HTML</p>
`
*/

$("#print").append(`
<p>DESDE APPEND CON JQ</p>
`)