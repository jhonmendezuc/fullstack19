import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <>
      <Link to="/compfunc">Ej. Comp funcion</Link> |
      <Link to="/compclase">Ej. Comp clase</Link> |
      <Link to="/estilos">Ej. Estilos (css)</Link>
      <Link to="/estilosmui">Ej. Estilos (mui)</Link>
      <Link to="/props">Ej. Props</Link>
    </>
  );
};

export default Menu;
