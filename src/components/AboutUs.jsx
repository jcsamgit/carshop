import React from 'react'
import "./CSS/aboutUs.css"

export default function AboutUs() {
  return (
    <div className='containerUs'>
      <div>
        <p>Somos una empresa con mas de 20años en el mercado automotor con agencias oficiales en CABA y gran Buenos Aires. Visitenos en zona Beiro y Gral Paz.</p>
        <p>Hacemos entregas garantizada y atencion post-venta, respaldo y confianza avalan nuestra empresa</p>

      </div>
      <div>
        <iframe className='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.466193378294!2d-58.532417982556154!3d-34.61765750000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7de3530252f%3A0x99c143ec4a7e6d6a!2sAv.%20Francisco%20Beir%C3%B3%205795%2C%20C1419%20CABA!5e0!3m2!1ses!2sar!4v1681437188578!5m2!1ses!2sar"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

    </div>
  )
}
