import { useState } from "react";
import "./itemCount.css";

const ItemCount = ({ inicial, stock, funcionAgregar }) => {
  const [contador, setContador] = useState(1);

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };
  return (
    <>
      <div className="itemCountDiv">
        <button onClick={decrementar}> - </button>

        <p> {contador} </p>

        <button onClick={incrementar}> + </button>
      </div>

      <button className="btn-count" onClick={() => funcionAgregar(contador)}>
        {" "}
        Agregar al carrito{" "}
      </button>
    </>
  );
};

export default ItemCount;
