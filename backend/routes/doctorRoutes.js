// routes/doctorRoutes.js
import { Router } from 'express';
import { createDoctor, getDoctor, updateDoctor } from '../controller/doctorController.js';
import { verifyToken, isAdmin } from '../middleware/authMiddleware.js';
import { upload } from '../middleware/uploadMiddleware.js';

const router = Router();

router.post('/createDoctor', verifyToken, upload.single('profilePhoto'), createDoctor);
router.get('/getDoctors/:id', verifyToken, getDoctor);
router.put('/putDoctors/:id', verifyToken, upload.single('profilePhoto'), updateDoctor);

export default router;
