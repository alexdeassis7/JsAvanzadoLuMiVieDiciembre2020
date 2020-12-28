/**API FETCH
 * Esta es un comvinacion de XHR + Promise + REsponse +
 * Request  y Headers*/



//esto por defecto hace un request Async por get , 
//pero no tenemos qyue hacer el obj XHR , ni especifar el method 
//solamente le enviamos la url 
let texto = fetch("info.txt");

console.log(texto);

/**,REsponse es otra API de JS ,  */
var response = new Response();
console.log(response); 

//como texto es una promesa podemos acceder a los metodos then() y catch()
texto.then(valor =>{
    console.log("valor:");
    console.dir(valor);
})
