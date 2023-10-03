import React from "react";
import logoArzi from "./images/logoArzi.png";
import menu from "./images/menu.png"

export default function Navbar() {
  return (
    <div id="top">
      <header className="bg-white z-50 fixed top-0 w-full shadow">
        <nav
          id="main-nav"
          className="bg-white max-w-5xl mx-auto font-poppins p-4 flex items-center justify-between"
        >
          <a href="top" className="flex" aria-label="home">
            <img
              src={logoArzi}
              className="hidden md:w-7 md:inline md:mr-4"
              alt=""
            />
            <span aria-hidden="true" className="text-lg lg:text-xl">
              Arzi <strong>Beverage</strong>
            </span>
          </a>
          <button
          aria-label="toggle button"
          aria-expended="false"
          id="menu-btn"
          className="cursor-pointer w-7 md:hidden"
          >
                <img src={menu} alt=""/>
          </button>
          <ul 
          id="toggled-menu"
          className="w-full absolute top-full left-0 -translate-y-full -z-10 text-gray-800 border-gray-200 flex flex-col items-center md:static md:z-10 md:w-min md:transform-none md:border-none md:flex-row"
          >
            <li className="py-4 md:py-0 md:mr-6">
              <a href="#Home" className="text-sm uppercase font-semibold w-full">ACCEUIL</a>
            </li>
            <li href="Products" className="py-4 md:py-0 md:mr-6">
              <a className="text-sm uppercase font-semibold w-full">PRODUITS</a>
            </li>
            <li href="#Apropos" className="py-2 md:py-0 md:mr-4">
              <a className="text-sm uppercase font-semibold w-full">ARZI</a>
            </li>
            <li href="#Valeurs" className="py-4 md:py-0 md:mr-6">
              <a className="text-sm uppercase font-semibold w-full">VALEURS</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
