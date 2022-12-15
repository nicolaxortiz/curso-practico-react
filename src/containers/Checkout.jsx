import React from 'react'
import '../styles/Checkout.css'
import Flechita from '@icons/flechita.svg';
import { ShoppingCart } from '../components/ShoppingCart';
import { AppContext } from '../context/AppContext';


function Checkout() {

    const {state, totalprice} = React.useContext(AppContext)

  return (
    <aside className="product-detail">
        <div className="title-container">
        <img src={Flechita} alt="arrow" />
        <p className="title">My order</p>
        </div>

        <div className="my-order-content">
        
        {state.cart.map((product, index) => <ShoppingCart key={index} product={product}/>)}

        <div className="order">
            <p>
            <span>Total</span>
            </p>
            <p>${totalprice}</p>
        </div>

        <button className="primary-button">
            Checkout
        </button>
        </div>
    </aside>
  )
}

export {Checkout}