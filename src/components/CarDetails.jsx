import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { cardData } from './CarData'

export default function CarDetails() {
    const {id}=useParams()
    const [items, setItems]=useState([])

    useEffect(()=>{
        let promesa= new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(cardData)
            }, 0)
        })
        promesa.then((respuesta)=>{
            const encontrado= respuesta.find(item=>item.id===id)
            setItems(encontrado)
        }).catch((error)=>{
            console.log(error)
        })
    },[id])
  return (
    <div>
        {/* <figure>
            <img src={items.image} alt="" style={{width:"333px"}} />
        </figure> */}
        <div>
            <p>{items.marca} </p>
            <p>{items.modelo} </p>
            <p>{items.precio} </p>
        </div>
        <div>
            <h2>Caracteristicas tecinicas</h2>
            {/* <figure>
                <img src={items.image} alt="" style={{width:"333px"}} />
            </figure> */}
        </div>
    </div>
  )
}
