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
    <div className="flex flex-row flex-wrap md:h-screen">
      <nav className="w-full md:w-64 flex flex-row md:flex-col items-center justify-between p-5 md:p-0 md:bg-[#5C509B] ">
        <img
          className="w-7 md:hidden cursor-pointer"
          src={HamburgerMenu}
          alt=""
        />
        <div className="hidden md:flex flex-col py-10 text-white text-center w-full">
          <img src={Alien} alt="" className="m-auto w-36 mb-5" />
          <p className="text-2xl font-medium mb-1.5">Alien Alieno</p>
          <p className="mb-14">ID75315926</p>
          <div className="menu-item flex flex-row items-center justify-center p-3 hover:bg-[#7D73B2] cursor-pointer">
            <Piggy fill="white" alt="" className="w-7 mr-5 item-image-hover" />
            <p className="w-24 text-left"><Link to="/incomes">Mis ingresos</Link></p>
          </div>
          <div className="menu-item flex flex-row items-center justify-center p-3 hover:bg-[#7D73B2] cursor-pointer">
            <MoneyCheck
              fill="white"
              alt=""
              className="w-7 mr-5 item-image-hover"
            />
            <p className="w-24 text-left"><Link to="/expenses">Mis gastos</Link></p>
          </div>
          <div
            className="menu-item flex flex-row items-center justify-center p-3 hover:bg-[#7D73B2] cursor-pointer mt-36"
            onClick={() => {
              cookies.remove("TOKEN", { path: "/" });
              window.location.href = "/";
            }}
          >
            <Logout fill="white" alt="" className="w-7 mr-5 item-image-hover" />
            <p className="w-24 text-left">Salir</p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MainLayout;
