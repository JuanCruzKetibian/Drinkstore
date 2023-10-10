import React from 'react'
import Item from './Item'

const ItemDetail = ({ productos }) => {
    
    console.log(productos)
    return(
        <>
        {
            productos.map((p)=>{
                return(
                    <Item
                    name = {p.name}
                    detalle = {p.detalle}
                    />
                )
            })
        }

        
        </>
    )
    
    }
    
    export default ItemDetail