import React from 'react'
import '../styles/ViewAccount.css'

function ViewAccount() {
  return (
    <div class="login">
    <div class="form-container-c">
      <h1 class="title">My account</h1>

      <form action="/" class="form">
        <div>
          <label htmlFor="name" class="label">Name</label>
          <p class="value">Camila Yokoo</p>

          <label htmlFor="email" class="label">Email</label>
          <p class="value">camilayokoo@gmail.com</p>

          <label htmlFor="password" class="label">Password</label>
          <p class="value">*********</p>
        </div>

        <input type="submit" value="Edit" class="secondary-button login-button"/>
      </form>
    </div>
  </div>
  )
}

export {ViewAccount}