import React from 'react'
import '../styles/Shop.css'
import { ProductItem } from './ProductItem'
import { useGetProducts } from '../hooks/useGetProducts'
import { Loading } from './Loading'
import { AppContext } from '../context/AppContext'

function Shop(props) {

  const {page} = React.useContext(AppContext)

  const {products, loading} = useGetProducts(page);

  return (
    <section className="main-container-Shop">
      {loading && <Loading />}
        <div className="cards-container-Shop">
          {!loading && products.map((product, index) => <ProductItem key={index} product={product} setCount={props.setCount} count={props.count} />)}

        </div>
    </section>
  )
}

export {Shop}