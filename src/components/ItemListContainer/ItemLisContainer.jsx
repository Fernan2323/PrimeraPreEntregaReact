import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import './itemlistcontainer.css';
import {getProductos} from '../../asyncmock';

const ItemLisContainer = ({ greeting }) => {
  
  const [productos, setProductos] = useState([]);

  useEffect(() => {

    getProductos()

    .then(respuesta => setProductos(respuesta))
    .catch(error => console.error(error))
  },[])

  return (
    <div className="itemListcontainer bounce-in-top">
     {/*  <h2>{greeting}</h2> */}
      <ItemList productos={productos}/>
    </div>
  );
};

export default ItemLisContainer;
