import React, { Component } from "react";

class ComponenteClase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      contador: 0,
    };
    console.log("componente creado..");
  }

  contar() {
    this.setState({
      contador: this.state.contador + 1,
    });
    console.log(this.state.contador);
  }

  componentDidMount() {
    console.log("componente montado..");
  }

  componentDidUpdate() {
    console.log("componente actualizado..");
  }

  componentWillUnmount() {
    console.log("componente desmontado..");
  }

  render() {
    console.log("componente renderizado..");
    return (
      <>
        <h2>Ejemplo componente de clase</h2>
        <h3>{this.state.contador}</h3>
        <button onClick={() => this.contar()}> incrementar</button>
      </>
    );
  }
}

export default ComponenteClase;
