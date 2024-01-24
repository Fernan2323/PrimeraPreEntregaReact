import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import './itemlistcontainer.css';
import {getProductos, GetProductosPorcategoria} from '../../asyncmock';
import { useParams } from 'react-router-dom';

const ItemLisContainer = () => {
  
  const [productos, setProductos] = useState([]);

  const {idCategorias} = useParams([]);

  useEffect(() => {

    const funcionProductos = idCategorias ? GetProductosPorcategoria : getProductos;

    funcionProductos(idCategorias)
    .then(res => setProductos(res))
    .catch(error => console.log(error))
  },[idCategorias])

  return (
    <div className="itemListcontainer bounce-in-top">
      <ItemList productos={productos}/>
    </div>
  );
};

export default ItemLisContainer;
