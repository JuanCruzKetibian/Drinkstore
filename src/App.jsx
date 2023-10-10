import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar" 
import Hooks from "./components/hooks"
import ItemDetailContainer from "./components/ItemDetailContainer"

const App = () => {
  const greeting = "Bienvenidos a Drinkstore"

  return (
    <>
    <NavBar/>
    <ItemDetailContainer/>
    </>
  )
}

export default App