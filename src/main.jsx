import React from 'react'
import ReactDOM from 'react-dom/client'
import PrimerComponente  from "./PrimerComponente";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimerComponente nombre='Milagros Villafañe'
    edad='18'
    descripcion='Soy Villafañe Milagros tengo 18 años, estudio en UNSTA la tec.desarrollo y calidad de software en la ciudad de Concepción, pero vivo en aguilares, me gusta mucho la lectura y realizar actividades al aire libre. ' 
    profesion='Estudiante'/>
    
  </React.StrictMode>,
)
