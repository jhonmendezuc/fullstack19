/*
 API DOM
 - QUE ELEMENTO QUIERO RENDERIZAR? -CREACION
 - DONDE QUIERO RENDERIZAR? -> LECTURA
 - RENDERIZAR
*/
//lecturas de selectores DOM
let titulo = document.getElementsByTagName("h1"); //DOM
console.log(titulo);
console.log(titulo[1].innerHTML);
let parrafos = document.getElementsByClassName("parrafos");
console.log(parrafos);
let textoTxt = document.querySelector("input[type='text']");
let textoTxtAll = document.querySelectorAll("input[type='text']");
console.log(textoTxt);
console.log(textoTxtAll);
let rootId = document.getElementById("root");
console.log(rootId);

//actualizacion DOM
titulo[0].className = "titulo";
titulo[0].innerText = "titulo Nuevo";
titulo[1].style.color = "blue";
titulo[1].style.fontSize = "20px";
titulo[1].style.textAlign = "center";

for (let i = 0; i < parrafos.length; i++) {
  parrafos[i].style.color = "red";
}
console.log(titulo[0]);

//eliminación DOM
parrafos[0].remove();
let parrafoId = document.getElementById("parrafosId");
console.log(parrafoId);
//parrafoId.remove();

//creacion DOM
const h2Nuevo = document.createElement("h2");
h2Nuevo.className = "titulo";
h2Nuevo.innerHTML = "<strong>nuevo texto<strong>";
console.log(h2Nuevo);
parrafoId.appendChild(h2Nuevo);
console.log(parrafoId);

let estudiantes = [];
const tabla = document.querySelector("#tabla table tbody");

function agregarEstudiante() {
  const nombreEstudiante = document.getElementById("nombre-estudiante").value;
  const apellidoEstudiante = document.getElementById(
    "apellido-estudiante"
  ).value;
  /*
  const fila = document.createElement("tr");
  fila.innerHTML = `<td>${nombreEstudiante}</td><td>${apellidoEstudiante}</td>`;
  tabla.appendChild(fila);
  */
  let estudiante = {
    nombre: nombreEstudiante,
    apellido: apellidoEstudiante,
  };
  estudiantes.push(estudiante);
}

//eventos
const cargarDatosBtn = document.getElementById("cargar-datos");
cargarDatosBtn.addEventListener("click", () => {
  tabla.innerHTML = "";
  estudiantes.forEach((estudiante) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `<td>${estudiante.nombre}</td><td>${estudiante.apellido}</td>`;
    tabla.appendChild(fila);
  });
});
