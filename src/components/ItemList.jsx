import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {

    return(
        <>
        {
            productos.map((p)=>{
                return(
                    <>
                    <Item
                    key={p.id}
                    name = {p.name}
                    detalle = {p.detalle}
                    />
                    </>
    
                )
            })
        }

        
        </>
    )
    
    }
    
    export default React.memo(ItemList)