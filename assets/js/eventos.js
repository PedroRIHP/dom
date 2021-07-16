
window.onload = function(){
    //lo que metas aqui se ejecuta cuando la pagina este cargada o al recargar la pagina
}

let nameInput = document.querySelector("#nameInput");

nameInput.addEventListener("keydown", function(event){ // eventos es lo que pasa, key up: al soltar la tecla, keydown: al presionar la letra
    console.log(nameInput.value)  // esto es lo que me llama los valores del input, console.log(parseInt(nameInput.value)) si le pongo parseint lo recupero como numeros
    /* console.log(event.target.value) */ // el evento tiene un target, y el target tiene un value

} );

let button = document.querySelector("#button");
button.addEventListener("click", event =>{
    let nameHeader = document.querySelector("#nameH")
    nameHeader.textContent = nameInput.value;
})

/* function cambiarnombre(){
    let nameHeader = document.querySelector("#nameH");
    nameHeader.textContent = nameInput.value;
}
 */