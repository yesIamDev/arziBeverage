import React from "react";
import ceo from "./images/ceo.jpeg";
import cto from "./images/cto.jpeg";
import pm from "./images/yan.jpeg"

export default function Team() {
  return (
    <div id="team" className="py-10 bg-white mt-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-8 font-Nunito">
        <div className="mb-12 text-center">
          <h1 className="font-bold text-sky-500 text-3xl md:text-5xl">
            Notre Equipe
          </h1>
          <p className="lg:w-8/12 lg:mx-auto my-4">
            Une equipe des jeunes entrepreneurs Congolais investie de coeur afin
            d'aller au bout de la vision de ARZI.
          </p>
        </div>
        <div className="py-20 gap-28 grid md:gap-12 md:grid-cols-3">
          <div className="border-t-4 spae-y-8 group text-center">
            <div className="w-32 h-32 overflow-hidden -mt-16 mx-auto rounded-[2rem] rotate-45 my-5">
              <img
                src={ceo}
                alt="ceo"
                loading="lazy"
                width="640"
                className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale[1.4]"
              />
            </div>
            <div className="text-center">
              <h5 className="text-xl text-gray-800 font-semibold">
                Pascal Afazali
              </h5>
              <span className=" text-sm text-gray-500">CEO Fondateur</span>
            </div>
          </div>
          <div className="border-t-4 spae-y-8 group text-center">
            <div className="w-32 h-32 overflow-hidden -mt-16 mx-auto rounded-[2rem] rotate-45 my-5">
              <img
                src={pm}
                alt="ceo"
                loading="lazy"
                width="640"
                className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale[1.4]"
              />
            </div>
            <div className="text-center">
              <h5 className="text-xl text-gray-800 font-semibold">
                Yannick Kubuya
              </h5>
              <span className=" text-sm text-gray-500">Project Manager</span>
            </div>
          </div>
          <div className="border-t-4 spae-y-8 group text-center">
            <div className="w-32 h-32 overflow-hidden -mt-16 mx-auto rounded-[2rem] rotate-45 my-5">
              <img
                src={cto}
                alt="ceo"
                loading="lazy"
                width="640"
                className="w-full h-full object-cover -rotate-45 scale-125 mx-auto transition duration-300 group-hover:scale[1.4]"
              />
            </div>
            <div className="text-center">
              <h5 className="text-xl text-gray-800 font-semibold">
                  Destin Kifende
              </h5>
              <span className=" text-sm text-gray-500">Technical Manager</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
