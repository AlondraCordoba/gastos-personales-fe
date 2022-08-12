import { useTranslation } from "react-i18next";
import MexicoFlag  from "../assets/mexico.png";
import UsaFlag  from "../assets/usa.png";
import { Link } from "react-router-dom";
import { t } from "i18next";
import React, { useEffect } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function MainLayout() {

  const { i18n, t } = useTranslation();

  function changeLaguage(language) {
    i18n.changeLanguage(language);
  }
  useEffect(() => {
    const token = cookies.get("TOKEN");
    if (!token) {
      window.location.href = "/";
    }
  }, [cookies]);
  return (
    <div className="">
      <nav className="flex flex-row flex-wrap items-center justify-evenly bg-[#5C509B] text-white p-5">
        <div className="flex flex-row">
          <img src={MexicoFlag} alt="" className="w-10 cursor-pointer mr-5" onClick={() => changeLaguage("es")}/>
          <img src={UsaFlag} alt="" className="w-10 cursor-pointer" onClick={() => changeLaguage("en")}/>
        </div>
        <p className="w-24 text-left hover:underline cursor-pointer">
          <Link to="/home">{t("nav_home")}</Link>
        </p>
        <p className="w-24 text-left hover:underline cursor-pointer">
          <Link to="/incomes">{t("nav_income")}</Link>
        </p>
        <p className="w-24 text-left hover:underline cursor-pointer">
          <Link to="/expenses">{t("nav_expenses")}</Link>
        </p>
        <p
          className="w-24 text-left hover:underline cursor-pointer"
          onClick={() => {
            cookies.remove("TOKEN", { path: "/" });
            window.location.href = "/";
          }}
        >
          {t("nav_logout")}
        </p>
      </nav>
    </div>
  );
}

export default MainLayout;
