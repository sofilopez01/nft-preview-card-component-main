//              TRADICIONALES 
const elements= document.getElementById("id");
//console.log(elements);

//permite buscar los elementos que tengan la clase especificada en class.
const clas= document.getElementsByClassName("avatar");
//console.log(clas);

// Obtiene todos los elementos con atributo name="nickname"
const nicknames = document.getElementsByName("nickname");  // [input]

//obtine todos los elementos divs de la pagina 
//const divs= document.getElementsByTagName("div");
//console.log(divs);

//               MODERNOS
const titles= document.querySelector(".title");
console.log(titles);

const paraf= document.querySelectorAll(".p");
console.log(paraf);

const divs = document.querySelectorAll("div");
console.log(divs);