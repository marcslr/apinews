import React, { useState } from 'react';
import axios from 'axios';

const UpdateProfil= ({ fetchArticleList }) => {
  const [formData, setFormData] = useState({
    profil_nom: '',
    profil_desc: '',
    profil_url: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8800/api/api', formData);
      fetchArticleList(); // Actualiser la liste après l'ajout
      setFormData({
        profil_nom: '',
        profil_desc: '',
        profil_url: ''
      });
    } catch (error) {
      console.error('Erreur lors de l\'ajout :', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajouter une équipe</h2>
      <label>nom d'article</label>
      <input
        type="text"
        name="profil_nom"
        value={formData.profil_nom}
        onChange={handleChange}
        required
      /><br />
      <label>Description:</label>
      <input
        type="text"
        name="profil_desc"
        value={formData.profil_desc}
        onChange={handleChange}
        required
      /><br />
      <label>Article URL:</label>
      <input
        type="text"
        name="profil_url"
        value={formData.profil_url}
        onChange={handleChange}
        required
      /><br />
      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default UpdateProfil;