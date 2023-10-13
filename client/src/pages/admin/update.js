import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

export const Update = () => {
  const location = useLocation();
  const profilId = location.pathname.split("/")[2];
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    const fetchProfilInfo = async () => {
      try {
        const res = await axios.get("/profil/" + profilId);
        setCurrentData(res.data[0]);
        // console.log(res.data[0]);
      } catch (err) {
        console.log("erreur de data :" + err);
      }
    };
    fetchProfilInfo();
  }, []);

  const [profil, setProfil] = useState({
    profil_nom: "",
    profil_desc: "",
    profil_url: "",
  });

  const handleChange = (e) => {
    setProfil((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:8800/api/profil/${profilId}`,
        profil
      );
      // console.log(res.data);
      // navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(profil);
  return (
    <div className="form update">
      <h2>Modifier livre</h2>

      <input
        type="text"
        placeholder="nom"
        onChange={handleChange}
        name="profil_nom"
      />

      <input
        type="text"
        placeholder="description"
        onChange={handleChange}
        name="profil_desc"
      />

      <input
        type="text"
        placeholder="url"
        onChange={handleChange}
        name="profil_url"
      />

      <button onClick={handleClick}>Modifier</button>
    </div>
  );
};
export default Update;
