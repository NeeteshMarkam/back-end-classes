import React from 'react'
import "../style/login.scss"
import FormGroup from '../components/FormGroup'
import {Link} from "react-router"
const Login = () => {
  return (
    <main
      className='login-page'>
      <div className="from-container">
        <h1>login</h1>
        <form >
        <FormGroup label="Email" placeholder="Enter your email"/>
           <FormGroup label="password" placeholder="Enter your password"/>
          <button className='button' type='submit'>Submit</button>
        </form>
          <p>Don't have an account <Link to="/register">Register here</Link></p>
      </div>
    </main>
  )
}

export default Login
