// controllers/doctorController.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Create a new doctor profile
export const createDoctor = async (req, res) => {
  const { userId, specialization, qualifications, availability, license, contactInfo } = req.body;
  const profilePhoto = req.file ? req.file.path : null;

  try {
    const doctor = await prisma.doctor.create({
      data: {
        userId: parseInt(userId),
        specialization,
        qualifications,
        availability,
        license,
        contactInfo,
        profilePhoto,
      },
    });
    res.status(201).json(doctor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get doctor profile by ID
export const getDoctor = async (req, res) => {
  const { id } = req.params;

  try {
    const doctor = await prisma.doctor.findUnique({
      where: { id: parseInt(id) },
    });
    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }
    res.json(doctor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update doctor profile by ID
export const updateDoctor = async (req, res) => {
  const { id } = req.params;
  const { specialization, qualifications, availability, license, contactInfo } = req.body;
  const profilePhoto = req.file ? req.file.path : null;

  try {
    const doctor = await prisma.doctor.update({
      where: { id: parseInt(id) },
      data: {
        specialization,
        qualifications,
        availability,
        license,
        contactInfo,
        profilePhoto,
      },
    });
    res.json(doctor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


