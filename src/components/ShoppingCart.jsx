import React from 'react'
import '../styles/Checkout.css'
import Close from '@icons/icon_close.png';
import { AppContext } from '../context/AppContext';

function ShoppingCart({product}) {

    const {deleteToCart} = React.useContext(AppContext)

    const handleDelete = (item) => {
        deleteToCart(item);
    }

  return (
    <div className="shopping-cart">
        <figure>
        <img src={product.image} alt="bike" />
        </figure>
        <p>{product.name}</p>
        <p>${product.price}</p>
        <img src={Close} alt="close" onClick={() => handleDelete(product)}/>
    </div>

  )
}

export {ShoppingCart}