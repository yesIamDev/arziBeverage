import { useState } from "react";
import React from "react";
import logo from './images/logoB.png'
import { links } from "./Links";

export default function Navbar() {
  let [Open, setOpen] = useState(false);

  return (
    <div id="top">
      <header className=" bg-white sticky top-0 w-full shadow">
        <nav
          id="main-nav"
          className=" bg-white max-w-5xl mx-auto font-poppins p-4 md:flex md:items-center md:justify-between"
        >
          <a href="top" className="flex" aria-label="home">
            <img
              src={logo}
              className=" hidden md:w-7  md:inline md:mr-4"
              alt="logo"
            />
            <span aria-hidden="true" className="text-lg text-sky-500">
              Arzi <strong>Beverage</strong>
            </span>
          </a>
          <div
            onClick={() => {
              setOpen(!Open);
            }}
            className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden"
          >
            <ion-icon name={Open ? "close" : "menu"}></ion-icon>
          </div>
          <ul
            id="toggled-menu"
            className={`font-Nunito md:flex md:items-center md:pb-0 pb-6 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in
            ${ Open ? 'top-10 bg-gray-100' : 'top-[-490px]'}`}
          >
            {links.map((link) => (
              <li key={link.name} className=" text-sky-500 md:ml-8 text-lg md:my-0 my-7">
                <a
                  href={link.link}
                  className="text-sm uppercase font-[poppins] font-semibold w-full hover:text-sky-550 hover:brightness-110 hover:ease-in-out duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
}
