import React, { useState } from 'react';
import axios from 'axios';
// import "../styles/Crud.css"
import UpdateProfil from "../components/UpdateProfil"


const Crud = () => {
  const [successMessage, setSuccessMessage] = useState(''); // Ajoutez cette ligne
  const [errorMessage, setErrorMessage] = useState(''); // Ajoutez cette ligne
//fait le liens avec la base de données
      const handleCreateArticle = async (formData) => {
    try {
      await axios.post('http://localhost:8800/api/api', formData);
      setSuccessMessage('Profil utilisateur bien enregistrer !');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Erreur lors de l\'enregistrement');
      setSuccessMessage('');
      console.error('Erreur lors de l\'ajout :', error);
    }
  };
    return (
        <div className='crud'>
                  {/* AJOUT D'article dans le profil----------------------------------*/}
      <div>
      <h1>Créer un nouvel article</h1>
      <UpdateProfil onCreateEsport={handleCreateArticle} />
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>

      {/* -------------------------------------- */}
        </div>
    );
}

export default Crud;