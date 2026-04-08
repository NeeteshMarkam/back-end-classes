import React, { useState } from "react";
import { UseAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('')
  const { loading, HandleRegister } = UseAuth();
  const navigate = useNavigate();

  if (loading) {
    return(<h1>loading .... </h1>)
  }
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(typeof username);
console.log(typeof email);
console.log(typeof password);
console.log(typeof bio);
    try {
      await HandleRegister(username, email, password,bio);
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
              setEmail(e.target.value);
            }}
            type="text"
            name="email"
            id="email"
            placeholder="enter email"
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
          <input
            onChange={(e) => {
              setBio(e.target.value);
            }}
            type="text"
            name="boi"
            id="bio"
            placeholder="enter boi"
          />

          <button type="submit">submit</button>
        </form>
      </main>
    </div>
  );
};

export default Register;
