import { readFile } from "node:fs/promises";

async function lecturaArchivo() {
  try {
    const datos = await readFile(
      "./modulos_nativos/archivos/archivo1.txt",
      "utf-8"
    );
    console.log(`lectura exitosa`);
    console.log(datos);
  } catch (error) {
    console.error("there was an error:", error.message);
  }
}

lecturaArchivo();
console.log("otro proceso");
