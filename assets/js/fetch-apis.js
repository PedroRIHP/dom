
let button = document.querySelector("#button");
button.addEventListener("click", ()=>{
    let apiFetch = fetch("https://api.thecatapi.com/v1/images/search"); //aqui se hace la peticion del fetch
    
    apiFetch //se le pide que al hacer enlace haga lo siguiente
    .then(resp => resp.json())// le pedimos que transforme la peticion en json
    .then(data => { //se activa el siguiente efecto
        let cat = document.querySelector("#cat"); // linkeamos la variable cat al objeto img dentro de nuesto html con id= cat
        cat.src = data[0].url; // nosotros notamos que en nuesto objeto Json sacado de la appi, nos da un arreglo que en la entrada [0] tiene la URL de la imagen por eso hacemos el [0].url y justo eso se lo metimos como relleno a nuestra img en el documento html, en la entrada src=" aqui le metimos el [0].url"
        console.log(data);
    }).catch(e => console.log(e))
})
