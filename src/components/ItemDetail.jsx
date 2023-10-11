import React from 'react'
import { Center, Card, CardHeader, Heading, CardBody } from "@chakra-ui/react"
import { useParams } from 'react-router-dom';

const ItemDetail = ({ productos }) => {
    
    const { id } = useParams();
    
    const filtroproducto = productos.filter((producto) => producto.id == id)

    return(
        <>
        {
            filtroproducto.map((p)=>{
                <Center>
                    <Card>
                        <CardHeader>
                            <Heading>
                            {p.name}
                            </Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>
                            {p.detalle}
                            {p.categoria}
                            </Text>
                        </CardBody>
                    </Card>
                </Center>
            })
        }

        
        </>
    )
    
    }
    
    export default ItemDetail