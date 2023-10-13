import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar" 
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
    
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/about" element={<About/>}/>
    <Route exact path="/cart" element={<Cart/>}/>
    <Route exact path="/categoria/:categoria" element={<ItemListContainer/>}/>
    <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>

    </Routes>
    
    
    </BrowserRouter>
    </>
  )
}



export default App