import React from 'react'
import { Card, CardBody, Heading, Text, CardFooter, Button, CardHeader } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({ name, detalle, categoria, id }) => {
    return(
  
    <Card>
      <CardHeader>
        <Heading size='md'>
          {name}
        </Heading>
      </CardHeader>
      <CardBody>
      <Text>{detalle}</Text>
      <Text>{categoria}</Text>
      </CardBody>
      <CardFooter>
        <Button>
          <Link to={`/item/${id}`}>
        Detalle 
          </Link>
        </Button>
      </CardFooter>
    </Card>
    )    
    }
    
export default Item