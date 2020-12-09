/*Programacion Visual - Primer Parcial
Crear un div de 400px de ancho y 250px de alto con un borde solido que se 
encuentre ubicado en el sector superior derecho de la pagina dentro del 
mismo debera contener tres titulos centrados con tres nombre ( Jose , Marcelo , Martin ),
 los nombres deberan tener una fuente "arial" y color rojo, en la seccion izquierda
  del documento se solicita existan seis botones uno debajo de otro que nos permitan
   realizar lo siguiente:

boton 1 : al precionarlo debera mover el nombre de marcelo debajo de todos los nombres
boton 2 : al precionarlo debera insertar o mover mi nombre debajo de todos los nombres 
boton 3 : al precionarlo debera insertar o mover mi nombre debajo de marcelo
boton 4 : al precionarlo debera reemplazar el nombre de jose y dejar alli mi nombre 
boton 5 : al precionarlo debera suprimir el nombre de martin de los nombres 
boton 6 : al precionarlo debera resetear el estado de los nombre y se debera vizualizar en primer lugar a jose  , en segundo a Marcelo y tercero Martin 
*/

var nuevoElemento = document.createElement("p");
var nuevoTexto = document.createTextNode("Alex De Assis");

nuevoElemento.appendChild(nuevoTexto);
nuevoElemento.id = "miNuevoElemento";

function cambiar() {
    var segundo = document.getElementById("segundo");

    var padre = segundo.parentNode;
    //console.log(padre);
    padre.removeChild(segundo);
    padre.appendChild(segundo);
}


function debajo() {
    var div = document.getElementById("cuadro");
    div.appendChild(nuevoElemento)
}


function reemplazar() {
    var primero = document.getElementById("primero");
    if (primero != null) {
        var padre = primero.parentNode;
        padre.replaceChild(nuevoElemento, primero)
    }else{
        console.log("ya eliminaste a jose!!!!");
    }

}

function suprimir(){
    var tercero = document.getElementById("tercero");
    if(tercero != null){
        tercero.parentNode.removeChild(tercero);
    }else{
        console.log("ya eliminaste a martin!!!!");
    }
}

function restaurar(){
    var lugar = document.getElementById("cuadro");
    lugar.innerHTML = "<h4 id='primero'>Jose</h4><h4 id='segundo'>Marcelo</h4><h4 id='tercero'>Martin</h4>"
}