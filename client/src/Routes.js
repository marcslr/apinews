import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.js";
import Home from "./pages/Accueil.js";
import Sports from "./pages/Sports.js";
import Meteo from "./pages/Meteo.js";
import Contact from "./pages/Contact.js";
import Compte from "./pages/Compte.js";
import Log from "./pages/login.js"

export default function Head() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/meteo" element={<Meteo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/compte" element={<Compte />} />
          <Route path="/login" element={<Log />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
