import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/feature/page/Login";
import Register from "../src/feature/page/Register";
import Home from "../src/feature/auth/page/Home";

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