import { useState } from 'react'

const ItemCount = () => {
  const [cantidad, setCantidad] = useState(0);

  const onAdd = () => {
    alert(`agregado al carrito ${cantidad} unidades`);
  }

  const handleSumar = () => {
    if (cantidad < 10) {
      setCantidad(cantidad + 1);
    }
  }

  const handleRestar = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  }

  return (
    <div>
      <p>{cantidad}</p> 
      <button onClick={handleSumar}>Agregar</button>    
      <button onClick={handleRestar}>Quitar</button>
      <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  )
}


export default ItemCount