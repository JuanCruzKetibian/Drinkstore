import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar" 
import Hooks from "./components/hooks"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Cart from "./components/Cart"

const App = () => {
  const greeting = "Bienvenidos a Drinkstore"

  return (
    <>

    <BrowserRouter>

    
    
    <NavBar/>
    
    <Routes>  
    
    <Route exact path="/" element={<ItemListContainer/>}/>
    <Route exact path="/about" element={<About/>}/>
    <Route exact path="/cart" element={<Cart/>}/>
    <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
    <Route exact path="/product/:categoria" element={<ItemListContainer/>}/>


    </Routes>
    
    
    </BrowserRouter>
    </>
  )
}



export default App