import { Router } from "express"
import { auth } from '../middlewares/auth.js';

import {loginUsers, createPatient, getPersonalData} from '../controllers/index.js'

const router = Router();
//Routes for Users
router.post('/login', loginUsers);
//Routes Patients
router.post('/CreatePatient', createPatient);
//Routes Doctors
router.get('/doctor/getPersonalData', getPersonalData )





/*
// Admin routes
router.get('/getAllUsers', auth, getAllUsers);
router.post('/createRol', createRol);
router.get('/getAllRol', auth, getAllRol);
router.post('/doctor/createNewDoctor', createNewDoctor);
router.post('/doctor/createSpecialty', createSpecialty);
router.get('/doctor/getAllSpecialty', getAllSpecialty);
*/


export default router;