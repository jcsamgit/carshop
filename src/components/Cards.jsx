import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { cardData } from './CarData'
import Card from './Card'

export default function Cards() {
    const [items,setItems]= useState([])
    const {id}= useParams()

    useEffect(()=>{
        let promesa= new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(cardData)
            },0)
        })
        promesa.then((items)=>{
            if(id){
                const filteredId= items.filter(
                    (item)=>item.id===id
                )
                setItems(filteredId)
            }else{
                setItems(items)
            }
        }).catch((error)=>{
            console.log(error)
        })
    },[id])


  return (
    <>
        <div className='cardsContainer'>
            {
                items.map(card=>(
                    <Card card={card}/>
                ))
            }
        </div>
    </>
  )
}
