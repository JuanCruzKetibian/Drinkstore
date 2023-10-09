import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

const App = () => {
  const greeting = "Bienvenidos a Drinkstore"

  return (
    <>
    <ItemListContainer greeting={greeting}/>
    <NavBar/>
    </>
  )
}

export default App