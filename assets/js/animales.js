//boton de animales
let button2 = document.querySelector("#animal"); // declaramos la variable button2 que esta sociado al boton id= "animal"
button2.addEventListener("click", event =>{      // el buttton2 tiene un (escuchador de evento, el evento: es darle click al boton que esta asociado)
//Animales
const animales = ['perro', 'gato', 'mapache', 'pez', 'leopardo', 'raton', 'zorro', 'canguro', 'camaleon', 'conejo']; //esto es una variable arreglo que contiene muchos animales dentro
const list2=document.querySelector('#listA');      // delcaramos la variable list2, que esta asociada a la lista con id= "listA" es lo mismo de arriba solo que esta esta asociado a una Lista, en lugar de asociarse a un boton


animales.forEach(function(animales){ // una funcion que opera sobre nuestro arreglo llamado "animales"
    let item2 = document.createElement('li'); //una variable que dispara un evento locochon que como su nombre lo dice Crea!! elementos en mi HTML en este caso crea "<li></li>" elementos de una lista
    item2.textContent = animales;     // aqui le metemos contenido(relleno), a lo que recientemente se creo por nuestro evento, ya que antes estaban vacios y sin alma y ahora tienen relleno, en forma de texto proveniente del arreglo de animales
    list2.appendChild(item2);    // esto haace que lo que creamos sea un Hijo dentro de nuesta <ul></ul> , son estos los "li" <li>  "el paso anterior a este le metio animales aqui" </li>
});// este parentecirs cierra la funcion (animales)
}) // este cierra totalmente nuesto creador de Eventos este:"button2.addEventListener("click", event =>{"

//boton de personas
let button1 = document.querySelector("#person");
button1.addEventListener("click", event =>{
//Bootcamp
const personas = ['Andrea', 'Pedro', 'Ana', 'Yann', 'Felipe', 'Claudia', 'Rodrigo', 'Braulio', 'Jaquelin', 'Tamara'];
const list1=document.querySelector('#listP');

personas.forEach(function(person){ 
    let item1 = document.createElement('li');
    item1.textContent = person;     
    list1.appendChild(item1);
});
})


//boton de compus
let button = document.querySelector("#compus");
button.addEventListener("click", event =>{
   
//Compus
const computadoras = ['dell', 'hp', 'mac', 'lenovo', 'msi', 'alienware', 'toshiba', 'samsung', 'gateway', 'asus'];
const list=document.querySelector('#listC');

computadoras.forEach(function(compus){ 
    let item = document.createElement('li');   
                                                
    item.textContent = compus;     
    list.appendChild(item);  
} );    

})