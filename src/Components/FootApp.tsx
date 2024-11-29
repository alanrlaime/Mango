import React from 'react'
import style from '../Style/FootStyle.module.css';

export default function FootApp() {
  return (
    <><footer>
    <div className={style.social}>
        <ul>
            <li><img src="src\pictures\icon.png" alt="logofoot" /></li>
            <li><i className="fa-solid fa-phone"></i> +591 68075601</li>
            <li><i className="fa-solid fa-envelope"></i> adannicolasmiau@gmail.com</li>
            <li><i className="fa-solid fa-location-dot"></i> Direccion: Calle topater</li>
        </ul>
        <ul>
            <h3>ENLACES</h3>
            <li><a href="">Inicio</a></li>
            <li><a href="">Login</a></li>
            <li><a href="">CEA Cruz Andina</a></li>
        </ul>
        <ul>
            <h3>REDES SOCIALES</h3>
            <li><a href=""><i className="fa-brands fa-facebook"></i> Faceboock</a></li>
            <li><a href=""><i className="fa-brands fa-instagram"></i> Instagram</a></li>
            <li><a href=""><i className="fa-brands fa-google"></i> Correo Electronico</a></li>
            <li><a href=""><i className="fa-brands fa-linkedin"></i> LinkedIn</a></li>
            <li><a href=""><i className="fa-brands fa-twitter"></i> Twitter</a></li>
            <li><a href=""><i className="fa-brands fa-youtube"></i> YouTube</a></li>
        </ul>
        <ul>
            <h3>COMENTARIOS</h3>
            <form action="">
                <p>Tu nombre:</p>
                <input type="text" placeholder="Nombre Completo" />
                <p>Tu Correo:</p>
                <input type="email" placeholder="Correo Electronico" />
                <p>Tus Comentarios:</p>
                <input type="text" placeholder="Comentarios" />
                <input type="submit" id="coment" value="Enviar" />
            </form>
        </ul>
    </div>
    <div className="state">
        <p>Todos los derechos recervados</p>
    </div>
</footer></>
  )
}
