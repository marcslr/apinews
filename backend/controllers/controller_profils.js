import { db } from "../db.js";

export const addProfils = (req, res) => {
  const q =
    "INSERT INTO profil (`profil_nom`, `profil_desc`, `profil_url`) VALUES (?)";
  const valueProfil = [
    req.body.profil_nom,
    req.body.profil_desc,
    req.body.profil_url,
  ];
  db.query(q, [valueProfil], (err, data) => {
    if (err) return res.json(err);
    // console.log(data);
    return res.json("Profil bien créer");
  });
};

export const displayProfils = (req, res) => {
  const query = "SELECT * FROM api.profil";
  // console.log("cc ???")
  db.query(query, (err, data) => {
    if (err) return res.json("Erreur de data livres");
    // console.log(data);
    return res.json(data);
  });
};

export const updateProfils = (req, res) => {
  const profilId = req.params.id;
  const q = `UPDATE api.profil SET profil_nom=?, profil_desc=?, profil_url=? WHERE profil_id=?`;
  const valueProfil = [
    req.body.profil_nom,
    req.body.profil_desc,
    req.body.profil_url,
    profilId,
  ];
  db.query(q, [...valueProfil], (err, data) => {
    if (err) return res.status(400).json(err);
    return res.json("Profile has been updated succesfully");
  });
};

export const deleteProfils = (req, res) => {
  const profilId = req.params.id;
  const q = "DELETE FROM api.profil WHERE profil_id = ?";
  db.query(q, [profilId], (err, data) => {
    if (err) return res.json(err);
    return res.json("profil bien supprimé");
  });
};

export const prendreUnProfil = (req, res) => {
  const profilId = req.params.id;
  const q = "SELECT * FROM api.profil WHERE profil_id = ?";
  db.query(q, [profilId], (err, data) => {
    if (err) return res.status(400).json(err);
    return res.json(data);
  });
};
