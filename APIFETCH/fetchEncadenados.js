//URI para obtener los recursos 
let url = "https://jsonplaceholder.typicode.com";

//solicito los usuarios y eso me retorna una promise que se guarda en "primerRequest"
let primerRequest = fetch(`${url}/users`);

primerRequest
    .then(valor => {
        //aca muestro el objeto Response
        console.log(valor);
        //transformo el REsponse a un objeto Json y la retorno (aca retorno una Promise)
        // console.dir(valor.json()); no ejecutar dos veces!!!
        return valor.json();
    })

    .then(valor => {
        let ArrayDeNombres = valor;
        console.log("Muestro el array :");
        console.log("Estos son los usuarios :");
        console.log(ArrayDeNombres);
        console.log("Muestro un elemento del aray , osea un usuario ");
        console.log(ArrayDeNombres[7]);
        let idAbuscar = ArrayDeNombres[7].id; //el id es el 8
        /*hacemos un segundo Request , aca buscamos los post de un usuario en particular 
        con su id y de nuevo nos queda una promesa dentro de otra promesa , estonces la retornamos  */
        return fetch(`${url}/posts?userId=${idAbuscar}`);
    })

    .then(valor => {
        //aca me viene un obj tipo response con los posteos 
        console.log(valor);
        return valor.json();
    })

    .then(valor => {
        console.log("estops son los posteos obtenidos del usuario :");
        console.log(valor); //aca tengo el array con los posteos del usuario
        let idPosteo = valor[1].id // idPosteo = 72
        //ahora me voy a buscar los comentarios que tiene uno de los posteos del usuario nicholas
        return fetch(`${url}/comments?postId=${idPosteo}`);
    })

    .then(valor => {
        console.log(valor); //aca tengo un response{} de nuevo
        return valor.json();
    })

    .then(valor => {
        console.log("Estos son los comentarios del posteo del usuario");
        console.log(valor);
    })

    //manejo un posible error
    .catch(err => {
        console.log(err);
    })