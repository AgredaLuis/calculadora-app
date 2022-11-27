import "./App.css";
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png";
import Boton from "./componentes/Boton";
import Pantalla from "./componentes/Pantalla";
import BotonClear from "./componentes/BotonClear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const AgregarInput = (val) => {
    setInput(input + val);
  };

  const CalcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("ingrese valores correctos para los calculos");
    }
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          src={freeCodeCampLogo}
          className="freecodecamp-logo"
          alt="Logo de freeCodeCamp"
        />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClick={AgregarInput}>1</Boton>
          <Boton manejarClick={AgregarInput}>2</Boton>
          <Boton manejarClick={AgregarInput}>3</Boton>
          <Boton manejarClick={AgregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={AgregarInput}>4</Boton>
          <Boton manejarClick={AgregarInput}>5</Boton>
          <Boton manejarClick={AgregarInput}>6</Boton>
          <Boton manejarClick={AgregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={AgregarInput}>7</Boton>
          <Boton manejarClick={AgregarInput}>8</Boton>
          <Boton manejarClick={AgregarInput}>9</Boton>
          <Boton manejarClick={AgregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={CalcularResultado}>=</Boton>
          <Boton manejarClick={AgregarInput}>0</Boton>
          <Boton manejarClick={AgregarInput}>.</Boton>
          <Boton manejarClick={AgregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput("")}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
