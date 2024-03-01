import { Router } from "express"

import { loginUsers, createNewProduct, getProducts, getProductById, deleteProduct, updateById } from '../controllers/products.controller.js'

const router = Router();

router.get('/', getProducts)

router.post('/', createNewProduct)

router.get('/login', loginUsers)

router.get('/:id', getProductById)

router.delete('/:id', deleteProduct)

router.put('/:id', updateById)

export default router;