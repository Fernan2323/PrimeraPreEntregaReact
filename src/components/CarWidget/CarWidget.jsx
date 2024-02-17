import { useContext } from 'react';
import { CartContext } from '../../assets/CartContext/CartContext';
import { Link } from 'react-router-dom';
import './carwidget.css'

const CarWidget = () => {
  const { cantidadTotal} = useContext(CartContext);

  return (
    
    <div className='car' >
       <Link to='/cart'>
         <img className='img-cart' src="../public/img/carrito.png" alt="carrito" />
        {
          cantidadTotal > 0 && <p> {cantidadTotal} </p> 
        }  
        
        
       </Link>
    </div>
  )
}

export default CarWidget