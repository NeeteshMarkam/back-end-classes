
import{BrowserRouter,Routes,Route} from 'react-router-dom'

import Login from "./feature/auth/pages/Login.jsx";
import Home from "./feature/auth/pages/Home";
import Register from "./feature/auth/pages/Register";



   

const AppRouter = () => {
  return (


<BrowserRouter>
    <Routes>
        <Route path="/" element={<Home></Home>}/>
         <Route path="/login" element={<Login></Login>}/>
          <Route path="/register" element={<Register></Register>}/>
    </Routes>
</BrowserRouter>
        
  )
}

export default AppRouter