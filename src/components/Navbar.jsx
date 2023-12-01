import React from 'react'
import CartWidget from './CartWidget'
import '../assets/Navbar.css'



const Navbar = () => {

    const brand = "DIS TIN TO"

    return (
    <>
        <header className='header'>
            <div className='container'>
                <h1>{brand}</h1>
                <select className='container_select'>
                    <option value="Categoria 1">Categorai 1</option>
                    <option value="Categoria 2">Categorai 2</option>
                    <option value="Categoria 3">Categorai 3</option>
                </select>
                
                <CartWidget/>
            </div>
        </header>
        
    </>
  )
}

export default Navbar