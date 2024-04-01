import { Router } from "express"

import { auth } from '../middlewares/auth.js';
import { CreateUsers, getAllUsers, createRol, loginUsers, getAllRol, getOneUser } from '../controllers/index.js'

const router = Router();
//Routes for Users
router.get('/getAllUsers', auth, getAllUsers)
router.post('/login', loginUsers)
router.post('/CreateUsers', CreateUsers)
router.get('/getOneUser', getOneUser)


//Routes get Rol
router.post('/createRol', createRol)
router.get('/getAllRol', auth, getAllRol)



export default router;