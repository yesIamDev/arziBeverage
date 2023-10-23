import { GoWorkflow } from "react-icons/go";

export default function Values() {
  return (
    <div className=" min-h-screen my-5 py-10 w-full bg-gray-100 flex items-center justify-center">
      <div className="font-Nunito text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-sky-500">
          Nos Valeurs
        </h2>
        <p className="text-center mt-7 mb-10 mx-20 text-xl">
          4 principes nous permettent non seulement d'assurer l'hamonie dans nos
          differentes équipes de travail mais aussi dans nos relations avec nos
          clients.
        </p>
        <div className="flex items-center justify-center mx-5">
          <div className=" max-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            <div className="mx-2 mb-5 border rounded-md bg-white outline-none hover:shadow-xl hover:ease-in-out duration-300">
              <div className="  my-5 md:my-0  flex flex-col p-5 md:p-3 items-center justify-center text-center">
                <div className="text-sky-500 text-5xl  p-3 flex items-center justify-center border rounded-lg mt-5 outline-none">
                  <ion-icon name="cube-sharp" size="large"></ion-icon>
                </div>
                <div className=" font-Nunito">
                  <h1 className="mb-4 text-3xl md:text-xl font-bold p-5">
                    Professionalisme
                  </h1>
                  <p className="text-center text-lg md:px-10">
                    Nous respectons les accords et le travail de qualité auquel
                    nous nous engageons.
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-2 mb-5 border rounded-md bg-white outline-none hover:shadow-xl hover:ease-in-out duration-300">
              <div className="  my-5 md:my-0  flex flex-col p-5 md:p-3 items-center justify-center text-center">
                <div className="text-sky-500 text-5xl  p-3 flex items-center justify-center border rounded-lg mt-5 outline-none">
                  <ion-icon name="create-sharp" size="large"></ion-icon>
                </div>
                <div className=" font-Nunito">
                  <h1 className="mb-4 text-3xl md:text-xl font-bold p-5">
                    Créativité
                  </h1>
                  <p className="text-center text-lg md:px-10">
                    Nous cherchons toujours à apporter des idées et des méthodes
                    innovantes.
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-2 mb-5 border rounded-md bg-white outline-none hover:shadow-xl hover:ease-in-out duration-300">
              <div className="  my-5 md:my-0  flex flex-col p-5 md:p-3 items-center justify-center text-center">
                <div className="text-sky-500 text-5xl p-3 flex items-center justify-center border rounded-lg mt-5 outline-none">
                  <ion-icon name="git-merge-sharp" size="large"></ion-icon>
                </div>
                <div className="font-Nunito]">
                  <h1 className="mb-4 text-3xl md:text-xl font-bold p-5">
                    Ouverture d'esprit
                  </h1>
                  <p className="text-center text-lg md:px-10">
                    Nous sommes largement ouverts aux nouvelles idées et aux
                    méthodes de travail modernes.
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-2 mb-5 border rounded-md bg-white outline-none hover:shadow-xl hover:ease-in-out duration-300">
              <div className=" my-5 md:my-0  flex flex-col p-5 md:p-3 items-center justify-center text-center">
                <div className="text-sky-500 text-5xl  p-3 flex items-center justify-center border rounded-lg mt-5 outline-none">
                  <ion-icon name="bandage-sharp" size="large"></ion-icon>
                </div>
                <div className="font-Nunito]">
                  <h1 className="mb-4 text-3xl md:text-xl font-bold p-5">
                    Travail d'équipe
                  </h1>
                  <p className="text-center text-lg md:px-10">
                    Nous croyons en la collaboration entre nous tous pour
                    atteindre nos objectifs.
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
