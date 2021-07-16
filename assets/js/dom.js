//se hace referencia al elemento dentro del HTML
//para seleccionar una clase se usa .
//para seleccionar un id usamos #
let subtitle = document.querySelector("#subtitle");
let subtitle = document.querySelector("#subtitle");
/* # id, . clase, nada etiqueta */

console.log(subtitle);
//con textcontent podemos acceder al valor del elemento HTML
//tambien podemos cambiar el valor asignado a un nuevo valor
console.log(subtitle.textContent);
/* subtitle.textContent = "subtitulo" */

subtitle.textContent = "nuevo valor";
//con el let subtitle = document.querySelector("#subtitle"); añadimos una clase al elemento

subtitle.classList.add("red");//añade clase

subtitle.classList.remove("red"); // remueve la clase

//crea un arreglo de animales
const animales = [ "perro", "gato", "mapache" , "pez", "leopardo", "raton", "zorro"];

const list = document.querySelector("#list");

//por el comando .push agrego u elemento a un  arreglo
animales.push ("elefante");
//forEach es un ciclo for que recorre todo el arreglo
//function() es una funcion vacia
animales.forEach(function(animal){
    let item = document.createElement("li");// document.createElement("li") me crea un elemento <li></li> dentro del documento
    item.textContent = animal ; // agrega un contenido al elemento ("li") que creamos recientemente en la linea de arriba
    list.appendChild(item); // crea un elemento hijo dentro del elemento <ul></ul> el elemento de lista es el !item que declaramos hace 2 lineas
});

/* appendChild(item); es poderosisimo */

animales.forEach(function(animal, index){
    let item = document.createElement("li");
    item.textContent = `${index + 1} ${animal}` ; 
    list.appendChild(item); 
});

