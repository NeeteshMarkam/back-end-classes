import React, { useState } from 'react'
import "../style/login.scss"
import FormGroup from '../components/FormGroup'
import { Link } from "react-router"
import { useAuth } from '../hooks/useAuth'

import { useNavigate } from 'react-router'
const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { loading, handleLogin } = useAuth()

  const navigate = useNavigate();

  async function handleSubmit(e) {

    e.preventDefault()
    await handleLogin({ email, password })
    navigate("/")

  }



  return (
    <main
      className='login-page'>
      <div className="from-container">
        <h1>login</h1>
        <form onSubmit={(e) => {
          handleSubmit(e)
        }}>
          <FormGroup label="Email" placeholder="Enter your email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
          <FormGroup
            value={
              password
            }
            onChange={(e) => setPassword(e.target.value)}

            label="password" placeholder="Enter your password" />
       <button className='button' type='submit'>
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
        <p>Don't have an account <Link to="/register">Register here</Link></p>
      </div>
    </main>
  )
}

export default Login
