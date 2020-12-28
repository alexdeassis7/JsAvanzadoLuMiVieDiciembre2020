let promesa = new Promise(() => {

})

console.log(promesa);

let promesaDos = new Promise((resolver, rechazar) => {
    // ejecuto el resolver o fulfilled
    resolver();
});

console.log(promesaDos);

let promesaTres = new Promise((resolver, rechazar) => {
    resolver(1)
});

console.log(promesaTres);
let promesaCuatro = new Promise((resolver ,rechazar ) => {
    resolver(1)
    rechazar(2)
})

console.log(promesaCuatro);