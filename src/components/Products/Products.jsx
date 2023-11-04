import p1 from "./images/p1.png";
import p4 from "./images/p4.png";
import p3 from "./images/p3.png";

export default function Products() {
  return (
    <div id="produits" className="py-10 bg-white mt-5">
      <div className="container mx-auto px-6 md:px-12 lg:px-8 font-Nunito">
        <div className="mb-12 text-center flex flex-col justify-center">
          <h1 className="font-bold text-sky-500 text-3xl md:text-5xl">
            Produits Arzi
          </h1>
          <div className="flex flex-col md:flex-row items-center justify-center mt-10 pt-5">
            <div>
              <img src={p1} alt="aquakin" className="w-40 m-7" />
            </div>
            <div>
              <img src={p4} alt="affection" className="w-40 m-7" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
