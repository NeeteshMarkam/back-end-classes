import { useState } from 'react'

import axios from 'axios'
import './App.css'

function App() {
const [users, setusers] = useState( [
        {
            "_id": "6980caff114f0b72600789c6",
            "name": "vanish",
            "email": "vanish@gmail.com",
            "password": "777162",
            "__v": 0
        },
        {
            "_id": "6982c60a43ddf385b1c72b29",
            "name": "neetesh",
            "email": "neetsh@gmail.com",
            "password": "123",
            "__v": 0
        },
        {
            "_id": "6982cb2329d71a83437691d3",
            "name": "ladle",
            "email": "ladle@gmail.com",
            "password": "66699",
            "__v": 0
        }
    ]
)
axios.get('http://localhost:3000/users/data').then((res)=>{
  setusers(res.data.users);

  
})

  return (
    <>
    {
      users.map(user=>{

     return <div className="user">
      <h1>{user.name}</h1>
      <p>Email - {user.email}</p>
      <p>Password  - {user.password}</p>
     </div>
      })
    }
     
    </>
  )
}

export default App
