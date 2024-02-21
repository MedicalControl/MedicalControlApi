import { Router } from "express"

import { createNewProduct, getProducts, getProductById, deleteProduct, updateById } from '../controllers/products.controller'

const router = Router();

router.get('/', getProducts)

router.post('/', createNewProduct)

router.get('/:id', getProductById)

router.delete('/:id', deleteProduct)

router.put('/:id', updateById)


export default router;