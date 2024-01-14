import NavBar from "./components/NavBar/NavBar";
import ItemLisContainer from "./components/ItemListContainer/ItemLisContainer";
import React from 'react'

const App = () => {
  return (
    <div>
      <NavBar/>
    <ItemLisContainer greeting = 'Hola Profeeee !!!'/>

    </div>
  )
}

export default App