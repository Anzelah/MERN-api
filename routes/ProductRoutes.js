const express = require('express')
const Product = require('../models/product_models')
const router = express.Router()


// GET method
router.get('/', async(req, res) => {
    try {
        const product = await Product.find({})
        res.status(200).json(product)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
})

router.get('/:id', async(req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
})

// POST method
router.post('/', async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(201).json(req.body)
    } catch(error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
})

// PUT method
router.put('/:id', async(req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)
        
        if (!product) return res.status(404).json({ message: `Cannot find product with ID in database ${id}`})
        
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)
    } catch(error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
})

// DELETE method
router.delete('/:id', async(req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id)
        
        if (!product) return res.status(404).json({ message: `Cannot find product with ID ${id}`})
        
        res.status(200).json(product)
    } catch(error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;