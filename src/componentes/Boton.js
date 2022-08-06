import React from 'react';
import '../styles/Boton.css';

const esOperador = valor => {
  return isNaN(valor) && (valor !== '.') && (valor !== '=');
}

function Boton(props) {
  return (
    <button
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}>
 
      {props.children}
    </button>
  );
};

export default Boton;