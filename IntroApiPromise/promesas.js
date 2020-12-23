//las promesas nos permiten evitar tener piramides de peticiones en los callback de XMLHttpRequest
//XHR no nos permite acceder al resultado por fuera de nuestros callbacks

//Que es una promesa? es la representacion de un valor eventual ! , puede que el valor 
//venga o no en la respuesta por que el request puede fallar
//cual es la diferencia con AJAX? , la promesa es un objeto entonces ya estamos trabajando con 
/*un objeto como el valor de tu ejecucion asincroninca , entonces nunca tenes que esperar a que eso 
se resuelva por que la promesa ya te brinda un objeto , es decir te esta prometiendo un resultado
que puede ser positivo o negativo 

Una Promise es un objeto que representa la terminación o
 el fracaso de una operación asíncrona.
  Dado que la mayoría de las personas consumen promises
  

Esencialmente, una promesa es un objeto devuelto al cuál se adjuntan funciones callback, 
en lugar de pasar callbacks a una función.

veamos un  ejemplo de promesa:*/

//si ejecuto este codigo me da un error , me dice que el resolver esta indefinido ,
//el resolver es lo mismo que un call back 
// let promesa  = new Promise(); -> esto me da error 

// la promesa necesita una funcion para ejecutarse , esta funcion se ejecuta inmediatamente luego que 
// la promesa se instancia , ahora pruebo y en la consola miramos el objeto "Promesa"
let promesa  = new Promise(()=>{

});

console.log(promesa);
/*cuando miramos la consola vemos que la promesa viene con dos propiedades 
una es el status y la otra es su value 
_proto__: Promise
[[PromiseState]]: "pending"
[[PromiseResult]]: undefined
 una promesa puede tener hasta 3 estados posibles esos son :
 1) pending ->
 2)fulfilled (o resolved )-> se va a completar como el estado cuando la operacion que hacemos
  en el cuerpo de la promesa haya sido exitoso 
 3)rejected  -> si lo que hacemos dentro del cuerpo de la promesa se rechasa

 el problema es que los estado s de la promesa no se auto completan de manera automatica,
 como hacemos para cambiar el estado de una promesa? la api ya no va a enviar dos parametros
 un parametro a y uno b  , estos dos parametros son funciones que
  nos permiten resolver o rechazar la promesa
let promesaDos  = new Promise(( a, b)=>{

});
 */

let promesaDos  = new Promise(( resolver, rechazar)=>{
    //ejecuto el resolver o fulfilled
    resolver()
});
//vamos a ver que el estado cambia a resuelto ,antes estaba en pending
//pero seguimos sin valor
console.log(promesaDos); 

//ahora veamos  que pasa si le paso un parametro a la funcion de resolver 
let promesaTres  = new Promise(( resolver, rechazar)=>{
    //ejecuto el resolver o fulfilled o con un parametro y 
    //asi le asigno un valor de un estado nuevo a la promesa ,
    resolver(1)
});
console.log(promesaTres); 

/**tengamos en cuenta que una vez que la promesa cambio su valor ya sea resuelto o rechazado 
 * ya no puede volver a cambiar su valor nuevamente osea si intento ejecutar este codigo 
 * */

let promesaCuatro  = new Promise(( resolver, rechazar)=>{
    resolver(1)
    rechazar(2) //esto nunca se va a rechazar ! , y si imvierto y ejecuto la 
    //funcion rechazar primero me va a figurar como rechazado pero nunca como resuelto 
});
console.log(promesaCuatro); 


let promesaCinco = new Promise(( resolver, rechazar)=>{
    rechazar(2) 
    resolver(1)
    
});
console.log("promesaCinco :" +promesaCinco); 
console.dir(promesaCinco); 