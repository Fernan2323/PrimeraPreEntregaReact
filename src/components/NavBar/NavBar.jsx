import React from 'react'
import CarWidget from '../CarWidget/CarWidget'
import './navbar.css'

const NavBar = () => {
  return (
    <header>
        <h1>
            ProX Gaming Shop
        </h1>
        <nav>
            <ul>
                <li>inicio</li>
                <li>arma tu pc</li>
                <li>categorias</li>
                <li>contacto</li>
            </ul>
        </nav>
        <CarWidget/>
    </header>
    
  )
}

export default NavBar