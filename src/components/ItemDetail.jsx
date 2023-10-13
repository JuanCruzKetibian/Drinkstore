import React from 'react'
import { Center, Card, CardHeader, Heading, CardBody, CardFooter, Text, Button } from "@chakra-ui/react"
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ({ productos }) => {
    
    const { id } = useParams();
    
    const filtroproducto = productos.filter((productos) => productos.id == id)

    return(
        <div>   
        {
            filtroproducto.map((p)=>{
                return(
                <div key={p.id}>
                <Center>
                    <Card>
                        <CardHeader>
                            <Heading>
                            {p.name}
                            </Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>
                            ${p.precio}
                            </Text> 
                            <Text>
                            Stock: {p.stock}
                            </Text> 
                            <CardFooter>
                                <ItemCount/>
                            </CardFooter>
                        </CardBody>
                    </Card>
                </Center>
                </div>
                )
            })
        }

        
        </div>
    )
    
    }
    
    export default ItemDetail