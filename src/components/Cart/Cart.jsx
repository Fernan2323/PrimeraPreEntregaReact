import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { CartContext } from "../../assets/CartContext/CartContext";
import { useContext } from "react";
import './cart.css';

const Cart = () => {
    const {carrito, total, deleteCart, cantidadTotal} = useContext(CartContext);
    if(cantidadTotal === 0){
    return (
     <>
       <h2>No hay prductos en el carrito</h2>
       <Link to='/'> Ver Productos </Link>    
      </>
        )
    }

  return (
    <section>
       <div className="cart">
       {
            carrito.map(prod => <CartItem key={prod.id} {...prod}/>)

        }
           <h3> Total:$ {total} </h3>
           <button className="delete-cart-btn" onClick={() => deleteCart()}> <strong>Vaciar Carrito</strong> </button>
           <Link className="final-btn" to='/checkout'> <strong>Finalizar Compra</strong> </Link>
       </div>
            </section>
  )
}

export default Cart