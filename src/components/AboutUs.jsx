import React from 'react'
import "./CSS/aboutUs.css"
import fotoPerfil from "../multimedia/foto-de-perfil-gerardo.jpg"

export default function AboutUs() {
  return (
    <>
      <h1 className='visitenos'>SOBRE MI</h1>
      <div className='containerUs'>
        <div>
          <img src={fotoPerfil} className='perfil' alt="foto del perfil del vendedor de autos" />
          <p>Me llamo Gerardo soy asesor y ejecutivo de ventas de 0 km. Vivo en Buenos Aires, tengo casi una decada en el rubro automotriz. Con mi trabajo me dedico a ayudar a la gente a proyectar su futuro para que un 0 km no sea algo imposible 
          <br/>  
          Un auto mas que un lujo es una necesidad. Pero cada vez se complica mas lograrlo.
          <br />
          Hagamoslo facil.
          <br />
          Comencemos a gestionar las llaves de tu proximo vehiculo.
          </p>

        </div>
        <div>
          <iframe className='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.905161268173!2d-58.47793002500261!3d-34.631836858982524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc991ccdd4ac9%3A0xef453f0793201c72!2sAv.%20Rivadavia%207855%2C%20C1407DYA%20CABA!5e0!3m2!1ses!2sar!4v1683507743882!5m2!1ses!2sar "  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </div>
    </>
  )
}
