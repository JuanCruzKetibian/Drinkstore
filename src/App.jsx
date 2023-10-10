import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar" 
import Hooks from "./components/hooks"

const App = () => {
  const greeting = "Bienvenidos a Drinkstore"

  return (
    <>

   
    <NavBar/>
    <ItemListContainer/>
    <Hooks/> 
    </>
  )
}

export default App