import React from 'react'
import "../style/register.scss"
import FormGroup from '../components/FormGroup'
import {Link} from "react-router"
const Register = () => {
  return (
    <main
      className='register-page'>
      <div className="from-container">
        <h1>Register</h1>
        <form >
            <FormGroup label="name" placeholder="Enter your name"/>
        <FormGroup label="Email" placeholder="Enter your email"/>
           <FormGroup label="password" placeholder="Enter your password"/>
          <button className='button' type='submit'>Submit</button>
        </form>
        <p>Already have an account <Link to="/login">Login here</Link></p>
      </div>
    </main>
  )
}

export default Register
