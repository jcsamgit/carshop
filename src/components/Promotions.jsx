import React from 'react'
import image2 from "../multimedia/promociones/image (2).jpeg"
import image3 from "../multimedia/promociones/image (3).jpeg"
import image6 from "../multimedia/promociones/image (6).jpeg"

import "./CSS/promotions.css"
import Whatsapp from './Whatsapp'
export default function Promotions() {
  return (
    <div className='promotionsContainer'>
        <Whatsapp/>
        <h1 className='title'>PROMOCIONES</h1>
        <div className='promoCard'>

            <div>
                {/* CRONOS */}
                <img src={image2} alt="imagen publicitaria sobre venta de auto con diferentes promociones" />
                <p>CONSULTAR PRECIO</p>
            </div>
            <div>
                <img src={image3} alt="imagen publicitaria sobre venta de auto con diferentes promociones" />
                <p>ENTREGA PACTADA DESDE CUOTA 4!</p>
                <h2>CONSULTAR CUOTAS</h2>
                <p>NEGOCIACION SEGURA!</p>
            </div>
            <div>
                <img src={image6} alt="imagen publicitaria sobre venta de auto con diferentes promociones" />
                <h2>CONSULTAR CUOTA</h2>
                <h2>ANTICIPO: A CONSULTAR</h2>
                <p>(O TU USADO)</p>
            </div>

        </div>
    </div>
  )
}
