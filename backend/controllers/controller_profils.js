import { db } from "../db.js";

export const addProfils = (req, res) => {
  const q =
    "INSERT INTO `api`.`profil` (`profil_nom`, `profil_desc`, `profil_url`) VALUES (?);";
  const profils = [
    req.body.profil_id,
    req.body.profil_nom,
    req.body.profil_desc,
    req.body.profil_url,
  ];
  db.query(q, [profils], (err, data) => {
    if (err) return res.json(err);
    return res.json("book has been created");
  });
};

export const displayProfils = (req, res) => {
  const query = "SELECT * FROM books.book";
  // console.log("cc ???")
  db.query(query, (err, data) => {
    if (err) return res.json("Erreur de data livres");
    // console.log(data);
    return res.json(data);
  });
};

export const updateProfils = (req, res) => {
  const profilId = req.params.id;
  const q =
    "UPDATE `api`.`profil` SET `profil_nom` = ?, `profil_desc` = ?, `profil_url` = ? WHERE profil_id = ?";

  const values = [
    req.body.profil_id,
    req.body.profil_nom,
    req.body.profil_desc,
    req.body.profil_url,
  ];
  db.query(q, [...values, profilId], (err, data) => {
    if (err) return res.json(err);
    return res.json("book has been updated succesfully");
  });
};

export const deleteProfils = (req, res) => {
  const profilId = req.params.id;
  const q = "DELETE FROM api.profil WHERE book_id = ?";
  db.query(q, [profilId], (err, data) => {
    if (err) return res.json(err);
    return res.json("livre bien supprimé");
  });
};
