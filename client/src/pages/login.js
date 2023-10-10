import React, { useState } from "react";
import "../styles/styleLogin.css";
import axios from "axios";
import RegisterForm from "../pages/RegisterForm"; 



export default function LoginPage() {
  const [isLoginOpen, setIsLoginOpen] = useState(true);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [inputs, setInputs] = useState({
    nomUtilisateur: "",
    motDePasse: "",
    prénom: "",
    nom: "",
    email: "",
    confirmerMotDePasse: "",
  });
  const [messageErreur, setMessageErreur] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      // const res = await axios.post("/auth/login", inputs)
      // console.log(res);
      //   await login(inputs);
      navigate("/admin/gestion");
    } catch (err) {
      setMessageErreur(err.response.data);
    }
  };

  return (
    <div className="inner-container">
      <div className="header">Connexion</div>
      <div className="box">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="nomUtilisateur">Nom d'utilisateur :</label>
            <input
              type="text"
              name="nomUtilisateur"
              className="login-input"
              placeholder="Nom d'utilisateur"
              onChange={handleChange}
              value={inputs.nomUtilisateur}
            />
          </div>
          <div className="input-group">
            <label htmlFor="motDePasse">Mot de passe :</label>
            <input
              type="password"
              name="motDePasse"
              className="login-input"
              placeholder="Mot de passe"
              onChange={handleChange}
              value={inputs.motDePasse}
            />
          </div>
          {messageErreur && <p>{messageErreur}</p>}
          <button type="submit" className="login-btn">
            Connexion
          </button>
        </form>
      </div>
    </div>
  );
}

// --------- bloc return 2 REGISTER
function RegisterBox() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    prenom: "",
    nom: "",
    adresse: "",
    codepost: "",
  });

  const [messageErreur, setMessageErreur] = useState(null);
  // console.log(inputs);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8800/api/pommedeterre",
        inputs
      );
      console.log(res);
    } catch (err) {
      setMessageErreur(err.response.data);
    }
  };
  return (
    <div className="inner-container">
      <div className="header">Inscription</div>
      <div className="box">
        <div className="input-group">
          <label htmlFor="username">Nom d'utilisateur : </label>
          <input
            type="text"
            name="username"
            className="login-input"
            placeholder="nom d'utilisateur"
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="username">Nom : </label>
          <input
            type="text"
            name="nom"
            className="login-input"
            placeholder="nom"
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="username">Prénom : </label>
          <input
            type="text"
            name="prenom"
            className="login-input"
            placeholder="prénom"
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Email : </label>
          <input
            type="email"
            name="email"
            className="login-input"
            placeholder="password"
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Mot de passe : </label>
          <input
            type="password"
            name="password"
            className="login-input"
            placeholder="mot de passe"
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Adresse :</label>
          <input
            type="text"
            name="adresse"
            className="login-input"
            placeholder="adresse"
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Code Postal :</label>
          <input
            type="text"
            name="codepost"
            className="login-input"
            placeholder="code postal"
            onChange={handleChange}
          />
        </div>
        {messageErreur && <p>{messageErreur}</p>}
        <button type="button" className="login-btn" onClick={handleSubmit}>
          Enregistrer
        </button>
      </div>
    </div>
  );
}
