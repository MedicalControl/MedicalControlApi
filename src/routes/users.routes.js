import { Router } from "express"

import { auth } from '../middlewares/auth.js';
import { CreateUsers, getAllUsers, createRol, loginUsers, getAllRol } from '../controllers/index.js'

const router = Router();
//Routes for Users
router.get('/getAllUsers', auth, getAllUsers)
router.get('/login', loginUsers)
router.post('/CreateUsers', CreateUsers)


//Routes get Rol
router.post('/createRol', createRol)
router.get('/getAllRol', auth, getAllRol)



export default router;