import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/auth/Auth";
import Home from "./components/Home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

const App = () => {
  return(
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/home' element={<Home />} />
      </Routes>
  )
}

export default App;


