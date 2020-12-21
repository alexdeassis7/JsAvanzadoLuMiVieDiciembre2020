let xhr = new XMLHttpRequest
xhr.open("GET","fortnite.jpg")
xhr.send()

console.log(xhr);

let form = document.querySelector("form");

form.addEventListener("submit", e =>{
    e.preventDefault();

    console.dir(form);
    console.log(form);
let valor = form[0].value;
console.log("value:" +valor ); 

    let file = form[0].files;
console.log(form[0].files);

})