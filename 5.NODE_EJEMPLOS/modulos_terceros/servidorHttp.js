import http from "node:http";
import dotenv from "dotenv";

dotenv.config();
/*recurso*/
const autores = [
  {
    _id: 1,
    nombre: "Gabriel garcia marquez",
    nacionalidad: "colombiana",
    correo: "gabriel@gmail.com",
  },
  {
    _id: 2,
    nombre: "Mario Mendoza",
    nacionalidad: "chilena",
    correo: "mariom@gmail.com",
    edad: 50,
  },
  {
    _id: 3,
    nombre: "Isabelle allende",
    nacionalidad: "chilena",
    correo: "chile@gmail.com",
  },
];

/*crear servidor*/
const servidor = http.createServer((solitud, respuesta) => {
  console.log(solitud.headers);
  const autorJson = JSON.stringify(autores);
  respuesta.end(autorJson);
});
/*servidor escuchando...*/
const puerto = process.env.PUERTO_BACKEND;

servidor.listen(puerto, () => {
  console.log(`Servidor escuchando en el puerto ${puerto}...`);
});
