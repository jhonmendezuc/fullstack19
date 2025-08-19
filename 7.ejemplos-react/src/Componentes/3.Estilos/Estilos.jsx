import React from "react";

const estilosTitulo = {
  color: "red",
  backgroundColor: "yellow",
  fontSize: "50px",
  fontFamily: "Arial, sans-serif",
  padding: "10px",
  borderRadius: "5px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
  textAlign: "center",
  textTransform: "uppercase",
  letterSpacing: "2px",
  textShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  ":hover": {
    color: "blue",
    backgroundColor: "lightgreen",
    transform: "scale(1.1)",
  },
};

const Estilos = () => {
  return (
    <>
      <h3 style={estilosTitulo}>ejemplo de estilos</h3>
      <h3 style={estilosTitulo}>ejemplo de estilos2</h3>
    </>
  );
};

export default Estilos;
