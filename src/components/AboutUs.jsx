import React from 'react'
import "./CSS/aboutUs.css"

export default function AboutUs() {
  return (
    <>
      <h1 className='visitenos'>VISITENOS</h1>
      <div className='containerUs'>
        <div>
          <p>Somos una empresa con mas de 20años en el mercado automotor con agencias oficiales en CABA y gran Buenos Aires. Visitenos en zona Beiro y Gral Paz. 
          <br/>  
          Nuestro objetivo es ayudarte a alcanzar tu 0km de la manera mas facil y accesible posible.
          Hacemos entregas garantizada y atencion post-venta. Respaldo y confianza avalan nuestra empresa</p>

        </div>
        <div>
          <iframe className='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.905161268173!2d-58.47793002500261!3d-34.631836858982524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc991ccdd4ac9%3A0xef453f0793201c72!2sAv.%20Rivadavia%207855%2C%20C1407DYA%20CABA!5e0!3m2!1ses!2sar!4v1683507743882!5m2!1ses!2sar "  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </div>
    </>
  )
}
