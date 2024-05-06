import { Router } from "express"
import { auth } from '../middlewares/auth.js';

import * as controllers from '../controllers/index.controller.js'
import { fileUpload } from "../middlewares/diskstorage.js";


const router = Router();
//Routes to Doctors
router.get('/doctor/getPersonalData', controllers.getPersonalData)
//Routes to Users
router.post('/login', controllers.loginUsers);
router.get('/getDepartments', controllers.getDepartments);
router.get('/getMunicipality/:idDepartment', controllers.getMunicipality);
//Routes to Patients
router.post('/patient/createPatient', controllers.createPatient);
router.post('/patient/createPatient/photoProfile', fileUpload, controllers.photoProfile);
router.get('/patient/getPersonalInformation/', controllers.getPersonalDataP)
// Admin routes
router.get('/getImages/', controllers.getImages);
router.post('/doctor/createNewDoctor', controllers.createDoctor);
router.get('/getAllUsers', auth, controllers.getAllUsers);
router.post('/createRol', controllers.createRol);
router.get('/getAllRol', auth, controllers.getAllRol);
router.post('/createSpecialty', controllers.createSpecialty);
router.get('getAllSpecialty', controllers.getAllSpecialty);

export default router;