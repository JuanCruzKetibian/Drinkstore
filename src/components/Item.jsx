import React from 'react'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'
import ItemDetailContainer from './ItemDetailContainer'
import ItemListContainer from './ItemListContainer'

const Item = ({name, detalle}) => {
    return(
        <Card maxW='sm'>
  <CardBody>
    <Image
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{name}</Heading>
      <Text>{detalle}</Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button>
        <Link to={`/item/${id}`}>
        Agregar al carrito 
        </Link>
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
    
    )
    
    }
    
export default Item