import React, { useRef } from 'react'
import '../styles/Login.css'

function Login() {

  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    }
    console.log(data);
  }

  return (
    <div className="login">
        <div className="form-container-c">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo"/>

        <form action="/" className="form" ref={form} method="get">
            <label htmlFor="email" className="label">Email address</label>
            <input type="text" name="email" placeholder="Escribe tu email" className="input input-email"/>

            <label htmlFor="password" className="label">Password</label>
            <input type="password" name="password" placeholder="*********" className="input input-password"/>

            <button type="submit" value="Log in" className="primary-button login-button" onClick={handleSubmit}> Log in</button>
            <a href="/recovery-password">Forgot my password</a>
        </form>

        <button className="secondary-button signup-button">Sign up</button>
        </div>
    </div>
  )
}

export {Login}