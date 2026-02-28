import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router";
const Register = () => {
  const [username, setUserName] = useState(null);
  const [email, setemail] = useState(null)
  const [password, setPassword] = useState(null);

  function fromhandled(e) {
    e.preventDefault();
    axios.post('http://localhost:3000/api/auth/register',{
      username,
      email,
      password
    },{
      withCredentials:true
    }).then(res =>{
      console.log(res.data);
      
    })

  }

  return (
    <>
      <form
        onSubmit={fromhandled}
      >
        <div>
          <input
            onInput={(e) => {
              setUserName(e.target.value);
            }}
            type="text"
            name="username"
            id=""
            placeholder="Enter your name"
          />
        </div>
        <div>
          <input
            onInput={(e) => {
              setemail(e.target.value);
            }}
            type="text"
            name="email"
            id=""
            placeholder="Enter your email"
          />
        </div>
        <div>
          <input
            onInput={(e) => {
              setPassword(e.target.value);
            }}
            type="text"
            name="password"
            id=""
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Already have an account? <Link to="/login">login</Link>
      </p>
    </>
  );
};

export default Register;
