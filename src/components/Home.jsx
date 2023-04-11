import React from 'react'
import image1 from "../multimedia/image (1).jpeg"
import image2 from "../multimedia/image (2).jpeg"
import image3 from "../multimedia/image (3).jpeg"
import image4 from "../multimedia/image (4).jpeg"
import image5 from "../multimedia/image (5).jpeg"
import image6 from "../multimedia/image (6).jpeg"
import image7 from "../multimedia/image (7).jpeg"
import "./CSS/home.css"
import CarouselBT from './CarouselBT'
// import Carousel from './Carousel'
// import Cards from './Cards'

export default function Home() {
  // const items=[image1, image2, image3,image4]
//   const items = [
//     { image: image1, alt: "Imagen 1" },
//     { image: image2, alt: "Imagen 2" },
//     { image: image3, alt: "Imagen 3" },
//     { image: image4, alt: "Imagen 4" },
//     { image: image5, alt: "Imagen 5" },
//     { image: image6, alt: "Imagen 6" },
//     { image: image7, alt: "Imagen 7" },
//   ];
  

  return (
    <div className='home'>
        <h1 className='titleHome'>TITULO</h1>
        {/* CAROUSEL */}
        <CarouselBT/>
    </div>
  )
}