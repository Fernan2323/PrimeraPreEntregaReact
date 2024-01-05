import React from "react";
import './itemlistcontainer.css'

const ItemLisContainer = ({ greeting }) => {
  return (
    <div className="itemList bounce-in-top">
      <h2>{greeting}</h2>
    </div>
  );
};

export default ItemLisContainer;
