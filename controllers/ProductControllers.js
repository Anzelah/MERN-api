const Product = require('../models/product_models')


// get all products
const getProducts = async(req, res) => {
    try {
        const product = await Product.find({})
        res.status(200).json(product)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

// get specific product by id
const getSpecificProduct = async(req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

// create a product into the database
const createProduct = async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(201).json(req.body)
    } catch(error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

// update a product by id
const updateProduct = async(req, res) => {
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
}

// delete a single product from database
const deleteProduct = async(req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id)
        
        if (!product) return res.status(404).json({ message: `Cannot find product with ID ${id}`})
        
        res.status(200).json(product)
    } catch(error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getProducts,
    getSpecificProduct,
    createProduct,
    updateProduct, 
    deleteProduct
}