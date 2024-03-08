import { Router } from "express"

import {CreateUsers, InicioSesionUsers, getUsers, createRol } from '../controllers/users.controller.js'

const router = Router();

router.get('/', getUsers)
router.get('/InicioSesion', InicioSesionUsers)
router.post('/CreateUsers', CreateUsers)
router.post('/createRol', createRol)



export default router;