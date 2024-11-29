import React from 'react'
import '../Style/FormsStyle.css';
import InputsApp from './InputsApp';

export default function FormsApp() {

  return (
    <div className='Formulary'>
      <form action="">
        <h1>Centro de Atencion</h1>
        <InputsApp type="text" mssg="Nombre Completo:"></InputsApp>
        <InputsApp type="password" mssg="Contraseña:"></InputsApp>
        <InputsApp type="email" mssg="Correo Electronico:"></InputsApp>
        <input type="text" />
        <input type="button" value='Ingresar'/>
      </form>
    </div>
  )
}
