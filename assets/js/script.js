/* 
document.getElementsByClassName("parrafo")[0].innerHTML = "hola soy un texto diferente" ; 
var parrafos = document.getElementsByClassName("parrafo")
console.log(parrafos)

document.getElementsByClassName("parrafo")[0].innerHTML = "hola soy un texto diferente" ;

document.getElementsById("parrafo2").innerHTML = "soy el parrafo 2" 
*/

/* este codigo afecta al primer elemnto de esa clase */
document.querySelector(".parrafo").textContent = "nuevo texto de parrafo" ;
/* este elemento afecta a todos los elementos de esa clase */
/* document.querySelectorall(".parrafo")[0].textContent = "nuevo texto de parrafo" ;
 */document.querySelector("#parrafo2").textContent = "nuevo texto de parrafo" ;

var parrafo1 = document.querySelectorAll(".parrafo")[0];

var parrafo2 = document.querySelector("#parrafo2");


console.log(document.head);
console.log(document.body);
console.log(document);
console.log(parrafo1);
console.log(parrafo2)