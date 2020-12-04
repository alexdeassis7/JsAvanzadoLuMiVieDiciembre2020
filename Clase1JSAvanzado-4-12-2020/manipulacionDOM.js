/*1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write
*/
var nombre;
var peso;
var pesoMax = 0;
var NombreDelMasPesado ;
var sexo;
var edad;
var cantidadF = 0;
var sumaEdad = 0;
var promedio;
var contadorEdad = 0;

for (let i = 0; i < 0; i++) {
    do {
        nombre = prompt("Ingrese Nombre");
    }while( !(isNaN(nombre))); //valido que no sea un numero

    do{ 
        peso = parseInt(prompt("Ingrese Peso"));
    }while(isNaN(peso));//valido que sea un numero

    do{
        sexo = prompt("Ingrese Sexo : f / m");
    }while( sexo != "f" && sexo !="m");
    
    do{
        edad = parseInt(prompt("Ingrese Edad"));
    }while(isNaN(edad));//valido que sea un numero
    
    if(sexo == "f"){
        cantidadF++;
    }

    if(edad > 0 ){
        contadorEdad ++;
        sumaEdad += edad;
    }

    if(sexo == "m" && peso > pesoMax){
        pesoMax = peso ;
        NombreDelMasPesado = nombre;
    }
}
promedio = sumaEdad /contadorEdad;
//mostramos resultados en el DOM
document.write(cantidadF + ": es la cantidad de mujeres" + "<br>" ) ;//1
document.write(promedio + ": es la edad promedio" + "<br>" ) ; // 41.8
document.write("el Hombre mas pesado del Team pesa :" + pesoMax + "<br>"); //49

// var persona = {
//     nombre : "",
//     edad : 0,
//     sexo : "",
//     peso : "",
    
// }

// function Persona (nombre , edad ){
//     this.nombre = nombre ;
//     thie.edad = edad;
//     Persona.prototype.calculoPeso = function(){
//         console.log("aca calculas el peso !");

//     }
// }



//selecciono el div 

var referenciaDeLaCaja = document.getElementById("caja");

var referenciaDeLaCajaDos = document.getElementsByClassName("cajaDos");

//creo elementos desde js 

let h1 = document.createElement("h1");
h1.id = "tituloEncabezado";
h1.innerText = "hola me crearon desde el js ";

console.log(referenciaDeLaCaja);
console.log(referenciaDeLaCajaDos);
console.log(h1);

referenciaDeLaCaja.appendChild(h1);


var p = document.querySelector("p");
console.log(p);





