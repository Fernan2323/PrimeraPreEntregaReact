//1) importamos useState y createContext para crear un contexto q almacenara la logica del carrito
import { useState, createContext } from "react";

//2) creamos el nuevo contexto
// le podemos dar como valor inicial un objeto q tiene las siguientes prpiedades

export const CartContext = createContext({
  carrito: [],
  total: 0,
  cantidadTotal: 0,
});

//3) creamos un componentes llamado "CartProvider"

export const CartProvider = ({children}) => {
  // usamos useState para generar algunos estados para almacenar el carrito, el total y la cantidadTotal
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantidadTotal, setCantidadTotal] = useState(0);

  // hacemos console.log momentaneamente para ver q se este actualizando todocorrectamente

  console.log(carrito);
  console.log("Monto total: ", total);
  console.log("Cantidad de items: ", cantidadTotal);

  // Funcion agregar al carrito

  const addCart = (item, cantidad) => {
    const productoExistente = carrito.find((prod) => prod.item.id === item.id);

    if (!productoExistente) {
      setCarrito((prev) => [...prev, { item, cantidad }]);
      setCantidadTotal((prev) => prev + cantidad);
      setTotal((prev) => prev + item.precio * cantidad);
   
          // la sintaxis : setCarrito(prev => [...prev, {item, cantidad}]);
         // se usa para creart un nuevo array a partir del estado anterior del carrito (prev) y agregar un nuevo objeto, q representa el nuevo producto

    } else{
        const cartUpdate = carrito.map(prod => {

            if(prod.item.id === item.id){
                
                return {...prod, cantidad: prod.cantidad + cantidad};
            } else {
                return prod;
            }
        })
        setCarrito(cartUpdate);
        setCantidadTotal((prev) => prev + cantidad);
        setTotal((prev) => prev + item.precio * cantidad);

    } 
}
// FUncion para eliminar productos del carrito

const deleteItem = (id) => {

    // me guardo una referencia del producto q vamos a borrar
    const productoEliminado = carrito.find(prod => prod.item.id === id);

    // ahora lo elimono del carrito

    const cartUpdate = carrito.filter(prod => prod.item.id !== id);

    setCarrito(cartUpdate);
    setCantidadTotal(prev => prev - productoEliminado.cantidad);
    setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad));
}

// Funcion para vaciar el carrito

const deleteCart = () => {

    setCarrito([]);
    setTotal(0);
    setCantidadTotal(0);
}

// 5) Usamos el value para enviar el valor del carrito, total, cantidadTotal y ls funciones.
return (
    <CartContext.Provider value={{carrito, total, cantidadTotal, addCart,
    deleteCart, deleteItem}}> {children} </CartContext.Provider>
)

// le tenemos q agregar el children, q es una propiedad especial q usamos para representar a todos los componentes q puedan necesitar el carrito y sus funciones

}
