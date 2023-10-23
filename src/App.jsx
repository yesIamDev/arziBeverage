import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Brand from "./components/brand/Brand";
import Values from "./components/values/Values";
import Arzi from "./components/arzi/Arzi";
import Team from "./components/Team/Team";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import Products from "./components/Products/Products";
import { Helmet } from "react-helmet";
import logo from '../src/components/navbar/images/logoB.png'

function App() {
  return (
    <div className="h-screen select-none overflow-y-scroll overflow-x-hidden no-scrollbar">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Arzi beverage</title>
        <link ref="icon" href="../src/components/navbar/images/logoB.png"></link>
        <meta httpEquiv="x-ua-compatible" content="IE-edge; chrome=1" />
        <meta
          name="keywords"
          content="Arzi, Arzi beverage, eau kin, Aquakin, vin, vin Affection, vin Kinshasa, beverage "
        />
        <meta
          name="description"
          content="Arzi beverage, une entreprise de production des boissons oeuvrant à Kinshasa en RDC."
        />
      </Helmet>
      <Navbar />
      <Brand />
      <Values />
      <Arzi />
      <Products />
      <Team />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
