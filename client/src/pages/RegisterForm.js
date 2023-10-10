import React, { useState } from "react";

export default function RegisterForm({
  inputs,
  handleChange,
  handleSubmit,
  messageErreur,
}) {
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