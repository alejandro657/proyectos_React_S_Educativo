import React from 'react';
import '../styles/Caja_Azul.css';

function CajaAzul_Componente( {manejarClic }){
 
    return  (
      <div className= { 'azul' } onClick={manejarClic}>
        {manejarClic}
      </div>
    )  
  }
  
  export default CajaAzul_Componente;