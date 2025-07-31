// controllers/patientController.js
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const updatePatient = async (req, res) => {
  const id = req.params.id; // Patient document ID
  const { age, phone, address } = req.body;

  try {
    const updatedPatient = await prisma.patient.update({
      where: { id },
      data: {
        age,
        phone,
        address,
      },
    });

    res.status(200).json({
      msg: "Patient profile updated successfully",
      updatedPatient,
    });
  } catch (error) {
    console.error("Update error:", error);
    res.status(400).json({ error: error.message });
  }
};

