import Router from "express";
const router=Router();
import {updatePatient} from '../controller/patientcontroller.js'


// router.post('/',createPatient);
router.put('/:id',updatePatient);


export default router