let url = "https://jsonplaceholder.typicode.com"; //api web
let btn = document.querySelector("button");

//soluciono la piramide de la perdicion - extrapolando los callbacks a una fuction  

//asigno evento clik al boton 
btn.addEventListener("click", () => {
    //solicito lo users ,envio un objeto de configuracion
    ajax({
        metodo: "GET",
        url: `${url}/users`,
        load: primerCallback, //llamo al primer call back 

    })
})




let primerCallback = respuesta => {  //callback
    console.log(respuesta); //mostramos el arrays de users
    //capturo uno de los users (nicolas) del array que recibo del request

    let usuarioNicolas = respuesta[7]; //obtendo el objeto usuarip
    let idUser = usuarioNicolas.id; //obtengo el numero de id del user
    //hacemos el segundo request

    ajax({
        metodo: "GET",
        url: `${url}/posts?userId=${idUser}`,
        load: segundoCallBack,

    })
}



let segundoCallBack = posteosDeUser => {  //callback
    console.log("estyos son los posteos de user ")
    for (let index = 0; index < posteosDeUser.length; index++) {
        console.log(posteosDeUser[index].title);
    }
    //tercer request aca me traigo los comentarios de este user 
    posteosDeUser.forEach(post => {
        ajax({  //callback
            metodo: "GET",
            url: `${url}/comments?postId=${post.id}`,//post es cada elemento del array 
            load: tercerCallback,
        })
    })
}


let tercerCallback = comentarios => {
    console.log(comentarios);

}


//ejecucion de ajaz que recibe un objeto de configuracion
function ajax(config) {
    let xhr = new XMLHttpRequest
    xhr.open(config.metodo, config.url)

    xhr.addEventListener("load", () => {
        if (xhr.status == 200) {
            config.load(JSON.parse(xhr.response))
        }
    });
    xhr.send(config.data);
}
