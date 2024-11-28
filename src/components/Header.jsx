import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/nav_logo.png'

function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-black">
      <div className="w-28"><img src={Logo} alt="" /></div>
      <nav className="flex items-center space-x-4">
        <div className="mr-[550px]">
        <Link href="#" className="hover:text-gray-400 ml-3">Афиша</Link>
        <Link href="#" className="hover:text-gray-400 ml-3">Сеансы</Link>
        <Link href="#" className="hover:text-gray-400 ml-3">Билеты</Link>
        <Link href="#" className="hover:text-gray-400 ml-3">Поиск</Link>
        </div>
        <button className="text-white h-12 bg-red-600 px-4 py-2 rounded-2xl">
          Войти
        </button>
      </nav>
    </header>
  );
}

export default Header;
