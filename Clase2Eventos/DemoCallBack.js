var muestraNombre= () => {console.log('Mi nombre es alex');}

var muestraEdad = (edad) => {console.log('Mi edad es ' + edad);}


console.log('llamo a la funcion muestraNombre()');
muestraNombre();

console.log('llamo a la funcion muestraEdad()');
muestraEdad(18);

function mostrarApellido(){
    console.log('Mi apellido es Silva')
}

mostrarApellido();


function miFuncion(variable1 , callBackUno){
    console.log('recibi esta variable' + variable1);
    callBackUno();
}

miFuncion('Gabriel' , () => {console.log( 'Recibi una funcion flecha y la ejecute ')});


