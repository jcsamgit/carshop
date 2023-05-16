import React from 'react'
import { Link } from 'react-router-dom'
import "./CSS/navBar.css"
import logo from "../multimedia/logo.jpeg"

export default function NavBar() {
  return (
    <nav>
        <div className='logoContainer'>
            {/* <img className='logo logo1' src={logo} alt="logo" /> */}
        </div>
        <ul>
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="/about-us">Sobre mi</Link>
            </li>
            <li>
                <Link to="/promotions">Promociones</Link>
            </li>
        </ul>
    </nav>
  )
}
