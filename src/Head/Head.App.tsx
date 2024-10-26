import { useState } from 'react'
import './Head.style.css'

function Head() {
  const [count, setCount] = useState(0)

  return (
    <>
     <header>
        <h1>MANGO</h1>
        <ul>
            <li><a href="" data-title='gatos'>Inicio</a></li>
            <li><a href="">Articulos</a></li>
            <li><a href="">Noticias y Foros</a></li>
            <li><a href="">Registro</a></li>
            <li></li>
        </ul>
     </header>
    </>
  )
}

export default Head