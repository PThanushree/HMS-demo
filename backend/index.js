import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import staffRoutes from "./routes/staffRoutes.js";
import patientRoutes from "./routes/patientroutes.js";
import doctorAttendanceRoutes from "./routes/doctorAttendanceRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads")); // Move static file serving above routes

// Routes
app.use("/api/users", userRoutes);
app.use("/api/doctor", doctorRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/patient", patientRoutes);
app.use("/api/appointment", appointmentRoutes);
app.use("/api/doctor/attendanceLeave", doctorAttendanceRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
