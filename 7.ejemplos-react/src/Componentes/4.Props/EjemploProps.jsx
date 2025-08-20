import React from "react";
import ListaTareas from "./ListaTareas.jsx";
const tareas = [
  {
    id: 1,
    titulo: "tarea 1",
    estado: false,
    descripciones: [
      { id: 1, descripcion: "descripcion 1" },
      { id: 2, descripcion: "descripcion 2" },
    ],
  },
  {
    id: 2,
    titulo: "tarea 2",
    estado: false,
  },
  {
    id: 3,
    titulo: "tarea 3",
    estado: true,
  },
  {
    id: 4,
    titulo: "tarea 4",
    estado: true,
  },
];

const EjemploProps = () => {
  return (
    <>
      <h1>ejemplos props</h1>
      <ListaTareas nombre="juan" apellido="ramirez" tareas={tareas} />
    </>
  );
};

export default EjemploProps;
