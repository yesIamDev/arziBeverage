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
          <p className="text-xl font-Nunito">
            <strong>Arzi</strong> a pour vision de donner aux communautes
            locales l'ocasion ainsi que des opportinutes d'ameliorer leur
            qualite de vie <br />
            en les impliquant dans des travaux manuels ainsi qu'administratives
            et <br /> ainsi contribuer a la dimunission du taux de chaumage au
            sein de notre pays la RDC.
          </p>
        </div>
        <div className="m-2 p-10  md:flex md:items-center md:justify-center md:visible hidden">
          <img src={undraw_beer} alt="undraw_beer" />
        </div>
      </div>
    </div>
  );
}
