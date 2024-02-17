import { useState } from 'react';
import { Link } from 'react-router-dom';
import './itemdetail.css';
import ItemCount from '../ItemCount/ItemCount';

// Importamos el useContext y el CartContext
import { CartContext } from '../../assets/CartContext/CartContext';
import { useContext } from 'react';

const ItemDetail = ({id, nombre, stock, precio, img}) => {

  // creamos un estado con la cantidad de productos agregados

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  // clase 11 context - modificaciones

  const {addCart} = useContext(CartContext);
   
  // creamos una funcion manejadora de la cantidad

  const manejadorcantidad = (cantidad) => {

    setAgregarCantidad(cantidad);

    //console.log('Productos agregados: ' + cantidad);
    
    // creamos un objeto con el item y la cantidad
    const item = {id, nombre, precio};
    addCart(item, cantidad);
  }

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
      {/* aca empleamos la logica de montaje del contador */}

       {

        agregarCantidad > 0 ? (<Link to='/cart'> Terminar compra </Link>) : (<ItemCount inicial = {1} stock = {stock} funcionAgregar = {manejadorcantidad} />)
       }
      
    </div>
    </section>
  );
};

export default ItemDetail;
