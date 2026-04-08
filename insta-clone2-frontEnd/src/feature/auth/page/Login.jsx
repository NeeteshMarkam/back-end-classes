import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import { useAuth } from "../hooks/useAuth.jsx";
import { useNavigate } from "react-router";

const Login = () => {
  const [username, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  const { handleLogin , loading } = useAuth();

  const navigate = useNavigate()


if(loading) {
  return(<h1>Loading...</h1>)
}

  async function fromhandled(e) {
    e.preventDefault();
    const res = await handleLogin(username, password);
    console.log(res);
    navigate('/')
  }

  return (
    <>
      <form onSubmit={fromhandled}>
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
            type="test"
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
