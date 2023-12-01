import React from 'react'
import '../assets/ItemLineContainer.css'
import { useState } from 'react'

const ItemLineContainer = () => {
    
    const [mensaje, setMensaje] = useState("Bienvenido a mi Pagina")

  return (
    <div>
        <h1 className='mensaje'>{mensaje}</h1>
        <div className='container_elements'>
        <button className= 'carrito' onClick={() => setMensaje('Hola gracias por llegar hasta aca')}>Click</button>
        <button className= 'carrito' onClick={() => setMensaje('Bienvenido a mi Pagina')}>Reset</button>
        
      </div>
        
    </div>
  )
}

export default ItemLineContainer