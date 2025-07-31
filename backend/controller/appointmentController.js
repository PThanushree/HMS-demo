// controllers/appointmentController.js
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createAppointment = async (req, res) => {
  try {
    const {
      patientId,
      fullName,
      email,
      address,
      age,
      bloodGroup,
      specialization,
      reasonForConsultation,
      pastMedicalHistory,
      preferredDate,
      doctorName,
      doctorId,
      preferredTime,
    } = req.body;

    const newAppointment = await prisma.appointment.create({
      data: {
        patientId,
        fullName,
        email,
        address,
        age,
        bloodGroup,
        specialization,
        reasonForConsultation,
        doctorName,
        pastMedicalHistory,
        preferredDate,
        preferredTime,
        doctorId,
      },
    });
    console.log("inside create appointment");

    res.status(201).json({ success: true, data: newAppointment });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to create appointment" });
  }
};

export const updateAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const appointment = await prisma.appointment.update({
      where: { id },
      data: updatedData,
    });

    res.status(200).json({ success: true, data: appointment });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to update appointment" });
  }
};

export const deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.appointment.delete({
      where: { id },
    });

    res
      .status(200)
      .json({ success: true, message: "Appointment deleted successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to delete appointment" });
  }
};
