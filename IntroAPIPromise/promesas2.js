let promesa = new Promise((resolver, rechazar) => {
    let xhr = new XMLHttpRequest
    xhr.open("get", "archivo.txt");

    xhr.addEventListener("load", () => {
        if (xhr.status == 200) {
            resolver(xhr.response)
        } else {
            rechazar('El request salio mal ameego!')
        }
    })
    xhr.send();
});

console.log(promesa);

promesa.then((valorDeLaPromesa) => {
    console.log('Se logro resolver satisfactoriamente la promesa !' + valorDeLaPromesa);
})

promesa.catch((valorDeLaPromesa) =>{
  console.log(valorDeLaPromesa);
  console.log("NO se logro resolver la promesa!");  
})