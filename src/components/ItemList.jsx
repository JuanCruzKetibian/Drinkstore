import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {
    
    console.log(productos)
    return(
        <>
        {
            productos.map((p)=>{
                return(
                    <Item
                    name = {p.name}
                    precio = {p.precio}
                    stock = {p.stock}
                    />
                )
            })
        }

        
        </>
    )
    
    }
    
    export default ItemList