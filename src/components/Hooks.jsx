import { useState } from 'react'

const Hooks = () => {
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
      <button onClick={handleSumar}>Sumar</button>
      <button onClick={handleRestar}>Restar</button>
      <button onClick={onAdd}>Agregar</button>
    </div>
  )
}

export default Hooks