import "./item.css";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../assets/CartContext/CartContext";
import { useContext } from "react";
import { useState } from "react";

const Item = ({ id, nombre, precio, img, stock }) => {

   
    const [agregarCantidad, setAgregarCantidad] = useState(0);
  
    const { addCart } = useContext(CartContext);
  
    const manejadorcantidad = (cantidad) => {
      setAgregarCantidad(cantidad);
  
      const item = { id, nombre, precio };
      addCart(item, cantidad);
    };

  return (
    <div className="item-prod">
        <h3> {nombre} </h3>
      <img src={img} alt={nombre} />
    
      <p> $ {precio} </p>
      <Link className="link-item" to={`/item/${id}`}>
        {" "}
        Ver detalles
      </Link>
      {agregarCantidad > 0 ? (
          <Link className="link-item" to="/cart"> Ir al carrito </Link>
        )
        
        : (
          <ItemCount
            inicial={1}
            stock={stock}
            funcionAgregar={manejadorcantidad}
          />
        )}

    </div>
  );
};

export default Item;
