import React from 'react'
import '@styles/Header.css'
import { AppContext } from '../context/AppContext';
import Logo from '@logos/logo_yard_sale.svg';
import Menu from '@icons/icon_menu.svg';
import ShoppingCart from '@icons/icon_shopping_cart.svg'

function Header( props ) {

  const {state, setPage, page} = React.useContext(AppContext)

  const handleMenu = () => {
    props.setMenu(!props.menu)
  }

  const handleAccount = () => {
    props.setAccount(!props.account) 
  }

  const handleOrder = () => {
    props.setOrder(!props.order) 
  }

  const goPage = (page, e) => {
    e.preventDefault()
    setPage(page)
  }

  return (
    <nav className='nav-header'>
        <img src={Menu} alt="menu" className="menu-header" onClick={handleMenu} />

        <div className="navbar-left-header">
        <img src={Logo} alt="logo" className="logo-header" />

        <ul>
            <li>
            <a href="/" onClick={(e) => goPage(0, e)}>All</a>
            </li>
            <li>
            <a href="/" onClick={(e) => goPage(1, e)}>Clothes</a>
            </li>
            <li>
            <a href="/" onClick={(e) => goPage(2, e)}>Electronics</a>
            </li>
            <li>
            <a href="/" onClick={(e) => goPage(3, e)}>Furnitures</a>
            </li>
            <li>
            <a href="/" onClick={(e) => goPage(4, e)}>Shoes</a>
            </li>
            <li>
            <a href="/" onClick={(e) => goPage(5, e)}>Others</a>
            </li>
        </ul>
        </div>

        <div className="navbar-right-header">
        <ul>
            <li className="navbar-email-header" onClick={handleAccount}>platzi@example.com</li>
            <li className="navbar-shopping-cart-header">
            <img src={ShoppingCart} alt="shopping cart" onClick={handleOrder}/>
            <div>{state.cart.length}</div>
            </li>
        </ul>
        </div>
    </nav>
  )
}

export {Header}