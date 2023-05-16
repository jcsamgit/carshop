import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { cardData } from './CarData'
import "./CSS/carDetail.css"

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
    console.log("ITEMSSS",items)
  return (
    <div className='carDetail'>
        <div className='carDetailText'>
            <h1>{items.marca} {items.modelo} </h1>
            <p> Cuota y precios a consultar </p>
        </div>
        <figure className='imgContainer'>
            {
                items.colors?.map(color=>{
                    return(
                        <img src={color} key={toString(color)} title='mantenga click para agrandar' alt='autos del mismo modelo pero de diferentes colores como el azul crema blanco rojo gris plateado'></img>
                    )
                })
            }
        </figure>

        <div className='fichaContainer'>
            <h2>Ficha tecnica</h2>
            <figure>
                {
                    items.ficha?.map(ft=>{
                        return(
                            <img src={ft} key={toString(ft)}alt=''></img>
                            
                        )
                    })
                }
            </figure>
        </div>
    </div>
  )
}
