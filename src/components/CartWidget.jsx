import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import '../assets/Cart-Widget.css';



const CartWidget = () => {

  return (
    <div className='cart-widget'>
        <FontAwesomeIcon icon={faShoppingCart} />
        <div className="qty-display">0</div>
    </div>
  )
}

export default CartWidget