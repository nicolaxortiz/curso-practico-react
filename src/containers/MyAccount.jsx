import React from 'react'
import '../styles/MyAccount.css'

function MyAccount() {
  return (
    <div className="desktop-menu">
    <ul>
      <li>
        <a href="/" className="title">My orders</a>
      </li>

      <li>
        <a href="/">My account</a>
      </li>

      <li>
        <a href="/">Sign out</a>
      </li>
    </ul>
  </div>
  )
}

export {MyAccount}