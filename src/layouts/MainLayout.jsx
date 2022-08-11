import HamburgerMenu from "../assets/hamburguer.png";
import Alien from "../assets/alien.png";
import Piggy from "../assets/piggy-bank-solid.svg";

function MainLayout() {
  return (
    <div className="flex flex-row md:h-screen">
      <nav className="w-full md:w-64 flex flex-row md:flex-col items-center justify-between p-5 md:p-0 md:bg-[#5C509B] ">
        <img className="w-7 md:hidden" src={HamburgerMenu} alt="" />
        <div className="hidden md:flex flex-col py-10 text-white text-center w-full">
          <img src={Alien} alt="" className="m-auto w-36 mb-5" />
          <p className="text-2xl font-medium mb-1.5">Alien Alieno</p>
          <p className="mb-14">ID75315926</p>
          <div className="flex flex-row items-center justify-center p-3 hover:bg-[#7D73B2] cursor-pointer">
            <img src={Piggy} alt="" className="w-8 mr-5"/>
            <p>Mis apartados</p>
          </div>
        </div>
      </nav>
      <div></div>
    </div>
  );
}

export default MainLayout;
