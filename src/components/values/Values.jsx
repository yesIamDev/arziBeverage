import React from "react";
import { GoWorkflow } from "react-icons/go";

export default function Values() {
  return (
    <div className="my-5 py-10 w-full bg-gray-100 flex items-center justify-center">
      <div className="font-[poppins] text-center">
        <h2 className="text-5xl font-extrabold text-sky-500">Nos Valeurs</h2>
        <p className="text-center mt-7 mb-10 mx-10 text-xl">
          4 principes nous permettent non seulement d'assurer l'hamonie dans nos
          differentes equipes de travail mais aussi dans nos relations avec nos
          clients.
        </p>
        <div className="flex items-center justify-center">
          <div className=" max-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            <div className="mx-5 my-5 md:my-0  border rounded-md bg-white outline-none hover:shadow-xl hover:ease-in-out duration-300">
              <div className=" my-3 flex flex-col p-5 md:p-3 items-center justify-center text-center">
                <div>
                  <GoWorkflow />
                </div>
                <div className="my-5  font-[poppins]">
                  <h1 className="mb-4 text-3xl md:text-xl font-bold p-7">Professionalisme</h1>
                  <p className="text-center text-xl md:px-10">
                    Nous respectons les accords et le travail de qualité auquel
                    nous nous engageons.
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-5 mb-5 border rounded-md bg-white outline-none hover:shadow-xl hover:ease-in-out duration-300">
              <div className="  my-5 md:my-0  flex flex-col p-5 md:p-3 items-center justify-center text-center">
                <div>
                  <GoWorkflow />
                </div>
                <div className="my-5  font-[poppins]">
                  <h1 className="mb-4 text-3xl md:text-xl font-bold p-7">Creativite</h1>
                  <p className="text-center text-xl md:px-10">
                    Nous respectons les accords et le travail de qualité auquel
                    nous nous engageons.
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-5 mb-5 border rounded-md bg-white outline-none hover:shadow-xl hover:ease-in-out duration-300">
              <div className="  my-5 md:my-0  flex flex-col p-5 md:p-3 items-center justify-center text-center">
                <div>
                  <GoWorkflow />
                </div>
                <div className="my-5  font-[poppins]">
                  <h1 className="mb-4 text-3xl md:text-xl font-bold p-7">Equipe</h1>
                  <p className="text-center text-xl md:px-10">
                    Nous respectons les accords et le travail de qualité auquel
                    nous nous engageons.
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-5 mb-5 border rounded-md bg-white outline-none hover:shadow-xl hover:ease-in-out duration-300">
              <div className=" my-5 md:my-0  flex flex-col p-5 md:p-3 items-center justify-center text-center">
                <div>
                  <GoWorkflow />
                </div>
                <div className="my-5  font-[poppins]">
                  <h1 className="mb-4 text-3xl md:text-xl font-bold p-7">Ecoute</h1>
                  <p className="text-center text-xl md:px-10">
                    Nous respectons les accords et le travail de qualité auquel
                    nous nous engageons.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
