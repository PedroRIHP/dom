let button = document.querySelector("#calcular");

button.addEventListener("click", ()=>{
    var datos = document.querySelector("#temperatura").Value;
    let celcius = parseFloat(datos)
    // 0 °C + 273.15 = 273.15 K 
    let kelvin = celcius + 273.15
    // (0 °C × 9/5) + 32 = 32 °F 
    let fahre = (celcius * (9/5)) + 32 
    
    console.log(fahre)

});

