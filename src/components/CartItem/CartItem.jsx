import "./cartItem.css";
import { CartContext } from "../../assets/CartContext/CartContext";
import { useContext } from "react";

const CartItem = ({ item, cantidad }) => {
  const { deleteItem } = useContext(CartContext);
  return (
    <div className="cart-item">
      <h3> {item.nombre} </h3>
      <p> Cantidad: {cantidad} </p>
      <p onClick={() => deleteItem(item.id)} className="borrar-item">
        Precio: {item.precio} ❌
      </p>
    </div>
  );
};

export default CartItem;
