//modulos propios usando Ecma Modules
//importacion

import { suma, resta, multiplicacion } from "./operaciones.mjs";
import Usuario from "./Usuario.mjs";
console.log(suma(10, 5));
console.log(resta(10, 5));
console.log(multiplicacion(10, 5));

const usuario = new Usuario("Jhon", 30);
console.log(usuario.saludar());
usuario.despedirse();
