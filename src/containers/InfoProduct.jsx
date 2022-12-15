import React from 'react'
import {ProductInfo} from '../components/ProductInfo.jsx';
import '../styles/InfoProduct.css'

function InfoProduct() {
  return (
    <aside className="product-detail-InfoProduct">
        <div className="product-detail-close-InfoProduct">
        <img src="./icons/icon_close.png" alt="close" />
        </div>
        <ProductInfo />
    </aside>
  )
}

export {InfoProduct}