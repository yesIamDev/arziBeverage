
import SocialItems from "./SocialItems";
import { Icons } from "./Menu";
import logoArzi from "./images/logoArzi.png";
import ItemsContainer from "./ItemsContainer";

export default function Footer() {
  return (
    <footer className="bg-sky-500 text-white">
      <div className="p-7">
        <img src={logoArzi} alt="arzi" />
      </div>
      <div className="h-px bg-white w-full"></div>
      <ItemsContainer />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-center pt-2 text-gary-400 text-smpb-8 ">
        <span>@ 2023 Build by Devinno</span>
        <span>Arzi-Beverage Operating Company. All rights reserved.</span>
        <SocialItems Icons={Icons} />
      </div>
    </footer>
  );
}
