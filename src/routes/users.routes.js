import { Router } from "express"
import { auth } from '../middlewares/auth.js';

import {loginUsers, createPatient, getPersonalData} from '../controllers/index.controller.js'
import { getDepartments, getMunicipality } from "../controllers/users.controller.js";

const router = Router();
//Routes for Users
router.post('/login', loginUsers);
router.get('/getDepartments', getDepartments);
router.get('/getMunicipality/:idDepartment', getMunicipality);//Routes Patients
router.post('/createPatient', createPatient);
//Routes Doctors
router.get('/doctor/getPersonalData', getPersonalData )

export default router;




// Admin routes
router.post('/doctor/createNewDoctor', createNewDoctor);
router.get('/getAllUsers', auth, getAllUsers);
router.post('/createRol', createRol);
router.get('/getAllRol', auth, getAllRol);
router.post('/doctor/createSpecialty', createSpecialty);
router.get('/doctor/getAllSpecialty', getAllSpecialty);
