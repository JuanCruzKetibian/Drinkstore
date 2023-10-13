import { useState } from 'react'

const Form = () => {


const [nombre, setNombre] = useState("")
const [email, setEmail] = useState("")
const [purchaseId, setPurchaseId] = useState("")

const handleSubmit = (e) =>{
    e.preventDefault()
    nombre === "" || email === "" ? alert("Existen campos vacios") : alert(`Registrado con el nombre ${nombre} y con el email ${email}`)

} 


    return(
        <>
        
        <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=>setNombre(e.target.value)}/>
        <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
        <button type='submit'>Enviar</button>
        </form>
        { purchaseId === "" ? <p>No has enviado informacion</p> : 
        <p>Tu compra se realizo con el ID:{purchaseId}</p>
        }
        </>
    )
}

export default Form