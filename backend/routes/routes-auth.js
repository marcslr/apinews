import express from 'express';
import { register, login, logout } from '../controllers/controller-auth.js'

const router = express.Router();

router.post("/auth", register);
router.post("/login", login);
router.post("/logout", logout);
export default router;