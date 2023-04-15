import React from 'react'

import image1 from "../multimedia/image (1).jpeg"
import image2 from "../multimedia/image (2).jpeg"
import image3 from "../multimedia/image (3).jpeg"
import image4 from "../multimedia/image (4).jpeg"
import image5 from "../multimedia/image (5).jpeg"
import image6 from "../multimedia/image (6).jpeg"
import image7 from "../multimedia/image (7).jpeg"

import publicidad from "../multimedia/publicidad/publicidad.jpeg"
import publicidad2 from "../multimedia/publicidad/publicidad2.jpeg"
import publicidad3 from "../multimedia/publicidad/publicidad3.jpeg"
import publicidad4 from "../multimedia/publicidad/publicidad4.jpeg"
import publicidad5 from "../multimedia/publicidad/publicidad5.jpeg"
import publicidad6 from "../multimedia/publicidad/publicidad6.jpeg"

export default function CarouselBT() {
  return (
    <div className='carouselContainer'>
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={publicidad2} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        {/* <h5>First slide label</h5> */}
                        {/* <p>Some representative placeholder content for the first slide.</p> */}
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={publicidad3} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        {/* <h5>Second slide label</h5> */}
                        {/* <p>Some representative placeholder content for the second slide.</p> */}
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={publicidad4} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        {/* <h5>Third slide label</h5> */}
                        {/* <p>Some representative placeholder content for the third slide.</p> */}
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={publicidad5} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        {/* <h5>Third slide label</h5> */}
                        {/* <p>Some representative placeholder content for the third slide.</p> */}
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={publicidad6} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        {/* <h5>Third slide label</h5> */}
                        {/* <p>Some representative placeholder content for the third slide.</p> */}
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    </div>
  )
}
