import React from "react";
import './itemlistcontainer.css'

const ItemLisContainer = ({ greeting }) => {
  return (
    <div className="itemList">
      <h2>{greeting}</h2>
    </div>
  );
};

export default ItemLisContainer;
