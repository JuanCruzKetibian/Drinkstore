import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({}) => {
    
    const { categoria } = useParams()
   const productos = [
                {id:1 , name:"Branca", precio: 2000, categoria: "Fernet", detalle:"descripcion branca"},
                {id:2 , name:"1886", precio: 1500, categoria: "Fernet", detalle:"descripcion 1886"},
                {id:3 , name:"Smirnoff", precio: 17000, categoria: "Vodka", detalle:"descripcion smirnoff"},
                {id:4 , name:"Sky", precio: 1500, categoria: "Vodka", detalle:"descripcion sky"},
                {id:5 , name:"Johnnie Walker", precio: 9000, categoria: "Whisky", detalle:"descripcion johnnie walker"},
                {id:6 , name:"Jack Daniels", precio: 8000, categoria: "Whisky", detalle:"descripcion jack daniels"},
                {id:7 , name:"Gordon", precio: 2500, categoria: "Gin", detalle:"descripcion gordon"},
                {id:8 , name:"Beefetear", precio: 5000, categoria: "Gin", detalle:"descripcion beefetear"}
    ]

    const mostrarProductos = new Promise ((resolve, reject)=>{
        if (productos.length > 0){
            setTimeout(()=>{
                resolve(productos)
            }, 10)
        
        }
        else{
            reject("No existen productos")
        }
    })

    mostrarProductos
    .then((resultado) =>{
        
    })
    .catch((error) => {

    })

    const filtoproducto = productos.filter((producto) => producto.categoria === categoria)

    return(
        
        <>
        <ItemList productos={filtoproducto}/>
        
        </>
    )
    
    }
    
    export default ItemListContainer