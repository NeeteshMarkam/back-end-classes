import React from 'react'
import "../style/register.scss"
import FormGroup from '../components/FormGroup'
import {Link, useNavigate} from "react-router"
import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
const Register = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState("")

  const {loading,handleRegister} = useAuth()
  const navigate = useNavigate()
  async function handleSubmit(e) {
    e.preventDefault()
    
    await handleRegister({username,email,password})
navigate('/')


    
  }

  return (
    <main
      className='register-page'>
      <div className="from-container">
        <h1>Register</h1>
        <form  onSubmit={(e)=>{
          handleSubmit(e)
        }}>
            <FormGroup 
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            label="name" placeholder="Enter your name"/>
        <FormGroup 
        value={email}
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
        label="Email" placeholder="Enter your email"/>
           <FormGroup 
           value={password}
           onChange={(e)=>{
            setPassword(e.target.value)
           }}
           label="password" placeholder="Enter your password"/>
         <button className='button' type='submit'>
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
        <p>Already have an account <Link to="/login">Login here</Link></p>
      </div>
    </main>
  )
}

export default Register
