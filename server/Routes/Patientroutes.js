const express=require('express')
const router=express.Router();
const {CreatePatient,updatePatient}=require('../controllers/patientController')
const {upload}=require('../middlewares/uploadPhoto')

router.post('/create',upload.single('profilePhoto'),CreatePatient);
router.post('/update/:id',upload.single('profilePhoto'),updatePatient);

module.exports=router;