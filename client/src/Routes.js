import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.js";
import Home from "./pages/Accueil.js";
import Meteo from "./pages/Meteo.js";
import Contact from "./pages/Contact.js";
import Compte from "./pages/Compte.js";
import Log from "./pages/login.js";
import Profil from "./pages/Profil.js";

// import { PageAdmin } from './routes-auth';
// import { Update } from '../pages/admin/update';

export default function Head() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meteo" element={<Meteo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/compte" element={<Compte />} />
          <Route path="/signin" element={<Log />} />
          <Route path="/profil" element={<Profil />} />

          {/* Ne s'affichera que si le role est admin
<Route path="/admin" >
    <Route path="/admin/gestion" element={<PageAdmin />} />
    <Route path="/admin/update/:id" element={< Update />} />
</Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
