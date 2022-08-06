import React from 'react';
import freeCodeCampLogo from '../imagenes/freecodecamp-logo.png';

function LogoFreeCode(){
  return (
    <div className='freecodecamp-logo-contenedor'>
      <img
        src={freeCodeCampLogo}
        className='frecodecamp-logo' 
        alt='Logo de freeCodeCamp' />
    </div>
  );
};

export default LogoFreeCode;