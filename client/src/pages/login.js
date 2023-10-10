import React, { useState } from "react";
import "../styles/styleLogin.css";

export default function LoginPage() {
  const [inputs, setInputs] = useState({
    nomUtilisateur: "",
    motDePasse: "",
  });

  const [messageErreur, setMessageErreur] = useState(null);

  const handleChange = (e) => {
    setInputs((prevInputs) => ({
      ...prevInputs,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a request to your authentication endpoint here
      // For example:
      // const response = await axios.post("/auth/login", inputs);
      // If authentication is successful, you can navigate to another page.
      // Example: navigate("/dashboard");
    } catch (err) {
      setMessageErreur(err.response.data);
    }
  };

  return (
    <div className="inner-container">
      <div className="header">Connexion</div>
      <div className="box">
        <form onSubmit={handleLoginSubmit}>
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
