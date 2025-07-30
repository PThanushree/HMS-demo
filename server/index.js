const express = require("express");
const app = express();
const PORT = process.env.PORT || 8001;
const patientRouter = require("./Routes/Patientroutes");

app.use(express.json());

app.use("/patient", patientRouter);

app.listen(PORT, () => {
  console.log(`app listening at port ${PORT}`);
});
