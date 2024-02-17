import { useState } from "react";
import { Link } from "react-router-dom";
import "./itemdetail.css";
import ItemCount from "../ItemCount/ItemCount";

import { CartContext } from "../../assets/CartContext/CartContext";
import { useContext } from "react";

const ItemDetail = ({ id, nombre, stock, precio, img }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { addCart } = useContext(CartContext);

  const manejadorcantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    addCart(item, cantidad);
  };

  return (
    <section className="container">
      <div className="itemDetailProd">
        <img src={img} alt={nombre} />
        <h2>{nombre} </h2>
        <p> Precio: {precio} </p>
        <p> id: {id} </p>
        <p> Stock: {stock} </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
          culpa, ipsa dolor atque repellendus fugiat provident, rem debitis
          perspiciatis maxime veniam modi iste iusto natus mollitia beatae
          expedita! Magnam, ratione!
        </p>

        {agregarCantidad > 0 ? (
          <Link to="/cart"> Terminar compra </Link>
        ) : (
          <ItemCount
            inicial={1}
            stock={stock}
            funcionAgregar={manejadorcantidad}
          />
        )}
      </div>
    </section>
  );
};

export default ItemDetail;
