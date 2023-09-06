import NavBar from "./components/NavBar"
import { useState } from "react"
import Dropdown from 'react-bootstrap/Dropdown';
import ItemListContainer from "./components/ItemListContainer"
import CartWidget from "./components/CartWidget"

const App = () => {
  const productos = ['Arroz', 'Yerba', 'Fideo'];
  const greeting = "Bienvenidos a Drinkstore"
  const [articulo, setArticulo] = useState(0)
  const mensaje = "Seleccione su producto"

  return (
    <>
    <CartWidget
      greeting={greeting}
    />
    <ItemListContainer
       mensaje={mensaje}
      />
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Selecciona un producto
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {productos.map((producto, index) => (
            <Dropdown.Item key={index}>{producto}</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    <NavBar    
      articulo={articulo}
    />
    <button onClick={() => setArticulo(articulo + 1)}>Agregar</button>
    <button onClick={() => setArticulo(articulo - 1)}>Quitar</button>
      
    
    </>
  )
}

export default App
