import React from "react";
import undraw_beer from "./images/undraw_beer_xg5f.png";

export default function Vision() {
  return (
    <div className="bg-white flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="mx-5 md:mx-10 p-7 flex flex-col justify-center">
          <h1 className="font-Nunito text-start font-extrabold text-sky-500 text-3xl md:text-5xl my-7">
            Vision Arzi
          </h1>
          <ul className="text-lg font-Nunito">
              <li className="my-3 p-3 border outline-none shadow-lg rounded-lg hover:shadow-xl hover:ease-in-out duration-300">
                Fournir une eau de Qualité à +15Millions de population de Kinshasa et ses environs.
              </li>
              <li className="my-3 p-3 border outline-none shadow-lg rounded-lg hover:shadow-xl hover:ease-in-out duration-300">
                Devenir leader National dans le breuvage(Eau,Vin,Jus,etc...)
              </li>
              <li className="my-3 p-3 border outline-none shadow-lg rounded-lg hover:shadow-xl hover:ease-in-out duration-300">
                Accompagner la Vision de la Republique en industrualisant la partie Est de Kinshasa.
              </li>
          </ul>
        </div>
        <div className="m-2 p-10  md:flex md:items-center md:justify-center md:visible hidden">
          <img src={undraw_beer} alt="undraw_beer" />
        </div>
      </div>
    </div>
  );
}
