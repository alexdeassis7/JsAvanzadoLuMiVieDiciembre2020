let url = "https://jsonplaceholder.typicode.com"; //api web
let btn = document.querySelector("button");

//piramide de la perdicion - 
//patron desing - estas implementaciones son dificil de escalar y mantener 

//asigno evento clik al boton 
btn.addEventListener("click", () => {
    //solicito lo users ,envio un objeto de configuracion
    ajax({
        metodo: "GET",
        url: `${url}/users`,
        load: respuesta => {  //callback
            console.log(respuesta); //mostramos el arrays de users
            //capturo uno de los users (nicolas) del array que recibo del request

            var divUsuarios = document.getElementById("usuarios");

            for (let index = 0; index < respuesta.length; index++) {
                var elementoUser = document.createElement('p');
                elementoUser.innerText = respuesta[index].name;
                divUsuarios.appendChild(elementoUser);
            }

            let usuarioNicolas = respuesta[7]; //obtendo el objeto usuarip
            let idUser = usuarioNicolas.id; //obtengo el numero de id del user
            //hacemos el segundo request

            ajax({
                metodo: "GET",
                url: `${url}/posts?userId=${idUser}`,
                load: posteosDeUser => {  //callback
                    console.log("estyos son los posteos de user ")
                    var divPosteos = document.getElementById("posteos");
                    for (let index = 0; index < posteosDeUser.length; index++) {
                        console.log(posteosDeUser[index].title);
                        var posteoUser = document.createElement('p');
                        posteoUser.innerText = posteosDeUser[index].title;
                        divPosteos.appendChild(posteoUser);

                    }
                    //tercer request aca me traigo los comentarios de este user 
                    posteosDeUser.forEach(post => {
                        ajax({  //callback
                            metodo: "GET",
                            //post es cada elemento del array 
                            url: `${url}/comments?postId=${post.id}`,
                            load: comentarios => {
                                var comentariosDePosteos = document.getElementById("comentarios");

                                for (let index = 0; index < comentarios.length; index++) {
                                    console.log(posteosDeUser[index].title);
                                    var comentario = document.createElement('p');
                                    comentario.innerText = comentarios[index].body;
                                    comentariosDePosteos.appendChild(comentario);
            
                                }
                                console.log(comentarios);

                            }
                        })
                    })
                }

            })
        }
    })
})



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