import { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore"

const Collection = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {

        const db = getFirestore()

        const itemsCollection = collection(db, "bebidasalcoholicas" )
        
        getDocs(itemsCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => doc.data())
            console.log(docs)
        })
    }, [])
    return (
        <div>{
        
            productos.map((p) => (
                <>
                <h3>Nombre: {p.nombre}</h3>
                <h4>$: {p.precio}</h4>
                <h5>cat: {p.categoria}</h5>
                </>
            ))
            
        }</div>
    )
}   
export default Collection