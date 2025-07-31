// controllers/doctorAttendanceController.js
import prisma from '../DB/db.config.js';

// Doctor Check-In: Record the current time as the doctor's check-in.
export const doctorCheckIn = async (req, res) => {
  const { doctorId } = req.body;

  try {
    // Check if doctor exists
    const doctor = await prisma.doctor.findUnique({
      where: { userId: doctorId }
    });

    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }

    const attendance = await prisma.doctorAttendance.create({
      data: {
        doctorId,
        checkIn: new Date(),
        date: new Date()
      }
    });

    return res.status(201).json({ message: 'Checked in successfully', attendance });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Doctor Check-Out: Update the attendance record with the check-out time.
export const doctorCheckOut = async (req, res) => {
  const { doctorId } = req.body;

  try {
    // Check if doctor exists
    const doctor = await prisma.doctor.findUnique({
      where: { userId: doctorId }
    });

    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }

    const attendance = await prisma.doctorAttendance.findFirst({
      where: {
        doctorId,
        checkOut: null
      },
      orderBy: { id: 'desc' }
    });

    if (!attendance) {
      return res.status(400).json({ error: 'No active check-in record found' });
    }

    const updatedAttendance = await prisma.doctorAttendance.update({
      where: { id: attendance.id },
      data: { checkOut: new Date() }
    });

    return res.status(200).json({ message: 'Checked out successfully', attendance: updatedAttendance });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Attendance Calendar: Retrieve all attendance records for the logged-in doctor.
export const getDoctorAttendanceCalendar = async (req, res) => {
  const { doctorId } = req.body;

  try {
    // Check if doctor exists
    const doctor = await prisma.doctor.findUnique({
      where: { userId: doctorId }
    });

    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }

    const records = await prisma.doctorAttendance.findMany({
      where: { doctorId },
      orderBy: { date: 'desc' }
    });

    return res.status(200).json({ records });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


// Create Leave Request: Allows a doctor to submit a leave request.
export const createDoctorLeaveRequest = async (req, res) => {
  try {
    const { doctorId, leaveType, startDate, endDate, reason } = req.body;

    const doctor = await prisma.doctor.findUnique({
      where: { userId: doctorId }
    });

    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }

    const leaveRequest = await prisma.doctorLeaveRequest.create({
      data: {
        doctorId,
        leaveType,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        reason
      }
    });

    return res.status(201).json({ message: 'Leave request created', leaveRequest });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Update Leave Status: Allows admin to approve or reject a doctor's leave request.
export const updateDoctorLeaveStatus = async (req, res) => {
  try {
    const doctorId = parseInt(req.params.doctorId);
    const { status } = req.body;

    if (isNaN(doctorId)) {
      return res.status(400).json({ error: 'Invalid doctor ID' });
    }

    if (!['approved', 'rejected'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    // Find the most recent pending leave request for the doctor
    const leaveRequest = await prisma.doctorLeaveRequest.findFirst({
      where: {
        doctorId: doctorId,
        status: 'pending'
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    if (!leaveRequest) {
      return res.status(404).json({ error: 'No pending leave request found for this doctor' });
    }

    const updatedLeave = await prisma.doctorLeaveRequest.update({
      where: { id: leaveRequest.id },
      data: { status }
    });

    return res.status(200).json({ message: 'Leave status updated', leaveRequest: updatedLeave });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


// Generate Attendance Report: For admin use to generate a monthly attendance report.
export const generateDoctorAttendanceReport = async (req, res) => {
  try {
    // if (req.user.role !== 'admin') {
    //   return res.status(403).json({ error: 'Only admin can generate reports' });
    // }

    const { month, year, doctorId } = req.query;
    if (!month || !year) {
      return res.status(400).json({ error: 'Month and year are required' });
    }

    const startDate = new Date(year, month - 1, 1);
    const endDate = new Date(year, month, 0, 23, 59, 59);

    const whereClause = {
      date: { gte: startDate, lte: endDate }
    };

    if (doctorId) {
      whereClause.doctorId = parseInt(doctorId);
    }

    const records = await prisma.doctorAttendance.findMany({
      where: whereClause,
      include: { doctor: true },
      orderBy: { date: 'asc' }
    });

    return res.status(200).json({ month, year, records });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
