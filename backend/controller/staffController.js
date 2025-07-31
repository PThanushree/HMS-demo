import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createStaff = async (req, res) => {
  const { userId, position, department, contactInfo, dateJoined } = req.body;
  try {
    const staff = await prisma.staff.create({
      data: {
        userId: parseInt(userId),
        position,
        department,
        contactInfo
      },
    });
    res.status(201).json(staff);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getStaff = async (req, res) => {
  const { id } = req.params;
  try {
    const staff = await prisma.staff.findUnique({
      where: { id: parseInt(id) },
    });
    if (!staff) {
      return res.status(404).json({ error: 'Staff member not found' });
    }
    res.json(staff);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateStaff = async (req, res) => {
  const { id } = req.params;
  const { position, department, contactInfo, dateJoined } = req.body;
  try {
    const staff = await prisma.staff.update({
      where: { id: parseInt(id) },
      data: {
        position,
        department,
        contactInfo
      },
    });
    res.json(staff);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
