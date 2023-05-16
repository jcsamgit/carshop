import React from 'react'
import "./CSS/home.css"
import CarouselBT from './CarouselBT'
import Cards from './Cards'

export default function Home() {

  return (
    <div className='home'>
        <CarouselBT/>
        <br />
        <h1 className='subtitleHome'>Modelos disponibles</h1>
        <Cards/>
    </div>
  )
}