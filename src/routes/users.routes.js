import { Router } from "express"
import { auth } from '../middlewares/auth.js';

import {loginUsers, createPatient, getPersonalData} from '../controllers/index.controller.js'
import { getDepartments, getMunicipality, createRol } from "../controllers/users.controller.js";

const router = Router();
//Routes for Users
router.post('/login', loginUsers);
router.get('/getDepartments', getDepartments);
router.get('/getMunicipality/:idDepartment', getMunicipality);//Routes Patients
router.post('/createPatient', createPatient);
//Routes Doctors
router.get('/doctor/getPersonalData',auth, getPersonalData )

router.post('/createRol', createRol);

export default router;




/*
// Admin routes
router.get('/getAllUsers', auth, getAllUsers);
router.get('/getAllRol', auth, getAllRol);
router.post('/doctor/createNewDoctor', createNewDoctor);
router.post('/doctor/createSpecialty', createSpecialty);
router.get('/doctor/getAllSpecialty', getAllSpecialty);
*/

