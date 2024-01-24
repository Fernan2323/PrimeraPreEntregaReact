import React from "react";
import './itemdetail.css';

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <section className="container">
    <div className="itemDetailProd">
      <img src={img} alt={nombre} />
      <h2>{nombre} </h2>
      <p> Precio: {precio} </p>
      <p> id: {id} </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
        culpa, ipsa dolor atque repellendus fugiat provident, rem debitis
        perspiciatis maxime veniam modi iste iusto natus mollitia beatae
        expedita! Magnam, ratione!
      </p>
      
    </div>
    </section>
  );
};

export default ItemDetail;
