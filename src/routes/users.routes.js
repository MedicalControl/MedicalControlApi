import { Router } from "express"
import { auth } from '../middlewares/auth.js';


import {loginUsers, createPatient, getPersonalData, createDoctor} from '../controllers/index.controller.js'
import { getDepartments, getMunicipality, createRol } from "../controllers/users.controller.js";
import { fileUpload } from "../middlewares/diskStorage.js";

const router = Router();
//Routes for Users
router.post('/login', loginUsers);
router.get('/getDepartments', getDepartments);
router.get('/getMunicipality/:idDepartment', getMunicipality);//Routes Patients
//Routes Doctors
router.get('/doctor/getPersonalData',auth, getPersonalData )
//Routes design to patients
router.post('/patient/createPatient', createPatient);
router.post('/patient/createPatient/image',fileUpload ,)
export default router;




/*
// Admin routes

router.post('/createRol', createRol);
router.post('/doctor/createNewDoctor', createDoctor);
router.get('/getAllUsers', auth, getAllUsers);
router.get('/getAllRol', auth, getAllRol);
router.post('/doctor/createSpecialty', createSpecialty);
router.get('/doctor/getAllSpecialty', getAllSpecialty);
*/

