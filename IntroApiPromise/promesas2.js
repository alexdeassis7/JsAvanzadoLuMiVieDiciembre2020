//insertamos AJAX dentro de una promesa 
let promesa  = new Promise((resolver ,rechazar)=>{
    let xhr = new XMLHttpRequest
    xhr.open("get" , "archisvo.txt");
    //configuro el resolver para
    // cuando se termine de ejecutar el xhr
    xhr.addEventListener("load",()=>{
        if(xhr.status == 200 ){
            //si la respuesta es positiva lo resolvemos con 
            //la misma respuesta de ajax
            resolver(xhr.response)
        }else{
            rechazar('el request salio mall')
        }
    })
    xhr.send();
});
//ahora podemos utilizar el objeto promesa 
console.log(promesa);

/** los atributos Status y value de la promesa
 * no se pueden acceder por que son de metaInformacion osea que no 
 * puedo hacer Promesa.PromiseStatus y tampoco promesa[[PromiseStatus]]
entonces como me puedo enterar cuando se resuelvo o rechaza una promesa?
devemos usar los metodos de una promesa que disparans dos callbacks uno 
esta dentro del metodo then() y el otro en catch()
 */
//si la promesa se resuelve correctamente el callBack que este dentro de then 
//se va a a ejecutar
promesa.then((valorDeLaPromesa)=>{ //valorDeLaPromesa es el response del ajax!
    console.log("se logro resolver la promesa !" + valorDeLaPromesa);
});
//si la promesa se rechaza  el callBack que este dentro de cathc() 
//se va a a ejecutar
promesa.catch((valorDeLaPromesa)=>{
    console.log(valorDeLaPromesa);
    console.log("no se logro resolver la promesa !");
});

//de esta manera delegamos la parte de ajax al objeto de la promesa y asi no tenemos que 
//hacer codigo piramide y podemos trabajar de manera secuencial