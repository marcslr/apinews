import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "../../styles/admin2.css";

// import ImageUn from "../../image/livre.jpg";

import "../../styles/admin.css";
// import styled from 'styled-components'

export const Add = () => {
  const navigate = useNavigate();

  const [profil, setProfil] = useState({
    profil_nom: "",
    profil_desc: "",
    profil_url: "",
  });

  const handleChange = (e) => {
    setProfil((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  //  console.log(profil);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/profil", profil);
      // window.location.reload();
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="form">
        <h2>Ajouter un nouveau profil</h2>

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
        <button onClick={handleClick}>Ajouter le livre</button>
      </div>
    </>
  );
};

export const DisplayProfils = () => {
  const [profils, setProfils] = useState([]);
  useEffect(() => {
    const fetchProfils = async () => {
      try {
        const res = await axios.get("/profil");
        setProfils(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProfils();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("/profil/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="list-livres">
        <div className="fondBooks">
          {profils.map((profil) => (
            <div className="book" key={profil.profil_id}>
              {/* {book.book_cover && <img src="" alt="" />} */}
              {/* <img src={ImageUn} alt={ImageUn} /> */}
              <h3>{profil.profil_nom}</h3>
              <p>{profil.profil_desc}</p>
              <p>{profil.url}</p>

              <button
                className="delete"
                onClick={() => handleDelete(profil.profil_id)}
              >
                Supprimer
              </button>
              <button className="update">
                <Link to={`/update/${profil.profil_id}`}>Mettre à jour</Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const Admin = () => {
  axios.defaults.withCredentials = true;

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="pageAdmin">
      <div className="titre-admin">
        <h2>Bienvenue {currentUser?.username} sur la page admin</h2>
      </div>

      <div className="containerAdmin1">
        <Add />
      </div>

      <div className="containerAdmin2">
        <h2 className="titre-admin">TOUS LES LIVRES</h2>

        <DisplayProfils />
      </div>
    </div>
  );
};
