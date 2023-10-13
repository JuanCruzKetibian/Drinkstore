import React from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
 
   const productos = [
    {id:1 , name:"Branca", precio: 2000, categoria: "Fernet", detalle:" El Fernet Branca es un amaro italiano con una rica historia. Es conocido por su sabor amargo y herbáceo, con matices de hierbas y especias. Se suele consumir como aperitivo o digestivo, a menudo mezclado con cola. Su perfil de sabor distintivo lo convierte en una bebida única y apreciada en todo el mundo.", stock:100},
                {id:2 , name:"1886", precio: 1500, categoria: "Fernet", detalle:"l Fernet 1886 es otra variante de este licor amargo italiano. Tiene un sabor similar al Fernet Branca pero puede tener diferencias sutiles en su receta. Es una opción popular para aquellos que disfrutan de bebidas con un toque amargo y complejidad de sabores.", stock:50},
                {id:3 , name:"Smirnoff", precio: 17000, categoria: "Vodka", detalle:"El vodka Smirnoff es un vodka clásico y versátil. Se caracteriza por su pureza y suavidad, lo que lo convierte en una base popular para cócteles. Es conocido por su amplia disponibilidad y precio asequible.", stock:20},
                {id:4 , name:"Skyy", precio: 1500, categoria: "Vodka", detalle:"Skyy Vodka es otro vodka de calidad, conocido por su filtración a través de carbón y su suavidad. Ofrece un sabor limpio y es utilizado en numerosos cócteles y martinis. Es apreciado por su enfoque en la calidad de los ingredientes.", stock:30},
                {id:5 , name:"Johnnie Walker", precio: 9000, categoria: "Whisky", detalle:"ohnnie Walker es una marca escocesa de whisky con una amplia gama de etiquetas, desde el Red Label hasta el Blue Label. Ofrecen una variedad de sabores, desde los más suaves hasta los más ahumados, lo que lo hace adecuado para diferentes preferencias de whisky.", stock:40},
                {id:6 , name:"Jack Daniels", precio: 8000, categoria: "Whisky", detalle:"El Whisky Jack Daniel's es un whisky estadounidense que se destaca por su sabor suave y notas de caramelo y vainilla. Es un whisky icónico de Tennessee y se puede disfrutar solo o en cócteles como el Jack and Coke.", stock:80},
                {id:7 , name:"Gordon", precio: 2500, categoria: "Gin", detalle:"El Gin Gordon's es un gin clásico y ampliamente reconocido. Tiene un sabor suave y equilibrado, con notas de enebro y cítricos. Es una base común para cócteles como el Gin Tonic y el Martini, y es apreciado por su versatilidad en la coctelería.", stock:55},
                {id:8 , name:"Beefetear", precio: 5000, categoria: "Gin", detalle:"Beefeater es otro gin icónico con raíces en Londres. Ofrece un sabor más pronunciado de enebro y una complejidad de especias, lo que lo convierte en una elección favorita entre los amantes del gin. Es una opción popular para cócteles clásicos y contemporáneos.", stock:22},
                {id:9 , name:"Portillo", precio: 2000, categoria: "Vino", detalle:" El Vino Portillo es un vino argentino que ofrece una amplia gama de variedades, desde Malbec hasta Cabernet Sauvignon. Es conocido por su calidad y sabor frutado, con matices de la región de Mendoza en Argentina. Es una opción versátil para maridar con diferentes comidas.", stock:9},
                {id:10 , name:"Luigi Bosca", precio: 5000, categoria: "Vino", detalle:"Luigi Bosca es una bodega de renombre en Argentina, y sus vinos son altamente valorados. Ofrecen una selección de vinos de alta calidad, incluyendo Malbec y Cabernet Sauvignon. Estos vinos suelen ser elegantes, complejos y expresivos, perfectos para los amantes del vino.", stock:7}
    
    
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
    .then((res) => {

    })
    .catch((error) => {

    })

    return(
        <>
         <ItemDetail productos={productos}/>
        </>
    )
    
    }
    
    export default ItemDetailContainer