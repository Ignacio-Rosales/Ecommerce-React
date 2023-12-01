import React from 'react'
import '../assets/ItemLineContainer.css'
import { useState } from 'react'
import { Button } from 'react-bootstrap';

const ItemLineContainer = () => {
    
    const [mensaje, setMensaje] = useState("Bienvenido a mi Pagina")

  return (
    <div>
        <h1 className='mensaje'>{mensaje}</h1>
        <div className='container_elements'>
        <Button variant= "primary" onClick={() => setMensaje('DIS TIN TO pagina de E-commerce')}>Click</Button>
        <Button variant= "primary" onClick={() => setMensaje('Bienvenido a mi Pagina')}>Reset</Button>
        
      </div>
        
    </div>
  )
}

export default ItemLineContainer