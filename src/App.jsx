import NavBar from "./components/NavBar/NavBar";
import ItemLisContainer from "./components/ItemListContainer/ItemLisContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
const App = () => {
  return (
    <div>
      <NavBar/>
    <ItemLisContainer greeting = 'Hola Profeeee !!!'/>
    <ItemDetailContainer/>
    </div>
  )
}

export default App