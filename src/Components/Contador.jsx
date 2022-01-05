import React from "react";
import { useContador } from "../hooks/useContador";
import Boton from "./Boton";

const Contador = () => {
  const { valor, sumar, restar, reset, saludar } = useContador();

  return (
    <div>
      <h2> Contador = {valor}</h2>
      <Boton texto={"sumar"} operacion={sumar} />
      <Boton texto={"reset"} operacion={reset} />
      <Boton texto={"restar"} operacion={restar} />
      <Boton texto={"saludar"} operacion={saludar} />
    </div>
  );
};
export default Contador;