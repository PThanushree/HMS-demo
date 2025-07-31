import { Router } from 'express';
import { createStaff, getStaff, updateStaff } from '../controller/staffController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = Router();

router.post('/create', verifyToken, createStaff);
router.get('/getStaff/:id', verifyToken, getStaff);
router.put('/Putstaff/:id', verifyToken, updateStaff);

export default router;