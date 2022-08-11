import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/auth/Auth";
import Home from "./components/Home/Home";
import MainLayout from "./layouts/MainLayout";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import ExpensesIndex from "./components/expenses/Index";
import IncomesIndex from "./components/incomes/Index";

const App = () => {
  return(
    <div className="flex flex-row">
      <MainLayout />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/home' element={<Home/>} />
        <Route path="/expenses" element={<ExpensesIndex />} />
        <Route path="/incomes" element={<IncomesIndex />} />
      </Routes>
    </div>
  )
}

export default App;


