// routes/doctorAttendanceRoutes.js
import express from 'express';
import {
  doctorCheckIn,
  doctorCheckOut,
  getDoctorAttendanceCalendar,
  createDoctorLeaveRequest,
  updateDoctorLeaveStatus,
  generateDoctorAttendanceReport
} from '../controller/doctorAttendanceController.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Doctor attendance endpoints
router.post('/checkin', verifyToken, doctorCheckIn);
router.post('/checkout', verifyToken, doctorCheckOut);
router.get('/calendar', verifyToken, getDoctorAttendanceCalendar);

// Leave management endpoints
router.post('/leave', verifyToken, createDoctorLeaveRequest);
router.put('/leave/:doctorIds', verifyToken, updateDoctorLeaveStatus);

// Report endpoint (admin only)
router.get('/report', verifyToken, generateDoctorAttendanceReport);

export default router;
