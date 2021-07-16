let btnUsers = document.querySelector("#btnUsers");
let divUsers = document.querySelector("#divUsers");

btnUsers.addEventListener( "click" , displayData);
/* 
btnUsers.addEventListener("click", ()=> {
    let getUsers = fetch ("https://jsonplaceholder.typicode.com/users");

    getUsers
        .then(resp => resp.json())
        .then(data => {
            data.forEach (user =>{
                let parr= document.createElement("p")
                parr.textContent = user.name;
                divUsers.appendChild(parr);
            })
        }) .catch(e => console.log(e));

        console.log(data); // me dice que esta variable no existe por que desaparece el dato en el scope anterior

}) */ 


async function displayData(){ //async lo hace una funcion asincrona
    let getUsers = await fetch("https://jsonplaceholder.typicode.com/users"); // await hace que la funcion se espere hasta que le respondan antes de continuar
    console.log(getUsers.ok) // me devuelve el true o falce si se hizo un error en la ejecucion, la parte del catch recae en esta parte del Ok
    
    let data = await getUsers.json();
    data.forEach(user => {
        let parr = document.createElement("p");
        parr.textContent = user.name;
        divUsers.appendChild(parr)

    });
    console.log(data);

    return data ;
}

/* 
async function otraFuncion(){
    console.log(await displayData());
}
const data 
displayData();

await timeoutPromise(3000);// este se pone para decirle que espere 3 segundos antes de mandar denuevo la peticion

 */