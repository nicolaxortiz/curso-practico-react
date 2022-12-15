import React from 'react'
import { Header } from '../components/Header'
import { Shop } from '../components/Shop'
import { LateralNav } from '../containers/LateralNav'
import { MyAccount } from '../containers/MyAccount'
import { Checkout } from '../containers/Checkout'

function Home() {

  const [menu, setMenu] = React.useState(false)
  const [account, setAccount] = React.useState(false)
  const [order, setOrder] = React.useState(false)

  return (
    <React.Fragment>
      <Header setMenu={setMenu} menu={menu} setAccount={setAccount} account={account} setOrder={setOrder} order={order}/>

      {menu && <LateralNav/>}

      {account && <MyAccount />}

      {order && <Checkout/>}
      
      <Shop/>
    </React.Fragment>
  )
}

export { Home }