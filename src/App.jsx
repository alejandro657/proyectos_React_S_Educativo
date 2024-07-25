

 
import React, { useState } from 'react';
import Boton_recarga from './componente/boton_Recarga';
import '../node_modules/bootstrap/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '../node_modules/bootstrap/css/bootstrap.min.css';
import Caja_Azul from  './componente/Caja_Azul';
import Caja_Verde from './componente/Caja_Verde';
import Caja_Roja from './componente/Caja_Roja.jsx';
import './App.css'; 
function App() {  


{/*Cuadro Azul */}
  const [azul, setAzul]= useState('') 

 const  manejarClic =()=>{
  setAzul('Respuesta correcta')  

  if (verde === 'Respuesta incorrecta' ) {  
    setVerde(''); // No hay necesidad de los espacios, solo usa ''   
    setAzul('Respuesta Correcta');   
  }   if (roja === 'Respuesta incorrecta' ){
    setRoja('')
    setAzul('Respuesta Correcta');  
  }
}; 


   const [verde, setVerde]= useState('')
   const  manejarClic_Verde  =()=>{
    setVerde('Respuesta incorrecta')

    if (azul === 'Respuesta correcta' ) { 
      setAzul('') 
      setVerde('Respuesta incorrecta') // No hay necesidad de los espacios, solo usa ''   
    
    }   if (roja === 'Respuesta incorrecta' ){
      setRoja('')
      setVerde('Respuesta incorrecta')
    }
  }

     const [roja, setRoja]= useState('')

     const  manejarClic_Roja  =()=>{
      setRoja('Respuesta incorrecta')

    if (setAzul === 'Respuesta correcta'){
      setAzul('')
      setRoja('Respuesta incorrecta')
    } if (setVerde === 'Respuesta incorrecta'){
      setRoja( 'Respuesta incorrecta')

    }
    
    }



  return (  
    <>   
    <div className="container background_Image">

   <h1> Diga que figura tiene el color azul</h1>

   <div className="row">
    
<div className="col master ">

<div className="padre d-flex justify-content-center justify-content-between flex-row" >
 
 <Caja_Azul   
   manejarClic = {manejarClic} 
  />

<Caja_Verde
  manejarClic_Verde = { manejarClic_Verde }

/>


<Caja_Roja
 manejarClic_Roja= { manejarClic_Roja }
/>

</div>
</div>
</div>

<div className='contenedor_resultado'>

<div className='resultado' >{azul} {verde} {roja} </div>
</div>
< Boton_recarga/>
</div>


    </>  
  );  
}  

export default App;