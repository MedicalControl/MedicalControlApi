import { Router } from "express"

import { auth } from '../middlewares/auth.js';
import { CreateUsers, getAllUsers, createRol, loginUsers, getAllRol } from '../controllers/index.js'
import { createNewDoctor, createSpecialty, getAllSpecialty, getPersonalData } from "../controllers/doctors.controller.js";

const router = Router();
//Routes for Users
router.get('/getAllUsers', auth, getAllUsers);
router.post('/login', loginUsers);
router.post('/CreateUsers', CreateUsers);


//Routes get Rol
router.post('/createRol', createRol);
router.get('/getAllRol', auth, getAllRol);

//Routes Doctors
router.get('/doctor/getPersonalData', getPersonalData )
router.post('/doctor/createSpecialty', createSpecialty);
router.post('/doctor/createNewDoctor', createNewDoctor);
router.get('/doctor/getAllSpecialty', getAllSpecialty);





export default router;