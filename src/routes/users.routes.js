import { Router } from "express"

import {CreateUsers, InicioSesionUsers, getUsers } from '../controllers/users.controller.js'

const router = Router();

router.get('/', getUsers)
router.get('/InicioSesion', InicioSesionUsers)
router.post('/CreateUsers ', CreateUsers)



export default router;