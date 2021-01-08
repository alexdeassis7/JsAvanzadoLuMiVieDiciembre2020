// IIFE  Expresion de funcion ejecutada inmediatamente

//Modulo : la idea de modulo es crear un scope o un alcanze



//funcion interna , no deberia ser utilizable 
const Calculadora = (function calculadora() {
    //todas estas funciones ahora solo son utilizables 
    //dentor de calculadora
    function init() {
        console.log('init Calculadora');
    }

    function sumar(a, b) {
        return a + b;
    }

    function restar(a, b) {
        return a - b;
    }

    function multiplicar(a, b) {
        return a * b;
    }

    function dividir(a, b) {
        return a / b;
    }

    function pintarResultado(numero) {
        document.getElementById('resultado').value = numero;
    }


    init();

    //aqui tenemos el revelador , donde 
    //expondremos las funciones que queremos 
    //que se puedan utilizar desde fuera del modulo 
    return {
        sumar: sumar,
        //como se llama igual la propiedad que la funcion
        //podemos utilizar abreviaturas!
        restar,
        multiplicar,
        dividir,
        pintarResultado
    }

})();


//ejecuto el modulo  
//const Calculadora = calculadora();