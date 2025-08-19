import FileReader from "node:fs";

/* lectura y escritura*/
const autor = {
  nombre: "Jhon",
  apellido: "Mendez",
  edad: 45,
};

let autores = [];

const autoresArchivo = FileReader.readFileSync(
  "modulos_nativos/archivos/autores.json",
  "utf-8"
);

//lectura de json a obj -- deserializar
console.log(autoresArchivo);
autores = JSON.parse(autoresArchivo);
console.log(autores);

autores.push(autor);
console.log(autores);

//escritura
//convertir un objeto javaScript a JSON
const autoresJson = JSON.stringify(autores);

FileReader.writeFileSync("modulos_nativos/archivos/autores.json", autoresJson);
console.log("Se ha escrito en el archivo");
