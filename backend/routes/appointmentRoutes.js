import express from 'express';
const router = express.Router();
import {updateAppointment,createAppointment,deleteAppointment} from '../controller/appointmentController.js'
import { verifyToken } from '../middleware/authMiddleware.js';

// router.get('/'.getAppointments);
router.post('/', createAppointment);
router.put('/:id',updateAppointment);
router.delete('/delete',deleteAppointment);

export default router