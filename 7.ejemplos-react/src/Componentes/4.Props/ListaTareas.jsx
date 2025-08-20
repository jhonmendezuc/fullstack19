import React from "react";
import Tareas from "./Tareas.jsx";
const ListaTareas = (props) => {
  const { nombre, apellido, tareas } = props;

  return (
    <>
      lista de tareas
      <h3>
        tareas de: {nombre} - {apellido}
      </h3>
      <ul>
        {tareas.map((tarea) => {
          return (
            <li key={tarea.id}>
              <Tareas titulo={tarea.titulo} estado={tarea.estado} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ListaTareas;
