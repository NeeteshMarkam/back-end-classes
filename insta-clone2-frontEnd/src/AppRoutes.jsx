import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./feature/auth/page/Login";

import Register from "./feature/auth/page/Register";

import Home from "./feature/auth/page/Home";



function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;