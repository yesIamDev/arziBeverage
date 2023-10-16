import React from "react";
import winAndWater from "./images/winW.png";
import tour from './images/tour.png'

export default function Engagement() {
  return (
    <div className="font-Nunito flex items-center justify-center m-3 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="flex overflow-hidden h-[400px] items-center justify-center">
          <img src={tour} alt="win and water" className="h-[440px] rotate-45 font-extrabold" />
        </div> 
        <div className="font-Nunito m-7">
          <h2 className="text-start text-3xl md:text-5xl p-7 font-extrabold text-sky-500">Engagement.</h2>
          <p className="text-xl">
            Fin 2024, <strong>Arzi</strong> lancera la fondation Arzi: une
            organisation
            sans but lucratif qui sera axe sur la Formation Professionelle des
            communautes,
            Assistance aux personnes vulnerables, Soustient par bourse
            d'Excellence aux meilleurs eleves finalistes entrant a l'universite.
          </p>
        </div>
      </div>
    </div>
  );
}
