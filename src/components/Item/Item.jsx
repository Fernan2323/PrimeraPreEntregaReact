import React from 'react'
import './item.css'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='item-prod'>
      
      <img src={img} alt={nombre} />
      <h3> {nombre} </h3>
      <p> {id} </p>
      <p> Precio: {precio} </p>
      <button> Ver detalles </button>
      
    </div>
  )
}

export default Item