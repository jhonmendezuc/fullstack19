import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <>
      <Link to="/compfunc">Ej. Comp funcion</Link> |
      <Link to="/compclase">Ej. Comp clase</Link> |
      <Link to="/estilos">Ej. Estilos (css)</Link>
    </>
  );
};

export default Menu;
