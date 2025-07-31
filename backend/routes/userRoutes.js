import { Router } from 'express';
import { login,register,getProfile,logout } from '../controller/userController.js';
import { verifyToken, isAdmin } from '../middleware/authMiddleware.js';

const router = Router();

router.post('/login', login);
router.post('/register',register);

router.post("/logout", verifyToken, logout);
router.get('/profile', verifyToken, getProfile); // ✅ Add this

export default router;
