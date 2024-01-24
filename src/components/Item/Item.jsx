
import './item.css';
import { Link } from 'react-router-dom';

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='item-prod'>
      
      <img src={img} alt={nombre} />
      <h3> {nombre} </h3>
      <p> id: {id} </p>
      <p> Precio: {precio} </p>
       <Link className='link-item' to={`/item/${id}`}> Ver detalles</Link>
      {/* <button> Ver detalles </button> */}
      
    </div>
  )
}

export default Item