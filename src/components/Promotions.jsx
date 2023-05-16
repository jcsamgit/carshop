import React from 'react'
import image1 from "../multimedia/promociones/image (1).jpeg"
import image2 from "../multimedia/promociones/image (2).jpeg"
import image3 from "../multimedia/promociones/image (3).jpeg"
import image4 from "../multimedia/promociones/image (4).jpeg"
import image5 from "../multimedia/promociones/image (5).jpeg"
import image6 from "../multimedia/promociones/image (6).jpeg"

import "./CSS/promotions.css"
import Whatsapp from './Whatsapp'
export default function Promotions() {
  return (
    <div className='promotionsContainer'>
        <Whatsapp/>
        <h1 className='title'>PROMOCIONES</h1>
        <div className='promoCard'>
            {/* <div>
                <img src={image1} alt="imagen publicitaria sobre venta de auto con diferentes promociones" />
                <h2> <span>$46875</span> cuotas sin impuestos</h2>
                <p>ACCEDE CON DNI + MONOTRIBUTO! LLAVE CONTRA LLAVE, POLARIZADO + TUERCAS DE SEGURIDAD BONIFICADO!</p>
            </div> */}
            <div>
                {/* CRONOS */}
                <img src={image2} alt="imagen publicitaria sobre venta de auto con diferentes promociones" />
                {/* <h2><span>$5.489.100</span> </h2> */}
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
