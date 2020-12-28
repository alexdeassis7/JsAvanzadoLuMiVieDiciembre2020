let promesa = new Promise((resolver, rechazar) => {
    let xhr = new XMLHttpRequest
    xhr.open("get", "archivo.txt");
    //configuro el resolver para cuando se termine de ejecutar el xhr
    xhr.addEventListener("load", () => {
        if (xhr.status == 200) {
            //si la respuesta del server fue positiva lo resolvemos 
            //con la misma respuesta del ajax
            resolver(xhr.response);
        } else {
            rechazar('El request salio mal');
        }
    })
    xhr.send();
});

//encadenamos metodos 
promesa.
    then((valor) => {
        console.log('promesa 1 resuelta ', valor);

        //Retorno una promesa desde dentro de la promesa    
        return new Promise((resolver, rechazar) => {
            let xhr = new XMLHttpRequest
            xhr.open("get", "archivoDos.txt");
            //configuro el resolver para cuando se termine de ejecutar nuestro xhr
            xhr.addEventListener("load", () => {
                if (xhr.status == 200) {
                    //si la respuesta es positiva lo devolvemos con la misma respuesta ajax 
                    resolver(valor + xhr.response);
                } else {
                    rechazar('el request 2 salio mal ');
                }
            })
            xhr.send();
        })
    })

    .then((valor) => {
        console.log('la promesa dos fue resuelta '  );
        console.log(valor);
    })

    .catch(() => {
        console.log('ERROR!');
    })
