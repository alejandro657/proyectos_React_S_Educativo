

 
import React, { useState } from 'react';
import Boton_recarga from './componente/boton_Recarga';
import '../node_modules/bootstrap/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/css/bootstrap.min.css';

import './App.css'; 
function App() {  


{/*Cuadro Azul */}
  const [azul, setAzul]= useState('')
const manejar_Azul = () => {  
  setAzul('Respuesta Correcta'); 
  if (verde === 'Respuesta incorrecta' ) {  
    setVerde(''); // No hay necesidad de los espacios, solo usa ''   
    setAzul('Respuesta Correcta');   
  }   if (rojo === 'Respuesta incorrecta' ){
    setRojo('')
    setAzul('Respuesta Correcta');  
  }
};  


  {/*Cuadro Verde*/}
  const [verde, setVerde]= useState('')
  const manejar_Verde=()=>{
    setVerde('Respuesta incorrecta');  
    if (azul === 'Respuesta Correcta' ) {  
      setAzul(''); 
      setVerde('Respuesta incorrecta');   
    }   if (rojo === 'Respuesta incorrecta' ){
      setRojo('')
      setVerde('Respuesta incorrecta');  
    }
  };  



  {/*cuadro rojo */}
const [rojo, setRojo]= useState('')
const manejar_Rojo=()=>{
  setRojo('Respuesta incorrecta'); 
  if (azul === 'Respuesta Correcta' ) {  
    setAzul(''); 
    setRojo('Respuesta incorrecta');   
  }   if (verde === 'Respuesta incorrecta' ){
    setVerde('' )
    setRojo('Respuesta incorrecta');  
  }
}


  return (  
    <>   
    <div className="container background_Image">

   <h1> Diga que figura tiene el color azul</h1>

   <div className="row">
    
<div className="col master ">

<div className="padre d-flex justify-content-center justify-content-between flex-row" >

<div className="items rojo" onClick={manejar_Verde}>  </div>

<div className="items verde" onClick={manejar_Rojo}> </div>

<div className="items azul" onClick={manejar_Azul}>  </div>

</div>
</div>
</div>

<div className="contenedor_resultado">
<div className='resultado'>{azul}{verde}{rojo}</div>
</div>
< Boton_recarga/>
</div>


    </>  
  );  
}  

export default App;