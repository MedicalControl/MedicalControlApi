import { Router } from "express"

import {CreateUsers, getAllUsers, createRol, loginUsers, getAllRol} from '../controllers/index.js'

const router = Router();

//Routes for Users
router.get('/getAllUsers', getAllUsers)
router.get('/login', loginUsers)
router.post('/CreateUsers', CreateUsers)


//Routes for Rol
router.get('/getAllRol', getAllRol)
router.post('/createRol', createRol)



export default router;