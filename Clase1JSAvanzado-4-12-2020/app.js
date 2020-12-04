//VAR : es para variables globales
//LET : es para variables Locales al Bloque
//VAR ejemplo: 
var foo = 123;

if(true){
   var foo = 456;
}

console.log("var:" + foo); //456

//LET ejemplo: 
let foo2 = 123;
if(true){
   let foo2 = 456;
}
console.log("let:" + foo2); 

//CONST ejemplo: 
//al igual que let el scope es de bloque!
//las contanste deben ser declaradas 
//y asignadas Siempre!
const foo3 = 123;
//foo3 = 456;// NO PERMITIDO!!!!

const foo4 = { bar: 123 };
console.log(foo4);

//ERROR no se permite la modificacion del Objeto
//foo4 = { bar : 456};
//Pero si se puede modificar el contenido de las 
//variables que contiene el objeto literal 

foo4.bar = 456 ;
console.log(foo4);

//BOM (Browser Object Model ) & DOM (Document Object Model)

//JSON  JavaScript Object Notation




