//todo los metodos de una promesa se pueden encadenar dentro de la misma promesa 

let promesa = new Promise((resolver, rechazar) => {
    let xhr = new XMLHttpRequest
    xhr.open("get", "archivo.txt");
    //configuro el resolver para cuando se termine de ejecutar el xhr
    xhr.addEventListener("load", () => {
        if (xhr.status == 200) {
            //si la respuesta es positiva lo resolvemos con 
            //la misma respuesta de ajax
            resolver(xhr.response)
        } else {
            rechazar('el request salio mall')
        }
    })
    xhr.send();
});
//encadenamos metodos
promesa.
    then((valor) => {
        console.log('promesa 1 resuelta', valor);

        //retorno una promesa desde dentro de la promesa
        return new Promise((resolver, rechazar) => {

            let xhr = new XMLHttpRequest
            xhr.open("get", "archivoDos.txt");
            //configuro el resolver para cuando se termine de ejecutar el xhr
            xhr.addEventListener("load", () => {
                if (xhr.status == 200) {
                    //si la respuesta es positiva lo resolvemos con 
                    //la misma respuesta de ajax
                    resolver(xhr.response + valor)
                } else {
                    rechazar('el request salio mall')
                }
            })
            xhr.send();

        });
    })

    .then((valor) => {
        console.log('promesa 2 fue resuelta', valor);
        console.log(valor);
    })

    .catch(() => {
        console.log("Error!");
    })

    //de esta manera delegamos el retorno asincronico a un objeto del tipo promise
    //el cual nos permite retornos como si trabajaramos con codigo secuencial 