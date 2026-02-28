import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router";
const Login = () => {
  const [username, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  function fromhandled(e) {
    e.preventDefault();
    axios.post('http://localhost:3000/api/auth/login',{
      username,
      password,
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
        Already have an account? <Link to="/register">Register</Link>
      </p>
    </>
  );
};

export default Login;
