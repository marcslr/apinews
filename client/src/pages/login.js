import React, { useState } from "react";
import "../styles/styleLogin.css";

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
  };

  const toggleLoginRegister = () => {
    setIsLoginOpen(!isLoginOpen);
    setIsRegisterOpen(!isRegisterOpen);
    setMessageErreur(null);
  };

  return (
    <div className="root-container">
      <div className="box-container">
        <div
          className={"controller" + (isLoginOpen ? " selected-controller" : "")}
          onClick={toggleLoginRegister}
        >
          Connexion
        </div>
        <div
          className={
            "controller" + (isRegisterOpen ? " selected-controller" : "")
          }
          onClick={toggleLoginRegister}
        >
          S'inscrire
        </div>
      </div>
      <div className="box-container">
        {isLoginOpen ? (
          <LoginForm
            inputs={inputs}
            handleChange={handleChange}
            handleSubmit={handleLoginSubmit}
            messageErreur={messageErreur}
          />
        ) : (
          <RegisterForm
            inputs={inputs}
            handleChange={handleChange}
            handleSubmit={handleRegisterSubmit}
            messageErreur={messageErreur}
          />
        )}
      </div>
    </div>
  );
}

function LoginForm({ inputs, handleChange, handleSubmit, messageErreur }) {
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

function RegisterForm({ inputs, handleChange, handleSubmit, messageErreur }) {
  return (
    <div className="inner-container">
      <div className="header">Inscription</div>
      <div className="box">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="prénom">Prénom :</label>
            <input
              type="text"
              name="prénom"
              className="login-input"
              placeholder="Prénom"
              onChange={handleChange}
              value={inputs.prénom}
            />
          </div>
          <div className="input-group">
            <label htmlFor="nom">Nom :</label>
            <input
              type="text"
              name="nom"
              className="login-input"
              placeholder="Nom"
              onChange={handleChange}
              value={inputs.nom}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              name="email"
              className="login-input"
              placeholder="Email"
              onChange={handleChange}
              value={inputs.email}
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
          <div className="input-group">
            <label htmlFor="confirmerMotDePasse">
              Confirmer le mot de passe :
            </label>
            <input
              type="password"
              name="confirmerMotDePasse"
              className="login-input"
              placeholder="Confirmer le mot de passe"
              onChange={handleChange}
              value={inputs.confirmerMotDePasse}
            />
          </div>
          {messageErreur && <p>{messageErreur}</p>}
          <button type="submit" className="login-btn">
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
}
