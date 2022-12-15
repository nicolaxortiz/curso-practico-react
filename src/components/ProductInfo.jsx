import React from 'react'
import '../styles/InfoProduct.css'

import addToCart from '@icons/bt_add_to_cart.svg'

function ProductInfo() {
  return (
    <React.Fragment>
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
        <div className="product-info-InfoProduct">
        <p>$35,00</p>
        <p>Bike</p>
        <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
        <button className="primary-button-InfoProduct add-to-cart-button-InfoProduct">
            <img src={addToCart} alt="add to cart" />
            Add to cart
        </button>
        </div>
    </React.Fragment>
  )
}

export {ProductInfo}