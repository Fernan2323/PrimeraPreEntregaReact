import { useState, createContext } from "react";

export const CartContext = createContext({
  carrito: [],
  total: 0,
  cantidadTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantidadTotal, setCantidadTotal] = useState(0);

  console.log(carrito);
  console.log("Monto total: ", total);
  console.log("Cantidad de items: ", cantidadTotal);

  const addCart = (item, cantidad) => {
    const productoExistente = carrito.find((prod) => prod.item.id === item.id);

    if (!productoExistente) {
      setCarrito((prev) => [...prev, { item, cantidad }]);
      setCantidadTotal((prev) => prev + cantidad);
      setTotal((prev) => prev + item.precio * cantidad);
    } else {
      const cartUpdate = carrito.map((prod) => {
        if (prod.item.id === item.id) {
          return { ...prod, cantidad: prod.cantidad + cantidad };
        } else {
          return prod;
        }
      });
      setCarrito(cartUpdate);
      setCantidadTotal((prev) => prev + cantidad);
      setTotal((prev) => prev + item.precio * cantidad);
    }
  };

  const deleteItem = (id) => {
    const productoEliminado = carrito.find((prod) => prod.item.id === id);

    const cartUpdate = carrito.filter((prod) => prod.item.id !== id);

    setCarrito(cartUpdate);
    setCantidadTotal((prev) => prev - productoEliminado.cantidad);
    setTotal(
      (prev) =>
        prev - productoEliminado.item.precio * productoEliminado.cantidad
    );
  };

  const deleteCart = () => {
    setCarrito([]);
    setTotal(0);
    setCantidadTotal(0);
  };

  return (
    <CartContext.Provider
      value={{ carrito, total, cantidadTotal, addCart, deleteCart, deleteItem }}
    >
      {" "}
      {children}{" "}
    </CartContext.Provider>
  );
};
