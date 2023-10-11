import React from "react";
import {MdPlace} from 'react-icons/md'
import {MdOutlineAlternateEmail} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'


export default function Contacts() {
  return (
    <div id="contacts" className="my-5 py-10 w-full bg-gray-100 flex flex-col items-center justify-center">
      <div className="font-Nunito text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-sky-500">
          Contactez-nous
        </h2>
        <p>
          Contactez-nous
        </p>
      </div>
      <div className="flex items-center justify-center my-6 font-Nunito">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="w-[350px] p-10 my-7 flex flex-col items-center justify-center text-center font-Nunito border rounded-lg outline-none shadow-lg hover:shadow-xl">
                  <span className="text-4xl"> 
                    <MdOutlineAlternateEmail/>
                  </span>
                  <h2 className="m-3 text-2xl font-semibold">
                    Email
                  </h2>
                  <p>
                      arzi@arzibeverage.com
                  </p>
              </div>
              <div className="w-[350px] p-10 my-7 flex flex-col items-center justify-center text-center font-Nunito border rounded-lg outline-none shadow-lg hover:shadow-xl">
                  <span className="text-4xl"> 
                    <MdPlace/>
                  </span>
                  <h2 className="m-3 text-2xl font-semibold">
                    Adresse
                  </h2>
                  <p>
                     RDC Kinshasa, Commune de N'Sele, <br/> Quartier Kindobo, Avenue Bashengezi.
                  </p>
              </div> 
              <div className="w-[350px] p-10 my-7 flex flex-col items-center justify-center text-center font-Nunito border rounded-lg outline-none shadow-lg hover:shadow-xl">
                  <span className="text-4xl"> 
                    <BsFillTelephoneFill/>
                  </span>
                  <h2 className="m-3 text-2xl font-semibold">
                    WhatsApp
                  </h2>
                  <p>
                      +243 (0) 895 211 263 <br/> +243 (0) 998 215 728
                  </p>
              </div>
        </div>
      </div>
    </div>
  );
}