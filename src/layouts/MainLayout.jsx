import Home from "../components/Home/Home";
import HamburgerMenu from "../assets/hamburguer.png";
import Alien from "../assets/alien.png";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { ReactComponent as Piggy } from "../assets/piggy-bank-solid.svg";
import { ReactComponent as MoneyCheck } from "../assets/money-check-dollar-solid.svg";
import { ReactComponent as Logout } from "../assets/logout.svg";
import React, { useEffect } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function MainLayout() {
  useEffect(() => {
    const token = cookies.get("TOKEN");
    if (!token) {
      window.location.href = "/";
    }
  }, [cookies]);
  return (
    <div className="">
      <nav className="flex flex-row flex-wrap items-center justify-evenly bg-[#5C509B] text-white p-5">
        <p className="w-24 text-left hover:underline cursor-pointer">
          <Link to="/home">Inicio</Link>
        </p>
        <p className="w-24 text-left hover:underline cursor-pointer">
          <Link to="/incomes">Mis ingresos</Link>
        </p>
        <p className="w-24 text-left hover:underline cursor-pointer">
          <Link to="/expenses">Mis gastos</Link>
        </p>
        <p
          className="w-24 text-left hover:underline cursor-pointer"
          onClick={() => {
            cookies.remove("TOKEN", { path: "/" });
            window.location.href = "/";
          }}
        >
          Salir
        </p>
      </nav>
    </div>
  );
}

export default MainLayout;
