import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompFunc from "./Componentes/1.ComponentesEjemplos/ComponenteFuncion.jsx";
import CompClase from "./Componentes/1.ComponentesEjemplos/ComponentesClase.jsx";
import Menu from "./Componentes/2.Menu/Menu.jsx";
import Estilos from "./Componentes/3.Estilos/Estilos.jsx";
function App() {
  return (
    <>
      <header>
        <h4>curso de fullstack 2025</h4>
        <hr />
      </header>
      <BrowserRouter>
        <nav id="navegacion">
          <Menu />
        </nav>
        <Routes>
          <Route path="/compfunc" element={<CompFunc />} />
          <Route path="/compclase" element={<CompClase />} />
          <Route path="/estilos" element={<Estilos />} />
        </Routes>
      </BrowserRouter>
      <footer>
        <hr />
        <h4>autor: jhon mendez</h4>
      </footer>
    </>
  );
}

export default App;
