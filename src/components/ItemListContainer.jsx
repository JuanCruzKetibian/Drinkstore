import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = () => {
 
   const productos = [
                {id:1 , name:"Fernet", precio: 1000, stock:100},
                {id:2 , name:"Vino", precio: 2000, stock:200},
                {id:3 , name:"Vodka", precio: 3000, stock:300},
                {id:4 , name:"Gin", precio: 3300, stock:140},
                {id:5 , name:"Whisky", precio: 5000, stock:30}
    ]

    const mostrarProductos = new Promise ((resolve, reject)=>{
        if (productos.length > 0){
            setTimeout(()=>{
                resolve(productos)
            }, 5000)
        
        }
        else{
            reject("No existen productos")
        }
    })

    return(
        <>
        <ItemList productos={productos}/>
        </>
    )
    
    }
    
    export default ItemListContainer