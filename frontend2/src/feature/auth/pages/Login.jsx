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
      <main className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">login page</h1>
        <form onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center mt-4
        bg-red-500 p-6 w-60
        rounded-xl h-80
        "
        >
          <input
          className="border-2 rounded-xl
          p-2 mb-4
          text-white-900"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            name="username"
            id="username"
        
            placeholder="enter Username"
          />
          <input
          className="border-2 rounded-xl p-2 mb-4"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="text"
            name="password"
            id="password"
            placeholder="enter password"
          />

          <button className="border px-2 rounded bg-green-500">sumit</button>
        </form>
      </main>
    </div>
  );
};

export default Login;
