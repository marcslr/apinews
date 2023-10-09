import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Accueil.js";
import Sports from "./pages/Sports.js";
import Meteo from "./pages/Meteo.js";
import Contact from "./pages/Contact.js";
import Compte from "./pages/Compte.js";

export default function Head() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/meteo" element={<Meteo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/compte" element={<Compte />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
