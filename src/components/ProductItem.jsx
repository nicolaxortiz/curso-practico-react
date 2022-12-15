import React from 'react'
import { AppContext } from '../context/AppContext'
import ShoppingCart from '@icons/bt_add_to_cart.svg'
import '../styles/Shop.css'

function ProductItem( {product, setCount, count} ) {

    const {addToCart} = React.useContext(AppContext);

    const items = {key:product.id, price:product.price, name:product.title, image:product.images[0]}

    const handleCart = (item) => {
        addToCart(item)
    }

  return (
    <div className="product-card-Shop">
        <img src={product.images[0]} alt=""/>
        <div className="product-info-Shop">
        <div>
            <p>${product.price}</p>
            <p>{product.name}</p>
        </div>
        <figure onClick={() => handleCart(items)}>
            <img src={ShoppingCart} alt=""/>
        </figure>
        </div>
    </div>
  )
}

export {ProductItem}