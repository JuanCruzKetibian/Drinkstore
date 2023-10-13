import React, { useState } from 'react'; // Añade 'useState' a los imports
import { Link } from 'react-router-dom';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Button, ButtonGroup, IconButton } from '@chakra-ui/react';

const ItemCount = () => {
  const [cantidad, setCantidad] = useState(0);
  const [ocultar, setOcultar] = useState(false); // Agrega el estado 'ocultar' y establece su valor inicial

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

  const reset = () => {
    setCantidad(0);
  }

  const onAdd = () => {
    alert(`agregado al carrito ${cantidad} unidades`);
    setOcultar(true); // Cuando se agrega al carrito, ocultar los botones y mostrar el enlace
  }

  return (
    <>
      {!ocultar && (
        <>
        <ButtonGroup size='md' isAttached variant='outline'>
          <IconButton onClick={handleRestar} icon={<MinusIcon />} />
          <Button>{cantidad}</Button>
          <IconButton onClick={handleSumar} icon={<AddIcon />} />
        </ButtonGroup>
        <Button onClick={onAdd}>Agregar al carrito</Button>    
    </> 
    ) 
    }
    </>
  );
}

export default ItemCount;