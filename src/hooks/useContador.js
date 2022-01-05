import { useState } from "react";

export const useContador = () => {
  const [valor, setValor] = useState(0);

  const sumar = () => {
    setValor(valor + 1);
  };

  const restar = () => {
    setValor(valor - 1);
  };
  const reset = () => {
    setValor(0);
  };
  const saludar = () => {
    alert(`Bienvenido al Contador!!!`);
  };
  return { valor, sumar, restar, reset, saludar };
};