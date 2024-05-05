import { Router } from "express"
import { auth } from '../middlewares/auth.js';

import * as controllers from '../controllers/index.controller.js'
const router = Router();
//Routes for Users
router.post('/login', controllers.loginUsers);
router.get('/getDepartments', controllers.getDepartments);
router.get('/getMunicipality/:idDepartment', controllers.getMunicipality);//Routes Patients
router.post('/createPatient', controllers.createPatient);
//Routes Doctors
router.get('/doctor/getPersonalData', controllers.getPersonalData )

export default router;

// Admin routes
router.post('/doctor/createNewDoctor', controllers.createDoctor);
router.get('/getAllUsers', auth, controllers.getAllUsers);
router.post('/createRol', controllers.createRol);
router.get('/getAllRol', auth, controllers.getAllRol);
router.post('/doctor/createSpecialty', controllers.createSpecialty);
router.get('/doctor/getAllSpecialty', controllers.getAllSpecialty);
