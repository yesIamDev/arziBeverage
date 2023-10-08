import React from "react";
import bouteille from "./images/bouteille.jpg";

export default function Brand() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
      <div className="font-[poppins] text-start md:flex md:flex-col md:justify-center md:ml-20 mt-10 ml-2 p-2">
        <h2 className="font-extrabold text-5xl mb-5  text-sky-500">
          #Arzi <br /> berverage
        </h2>
        <p className="text-5xl font-bold ">
          Entreprise congolaise <br /> de production des boissons.
        </p>
        <div className="my-3">
          <button className="flex flex-row  items-center justify-center w-full md:w-[250px] border p-2 bg-sky-500 font-bold text-white rounded-lg">
            <span className="text-3xl mx-2">
              <ion-icon name="mail-unread"></ion-icon>
            </span>
            CONTACTEZ-NOUS
          </button>
        </div>
      </div>
      <div className=" md:flex md:items-center md:justify-center md:visible hidden">
        <img src={bouteille} alt="arzi" />
      </div>
    </div>
  );
}
