import { collection, getFirestore, addDoc } from 'firebase/firestore'
import { useState } from 'react'

const SendOrder = () => {
    const [orderId, setOrderId] = useState(null)
    const [bebida, setBebida] = useState("")
    const [nombre, setName] = useState("")    
    const [precio, setPrecio] = useState("")
    const db = getFirestore()

    const handleSubmit = (e) => {
        e.preventDefault()
        addDoc(orderCollection, order).then(({ id }) => 
            setOrderId(id))
    }      

    const order = {
        bebida, nombre, precio
    }

    const orderCollection = collection(db, "Ordenbebida")

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Bebida'
                onChange={(e)=> setBebida(e.target.value)} />
                <input type="text" placeholder='Nombre'
                onChange={(e) => setName(e.target.value)}/>
                <input type="number" placeholder='Precio'
                onChange={(e) => setPrecio(e.target.value)}/>
                <button type='submit'>Enviar informacion</button>
            </form>
            Order ID:{orderId}
        </div>
    )
}
export default SendOrder
