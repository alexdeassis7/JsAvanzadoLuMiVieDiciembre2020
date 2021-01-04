//Entidad Uno , esta sera la abstraccion y me sirve para crear la estructura de los 
//Otros Objects

class Subject {
    constructor() {
        //este array es el grupo de crismosos 
        this.observers = [];
    }
    // metodo para subscribir un chismoso y agregarlo al array de chismosos
    subscribe(UnObjeto) {
        //agrego el chimoso al array de chusmas
        this.observers.push(UnObjeto);
    }

    //metodo para des-subscribir un chismosos y sacarlo del array de chismosos 
    unsubscribe(UnObjeto) {
        //filter me regresa un array pero sin el objeto que viene por parametro 
        this.observers = this.observers.filter(obj => obj != UnObjeto);
    }
    //estya es la funcion que notifica el cambio de estado a los 
    //chismosos Subscriptos
    notify(modelo) {
        //recorro el array y notifico a los observadores (chismosos)
        this.observers.forEach(observador => {
            observador.notify(modelo)
        })
    }

}

//Clase para la caja de texto que va a tener un estado osea el sujeto , el estado es el mismo texto que escribimos dentro del textarea
class TextObject extends Subject {
    constructor() {
        //llamo y ejecuto el constructor del padre 
        super();
        //creo un nuevo atributo propio de la clase hija "Subject" llamado "text"
        this.text = "";
    }

    //metodo
    notify(text) {
        this.text = text; //hacemos el cambio de estado del atributo "text"!
        //llamo al mismo metodo de la clase padre que se encargara de notificar a todos los subcriptos 
        super.notify(this)//aca this envia el objeto creado con esta clase 
    }
}

//clase observadora para el div1
class div1Observer {
    //los observadores tieiene que tener el metodo notify()
    //este metodo recibe el subject y notifica cuando existe un cambio de estado en el subject
    notify(subject) {
        //usamos el atributo del subject que trae el nuevo texto cuando sucede el cambio de estado 
        document.getElementById("div1").innerHTML = subject.text;

    }
}

//clase observador para el div2 con otra funcionalidad 
class div2Observer {
    //los observadores tieiene que tener el metodo notify()
    //este metodo recibe el subject y notifica cuando existe un cambio de estado en el subject
    notify(subject) {
        //usamos el atributo de subject que trae el nuevo texto y mostramos la longitud del texto recibido 
        document.getElementById("div2").innerHTML = "longitud :" + subject.text.length;
    }
}

//clase observadora para el div 3 con otra funcionalidad
class div3Observer {
    //los observadores tieiene que tener el metodo notify()
    //este metodo recibe el subject y notifica cuando existe un cambio de estado en el subject
    notify(subject) {
        //buscamos la palabra comida
        if (subject.text.search("comida") > 0) {
            //si se encuentra la palabra mostramos un texto , 
            //ingresar el texto por ejemplo " hola comida chau ";
            document.getElementById("div3").innerHTML = "Buen provecho";
        } else {
            //si no se encuentra la palabra mostramos otro texto 
            document.getElementById("div3").innerHTML = "Tengo Hambre";
        }
    }
}

var textSubject = new TextObject();
//creo un observador 
let miDiv1 = new div1Observer();
//creo un segundo observador 
let miDiv2 = new div2Observer();
//creo un tercer observer
let miDiv3 = new div3Observer();

//nos subscribimos al subject enviando el observer
textSubject.subscribe(miDiv1);
textSubject.subscribe(miDiv2);
textSubject.subscribe(miDiv3);

//ahroa nos falta detectar cuado sucede un cambio de estado 
document.getElementById("mitexto").addEventListener("input", (event) => {
    //aca notifico al subject que existe un cambio en el texto y que le avise a todos los 
    //observadores , le envio el valor de la caja osea el texto ingresado en el textArea
    textSubject.notify(event.target.value);
})



// demo Storage API



// window.onload = () => {
//     // Opción 1 -> localStorage.getItem(name, content)
//     // Opción 2 -> localStorage.name
//     // Obtenemos los datos y los almacenamos en variables
//     let firstName = localStorage.getItem('Nombre'),
//         lastName = localStorage.Apellido
//     console.log(`Hola, mi nombre es ${firstName} ${lastName}`)
//     // Imprime: Hola, mi nombre es Miguel Antonio Márquez Montoya
// };



window.onload = () => {

    let firstName = localStorage.getItem('Nombre'),
        lastName = localStorage.Apellido
    console.log("localStorage");
    console.log(`Hola mi nombre es ${firstName} ${lastName}`);

    let firstName2 = sessionStorage.getItem('Nombre'),
        lastName2 = sessionStorage.Apellido
    console.log("sessionStorage");

    console.log(`Hola mi nombre es ${firstName2} ${lastName2}`);

}