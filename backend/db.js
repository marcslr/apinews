import mysql from "mysql";
import express from "express";
import { login, logout, register } from "./controllers/controller-auth.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import {
  addProfils,
  deleteProfils,
  displayProfils,
  prendreUnProfil,
  updateProfils,
} from "./controllers/controller_profils.js";
// import multer from "multer";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "api",
  // database: "books"
});

db.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }

  console.log("Connected to the MySQL server.");
});

export function createBackendServer(port) {
  const app = express();
  app.use(express.json());
  app.use(cookieParser());
  app.use(cors());

  // CRUD - Create Read Update Delete
  // Créer, lire les données, mettre à jour, supprimer

  app.get("/api/profil", displayProfils);
  app.post("/api/profil", addProfils);
  app.get("/api/profil/:id", prendreUnProfil);
  app.delete("/api/profil/:id", deleteProfils);
  app.put("/api/profil/:id", updateProfils);

  // AUTHENTIFICATION
  app.post("/api/auth", register);
  app.post("/api/login", login);
  app.post("/api/logout", logout);

  app.listen(port, () => {
    console.log("backend is at port : " + port);
  });

  app.get("/api", (req, res) => {
    res.json("tu fonctionnes pas ??");
  });
}
