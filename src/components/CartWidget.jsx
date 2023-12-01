import React from 'react'
import { FaBeer } from "react-icons/fa";
import '../assets/Cart-Widget.css';



const CartWidget = () => {

  return (
    <div className='cart-widget'>
        <FaBeer />
        <div className="qty-display">0</div>
    </div>
  )
}

export default CartWidget