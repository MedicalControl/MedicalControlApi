import { Router } from "express"

import { auth } from '../middlewares/auth.js';
import { CreatePatient, getAllUsers, createRol, loginUsers, getAllRol } from '../controllers/index.js'
import { createNewDoctor, createSpecialty, getAllSpecialty, getPersonalData } from "../controllers/doctors.controller.js";

const router = Router();
//Routes for Users
router.post('/login', loginUsers);
//Routes Patients
router.post('/CreatePatient', CreatePatient);
//Routes get Rol

//Routes Doctors
router.get('/doctor/getPersonalData', getPersonalData )


router.get('/getAllUsers', auth, getAllUsers);
router.post('/createRol', createRol);
router.get('/getAllRol', auth, getAllRol);
router.post('/doctor/createNewDoctor', createNewDoctor);
router.post('/doctor/createSpecialty', createSpecialty);
router.get('/doctor/getAllSpecialty', getAllSpecialty);



export default router;