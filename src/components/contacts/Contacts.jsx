
import {MdPlace} from 'react-icons/md'
import {MdOutlineAlternateEmail} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'


export default function Contacts() {
  return (
    <div id="contacts" className="min-h-screen my-5 py-10 w-full bg-gray-100 flex flex-col items-center justify-center">
      <div className="font-Nunito text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-sky-500">
          Contactez-nous
        </h2>
        <p>
          Contactez-nous
        </p>
      </div>
      <div className="flex items-center justify-center my-6 font-Nunito">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div className=" bg-white w-[350px] p-10 my-7 flex flex-col items-center justify-center text-center font-Nunito border rounded-lg outline-none shadow-lg hover:shadow-xl">
                  <span className="text-4xl text-sky-500"> 
                    <MdOutlineAlternateEmail/>
                  </span>
                  <h2 className="m-3 text-2xl font-semibold">
                    Email
                  </h2>
                  <p>
                      arzi@arzibeverage.com
                  </p>
              </div>
              <div className=" bg-white w-[350px] p-10 my-7  flex flex-col items-center justify-center text-center font-Nunito border rounded-lg outline-none shadow-lg hover:shadow-xl">
                  <span className="text-4xl  text-sky-500"> 
                    <MdPlace/>
                  </span>
                  <h2 className="m-3 text-2xl font-semibold">
                    Adresse
                  </h2>
                  <p>
                     RDC Kinshasa, Commune de N'Sele, <br/> Quartier Kindobo, Avenue Bashengezi.
                  </p>
              </div> 
              <div className=" bg-white w-[350px] p-10 my-7 flex flex-col items-center justify-center text-center font-Nunito border rounded-lg outline-none shadow-lg hover:shadow-xl">
                  <span className="text-4xl  text-sky-500"> 
                    <BsFillTelephoneFill/>
                  </span>
                  <h2 className="m-3 text-2xl font-semibold">
                    WhatsApp
                  </h2>
                  <p>
                      +243 (0) 840 146 739 <br/> +243 (0) 998 215 728
                  </p>
              </div>
        </div>
      </div>
    </div>
  );
}
