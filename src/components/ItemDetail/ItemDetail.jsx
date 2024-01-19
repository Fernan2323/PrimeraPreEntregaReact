import React from "react";

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div>
      <h2>Nombre: {nombre} </h2>
      <h3>Precio: {precio} </h3>
      <p>ID: {id} </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
        culpa, ipsa dolor atque repellendus fugiat provident, rem debitis
        perspiciatis maxime veniam modi iste iusto natus mollitia beatae
        expedita! Magnam, ratione!
      </p>
      <img src={img} alt={nombre} />
    </div>
  );
};

export default ItemDetail;
