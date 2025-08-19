import { readFile } from "node:fs/promises";

readFile("modulos_nativos/archivos/archivo.txt", "utf-8")
  .then((datos) => {
    console.log("operacion 1..");
    console.log(datos);
  })
  .catch((error) => {
    console.error("error!!!", error);
  })
  .finally(() => console.log("fin de la promesa"));

console.log("operacion 2..");
console.log("operacion 3..");
