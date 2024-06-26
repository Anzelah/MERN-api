const express = require('express')
const { getProducts, 
    getSpecificProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/ProductControllers')

const router = express.Router()

// routes
router.post('/', createProduct)
router.get('/', getProducts)
router.get('/:id', getSpecificProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)


module.exports = router;