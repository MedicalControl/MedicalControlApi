import { Router } from "express"

import {CreateUsers, getAllUsers, createRol, loginUsers } from '../controllers/index.js'

const router = Router();

//Routes for Users
router.get('/', getAllUsers)
router.get('/login', loginUsers)
router.post('/CreateUsers', CreateUsers)


//Routes for Rol
router.post('/createRol', createRol)



export default router;