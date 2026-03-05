import React, { useState } from "react";
import { UseAuth } from "../hooks/useAuth.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin, loading } = UseAuth();
  const navigate = useNavigate();

  if (loading) {
    return <h1>loading...</h1>;
  }
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await handleLogin(username, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <main>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            name="username"
            id="username"
            placeholder="enter Username"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="text"
            name="password"
            id="password"
            placeholder="enter password"
          />

          <button>sumit</button>
        </form>
      </main>
    </div>
  );
};

export default Login;
