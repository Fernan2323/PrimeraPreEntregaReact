import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// Importamos el Provider
// Envolvemos la app con el Provider
import { CartProvider } from "./assets/CartContext/CartContext";
import Cart from "./components/Cart/Cart";
import CargarArray from "./components/CargarArray/CargarArray";
import Checkout from "./components/Checkout/Checkout";
const App = () => {
  return (
    <div>
    <BrowserRouter>
    <CartProvider>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/categorias/:idCategorias" element={<ItemListContainer/>}/>
        <Route path="/item/:idItem" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        
    </Routes>
    </CartProvider>
    </BrowserRouter>
    {/* <CargarArray/> */}
    </div>
  )
}

export default App