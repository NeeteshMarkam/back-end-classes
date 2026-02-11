import { useEffect, useEffectEvent, useState } from "react";

import axios from "axios";
import "./App.css";

function App() {
  const [users, setusers] = useState([]);
  function fetchUsers() {
    axios.get("http://localhost:3000/users/data").then((res) => {
      setusers(res.data.users);
    });
  }
  useEffect(() => {
    fetchUsers();
  }, []);
  function fromHandling(e) {
    e.preventDefault();

    const { name, email, password } = e.target;
    axios
      .post("http://localhost:3000/users", {
        name: name.value,
        email: email.value,
        password: password.value,
      })
      .then((res) => {
        console.log(res.data);
      });
      fetchUsers()
      name.value =''
       email.value =''
        password.value =''
  }
  function deleteUser(Userid){
    axios.delete('http://localhost:3000/users/'+Userid).then(res=>{
      console.log(res.data);
      fetchUsers()
    })

    function update(){
      axios.patch('http://localhost:3000/users/update/'+Userid)
    }

  }
  return (
    <>

      <form onSubmit={fromHandling}>
       <div className="Userinputs">
         <input type="text" name="name" placeholder="Enter Username"  required/>
        <input type="email" name="email" placeholder="enter you email" required />
        <input
          type="password"
          name="password"
          placeholder="enter you password" required
        />
       </div>
        <button>click</button>
      </form>

      <div className="users">
      {users.map((user,idx) => {
        return (

          <div key={idx} className="user">
            <h1>{user.name}</h1>
            <p>Email - {user.email}</p>
            <p>Password - {user.password}</p>

            <button onClick={()=>{
              deleteUser(user._id)
            }}>Deleted</button>
          </div>
        );
      })}
      </div>
    </>
  );
}

export default App;
