import express, { json } from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PUERTO_BACKEND;

app.use(json());
const autores = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
  },
  {
    id: 2,
    nombre: "Maria",
    apellido: "Gomez",
    edad: 25,
  },
  {
    id: 3,
    nombre: "Pedro",
    apellido: "Gonzalez",
    edad: 40,
  },
];

app.get("/autores", (req, res) => {
  res.status(200).json(autores);
});
app.post("/autores", (req, res) => {
  const body = req.body;
  autores.push(body);
  res.status(201).json(body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
