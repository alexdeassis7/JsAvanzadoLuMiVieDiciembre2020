//Implementamos un request Async con FETCH

//solicito un recurso 
let texto = fetch("info.txt");

texto
    .then(ObjetoResponse => {
        console.log("valor : ");
        console.log(ObjetoResponse); // Response{}

        //utilizamos el metodo text , aca tambien obtenemos una promise 
        //ahora nos esta quedando una promesa dentro de otra promesa que la podemos retornar
        console.log("metodo text() :");
        // console.log(ObjetoResponse.text());

        return ObjetoResponse.text(); // retorno una Promise{}
    })
    //aca obtengo el valor del recurso que me viene retornado de la promesa anterior 
    .then(valor => {
        console.log(valor);
    })